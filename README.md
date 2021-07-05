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

## Here is the explanation..
### 1. Assets folder
The assets folder contains images and scss folder for styling. In this project architecture, I am using centralized styling with SCSS files. I am more comfortable with that.
If you prefer to include style in each component, that's not a problem. But, you should consider locating a default or shared styling here.
You can rename it to css or styles if you don't use scss/sass in your project.
### 2. Components folder
The components folder contains a collection of UI components like button, custom input field, modal, etc that will be shared and used across files in the project.
You can rename it to 'elements' or 'UIs' if you dont like 'components'.
Each component has a test file to help us maintain them because they used widely in the project.
### 3. Pages folder
The pages folder reflects the routes of the application. Each component inside this folder has its own route.
A page component will contain children from components folder, parts folder, or its own subfolder. It has its own state, and usually call some services as well.
