---
title: KDE - Reset Screen Resolution
---

## Problem
Our Screen Resolution in KDE Plasma needs to be reset.


## Solution
delete the Folder `~/.local/share/kscreen` via Terminal:

    rm -dr ~/.local/share/kscreen
    
on reboot it will be generated fresh.