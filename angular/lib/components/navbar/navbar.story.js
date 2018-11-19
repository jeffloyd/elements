import { storiesOf } from '@storybook/angular'
import { Story } from '.storybook/utils/story/index.ts'

import { ENavbarModule } from './navbar.module'

import { NavbarDefaultComponent } from './examples/default/default.component'
import { NavbarNavInCenterComponent } from './examples/nav-in-center/nav-in-center.component'
import { NavbarBrandInCenterComponent } from './examples/brand-in-center/brand-in-center.component'

import Default from './examples/default/README.md'
import NavInCenter from './examples/nav-in-center/README.md'
import BrandInCenter from './examples/brand-in-center/README.md'

storiesOf('Components/Navbar', module)
  .add('Default', () => (
    Story(
      NavbarDefaultComponent,
      Default,
      {
        declarations: [],
        imports: [ENavbarModule]
      }
    )
  ))

storiesOf('Components/Navbar', module)
  .add('Nav in the Center', () => (
    Story(
      NavbarNavInCenterComponent,
      NavInCenter,
      {
        declarations: [],
        imports: [ENavbarModule]
      }
    )
  ))

storiesOf('Components/Navbar', module)
  .add('Brand in the Center', () => (
    Story(
      NavbarBrandInCenterComponent,
      BrandInCenter,
      {
        declarations: [],
        imports: [ENavbarModule]
      }
    )
  ))
