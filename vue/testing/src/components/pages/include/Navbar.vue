<template>
  <e-navbar class="my-3 px-lg-4" :title="'Dashboard'">
    <div slot="brand">
      <router-link to="/pages/overview" class="e-logo mx-4">
        <span>Elements <small>stay simple</small></span>
      </router-link>
    </div>

    <div slot="collapse">
      <ul class="navbar-nav pt-3 pt-md-0">
        <li class="nav-item">
          <router-link to="/pages/overview" class="nav-link">Overview</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pages/users" class="nav-link">CRUD</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pages/settings" class="nav-link">Settings</router-link>
        </li>
      </ul>
    </div>

    <div slot="actions">
      <router-link to="/pages/settings" class="btn btn-success d-md-none">
        <i class="fa fa-user-circle"></i>
      </router-link>
      <div class="btn-group d-none d-md-block">
        <a href="#" class="btn btn-success" @click.prevent>
          <i class="fa fa-bell"></i>
        </a>
        <router-link to="/pages/settings" class="btn btn-success">
          <span class="mx-1">John Smith</span>
        </router-link>
      </div>
    </div>
  </e-navbar>
</template>

<script>
  import ENavbar from 'elements/navbar'

  export default {
    components: { ENavbar }
  }
</script>

<style lang="scss"></style>
