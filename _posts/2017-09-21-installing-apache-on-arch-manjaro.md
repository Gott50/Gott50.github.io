---
title: Installing Apache on Arch/Manjaro
---

To be able to run Services like [WordPress](https://wordpress.org/) and others on our machine 
we want to install a [Apache HTTP Server](https://httpd.apache.org/) locally.
We run the OperatingSystem Arch Linux, Manjaro to be specific.

The [Tutorial](https://wiki.archlinux.org/index.php/Apache_HTTP_Server) 
provided by [wiki.archlinux.org](https://wiki.archlinux.org) 
describes everything we need to know and more. Here is the gist:

## Installation
run in Terminal:

    sudo pacman -S apache
    
## Start Apache
run in Terminal:

    sudo apachectl start

## Achievement
We can now visit [http://localhost](http://localhost/), 
which serves the directory `/srv/http`.

The configuration Files will be stored in `/etc/httpd/conf`.
We will use them to install [PHP for Apache](/installing-php-for-apache-on-arch-manjaro/) 
and [MySQL for Apache](/installing-mysql-for-apache-on-arch-manjaro/).

This will enable us to [install WordPress](/installing-wordpress-on-arch-manjaro/).