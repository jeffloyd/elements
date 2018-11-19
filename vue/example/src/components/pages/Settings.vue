<template>
  <layout-default>
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <e-profile :user="user"></e-profile>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 mb-3">
        <div class="card mb-3">
          <div class="card-body">
            <div class="px-xl-3">
              <router-link to="pages/login" class="btn btn-block btn-secondary">
                <i class="fa fa-sign-out"></i>
                <span>Logout</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h6 class="card-title font-weight-bold">Support</h6>
            <p class="card-text">Get fast, free help from our friendly assistants.</p>
            <button type="button" class="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
  import LayoutDefault from './layouts/default'
  import EProfile from './Profile'

  import EPanel from 'elements/panel'

  import Moment from 'moment'

  export default {
    components: {
      LayoutDefault,
      EProfile,
      EPanel
    },
    data: function() {
      return {
        user: {
          name: 'John Smith',
          username: 'smithy',
          date: Moment().subtract(4, 'month').unix()
        }
      }
    },
    mounted: function() {
      const parent = window.parent;
      if (parent.setDemoFrameHeight) {
        parent.setDemoFrameHeight();
      }
    }
  }
</script>

<style lang="scss"></style>
