<template>
  <div class="e-profile">
    <div class="row">
      <div class="col-12 col-sm-auto mb-3">
        <div class="mx-auto" style="width: 140px;">
          <div class="d-flex justify-content-center align-items-center rounded" :style="{ height: '140px', backgroundColor: '#e9ecef' }">
            <span :style="{ color: '#a6a8aa', font: 'bold 8pt Arial' }">140x140</span>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
        <div class="text-center text-sm-left mb-2 mb-sm-0">
          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{ user.name }}</h4>
          <p class="mb-0">@{{ user.username }}</p>
          <div class="text-muted">
            <small>Last seen 2 hours ago</small>
          </div>
          <div class="mt-2">
            <button class="btn btn-primary" type="button">
              <i class="fa fa-fw fa-camera"></i>
              <span>Change Photo</span>
            </button>
          </div>
        </div>
        <div class="text-center text-sm-right">
          <span class="badge badge-secondary">administrator</span>
          <div class="text-muted">
            <small>Joined {{ user.date | moment('DD MMM YYYY') }}</small>
          </div>
        </div>
      </div>
    </div>
    <b-tabs no-fade>
      <b-tab title="Settings" class="pt-3" active>
        <profile-settings-form :user="user"></profile-settings-form>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import ProfileSettingsForm from './ProfileSettingsForm'

  export default {
    components: { ProfileSettingsForm },
    props: {
      user: {
        type: Object
      }
    },
    data: function() {
      return {}
    }
  }
</script>

<style lang="scss"></style>
