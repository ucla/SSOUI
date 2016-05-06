# UCLA's ZURB Foundation for Sites Template

This is based off of the official ZURB Template for use with the UCLA fork of [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

### Build Tools / Dependencies

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.10 or greater)
- [Git](https://git-scm.com/)

To set up the template, first download it with Git (replacing `projectname` with the name of the desired install location to be created, if any):

```bash
git clone https://github.com/ucla/foundation-zurb-template projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

### Framework

Since we're using a forked version of Zurb Foundation itself we'll just pull it in directly (for now!) as a Git Submodule and stick it in the bower_components directory to keep any pathing issues out of the way (yeah yeah, I know).

You can pull down the latest version inside your application by running:

```bash
git submodule update --remote bower_components/foundation-sites
```

If you need to recreate the .gitmodules file:

```bash
git submodule add -b develop -f https://github.com/ucla/foundation-sites.git bower_components/foundation-sites
```

Further Reading:

[http://www.git-scm.com/book/en/v2/Git-Tools-Submodules](http://www.git-scm.com/book/en/v2/Git-Tools-Submodules)


## Usage

Finally to run Gulp:

```bash
npm start
```

Your finished site will be created in a folder called `dist`, viewable at this URL: `http://localhost:8000`

To create compressed, production-ready assets:

```bash
npm run build
```
