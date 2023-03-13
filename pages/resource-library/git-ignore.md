---
title: Version Control Systems – Git and Friends
date: 2023-03-14
description: Keep track of changes to your code
tag: software development, version control, git
author: You
---

# Version Control Systems (VCS) – Git and Friends

## History of VCS

import Image from 'next/image'

<Image
  src="/images/LifeWithoutGit.png"
  alt="Photo"
  layout="responsive"
  width={516}
  height={274}
  priority
  className="next-image"
/>

Since we started using computers we needed ways of keeping track of our files and data stored on them. You are probably guilty of the above basic but functional approach to versioning changes to files.

Software Development at the end of the day is working with a large number of files and code. Unsurprisingly the industry as a whole has developed sophisticated systems to aide the management of all this data.

The prevailing "winner" when it comes to VCS is [Git](https://www.atlassian.com/git/tutorials/what-is-git). Developed by Linus Torvalds through his work with others on the Linux kernel, it is now an industry standard. Check out [this article](https://medium.com/@mehran.hrajabi98/a-brief-history-of-version-control-systems-vcss-5881f07ba0e1) for a brief history of how the industry landed on using Git.

## .gitignore files

A lot of the time when working on code you end up with a bunch of generated files that you don't actually want to keep track of in your version control system. That's where `.gitignore` files come in which allow you to specify folders/dirs or specific files to be ignored by the Git VCS mechanisms.

The `.gitignore` file for this site looks like this -

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem
.vscode

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

public/feed.xml
```

Some useful links and utilities for this:

- https://help.github.com/articles/ignoring-files/
- https://www.atlassian.com/git/tutorials/saving-changes/gitignore
- Create useful .gitignore files for your project, https://gitignore.io
