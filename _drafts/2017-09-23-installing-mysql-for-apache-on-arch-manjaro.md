---
layout: post
title: Installing MySQL for Apache on Arch/Manjaro
---

We want to use [MySQL](https://www.mysql.com/) with 
[Apache HTTP Server](https://httpd.apache.org/) on our machine 
in order to run [WordPress](https://wordpress.org/) and other services like it.
Since we [installed Apache](/installing-apache-on-arch-manjaro/) 
and [PHP for Apache](/installing-php-for-apache-on-arch-manjaro/) 
we are now able to install MySQL and configure it to work with PHP.
 
Since we use Arch Linux [MariaDB](https://mariadb.org/) is the default installation. 
Keeping that in mind we are installing MariaDB, even if we might not use it to it's full extend.

The [Tutorial](https://wiki.archlinux.org/index.php/Apache_HTTP_Server#PHP) 
provided by [wiki.archlinux.org](https://wiki.archlinux.org) 
describes everything we need and more. Here is the gist:

## PHP Configuration
Uncomment the following lines in `/etc/php/php.ini`, by removing the `#`:

    extension=pdo_mysql.so
    extension=mysqli.so

## Installation
run in Terminal

    sudo pacman -S mariadb
    sudo mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
    
## Start MySQL
run in Terminal

    systemctl start mysqld
    
## Setup Security
run in Terminal

    sudo mysql_secure_installation 

## MySQL Configuration
run in Terminal (replace `root` with the set user)

    mysql -u root -p

enter these SQL commands 
(replace `root` with the WordPress user and `choose_db_password` with some password)
    
    CREATE DATABASE wordpress;
    GRANT ALL PRIVILEGES ON wordpress.* TO "root"@"localhost" IDENTIFIED BY "choose_db_password";
    FLUSH PRIVILEGES;
    EXIT
    
## Achievements
Now that we have [setup and configured Apache](/installing-apache-on-arch-manjaro/), 
[PHP for Apache](/installing-php-for-apache-on-arch-manjaro) and 
MySQL we are finally able to [install WordPress](/installing-wordpress-on-arch-manjaro/) correctly.