# Navbar `brand-in-center`

Variant of the [Navbar](/?selectedKind=Components/Navbar&selectedStory=Default) component with the centrally located brand.

<!-- STORY -->

### Usage
```js
import { ENavbarModule } from 'elements/components';

@NgModule({
  imports: [ENavbarModule]
})
```
```html
<e-navbar [class]="'px-lg-4'" title="TITLE" brandInCenter={{true}}>
  <div brand>
    <a class="e-logo mx-4 my-2" href="">
      <span>Elements <small>stay simple</small></span>
    </a>
  </div>
  <div collapse>
    <ul class="navbar-nav pt-3 pt-md-0">
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
  </div>
  <div actions>
    <form class="form-inline">
      <div class="input-with-ico">
        <i class="input-ico fa fa-fw fa-search"></i>
        <input class="form-control form-control-rounded" type="search" placeholder="Search" style="max-width: 170px">
      </div>
    </form>
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
