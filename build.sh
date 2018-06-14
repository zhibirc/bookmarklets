#!/bin/bash

# minify sources and transform them to bookmarklets

for dir in * ; do
    if [ -d "$dir" ]
    then
        echo "$dir [OK]"
        eval "/usr/bin/uglifyjs $PWD/$dir/main.develop.js --compress --mangle --output $PWD/$dir/main.release.js"
        sed -i -e 's/^/javascript:/' "$PWD/$dir/main.release.js"
    fi
done

exit 0