# Navlist `active-bg`

A variant of the [Navlist](/?selectedKind=Components/Navlist&selectedStory=Default) component, whose active items has a colored background.

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
  <e-navlist activeBg={{true}}>
    <ul class="nav">
      <li class="nav-item">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-home mr-1"></i>
          <span>Home</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-bookmark mr-1"></i>
          <span>Bookmarks</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-envelope mr-1"></i>
          <span>Messages</span>
          <span class="badge badge-light ml-1">4</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-cog mr-1"></i>
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
