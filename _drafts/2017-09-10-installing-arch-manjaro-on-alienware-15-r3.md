---
layout: post
title: Installing Arch/Manjaro on Alienware 15 R3
---

## Download Manjaro
https://manjaro.org/get-manjaro/


## BootStick via Mac
    
    diskutil list
    
    diskutil partitionDisk /dev/disk5 1 "Free Space" "unused" "100%"
    
    sudo dd if=/Users/timomorawitz/Downloads/manjaro-architect-17.0.2-stable-x86_64.img.dmg of=/dev/disk5 bs=1m
    
    
## Install Manjaro

https://forum.manjaro.org/t/installation-with-manjaro-architect-iso/20429