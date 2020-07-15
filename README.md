# Develop customisations
## Development workflow
The modifications are first made on the Dev theme of the academy
To modify the files : 
* Fork this repo and clone it locally
* Modify the files as wanted
* Add/replace corresping URL the global snippet section of the Dev theme
* Make a pull request to this repo

## Making changes
The easiest way to make changes is to use style editor of the browser and the multiline console.
For CSS :
* go to dev tools > style editor.
* Add/modify styles
* Save file in your cloned repo (override them for the first save)
* Add/commit/push

For JS : 
* Test scripts/part of scripts in the multiline console (eventually written in the console)
* Add/commit/push

For longer scripts written in the , it is necessary

## Adding and publishing files
The Dev theme is served directly from Github-pages. Every time you push on the right branch, the files (it may take a little while).
The files will be available at `https://your-github-name.github.io/filename.css` on the branch defined in your settings. By default, this branch is `gh-pages`. This repo is configured to serve from master.

In the skill jar dashboard, add the code snippet section, add the CSS in the head and the js files in the script. Feel free the mess up the code snippets in the Dev theme, it's made for that.

# Deploy customisation to prod
The deploy method uses Terser and Uglify CSS. To add them :
```
yarn add terser
yarn add uglifycss
```
To produce the output files :
```
terser *.js > custom-academy.js
uglifycss *.css > custom-academy.css
```
Then transfert the two files on the academy ftp. Skilljar should already be configured with those two files for the live theme.
