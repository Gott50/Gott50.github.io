---
layout: post
title: i3wm - Enabling MultiMedia keys
---

Today we want to use our MultiMedia Key in i3vm.

## optional Requirements
    - pactl
    - xbacklight
    - playerctl
We only have to install the Packages we want to via our MulitMedia Keys.

## i3 Configs
Like suggested in the [i3vm FAQ](https://faq.i3wm.org/question/3747/enabling-multimedia-keys.1.html)
we just edit our `~/i3/config` File and add the following keybindings:

    # Pulse Audio controls
    bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume 0 +5% #increase sound volume
    bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume 0 -5% #decrease sound volume
    bindsym XF86AudioMute exec --no-startup-id pactl set-sink-mute 0 toggle # mute sound
    
    # Sreen brightness controls
    bindsym XF86MonBrightnessUp exec xbacklight -inc 5 # increase screen brightness
    bindsym XF86MonBrightnessDown exec xbacklight -dec 5 # decrease screen brightness
    
    # Touchpad controls
    bindsym XF86TouchpadToggle exec /some/path/toggletouchpad.sh # toggle touchpad
    
    # Media player controls
    bindsym XF86AudioPlay exec playerctl play
    bindsym XF86AudioPause exec playerctl pause
    bindsym XF86AudioNext exec playerctl next
    bindsym XF86AudioPrev exec playerctl previous

## Touchpad Script
The script toggletouchpad.sh for toggling your touchpad should have following content:

    #!/bin/bash
    if synclient -l | grep "TouchpadOff .*=.*0" ; then
        synclient TouchpadOff=1 ;
    else
        synclient TouchpadOff=0 ;
    fi

## Troubleshooting
Playerctl is a command-line utility for controlling media players over DBus that works with most players.

If the XF86* keysyms do not work, we can see the available keysyms for our computer by executing this command:

    xmodmap -pke

Or xev, an interactive tool for finding key symbols:

    xev