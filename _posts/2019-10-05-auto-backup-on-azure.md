---
title: Auto Backup on Azure
---

## Problem
We want backup or local Files automatically to the Azure Cloud. 

## Solution

### (Setup Azure Storage Account)[https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account]

### (Azcopy)[https://www.ableblue.com/blog/archive/2018/11/11/azcopy-sync-as-a-backup-solution/]

#### 1. Configure Security
Add to your Account the IAM Role: **Storage Blob Data Contributor**

#### 2. (Install AzCopy)[https://docs.microsoft.com/azure/storage/common/storage-use-azcopy-v10]

#### 3. Login to Azure with AzCopy 
run in terminal

    azcopy login

#### 4. Make Container
run the following command in Terminal and repalce <account> with the name of your Azure Storage Account. 

    azcopy make "https://<account>.blob.core.windows.net/backup"


### (Cron Backup Script)[https://ctaas.de/rsync.htm]

#### 1. add Bash Script
add the following Code as a File called *cron_back.sh*

    #!/bin/bash
    account=$1
    source=$2      # Which directory shall be saved?
    backup="https://$account.blob.core.windows.net"
    
    weekday=$(date +"%a")
    day=$(date +"%d")
    month=$(date +"%m")
    
    function backup ()
    {
     destination="$backup/backup${1,,}"
     azcopy mkdir "$destination"
      azcopy sync "$source/" "$destination" --recursive --delete-destination=true --exclude="/dev/*;/proc/*;/sys/*;/tmp/*;/run/*;/mnt/*;/media/*;/lost+found;/home/*/.local/share/Trash/;/home/*/.cache/*" >"./_last_backup.txt" 2>&1
      echo -e '\n'-- '\n'last backup: $(date "+%Y-%m-%d %H:%M:%S") >> "./_last_backup.txt"
      azcopy cp ./_last_backup.txt $destination/_last_backup_$(date "+%Y-%m-%d").txt
    }
    
    if [[ $day != 01 && $day != 09 && $day != 16 && $day != 24 ]]; then
     backup $weekday
    fi
    
    case "$day" in 09) backup 09 ;; esac
    case "$day" in 16) backup 16 ;; esac
    case "$day" in 24) backup 24 ;; esac
    case "$month" in 02|04|06|08|10|12)
     case "$day" in 01)
     backup Mg
     ;; esac
    ;; esac
    case "$month" in 01|03|05|07|09|11)
     case "$day" in 01)
     backup Mu
     ;; esac
    ;; esac

    
#### 2. make Bash Script executable
run in Terminal
    
    chmod +x cron_back.sh
    
#### 3. schedule CronJob for automation
run in Terminal

    export EDITOR=vim
    crontab -e
    
type in and replace <path_to> with the path to the Script, <account> with the Azure Storage Account and <source> the Directory to be saved without the ending /

    0 */6 * * * /<path_to>/cron_back.sh <account> <source>

