# AngularTutorial

Tutorial from https://angular.io/start and extended using https://material.angular.io/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

![Main index](https://github.com/ClareBee/AngularTutorial/blob/master/assets/index.png)

## Learning Notes
- `*ngFor`/`ngIf` = 'structural directives' which shape/reshape DOM structure (marked by asterix)
- `{{}}` = interpolation syntax (renders property value as text)
- `[]` = property binding syntax (lets you use property value in a template expression)
- `()` = event binding (e.g. ` <button (click)="share()">`)

### Components
Angular App => tree of components

**Component** (as an area of responsibility in the UI that lets you reuse sets of UI functionality):

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
**@Component decorator** indicates it's a component and provides metadata:
- selector = identifier for html element
- template = content of html
- styleUrls = stylesheet

**@Input() decorator** indicates that property value passes in from component's parent (cf props)
**@Output() decorator** and an instance of EventEmitter() => allows component to emit an event when the value of the property changes.

### Routing
- Declared in app.module.ts in the RouterModule
- RouterLink directive = `routerLink` defines how the user navigates to the route (or URL) declaratively in the component template.
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
And add to imports array. Then inject into the constructor of the service you're using.
NB multiple components can leverage the same service

Call in the `ngOnInit` lifecycle method and use an async pipe in the template:
e.g.
```html
// shipping.component.html
<div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
  <span>{{ shipping.type }}</span>
  <span>{{ shipping.price | currency }}</span>
</div>
```

### Forms
> Forms in Angular take the standard capabilities of the HTML based forms and add an orchestration layer to help with creating custom form controls, and to supply great validation experiences. There are two parts to an Angular Reactive form, the objects that live in the component to store and manage the form, and the visualization of the form that lives in the template.

Angular's FormBuilder - import and inject (provided by ReactiveFormsModule)

- **formGroup** property binding to bind checkoutForm property to tag
- **ngSubmit** event binding to listen for form submission and call onSubmit()
- **formControlName** attribute binding to bind checkoutForm form controls for name/address to input fields

```html
<form [formGroup]="checkoutForm" (ngSubmit)="onSubmit(checkoutForm.value)">
  <div>
    <label for="name">
      Name
    </label>
    <input id="name" type="text" formControlName="name">
  </div>

  <div>
    <label for="address">
      Address
    </label>
    <input id="address" type="text" formControlName="address">
  </div>
  <button class="button" type="submit">Purchase</button>

</form>
```

### Deployment
- `ng build --prod`
generates static files in dist/my-project-name => easy to host 
e.g. on [Firebase](https://firebase.google.com/)
- `npm install -g firebase-tools`
- `firebase login`
- `firebase init` (creates firebase.json)
(selecting dist/my-project-name as the public directory)
- `firebase deploy`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Styling with [Angular Material](https://material.angular.io)
`ng add @angular/material`
=> installs Angular Material, the Component Dev Kit (CDK), Angular Animations, prebuilt/custom theme option, HammerJS for gesture recognition, BrowserAnimations, Roboto font, Material design icon font


- Prebuilt & Custom themes
- Schematics e.g. Address form, navigation, table, dashboard, tree, drag and drop
 Navigation schematic
e.g.
>The navigation schematic will create a new component that includes a toolbar with the app name and a responsive side nav based on Material breakpoints.

`ng generate @angular/material:nav <component-name>`
