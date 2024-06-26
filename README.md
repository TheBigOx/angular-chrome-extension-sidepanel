# Angular Chrome Extension Sidepanel

## Build Chrome Extension

The chrome extension files are in the `chrome` folder.  After they are built, they must be copied into the angular `/dist/chrome-sidepanel` folder.


### Build individually.

First build the angular application

```
npm run build:angular
```

Then cd into the `chrome` folder and build

```
npm run build
```

This will copy all the files into the angular build directory `/dist`

### Build all

From the base directory run:

```
npm run build
```

### Build watch

To build the application and have it automatically update the dist folder so that it can be quickly reloaded as an extension run:

```
npm run build:watch
```

Note, that the extension will need to closed be reopened (not reloaded) in order to see the change.


## Load Extension

To load the extension into Chrome, go to `chrome://extensions` -> `Load Unpacked` -> open the angular `dist/chrome-sidepanel` directory.


## Useful commands

Generate a module called `settings` with a component and route, and automatically add it to app module.

```
ng generate module pages/settings --route settings --module app.module
```


# Generated Readme.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
