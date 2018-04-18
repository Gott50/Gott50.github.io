---
title: Restore Backup on Arch Linux
---

https://wiki.archlinux.org/index.php/Rsync#As_a_backup_utility

## /home and /opt

## Restore Configs from <.dot> Files
https://wiki.manjaro.org/index.php?title=Important_hidden_.dot_files_in_your_home_partition


## Restore Pacman
https://wiki.archlinux.org/index.php/Pacman/Tips_and_tricks

List of installed packages
Keeping a list of explicitly installed packages can be useful to speed up installation on a new system:

    sudo pacman -Qqe > pkglist.txt
    
Note: When using option -t, when reinstalling the list all the non-top-level packages would be set as dependencies. With opion -n, foreign packages (e.g. from AUR) are ommited from the list.
To install packages from the list backup, run:

    sudo pacman -S - < pkglist.txt

Tip:
To skip already installed packages, use --needed.
Use comm -13 <(pacman -Qqdt | sort) <(pacman -Qqdtt | sort) > optdeplist.txt to also create a list of the installed optional dependencies which can be reinstalled with --asdeps.
In case the list includes foreign packages, such as AUR packages, remove them first:

    sudo pacman -S $(comm -12 <(pacman -Slq | sort) <(sort pkglist.txt))