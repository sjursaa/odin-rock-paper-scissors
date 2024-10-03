# Rock-paper-scissors

odin-project

# TODOs

TODO: change while loop to for loop in playGame()

# Notes

JS script must be loaded after buttons are created in the index.html file. In order for event handlers to work properly.
There probably is a way to do this in the script in the head tag.

use keyword defer to load scripts after html!

# git merging/branching notes

```bash
# branching
git checkout -b rps-ui
git push origin rps-ui
git branch

# merging
git status
git checkout main
git merge rps-ui
git log
git push origin main

# removing branch post merge
git branch -d rps-ui
git push origin --delete rps-ui
```
