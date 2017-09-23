---
layout: post
title: Installing WordPress on Arch/Manjaro
---

In order to develop a WordPress Theme or Plugin we might want to be able to run it locally. 
That is necessary if you develop offline, have no Server at your disposal or want 
to see the changes you make instantly. 
Setting up a WordPress instance on Windows and Mac is pretty convenient, 
because you can use Software like WAMP and MAMP, which provide Apache and MySQL out of the box.
Depending on your Linux distribution there is also LAMP, offering the same comfort.

If you are using Arch Linux or a distribution based on it like Manjaro, 
this little tale of my installation Odyssey may be what you are looking for. 

## Starting out with nothing
We begin our journey with a fresh installation of Manjaro. 
Before we can start installing WordPress, we should install all the Software it depends on.
Namely [Apache](https://wiki.archlinux.org/index.php/Apache_HTTP_Server#PHP), 
[PHP](https://wiki.archlinux.org/index.php/Apache_HTTP_Server#PHP) and 
[MySQL](https://wiki.archlinux.org/index.php/PHP#MySQL.2FMariaDB) 


### Installing WordPress
The [Tutorial](https://wiki.archlinux.org/index.php/Wordpress) 
provided by wiki.archlinux.org describes everything we need and more. Here is the gist:

##### 1. Install the wordpress package:
run  in Terminal:

    pacman -S wordpress
    
##### 2. Configure Apache
create File `/etc/httpd/conf/extra/httpd-wordpress.conf` with content:

    Alias /wordpress "/usr/share/webapps/wordpress"
    <Directory "/usr/share/webapps/wordpress">
    	AllowOverride All
    	Options FollowSymlinks
    	Require all granted
    </Directory>
    
edit the Apache configuration File `/etc/httpd/conf/httpd.conf` and add:

    Include conf/extra/httpd-wordpress.conf
    
##### 3. Restart Apache
run in Terminal:

    apachectl restart

##### 4. Configure MySQL
Make sure that MySQL is running!
To start it run in Terminal:

    systemctl start mysqld

Login as root, create a user and database:

    mysql -u root -p
    CREATE DATABASE wordpress;
    GRANT ALL PRIVILEGES ON wordpress.* TO "root"@"localhost" IDENTIFIED BY "";
    FLUSH PRIVILEGES;
    EXIT