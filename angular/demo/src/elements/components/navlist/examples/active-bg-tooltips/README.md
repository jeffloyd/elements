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
      <li class="nav-item" placement="right" ngbTooltip="Home">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-home"></i>
        </a>
      </li>
      <li class="nav-item" placement="right" ngbTooltip="Bookmarks">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-bookmark"></i>
        </a>
      </li>
      <li class="nav-item" placement="right" ngbTooltip="Messages">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-envelope"></i>
        </a>
      </li>
      <li class="nav-item" placement="right" ngbTooltip="Settings">
        <a href="" class="nav-link">
          <i class="fa fa-fw fa-cog"></i>
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
- [ng-bootstrap - Tooltips](https://ng-bootstrap.github.io/#/components/tooltip/examples)
