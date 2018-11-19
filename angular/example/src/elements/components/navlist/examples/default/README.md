# Navlist

Vertical navigation component.

<!-- STORY -->

### Usage

```js
import { ENavlistModule } from 'elements/components';

@NgModule({
  imports: [ENavlistModule]
})
```
```html
<div class="card p-3">
  <e-navlist>
    <ul class="nav">
      <li class="nav-item active">
        <a href="" class="nav-link">
          <span>Home</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <span>Bookmarks</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <span>Messages</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <span>Settings</span>
        </a>
      </li>
    </ul>
  </e-navlist>
</div>
```

### Inputs

| Name       | Type    | Default | Description |
|------------|---------|---------|-------------|
| activeBg   | Boolean | `false` | Flag that puts a background color on the active items. |
| activeBold | Boolean | `false` | Flag that makes the active items bold. |

### Content

| Name    | Description |
|---------|-------------|
| Default | The list of nav links. Should be a `.nav` element. |


### See Also
- [Bootstrap - Navs](http://getbootstrap.com/docs/4.0/components/navs/)
