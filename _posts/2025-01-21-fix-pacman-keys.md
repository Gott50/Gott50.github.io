---
title: Fix Pacman keys
---

## Commands
```bash
sudo mv /etc/pacman.d/gnupg /etc/pacman.d/gnupg_backup
sudo pacman-key --init
sudo pacman-key --populate archlinux manjaro
sudo pacman-key --refresh-keys
sudo pacman -Syyu
```

