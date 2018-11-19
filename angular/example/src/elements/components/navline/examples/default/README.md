# Navline

Horizontal navigation component.

<!-- STORY -->

### Usage

```js
import { ENavlineModule } from 'elements/components';

@NgModule({
  imports: [ENavlineModule]
})
```
```html
<div class="card px-2">
  <e-navline>
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
    </ul>
  </e-navline>
</div>
```

### Input

| Name     | Type    | Default | Description |
|----------|---------|---------|-------------|
| arrow    | Boolean | `false` | Flag that puts a decorative arrow under the navline.  |

### Content

| Name     | Description                                        |
|----------|----------------------------------------------------|
| default  | The list of nav links. Should be a `.nav` element. |

### See Also
- [Bootstrap - Navs](http://getbootstrap.com/docs/4.0/components/navs/)
