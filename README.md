# React Markdown Previewer
> This is a very small project created with the purpose of learning the fundamentals of React.js starting from a simple [Create React App](https://github.com/facebook/create-react-app).

## 🎯 About ##

I've started this project with the idea of reworking one of the ending projects of the Front End Libraries Certification (300 hours) of [FreeCodeCamp](https://www.freecodecamp.org/learn).
I have structured the project with two small React components and I have styled it with a little bit of custom SASS.
You can write or paste you code/text inside the left textarea and the markdown will be previewed in the right panel.
I have used a library ([Marked.js](https://marked.js.org/)) in order to parse the markdown and let it be available for the app to be previewed.

## ▶️ Demo

Here you can find the demo link:

- [Netlify](https://react-markdown-prev.netlify.app/)

## :sparkles: Features ##

:heavy_check_mark: &nbsp;Responsive site<br/>
:heavy_check_mark: &nbsp;React Hooks<br/>
:heavy_check_mark: &nbsp;Markdown parsing

## :rocket: Technologies ##

- [React](https://reactjs.org/)
- [SASS/SCSS](https://sass-lang.com/)
- [Marked.js](https://marked.js.org/)
- [Netlify - Responsible for the deploy (have a look below)](https://www.netlify.com/)

## Netlify deploy & configuration

> The site is developed with some specific https://netlify.com apis.

[![Netlify Status](https://api.netlify.com/api/v1/badges/518e8e71-ed66-46b5-a401-efb407638368/deploy-status)](https://app.netlify.com/sites/react-markdown-prev/deploys)

### Deploy configuration steps

1. Connect your GitHub account to Netlify
3. Select the project
2. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
3. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
