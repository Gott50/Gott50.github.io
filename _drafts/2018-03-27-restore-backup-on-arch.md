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


## rsync /home
Now we can restore all our Configs from the <.dot> Files by `rsync` our `/home`.
`cd` in your Backup of your /home and run:

    sudo rsync -aAXH --info=progress2 ./ /home
    
## rsync /opt
Then `cd` in your Backup of your `/opt` and run:

    sudo rsync -aAXH --info=progress2 ./ /opt
