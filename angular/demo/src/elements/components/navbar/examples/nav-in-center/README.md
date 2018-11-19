# Navbar `nav-in-center`

Variant of the [Navbar](/?selectedKind=Components/Navbar&selectedStory=Default) component with the centrally located navigation.

<!-- STORY -->

### Usage
```js
import { ENavbarModule } from 'elements/components';

@NgModule({
  imports: [ENavbarModule]
})
```
```html
<e-navbar [class]="'px-lg-4'" [title]="'TITLE'" navInCenter={{true}}>
  <div brand>
    <a class="e-logo mx-4" href="">
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
    <button class="btn btn-success" type="button">
      <i class="fa fa-user-circle"></i>
      <span class="d-none d-md-inline-block">Morty Smith</span>
    </button>
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
