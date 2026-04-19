# Maintaining this fork

This repository (`envisia-group/Open-Generative-AI`) is a fork of
[`Anil-matcha/Open-Generative-AI`](https://github.com/Anil-matcha/Open-Generative-AI)
with local enhancements layered on top. This document covers how to pull in
upstream releases without losing those enhancements.

## One-time setup

Add the upstream remote to your local clone:

```bash
git remote add upstream https://github.com/Anil-matcha/Open-Generative-AI.git
git fetch upstream
```

Verify:

```bash
git remote -v
# origin     git@github.com:envisia-group/Open-Generative-AI.git  (fetch/push)
# upstream   https://github.com/Anil-matcha/Open-Generative-AI.git (fetch/push)
```

`upstream` is read-only for us — we only ever `fetch` from it. `origin` is
where we push.

## Syncing with upstream

When Anil-matcha cuts a new release (or you just want to catch up):

```bash
git fetch upstream
git log --oneline main..upstream/main    # preview what's new
git merge upstream/main                    # fold their changes into your main
# resolve any conflicts, then:
git push                                   # update our fork
```

Use `merge`, not `rebase`. Rebasing rewrites commit SHAs, which would require
a force-push and break anyone else's clone of the fork.

Prefer small, frequent merges over waiting for big releases — conflicts are
much easier to resolve in small doses.

## If a merge gets hairy

Our enhancements are all independent, well-scoped commits, so the nuclear
option is cheap:

```bash
git checkout -b rescue main
git reset --hard upstream/main
git cherry-pick <sha1> <sha2> ...          # replay each of our commits
```

That lets you resolve conflicts one commit at a time instead of all at once.

## Current fork-specific enhancements

Keep this list updated when you add or remove customizations so future-you
knows which commits are "ours" if they ever need to be replayed.

- `bdee60d` — Add nixpacks config to build studio workspace before Next build
- `e7c3b89` — Fix prod build: add tailwindcss postcss plugin + nixpacks config
- `305e782` — Add basic/high quality toggle for Seedance 2.0 in VideoStudio
- `9384f16` — Fix CORS by proxying API requests through Next.js rewrites
- `40df362` — Fix: prompt bar pushed below viewport in Image Studio with multiple images

## Watching upstream for releases

On GitHub, go to
[`Anil-matcha/Open-Generative-AI`](https://github.com/Anil-matcha/Open-Generative-AI)
→ **Watch** → **Custom** → check **Releases**. You'll get notified when a new
version is tagged and can run the sync workflow above.
