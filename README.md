## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Steps to use
Go to http://cwmat.github.io/udacity-web-optimization/ and tes with Google's page speed insights.

Click on the "Cam's Pizzeria" link or go directly to http://cwmat.github.io/udacity-web-optimization/views/pizza.html.  

Try scrolling and test out the pizza size sliders!

### Optimizations
#### Index page
- Resized thumbnail images and compressed
- Inlined CSS and removed call to fonts
- Enabled caching

#### Pizza page
- Removed FSL code from updatePostiion and resizePizzas
- For both of the above mentioned functions I simply moved layout calls out of the for loops and then left batch style changes in the body of the for loops
- Additionally I utilized requestAnimationFrame for updatePositions in order to optimize when JS asked for a new frame
