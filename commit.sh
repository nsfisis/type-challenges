set -eu

if [[ $# == 1 ]]; then
    c=$1
else
    c=''
fi

n="$(git status --short | grep '\bplayground/.*[.]ts' | wc -l)"
if [[ $n == 1 ]]; then
    a="$(git status --short | grep -o '\bplayground/.*[.]ts')"
    git add "$a"
    m="$(git status --short | grep -o '\bplayground/.*[.]ts' | sed -e 's|^playground/||' -e 's|[.]ts$||')"
    git commit --message "$m$c"
fi
