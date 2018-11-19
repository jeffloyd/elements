<template>
  <div class="">
    <div class="demo-tabs">
      <div class="container">
        <div class="px-sm-3">
          <ul class="nav nav-tabs flex-nowrap">
            <li class="nav-item position-relative">
              <router-link to="/pages" class="nav-link px-2 px-sm-3 pr-3 py-1 py-sm-2">
                <span class="pr-2">Pages</span>
              </router-link>
              <b-dropdown class="demo-tabs-dropdown" text="" variant="link" toggleClass="my-1 my-sm-2 p-0 px-1 border-0">
                <b-dropdown-header>Pages List:</b-dropdown-header>
                <b-dropdown-item to="/pages/overview">Overview</b-dropdown-item>
                <b-dropdown-item to="/pages/users">Users</b-dropdown-item>
                <b-dropdown-item to="/pages/settings">Profile</b-dropdown-item>
              </b-dropdown>
            </li>
            <li class="nav-item">
              <router-link to="/elements" class="nav-link px-2 px-sm-3 py-1 py-sm-2">Components</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/bootstrap" class="nav-link px-2 px-sm-3 py-1 py-sm-2">Bootstrap</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {}
    },
    mounted: function() {
      if (window == top) {
        document.body.setAttribute('style', '')
      }
    }
  }
</script>

<style lang="css">
  .e-content {
    min-height: 100vh;
  }
  .demo-tabs {
    background: #fff;
    border-bottom: 1px solid #e9ecef;
    padding-top: 15px;
  }
  .demo-tabs .nav-tabs {
    margin-bottom: -1px;
  }
  .demo-tabs .nav-item:not(:last-child) {
    margin-right: 5px;
  }
  .demo-tabs .nav-tabs .nav-link.active,
  .demo-tabs .nav-tabs .nav-item.show .nav-link {
    background-color: #f2f5f7;
    border-bottom-color: #f2f5f7;
  }

  .demo-tabs-dropdown {
    position: absolute !important;
    top: 0;
    right: 5px;
    bottom: 0;
  }

  .demo-tabs-dropdown .dropdown-toggle {
    border-radius: 3px;
    color: inherit;
  }

  .demo-tabs-dropdown.show .dropdown-toggle,
  .demo-tabs-dropdown .dropdown-toggle:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .demo-tabs-dropdown .dropdown-toggle:after {
    margin: 0 0.1em;
    vertical-align: 0.18em;
  }

  .demo-tabs-dropdown .dropdown-menu {
    margin-top: 2px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .demo-tabs-dropdown .dropdown-item:focus:not(.active):not(:active):not(:hover) {
    background-color: transparent;
  }
</style>
