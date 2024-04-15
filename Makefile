.PHONY: count
count:
	@git log --oneline origin/main..HEAD | rg '^\w+ \w+/\d+-' | cut -d ' ' -f 2- | tac | bat -fn | tail -n 20

.PHONY: commit
commit:
	@bash commit.sh

.PHONY: wip
wip:
	@bash commit.sh ' (incomplete)'

.PHONY: skip
skip:
	@bash commit.sh ' (skipped)'
