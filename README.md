# AngularTourOfHeroes

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## [Tutorial: Tour of Heroes](https://v17.angular.io/tutorial/tour-of-heroes)
### [Create a new workspace and an initial application](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt0#create-a-new-workspace-and-an-initial-application)
```
ng new angular-tour-of-heroes
```
### [The hero editor](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt1#the-hero-editor)
- [Create the heroes component](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt1#create-the-heroes-component)
```
ng generate component heroes
```
- [Create a Hero interface](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt1#create-a-hero-interface)
- [Format with the UppercasePipe](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt1#format-with-the-uppercasepipe)
- [Edit the hero](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt1#edit-the-hero)
- [Display a selection list](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt2)
- [Create a feature component](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt3#create-a-feature-component)
- [Add services](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt4#add-services)
- [Add navigation with routing](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt5#add-navigation-with-routing)
  - [Add a navigation link using routerLink](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt5#add-a-navigation-link-using-routerlink)
  - [Add a dashboard view](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt5#add-a-dashboard-view)
  - [Navigating to hero details](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt5#navigating-to-hero-details)
  - [Get data from a server](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt6)
    - [Search by name](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt6#search-by-name)

## [Learn Angular](https://angular.dev/tutorials/learn-angular/1-components-in-angular)
- [Control Flow in Components - @for](https://angular.dev/tutorials/learn-angular/5-control-flow-for)
## [Easy Steps to Host an Angular App in GitHub Pages](https://www.syncfusion.com/blogs/post/host-angular-app-in-github-pages)
```
ng add angular-cli-ghpages
ng deploy --base-href=/angular-tour-of-heroes/
```
## [How to make latest Angular versions compatible with old Browsers?](https://stackoverflow.com/questions/78341952/how-to-make-latest-angular-versions-compatible-with-old-browsers)
1. Generate the .browserslist if it is not generated Using the following command:
```
ng g config browserslist
```
2. Insert the list of browsers in this file:
```
Chrome >=99
Firefox >=99
Safari>=13
iOS >=13
```
3. Edit the tsconfig.json file
```
"target": "es5"

```
