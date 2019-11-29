# AngularTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Learning Notes
`*ngFor` = 'structural directive' which shape/reshape DOM structure (marked by asterix)
`{{}}` = interpolation syntax (renders property value as text)
`[]` = property binding syntax (lets you use property value in a template expression)
`()` = event binding (e.g. ` <button (click)="share()">`)

### Components
Angular App = tree of components
Component (as an aread of responsibility in the UI that lets you reuse sets of UI functionality):

    - A component class that handles data and functionality.
    - An HTML template that determines the UI. 
    - Component-specific styles that define the look and feel.

```javascript
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
```
@Component decorator indicates it's a component and provides metadata:
- selector = identifier for html element
- template = content of html
- styleUrls = stylesheet

@Input() decorator indicates that property value passes in from component's parent (cf props)
@Output() decorator and an instance of EventEmitter() => allows component to emit an event when the value of the property changes.
