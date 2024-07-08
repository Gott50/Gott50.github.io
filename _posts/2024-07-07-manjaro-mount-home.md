---
title: Mount a Partition as /home in Manjaro
---

## Requirements

- [install Manjaro](https://docs.manjaro.org/burning-a-image-on-windows-using-etcher/)

## Setup Commands

### List Partitions with UUID

```bash
lsblk -f
```

### Add Partition to /etc/fstab

```bash
sudo echo "UUID=<UUID-of-sda4> /home          ext4    nosuid,nodev,noatime 0 2" | sudo tee -a /etc/fstab
```

### Backup new /home

```bash
sudo mv /home /homebak
```

### Reboot

```bash
reboot
```

### Cleanup Backup

```bash 
sudo rm -rf /homebak
```



## Sources
- [forum.manjaro.org](https://forum.manjaro.org/t/how-to-mount-another-partition-as-home/121100/2)