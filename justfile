count:
    @git log --oneline origin/main..HEAD | rg '^\w+ \w+/\d+-' | cut -d ' ' -f 2- | tac | bat -fn | tail -n 20

commit:
    @bash commit.sh

wip:
    @bash commit.sh ' (incomplete)'

skip:
    @bash commit.sh ' (skipped)'

generate:
    @pnpm generate --keep-changes
