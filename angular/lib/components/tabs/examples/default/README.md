# Tabs

Redesigned Bootstrap's [Tabs](http://getbootstrap.com/docs/4.0/components/navs/#tabs) component.

<!-- STORY -->

### Usage

```js
import { ETabsModule } from 'elements/components';

@NgModule({
  imports: [ETabsModule]
})
```
```html
<!-- As Tabs -->
<div class="card">
  <div class="card-body pt-2">
    <e-tabs>
      <ngb-tabset>
        <ngb-tab title="Home">
          <ng-template ngbTabContent></ng-template>
        </ngb-tab>
        <ngb-tab>
          <ng-template ngbTabTitle>Inbox <span class='badge badge-light ml-1'>2</span></ng-template>
          <ng-template ngbTabContent></ng-template>
        </ngb-tab>
        <ngb-tab title="Settings">
          <ng-template ngbTabContent></ng-template>
        </ngb-tab>
      </ngb-tabset>
    </e-tabs>
  </div>
</div>
```
```html
<!-- As Links -->
<div class="card">
  <div class="card-body pt-2">
    <e-tabs>
      <ul class="nav nav-tabs">
        <li class="nav-item active">
          <a routerLink="" routerLinkActive="active" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a routerLink="" routerLinkActive="active" class="nav-link">
            Inbox <span class='badge badge-light ml-1'>2</span>
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="" routerLinkActive="active" class="nav-link">Settings</a>
        </li>
      </ul>
    </e-tabs>
  </div>
</div>
```

### Inputs

| Name   | Type    | Default |
|--------|---------|---------|
| nested | Boolean | `false` |

### Content

| Name    | Description |
|---------|-------------|
| default | Bootstrap's [`.nav-tab`](http://getbootstrap.com/docs/4.0/components/navs/#tabs) element or ng-bootstrap's [ngb-tabset](https://ng-bootstrap.github.io/#/components/tabs/examples) component. |

### See Also
- [Bootstrap - Tabs](http://getbootstrap.com/docs/4.0/components/navs/#tabs)
- [ng-bootstrap - Tabset](https://ng-bootstrap.github.io/#/components/tabs/examples)
