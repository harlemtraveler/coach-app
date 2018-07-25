#Library Packages Used
- normalize.css
-

#Application File Structure
- components
  - self-contained, isolated components
- containers
  - higher-order components
- data
  - data and API related
- views
  - full page, app-specific views
- styles
  - style-sheets for the application

#Issues

- Problems with Banner image loading along with Banner animations was caused by the absence of JavaScript files that run scripts for said functions.

- The animations are being called in "public/index.html"

- The above mentioned scripts are located in "public/js"
