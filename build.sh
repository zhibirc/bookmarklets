#!/bin/bash -e
# ------------------------------
# Builder.
# Compile TS->JS, compress output and wrap it to a form required by bookmarklets.
#
# The process consists of:
#  - compile TypeScript sources to vanilla JavaScript;
#  - compress resulting files with Terser uglification tool with care about transforming quotes;
#  - add "javascript:" protocol at the beginning of each minified file;
#  - replace inner (in HTML attributes, for example) double quotes with escape sequence "%22";
#  - synchronize file system buffers and wait a bit to ensure writing to disk is completed;
#  - for end-users convenience prepare a bookmarklet link ("href" content is just constructed) for public page;
#  - cleanup from intermediate unminified *.js files;
#  - prepare Markdown readme to publication;
#  - if run with "--all" option then resize all images in assets.
# ------------------------------

declare -r RELEASE_FILE='index.min.js'
declare -r README_FILE='readme.md'
declare -r SRC_DIR='src'
declare -r PUBLIC_DIR='docs'
declare -r IMAGE_DIR='./assets/images'
declare -r build_mode="$1"

declare -r COLOR_RED='\033[0;31m'
declare -r COLOR_GREEN='\033[0;32m'
declare -r COLOR_CYAN='\033[0;36m'
declare -r COLOR_RESET='\033[0m'

echo -e "${COLOR_CYAN}Compile TypeScript to JavaScript${COLOR_RESET}"

tsc

echo -e "\n${COLOR_CYAN}Compress files and transform to bookmarklets${COLOR_RESET}"

for dir in $SRC_DIR/*; do
    if [[ -d "$dir" ]]; then
        # also force to use single quotes to prevent clashes with surrounding HTML code
        terser "$dir/index.js" --compress --mangle --format "quote_style=1" --output "$dir/$RELEASE_FILE"

        # synchronize file system buffers
        sync "$dir/$RELEASE_FILE"

        # add "javascript:" schema to the begin
        sed -i -e 's/^/javascript:/' "$dir/$RELEASE_FILE"
        # replace inner (in HTML attributes, for example) double quotes with escape sequence ("&quot;" is also suited)
        sed -i -e 's/"/%22/g' "$dir/$RELEASE_FILE"

        sleep 1

        echo -e "\n${COLOR_CYAN}Add bookmarklet's code to README${COLOR_RESET}"

        # for end-users convenience prepare a bookmarklet link in readme
        sed -i "s/\(data-id=\"$(basename $dir)\" href=\"\).*\"/\1$(sed -e 's/[\/&]/\\&/g' "$dir/$RELEASE_FILE")\"/" "$README_FILE"

        # cleanup
        rm -f "$dir"/*.js

        echo -e "$dir ${COLOR_GREEN}[OK]${COLOR_RESET}"
    fi
done

echo -e "\n${COLOR_CYAN}Prepare readme's markdown to publication${COLOR_RESET}"

# prepare Markdown readme to publication
mkdir tmp
cp "$README_FILE" "tmp/"
#sed -i 's/<!--//g' "tmp/$README_FILE"
#sed -i 's/-->//g' "tmp/$README_FILE"
cp "tmp/$README_FILE" "$PUBLIC_DIR/"
rm -rf tmp

if [[ "$build_mode" == '--all' ]]; then
    if ! command -v convert >/dev/null 2>&1; then
        echo -e "${COLOR_RED}Require \"convert\" from ImageMagick but it's not installed. Terminated.${COLOR_RESET}"
        echo -e "Fix: sudo apt update && sudo apt -y install imagemagick \a"

        exit 1
    fi

    echo -e "\n${COLOR_CYAN}Convert images${COLOR_RESET}"

    for file in "$IMAGE_DIR"/*.*; do
        # resize the image to that width while preserving the aspect ratio
        convert "$file" -resize 300 -monochrome "$file"
        echo -e "$file ${COLOR_GREEN}[processed]${COLOR_RESET}"
    done
fi

echo -e "\n${COLOR_GREEN}Done.${COLOR_RESET}\a"

exit 0
