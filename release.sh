#!/bin/bash
# This is the automated release script

# guard against stupid
if [ -z "$1" ]; then
   echo "You must specify a new version level: [patch, minor, major]";
   exit 1;
fi

tagVersion=$1

set -e

#git tag -d "v$tagVersion"
git tag -a -m "new tag release v$tagVersion" "v$tagVersion"
git push origin "v$tagVersion"

git push -f git@github.com:alexchristianqr/foryou.git master:gh-pages

cd -
