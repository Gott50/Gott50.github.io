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
