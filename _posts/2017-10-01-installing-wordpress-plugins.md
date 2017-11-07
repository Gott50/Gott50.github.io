---
layout: post
title: Installing WordPress Plugins on Arch Linux / Manjaro
excerpt: >
    Problem: 
    On clicking the Install Button in the Admin menu a window pops up with the following Message:
    
        Failed to connect to FTP Server
        
        To perform the requested action, WordPress needs to access your web server. 
        Please enter your FTP credentials to proceed. If you do not remember your 
        credentials, you should contact your web host.
---

## Initial Situation
We [installed WordPress](/installing-wordpress-on-arch-manjaro/) 
with all its dependencies on Arch Linux / Manjaro.
Now we want to Install Plugins.


## Problem
On clicking the Install Button in the Admin menu a window pops up with the following Message:

    Failed to connect to FTP Server
    
    To perform the requested action, WordPress needs to access your web server. 
    Please enter your FTP credentials to proceed. If you do not remember your 
    credentials, you should contact your web host.

## Solution
Like suggested on [StackOverflow](https://stackoverflow.com/questions/21316282/wordpress-plugin-installation-failed-to-connect-to-ftp-server-safest-solutio) 
it is enough to add a single line of Code the File `/wp-config.php` in our WordPress Directory:

    define('FS_METHOD', 'direct');