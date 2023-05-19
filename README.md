This is a repository for academic websites with support for both English and Farsi languages.

This template support the kinds of content that academics have: publications, research, jobs, contact, and a dynamically-generated CV.

You can fork [this repository](https://github.com/simamojtahedi/academic-resume), modify the configuration and files, and have your own site for free by publishing this code on [GitHub pages](https://pages.github.com/) or any other domain.

# Getting started

1.Register a GitHub account.
2.Fork this repository by clicking the `fork` button in the top right.
3.Go to the repository’s settings and rename the repository `[your GitHub username].github.io`, which will also be your website’s URL.
4.Set site-wide configuration as see below description.

# Pages setup and main configuration

The main configuration file for the site is in `global.js` file in data directory, which defines the content in the sidebar and other site-wide features in `globalData` object.
You will need to replace the default variables with ones about yourself and your site’s github repository.
Also in `navbarLinks` object the pages of the site are defined, to disable any of the pages that you don't want in your page, change the value of that page to false.

# Files

You can upload your image and your PDF resume as below template in `files` directory.
Your image: profile.jpg/png/...
Your resume: resume.pdf

# Pages configuration

In `lang` directory there are two files named `en.js` and `fa.js`.
You can change data in these files based on your information for home, publications, research, jobs pages and navbar titles as provided template.

\*\* Remeber to change both both `fa.js` and `en.js` files.
