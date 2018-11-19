<template>
  <div class="e-content">
    <iframe
      id="k-sink"
      class="border-0 w-100 align-top"
      title="Bootstrap 4 Kitchen Sink"
      src="../../../k-sink.html"
      ref="iframe"
      @load="setIFrameHeight"
      :style="{ minHeight: '101vh', overflow: 'hidden' }" />
  </div>
</template>

<script>
  export default {
    data: function() {
      return {}
    },
    created: function() {
      window.parent.addEventListener('resize', this.setIFrameHeight)
    },
    methods: {
      setIFrameHeight: function() {
        const iframe = this.$refs.iframe
        const parent = window.parent
        if (iframe) {
          iframe.height = ""
          const doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document
          const height = Math.max( doc.body.scrollHeight, doc.body.offsetHeight, doc.documentElement.clientHeight, doc.documentElement.scrollHeight, doc.documentElement.offsetHeight )
          iframe.height = height + "px"
          if (parent.setDemoFrameHeight) {
            parent.setDemoFrameHeight()
          }
        }
      }
    },
    beforeDestroy: function() {
      window.parent.removeEventListener('resize', this.setIFrameHeight)
    }
  }
</script>
