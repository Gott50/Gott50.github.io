---
layout: post
title: Installing PHP for Apache on Arch/Manjaro
---

We want to use [PHP](http://php.net/manual/en/intro-whatis.php) 
with [Apache HTTP Server](https://httpd.apache.org/) on our machine 
to be able to run services like WordPress and others locally. 
After we [installed Apache](/installing-apache-on-arch-manjaro/) we are now able to install 
and configure PHP to work with it.

The [Tutorial](https://wiki.archlinux.org/index.php/Apache_HTTP_Server#PHP) 
provided by [wiki.archlinux.org](https://wiki.archlinux.org) 
describes everything we need and more. Here is the gist:

## Installation
run in Terminal
    
    sudo pacman -S php php-apache

## Configuration
edit the main Apache config File `/etc/httpd/conf/httpd.conf`:

comment the line, by adding a `#`:
    
    #LoadModule mpm_event_module modules/mod_mpm_event.so
    
uncomment the line, by removing the `#`:

    LoadModule mpm_prefork_module modules/mod_mpm_prefork.so

Place this at the end of the `LoadModule` list:

    LoadModule php7_module modules/libphp7.so
    AddHandler php7-script php

Place this at the end of the `Include` list:

    Include conf/extra/php7_module.conf

## Restart Apache
run in Terminal

    sudo apachectl restart

## Achievement
We can verify that PHP is correctly configured by creating a File `/srv/http/test.php` with this content:

    <?php phpinfo(); ?>

To see if it works we go to: [http://localhost/test.php](http://localhost/test.php).