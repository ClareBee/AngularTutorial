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

### Routing
declares in app.module.ts in the RouterModule
RouterLink directive =  routerLink defines how the user navigates to the route (or URL) declaratively in the component template.
(`index as` assigns index when iterating over a list)
e.g.
```javascript
<div *ngFor="let product of products; index as productId">

  <h3>
    <a [title]="product.name + ' details'" [routerLink]="['/products', productId]">
      {{ product.name }}
    </a>
  </h3>
<!-- . . . -->
</div>
```
Inject ActivatedRoute into the constructor of the iterable:

> The ActivatedRoute is specific to each routed component loaded by the Angular Router. It contains information about the route, its parameters, and additional data associated with the route.

Subscribe to the route params in the `ngOnInit()` lifecycle hook which Angular calls shortly after creating a component

### Services
> In Angular, a service is an instance of a class that can be made available to any part of your application using Angular's dependency injection system.

> Services are the place where you share data between parts of your application.

### Angular HTTP client
> Data returned from servers often takes the form of a stream. Streams are useful because they make it easy to transform the data that is returned, and to make modifications to the way data is requested. The Angular HTTP client (HttpClient) is a built-in way to fetch data from external APIs and provide them to your application as a stream.

> Angular's HttpClientModule registers the providers needed to use a single instance of the HttpClient service throughout your app. The HttpClient service is what you inject into your services to fetch data and interact with external APIs and resources.

```javascript
// app.module.ts
import { HttpClientModule } from '@angular/common/http';
```
and add to imports array. Then inject into the constructor of the service you're using.
NB multiple components can leverage the same service
