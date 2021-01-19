#!/bin/bash
# ------------------------------
# Build.
# Compile TS->JS, compress output and wrap it to a form required by bookmarklets.
# ------------------------------

declare -r RELEASE_FILE_NAME='index.min.js'

tsc

for directory in *; do
    if [[ -d "$directory" && "$directory" != 'node_modules' && "$directory" != 'assets' ]]; then
        terser "$PWD/$directory/index.js" --compress --mangle --output "$PWD/$directory/$RELEASE_FILE_NAME"
        sed -i -e 's/^/javascript:/' "$PWD/$directory/$RELEASE_FILE_NAME"

        echo -e "$directory \033[0;32m[OK]\033[0m"
    fi
done

exit 0
