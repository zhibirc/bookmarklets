#!/bin/bash
# ------------------------------
# Builder.
# Compile TS->JS, compress output and wrap it to a form required by bookmarklets.
#
# The process consists of:
#  - compile TypeScript sources to vanilla JavaScript;
#  - compress resulting files with Terser uglification tool;
#  - add "javascript:" protocol at the beginning of each minified file;
#  - cleanup from intermediate unminified *.js files;
#  - if run with "--all" option then resize all images in assets.
# ------------------------------

declare -r RELEASE_FILE='index.min.js'
declare -r README_FILE='readme.md'
declare -r IMAGE_DIRECTORY='./assets/images'
declare -r build_mode="$1"

declare -r COLOR_RED='\033[0;31m'
declare -r COLOR_GREEN='\033[0;32m'
declare -r COLOR_CYAN='\033[0;36m'
declare -r COLOR_RESET='\033[0m'

echo -e "${COLOR_CYAN}Compile TypeScript to JavaScript${COLOR_RESET}"

tsc

echo -e "\n${COLOR_CYAN}Compress files and transform to bookmarklets${COLOR_RESET}"

for directory in *; do
    if [[ -d "$directory" && "$directory" != 'node_modules' && "$directory" != 'assets' ]]; then
        # also force to use single quotes to prevent clashes with surrounding HTML code
        terser "$PWD/$directory/index.js" --compress --mangle --format "quote_style=1" --output "$PWD/$directory/$RELEASE_FILE"
        sed -i -e 's/^/javascript:/' "$PWD/$directory/$RELEASE_FILE"

        # synchronize file system buffers and wait a bit
        sync "$PWD/$directory/$RELEASE_FILE"
        sleep 1

        # for end-users convenience prepare a bookmarklet link in readme
        sed -i "s/\(data-id=\"$directory\" href=\"\).*\"/\1$(sed -e 's/[\/&]/\\&/g' "$PWD/$directory/$RELEASE_FILE")\"/" "$PWD/$README_FILE"

        # cleanup
        rm -f "$PWD/$directory/index.js"

        echo -e "$directory ${COLOR_GREEN}[OK]${COLOR_RESET}"
    fi
done

if [[ "$build_mode" == '--all' ]]; then
    if ! command -v convert >/dev/null 2>&1; then
        echo -e "${COLOR_RED}Require \"convert\" from ImageMagick but it's not installed. Terminated.${COLOR_RESET}"
        echo -e "Fix: sudo apt update && sudo apt -y install imagemagick \a"

        exit 1
    fi

    echo -e "\n${COLOR_CYAN}Convert images${COLOR_RESET}"

    for file in "$IMAGE_DIRECTORY"/*.*; do
        # resize the image to that width while preserving the aspect ratio
        convert "$file" -resize 300 -monochrome "$file"
        echo -e "$file ${COLOR_GREEN}[processed]${COLOR_RESET}"
    done
fi

echo -e "\n${COLOR_GREEN}Done.${COLOR_RESET}\a"

exit 0
