---
title: i3wm 2- Enable Autostart
---

Today we want to enable our Autostart Scripts by starting i3wm.

## Find i3 Config File
Fist we need to find our [i3 Config File](https://i3wm.org/docs/userguide.html#configuring)
register a Script, witch runs when we start i3.
It is most likely located at `~/.config/i3/config`

## Run Script on Start of i3
Now we just tell i3 to run a Bash Script `autostart.sh` located at `~/.config/i3/` on start.
We add this line to our `~/.config/i3/config` File:

    exec --no-startup-id bash ~/.config/i3/autostart.sh

## Setup the Bash Script
Last but not least we create the Bash Script `autostart.sh` located at `~/.config/i3/` containing:

    #!/bin/bash
    grep -rh Exec ~/.config/autostart | while read -r line ; do 
       ${line:5} &
    done

This will look in our Directory `~/.config/autostart` for executable Script Paths and run them.


## _(optional)_ /etc/xdg/autostart
We can also add our `/etc/xdg/autostart` to our Bash Script `autostart.sh`, if we wish to execute it as well.
We add to our Bash Script `autostart.sh`:

    grep -rh Exec /etc/xdg/autostart | while read -r line ; do 
       ${line:5} &
    done
