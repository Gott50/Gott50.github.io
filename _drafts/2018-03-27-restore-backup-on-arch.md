---
title: Restore Backup on Arch Linux
---

After making a [Backup on Arch Linux](/backup-on-arch) and Installing it again, 
we are now able restore our Backup.


## Restore Pacman
First of all we need to [reinstall our Pacman Packages](https://wiki.archlinux.org/index.php/Pacman/Tips_and_tricks#List_of_installed_packages) 
listed in the `pkglist.txt` File:

    sudo pacman -S --needed $(comm -12 <(pacman -Slq | sort) <(sort pkglist.txt))
   
All AUR Packages need to be installed manually again.


## /home and /opt
Now we can `rsync` our /home and /opt


## Restore Configs from <.dot> Files
https://wiki.manjaro.org/index.php?title=Important_hidden_.dot_files_in_your_home_partition
