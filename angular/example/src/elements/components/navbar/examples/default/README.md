# Navbar

The main navigation component. Based on and extended from the Bootstrap [Navbar](http://getbootstrap.com/docs/4.0/components/navbar/) component.

<!-- STORY -->

### Usage
```js
import { ENavbarModule } from 'elements/components';

@NgModule({
  imports: [ENavbarModule]
})
```
```html
<e-navbar [class]="'px-lg-4'" [title]="'TITLE'">
  <div brand>
    <a class="e-logo mx-4" href="">
      <span>Elements <small>stay simple</small></span>
    </a>
  </div>
  <div class="d-md-flex" collapse>
    <ul class="navbar-nav mr-auto py-3 py-md-0">
      <li class="nav-item active">
        <a class="nav-link" href="">Overview</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Bootstrap</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Pages</a>
      </li>
    </ul>
    <form class="form-inline d-md-none d-lg-flex">
      <div class="input-with-ico">
        <i class="input-ico fa fa-fw fa-search"></i>
        <input class="form-control form-control-rounded" type="search" placeholder="Search">
      </div>
    </form>
  </div>
  <div actions>
    <ul class="navbar-nav flex-nowrap flex-row">
      <li class="nav-item d-none d-md-inline-block">
        <a class="nav-link" href="">
          <i class="fa fa-bell"></i>
        </a>
      </li>
      <li class="nav-item" ngbDropdown placement="bottom-right">
        <a class="nav-link" href="" ngbDropdownToggle>
          <span class="d-none d-md-inline">Morty Smith</span>
          <span class="d-md-none fa fa-user-circle"></span>
        </a>
        <div ngbDropdownMenu>
          <a class="dropdown-item d-md-none" href="">
            <div class="d-flex justify-content-between align-items-center">
              <span>Alerts</span>
              <span class="badge badge-danger">3</span>
            </div>
          </a>
          <a class="dropdown-item" href="">Profile</a>
          <a class="dropdown-item" href="">Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</e-navbar>
```

### Inputs

| Name          | Type    | Default |
|---------------|---------|---------|
| title         | String  |         |
| navInCenter   | Boolean | `false` |
| brandInCenter | Boolean | `false` |
| class         | String  | -       |

### Content

| Name     | Description |
|----------|-------------|
| `[brand]`    | App brand (logo). |
| `[collapse]` | Content that hides on the small screens (usually, nav links). |
| `[actions]`  | Place for the additional active elements. |

### See Also
- [Bootstrap - Navbar](http://getbootstrap.com/docs/4.0/components/navbar/)
- [ng-bootstrap - Dropdown](https://ng-bootstrap.github.io/#/components/dropdown/examples)
