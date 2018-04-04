---
layout: post
title: Installing Arch/Manjaro on Alienware 15 R3
---

## Download Manjaro
https://manjaro.org/get-manjaro/


## BootStick via Mac
    
    diskutil list
    
    diskutil partitionDisk /dev/disk5 1 "Free Space" "unused" "100%"
    
    sudo dd if=/<path>/manjaro-architect-17.0.2-stable-x86_64.img.dmg of=/dev/disk5 bs=1m
    
    
## Install Manjaro

https://wiki.archlinux.org/index.php/Partitioning#.2Fvar

https://wiki.manjaro.org/index.php?title=UEFI_-_Install_Guide

https://forum.manjaro.org/t/installation-with-manjaro-architect-iso/20429

https://wiki.manjaro.org/index.php?title=Installation_with_Manjaro_Architect

https://wiki.manjaro.org/index.php?title=UEFI_-_Install_Guide

https://wiki.manjaro.org/index.php?title=Installation_with_Manjaro_Architect



## The Kernel chooses the User
Our Machine the Alienware 15 R3 is only compatible with two Kernels of Manjaro 17.1.17:
    - 4.14-rt
    - 4.14 Fallback

