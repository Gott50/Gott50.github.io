---
title: Switch Jekyll Theme - Day 1
---

Now that we can validate our page we switch to a more advanced [Theme](https://github.com/mmistakes/minimal-mistakes). 
The difficulty, however, is adjusting the new Theme to the Requirements of AMP.
This is going to take some time.

### The Steps I took Today:
1. [Setup](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/) 
the [new Theme](https://github.com/mmistakes/minimal-mistakes) with 
minimum Settings on a separate [Repository](https://github.com/Gott50/minimal-mistakes) 
2. copy all files of the new Repository into this without overriding 
3. update `Gemfile`
4. run `bundle update`
5. replace `_config.yml` and insert page Settings
6. adjust `_includes/header.html` Line 2:105 to use {% raw %}`{{ site.author.avatar }}` 
instead of `{{ site.logo }}` {% endraw%}

### Next Steps
1. migrate the rest
