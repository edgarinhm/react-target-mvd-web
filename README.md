# React Target MVD Redux Typescript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [React Target MVD Redux Typescript](#react-target-mvd-redux-typescript)
  - [In a nutshell](#in-a-nutshell)
  - [Usage](#usage)
    - [Development](#development)
      - [Env File](#env-file)
      - [Environment variables](#environment-variables)
  - [Technologies](#technologies)
    - [Testing](#testing)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm build`](#npm-build)
    - [`npm eject`](#npm-eject)
    - [`npm cypress`](#npm-cypress)
    - [`npm proxy`](#npm-proxy)
  - [More info](#more-info)
    - [Folders:](#folders)
    - [Demo:](#demo)

## In a nutshell

This app works as a handmade template for React Typescript.

- Language support.
- State management tool.

Design can be found in: [FIGMA Page](https://www.figma.com).

## Usage

### Development

#### Env File

You are going to need a `.env` file like this one:

```bash
PORT=8080
REACT_APP_API_URL=http://your-api-url.com
REACT_APP_GOOGLE_KEY=google_key
REACT_APP_CC_PUBLIC_KEY=public_id
REACT_APP_CC_KEY_ID=key_id
```

#### Environment variables

- `PORT`: Port for React frontend.
- `REACT_APP_API_URL`: URL for React Base backend (React Base-backend project).
- `REACT_APP_GOOGLE_KEY`: Google Key obtain as a constant from API endpoint. As it is always the same key it's added as a varible.
- `REACT_APP_CC_PUBLIC_KEY`: Public key used for encrypting data for requests. Mostly used on Credit Card and Deposit endpoints.
- `REACT_APP_CC_KEY_ID`: Key ID for React Base. Used on Deposit endpoints.

## Technologies

| **Tech**                                                  | **Description**                                                                                                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React 17](https://facebook.github.io/react/)             | Fast, composable client-side components.                                                                                                                |
| [React Router 6](https://github.com/reactjs/react-router) | A complete routing library for React                                                                                                                    |
| [Redux](http://redux.js.org)                              | Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging.                                                 |
| [Redux Toolkit](https://redux-toolkit.js.org/)            | let you write "mutative" immutable update logic, and even create entire "slices" of state automatically..                                               |
| [Cypress](https://cypress.io/)                            | Automated integration tests. Default way of testing.                                                                                                    |
| [Jest](https://facebook.github.io/jest/)                  | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node.            |
| [ESLint](http://eslint.org/)                              | Lint JS. Reports syntax and style issues. Using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for the airbnb style guides. |
| [SASS](http://sass-lang.com/)                             | Compiled CSS styles with variables, functions, and more.                                                                                                |
| [Redux Persist](https://github.com/rt2zz/redux-persist)   | Persist and rehydrate your redux store                                                                                                                  |
| [I18NEXT](https://react.i18next.com/)                     | Localization for language support.                                                                                                                      |
| Custom UI/CORE                                            | Custom UI/CORE is the components & styles library to build user interfaces                                                                              |

### Testing

This project uses `cypress` for E2E testing.
You can run the tests with `npm cypress`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser env file config.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm cypress`

Starts cypress testing tool for development and testing purposes.

### `npm proxy`

Will proxy all the api calls to ftx.us/api. This is used to prevent CORS errors developing locally. It's recommended to have it running when developing.

## More info

### Folders:

- **`assets`**: Mostly images and vectors.
- **`components`**: UI components commonly used through all the application.
- **`constants`**: Constants used through all the app. In this folder, we discriminate between common constants and specific constants for each business unit. Over here, we also have routes and endpoints constants.
- **`context`**: General context accessible in all the app.
- **`helpers`**: Pure helpers functions. Something goes in, it's proccesed, something goes out.
- **`hooks`**: Custom hooks used through all the application.
- **`interfaces`**: All the interfaces used in the application. Some interfaces might be found on services, store or modals. Should be everything here.
- **`locales`**: i18n texts.
- **`pages`**: All the components used on the routes are here. In this folder are ensemble and presented. Every route has a counterpart as a component expelled from this folder.
- **`router`**: Main mecanism for controlling routes and lazy loading routes.
- **`services`**: Holds connectivity files with the APIs. This app has Redux Toolkit integrated and uses axios for API call.
- **`store`**: Configuration files regarding store set with redux.
- **`styles`**: Base style files imported through all the app.
- **`themes`**: Themes for Custom UI interfaces.

### Demo:

https://zingy-torte-7521aa.netlify.app/
