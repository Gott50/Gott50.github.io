---
title: Fixing PhpStorm SCSS File Watcher
excerpt: >
    Problem: 
    When activated the PhpStorm SCSS File Watcher throws this Exception:
        
        /usr/lib/node_modules/less/bin/lessc --no-cache --update test.scss:test.css
        Unable to interpret argument no-cache - if it is a plugin (less-plugin-no-cache), make sure that it is installed under or at the same level as less
        Unable to interpret argument update - if it is a plugin (less-plugin-update), make sure that it is installed under or at the same level as less
        lessc: ENOENT: no such file or directory, open '.../PhpstormProjects/Project/test.scss:test.css'
        
        Process finished with exit code 1
---

## Initial Situation
We installed PhpStorm on Arch Linux / Manjaro by following the installation official Guide. 
We setup the SCSS File Watcher as described in the [JetBrains Guide](https://www.jetbrains.com/help/phpstorm/compiling-sass-less-and-scss-to-css.html).

## Problem
When activated the PhpStorm SCSS File Watcher throws this Exception:
    
    /usr/lib/node_modules/less/bin/lessc --no-cache --update test.scss:test.css
    Unable to interpret argument no-cache - if it is a plugin (less-plugin-no-cache), make sure that it is installed under or at the same level as less
    Unable to interpret argument update - if it is a plugin (less-plugin-update), make sure that it is installed under or at the same level as less
    lessc: ENOENT: no such file or directory, open '.../PhpstormProjects/Project/test.scss:test.css'
    
    Process finished with exit code 1

## Solution
Use the File Watcher Program by [sass-lang.com](http://sass-lang.com/). 
This Solution can be applied to all File Watchers by JetBrains

### Requirements 
We will use [npm](https://www.npmjs.com/) to install Sass.
On Arch Linux we run in Terminal:

    sudo pacman -S npm

### [Installation](http://sass-lang.com/install)

    sudo npm install -g sass
    
### Setup in PhpStorm
Use Sass Preprocessor as Program in File Watcher
1. got to `File > Settings > Tools > File Watchers`
2. edit/add SCSS File Watcher 
3. use the Program at Path: `/usr/bin/scss`