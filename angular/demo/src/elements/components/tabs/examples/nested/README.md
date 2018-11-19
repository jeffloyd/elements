# Tabs `nested`

A variant of the [Tabs](/?selectedKind=Components/Tabs&selectedStory=Default) component with nested sub-navigation.

<!-- STORY -->

### Usage

```js
import { ETabsModule } from 'elements/components';

@NgModule({
  imports: [ETabsModule]
})
```
```html
<div class="card px-3">
  <e-tabs nested={{true}}>
    <ngb-tabset>
      <ngb-tab title="Home">
        <ng-template ngbTabContent>
          <ul class="nav">
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>My Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Friends</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>News</span>
              </a>
            </li>
          </ul>
        </ng-template>
      </ngb-tab>
      <ngb-tab title="Bookmarks">
        <ng-template ngbTabContent>
          <ul class="nav">
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Posts</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>People</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </ng-template>
      </ngb-tab>
      <ngb-tab>
        <ng-template ngbTabTitle>Messages <span class='badge badge-light ml-1'>2</span></ng-template>
        <ng-template ngbTabContent>
          <ul class="nav">
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Inbox</span>
                <span class="badge badge-light">2</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Sent</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>Drafts</span>
              </a>
            </li>
          </ul>
        </ng-template>
      </ngb-tab>
    </ngb-tabset>
  </e-tabs>
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
