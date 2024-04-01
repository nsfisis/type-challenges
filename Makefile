.PHONY: count
count:
	@git log --oneline origin/main..HEAD | rg '^\w+ \w+/\d+-' | cut -d ' ' -f 2- | tac | bat -n

.PHONY: commit
commit:
	@bash commit.sh
