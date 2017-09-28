---
layout: post
title: Installing WordPress on Arch/Manjaro
---

In order to develop a [WordPress](https://wordpress.org/) 
[Theme](https://codex.wordpress.org/Theme_Development) or 
[Plugin](https://codex.wordpress.org/Writing_a_Plugin) 
we might want to be able to run it locally. 
That is necessary if you develop offline, have no Server at your disposal or 
want to see the changes you make instantly. 
Setting up a WordPress instance on Windows and Mac is pretty convenient, 
because you can use Software Bundles like [WAMP](http://www.wampserver.com/en/) 
and [MAMP](https://www.mamp.info/en/), 
which provide [Apache](https://httpd.apache.org/), 
[MySQL](https://www.mysql.com/) and [PHP](http://php.net/manual/en/intro-whatis.php) 
out of the box.

If you are using [Arch Linux](https://www.archlinux.org/) or a distribution based on it 
like [Manjaro](https://manjaro.org/), 
this little tale of my installation Odyssey may be what you are looking for. 

## Starting out with nothing
We begin our journey with a fresh installation of Manjaro. 
Before we can start installing WordPress, we should install all the Software it depends on.
Namely [Apache](/installing-apache-on-arch-manjaro/), 
[PHP](/installing-php-for-apache-on-arch-manjaro/) and 
[MySQL](/installing-mysql-for-apache-on-arch-manjaro/) 


## Installing WordPress
The [Tutorial](https://wiki.archlinux.org/index.php/Wordpress) 
provided by  [wiki.archlinux.org](https://wiki.archlinux.org) 
describes everything we need and more. Here is the gist:

### 1. Install the wordpress package:
run  in Terminal:

    pacman -S wordpress
    
### 2. Configure Apache
create File `/etc/httpd/conf/extra/httpd-wordpress.conf` with content:

    Alias /wordpress "/usr/share/webapps/wordpress"
    <Directory "/usr/share/webapps/wordpress">
    	AllowOverride All
    	Options FollowSymlinks
    	Require all granted
    </Directory>
    
edit the Apache configuration File `/etc/httpd/conf/httpd.conf` and add:

    Include conf/extra/httpd-wordpress.conf
    
### 3. Restart Apache
run in Terminal:

    apachectl restart

### 4. Configure MySQL
Make sure that MySQL is running!
To start it run in Terminal:

    systemctl start mysqld

Login as root, create a user and database:

    mysql -u root -p
    CREATE DATABASE wordpress;
    GRANT ALL PRIVILEGES ON wordpress.* TO "root"@"localhost" IDENTIFIED BY "";
    FLUSH PRIVILEGES;
    EXIT
    
## Achievements
Now that we have finished all the necessary installations and configurations. 
We are finally able to use WordPress at 
[http://localhost/wordpress](http://localhost/wordpress/).
All further configuration should be pretty straightforward. 