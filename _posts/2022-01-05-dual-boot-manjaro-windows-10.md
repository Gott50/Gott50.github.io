---
title: Dual-boot Manjaro and Windows 10 on Alienware 15 R3
---

## 1. Downloads
We need to download the current version of Manjaro and Windows 10. 
This may take a while...

1. [Minimal KDE Manjaro Installation ISO](https://manjaro.org/downloads/official/kde/).
2. [Windows 10](https://support.microsoft.com/en-us/windows/create-installation-media-for-windows-99a58364-8c02-206f-aa6f-40c3b507420d)

## 2. [Create a Manjaro bootable USB-Stick](https://manjaro.org/support/firststeps/#create-a-bootable-usb-stick)
flash the Manjaro ISO onto a USB-Stick

### 2.a BootStick on Windows
use [Rufus](https://rufus.ie)

### 2.b BootStick on Mac
First we need to know what `<disk_number>` our Stick has
    
    diskutil list
    
Now we can prepare our BootStick. This will delete all Files on it.
    
    diskutil partitionDisk /dev/disk<disk_number> 1 "Free Space" "unused" "100%"

Then we setup our BootSick with `<manjaro>.iso` we downloaded to the directory `<path>`:
    
    sudo dd if=/<path>/<manjaro>.iso of=/dev/disk<disk_number> bs=1m
    
    
## 3. Prepare the BIOS
1. Press `F2` during Boot to enter the BIOS Setup
2. Go to the Boot Settings
3. Disable `Secure Boot`
4. `UEIF` as Boot List Option

### Install Manjaro
1. boot into the Manjaro BootStick
2. Choose "proprietary" because we use a Nvidia graphics
3. [Start the installer](https://manjaro.org/support/firststeps/#install-manjaro) 

### Manually Partition
delete the current Partitioning and create a new GPT Table. 
(**This will delete all Data!**)

- 256M - 1000M on SSD of `bootable Fat32` for /boot/efi
- 20G or more on SSD of `ext4` for /root 
- (optional) up to 8G on SSD of `swap` for SWAP 
- (optional) on HDD `ext4` for /home 


## 4. Install Windows
use the Windows Tool (from Step 1) to create a Windows BootStick and install Windows onto a separate Disk or Partition