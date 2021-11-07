<template>
  <div class="about">
    <h1>This is an about page</h1>
    <link-previewer :targetURL="'http://localhost:8888/'" />
  </div>
</template>

<script>
import LinkPreviewer from '../components/LinkPreviewer.vue'
export default {
  components: { LinkPreviewer },
  setup() {
    
  },
}
</script>
