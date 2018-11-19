<template>
  <div class="e-sidebar col-12 col-lg-auto mb-3">
    <slot>
      <div class="card p-3">
        <e-navlist active-bg>
          <ul class="nav">
            <li class="nav-item">
              <router-link to="/pages/overview" class="nav-link px-2">
                <i class="fa fa-fw fa-bar-chart mr-1"></i>
                <span>Overview</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pages/users" class="nav-link px-2">
                <i class="fa fa-fw fa-clone mr-1"></i>
                <span>CRUD</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pages/settings" class="nav-link px-2">
                <i class="fa fa-fw fa-cog mr-1"></i>
                <span>Settings</span>
              </router-link>
            </li>
          </ul>
        </e-navlist>
      </div>
    </slot>
    <slot name="nested"></slot>
  </div>
</template>

<script>
  import ENavlist from 'elements/navlist'

  export default {
    components: { ENavlist }
  }
</script>

<style lang="scss">
  .e-sidebar {
    width: 200px;
  }
</style>
