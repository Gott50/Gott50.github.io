---
layout: post
title: Partitioning on Arch
---

Today we want to partition a Disk, in order to backup our Linux ext4 Filesystem.
We use ext4, because it enables us to store all symbolic links, devices, permissions, 
ownerships, modification times, ACLs, and extended attributes.

### 1. Get Disk Device Name
To print our Block Special Devices, we run in Terminal:
    
    lsblk

In the resulting `NAME` column we can see the names of all our Disks and Partitions.

### 2. Format Disk
We can now use the `<diskname>` to format our Disk to Type Linux. 
We run in Terminal:

    sudo cfdisk /dev/<diskname>

### 3. Set Filesystem Type
We can once again run `lsblk` to get the name of our `<partition>`.
Then we can set our Filesystem Type to [ext4](https://wiki.archlinux.org/index.php/Ext4) 
via the Terminal:

    sudo mkfs.ext4 /dev/<partition>

### 4. Label Disk Partition
Labels are used to auto mount [Partitions](https://wiki.archlinux.org/index.php/Persistent_block_device_naming#by-label)
We can now name our `<partition>`, by choosing a `<label>`:

    sudo e2label /dev/<partition> <label>

