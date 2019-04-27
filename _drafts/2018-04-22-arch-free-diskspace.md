---
title: Arch Linux - Free Disk Space
---

## Problem
We used Arch Linux for a while, updating regularly using Pacman.
We used Docker for Development and/or other reasons.
Now there are hidden files on our Machine, that claim a lot of Space.


## Solution

### [Clean Pacman](https://www.ostechnix.com/recommended-way-clean-package-cache-arch-linux/)
Delete old PacMan Packages from Cache by running this in Terminal: 

    sudo paccache -r 

### [Clean Docker](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)
Delete all Docker Images. But do now worry. You can always rebuild them or pull them from DockerHub.

    sudo docker system prune -a -f  