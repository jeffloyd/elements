<template>
  <div class="container">
    <div class="e-content">
      <div class="row">
        <div class="col">
          <e-navbar></e-navbar>
        </div>
      </div>
      <div class="row flex-lg-nowrap">
        <e-sidebar class="d-none d-lg-block">
          <template slot="default">
            <slot name="sidebar"></slot>
          </template>
          <template slot="nested">
            <slot name="sidebar-addon"></slot>
          </template>
        </e-sidebar>
        <div class="col">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ENavbar from '../include/Navbar'
  import ESidebar from '../include/Sidebar'

  export default {
    components: { ENavbar, ESidebar },
    data: function() {
      return {}
    }
  }
</script>

<style lang="scss"></style>
