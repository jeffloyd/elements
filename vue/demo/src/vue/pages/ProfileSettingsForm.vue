<template>
  <form
    class="form"
    @submit.prevent
    novalidate>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Full Name</label>
              <input class="form-control" type="text"
                name="name"
                v-model="data.name"
                :placeholder="user.name || 'Name'">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label>Username</label>
              <input class="form-control" type="text"
                name="username"
                v-model="data.username"
                :placeholder="user.username || 'Username'">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="text" placeholder="user@example.com">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <div class="form-group">
              <label>About</label>
              <textarea class="form-control" rows="5" placeholder="My Bio"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 mb-3">
        <div class="mb-2">
          <b v-text="(isNew ? 'Account ' : 'Change ') + 'Password'"></b>
        </div>
        <div class="row" v-if="!isNew">
          <div class="col">
            <div class="form-group">
              <label>Current Password</label>
              <input class="form-control" type="password" placeholder="••••••">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label v-text="(isNew ? '' : 'New ') + 'Password'"></label>
              <input class="form-control" type="password" placeholder="••••••">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label>Confirm <span class="d-none d-xl-inline">Password</span></label>
              <input class="form-control" type="password" placeholder="••••••">
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-5 offset-sm-1 mb-3">
        <div class="mb-2">
          <b>Keeping in Touch</b>
        </div>
        <div class="row">
          <div class="col">
            <label>Email Notifications</label>
            <div class="custom-controls-stacked px-2">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked="checked" id="notifications-blog">
                <label class="custom-control-label" for="notifications-blog">Blog posts</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked="checked" id="notifications-news">
                <label class="custom-control-label" for="notifications-news">Newsletter</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked="checked" id="notifications-offers">
                <label class="custom-control-label" for="notifications-offers">Personal Offers</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-end">
        <button class="btn btn-primary" type="submit">Save Changes</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        default: function() {
          return {
            name: '',
            username: '',
            date: 1
          }
        },
        validator: function(user) {
          var valid = typeof user.name === 'string' &&
                typeof user.username === 'string' &&
                typeof user.date === 'number';

          return valid
        }
      },
      isNew: {
        type: Boolean,
        default: false
      }
    },
    data: function() {
      return {
        data: Object.assign({}, this.user)
      }
    }
  }
</script>
