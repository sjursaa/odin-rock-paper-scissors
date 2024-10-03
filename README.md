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
git checkout -b rps-ui # create & switch branch
git push origin rps-ui # create remote branch
git branch # list branches

# merging
git status # use more often! lists changes that haven't been staged yet
git checkout main # switch back to main
git merge rps-ui
git log # log change history
git push origin main

# removing branch post merge
git branch -d rps-ui # local
git push origin --delete rps-ui # remote
```
