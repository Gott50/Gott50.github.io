---
layout: post
title: Backup on Arch Linux
---

Today we want to create a Backup of our full System and our other Drives.
[rsync](https://wiki.archlinux.org/index.php/Rsync#Full_system_backup)
enables us to copy our Files, with all their MetaData, to any directory. 
This includes all symbolic links, devices, permissions, ownerships, modification times, ACLs, and extended attributes.


### 0. Setup external Drive with a Linux File System
To save all our MetaData, we need to [partition a Disk with ext4](/partitioning-on-arch/), 
a File System that can store this kind of information.


### 1. Backup Full System
Now we can save our full root Directory excluding unnecessary Files into our `<backup_folder>`:

    sudo rsync -aAXH --info=progress2 --delete --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found","/home/*/.local/share/Trash/","/home/*/.cache/*"} / /<backup_folder>

### 2. Backup other Drives
To store all of our other Drives under our `<backup_folder>` we need to exclude our `<backup_drive>`:

    sudo rsync -aAXH --info=progress2 --delete --exclude={"<backup_drive>/*"} /run/media/ /<backup_folder>

## 3. Delete Empty Directories
After we saved all Files we want to keep, we can cleanup our Backup and delete all empty Directories. 
This will make it easier to restore the Backup.

    find . -type d -empty -delete