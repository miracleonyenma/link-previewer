<template>
  <main class="home">
    <header>
      <h1>Welcome to the link previewer app!</h1>
      <p>Here are some links that you can preview by hovering on them</p>
    </header>
    <ul class=" mb-4">
      <!-- render LinkPreviewer component for each demolink -->
      <li v-for="link in demoLinks" :key="link">
        <link-previewer :targetURL="link" />
      </li>
    </ul>
    <!-- input field to add new links -->
    <input class=" p-2 ring ring-blue-600 rounded-lg shadow-md" type="url" @keyup.enter="addLink" required placeholder="enter valid url">
  </main>
</template>

<script>
import { ref } from '@vue/reactivity'
import LinkPreviewer from '../components/LinkPreviewer.vue'

export default{
  components: { LinkPreviewer },
  setup(){
    const demoLinks = ref([
      'http://localhost:5000',
      'https://google.com',
      'https://miracleio.me',
      'https://miguelpiedrafita.com/'
    ])

    // function to add new links to the demoLinks array
    const addLink = ({target}) => {
      demoLinks.value.push(target.value)
      target.value = ""
    }

    return {demoLinks, addLink}
  }
}

</script>
