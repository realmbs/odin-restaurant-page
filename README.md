
# odin-restaurant-page

1. Start the project the same way you began the webpack tutorial project.
2. run npm init in your project directory to generate a package.json file.
3. run npm install webpack webpack-cli --save-dev to install webpack to the node_modules directory of your project.
  * Quick tip: the node_modules folder can get really big. It is customary to add a .gitignore file to your project so that you don’t have to sync the contents of node_modules to github. The dependencies that are stored there can be installed from your package.json by running npm install, so you don’t need to sync them.
4. Create a src and dist directory with the following contents:
  * an index.js file in src
  * an index.html file in dist. Go ahead and link the main.js file in a script tag. main.js is the file that will be generated by webpack.
  * create a webpack.config.js file that looks just like our file from the tutorial.
5. Set up an HTML skeleton inside of dist/index.html. Inside the body, add a <header> element that contains a <nav> with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About” etc). Below the <header>, add a single <div id="content">.
6. Inside of src/index.js write a console.log or alert statement and then run npx webpack. Load up dist/index.html in a browser to make sure everything is working correctly.
  * Quick tip #2: if you run npx webpack --watch you will not have to rerun webpack every time you make a change.
7. Inside div#content, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.
8. Now remove everything inside div#content from the HTML (so you still have the <header> and <nav> with an empty <div id="content"> below it) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.
9. Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at the behavior of this student solution for visual inspiration.
10. Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
11. Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.
12. If you are using GitHub pages to host your completed page you need to do a tiny bit more work to get it to show up. After running webpack the full bundled version of your site is available in the dist folder, but GH pages is looking for an index.html in the root directory of your project.
13. Follow the instructions on this gist. EZPZ!
To prevent having to copy and paste the same lengthy git command each time, you can instead create an npm script to do the work for you!
Inside your project’s package.json file, within the scripts section, add an additional entry named something of your choosing and paste in the command from the above gist surrounded by quotation marks. Follow the formatting of the already added test script.
For Example:
"scripts": { "YourScriptName": "git subtree push --prefix dist origin gh-pages" }
Now each time you need to update your project’s live preview, you npm run <YourScriptName> in your project’s terminal.
To learn more about this, here’s a short tutorial video on Node Package Manager Scripts.
Recall that the source branch for GitHub Pages is set in your repository’s settings.