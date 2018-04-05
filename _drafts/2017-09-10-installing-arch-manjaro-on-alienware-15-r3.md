---
layout: post
title: Installing Arch/Manjaro on Alienware 15 R3
---

## Download Manjaro
We need to download the current version of the [Manjaro Installation ISO](https://manjaro.org/get-manjaro/) of our choice.
This may take a while...


## BootStick on Mac
First we need to know what `<disk_number>` our Stick has
    
    diskutil list
    
Now we can prepare our BootStick. This will delete all Files on it.
    
    diskutil partitionDisk /dev/disk<disk_number> 1 "Free Space" "unused" "100%"

Then we setup our BootSick with `<manjaro>.iso` we downloaded to the direcotry `<path>`:
    
    sudo dd if=/<path>/<manjaro>.iso of=/dev/disk<disk_number> bs=1m
    
    
## Prepare the BIOS
1. Press `F2` during Boot to enter the BIOS Setup
2. Go to the Boot Settings
3. Disable `Secure Boot`
4. (optional recommended) use `UEIF` as Boot List Option

    
## Install Manjaro

https://wiki.archlinux.org/index.php/Partitioning#.2Fvar

https://wiki.manjaro.org/index.php?title=UEFI_-_Install_Guide

https://forum.manjaro.org/t/installation-with-manjaro-architect-iso/20429

https://wiki.manjaro.org/index.php?title=Installation_with_Manjaro_Architect

https://wiki.manjaro.org/index.php?title=UEFI_-_Install_Guide

https://wiki.manjaro.org/index.php?title=Installation_with_Manjaro_Architect



## The Kernel chooses the User
At this time our Machine the Alienware 15 R3 is only compatible with two Kernels of Manjaro 17.1.17:
    - 4.14-rt
    - 4.14 Fallback

