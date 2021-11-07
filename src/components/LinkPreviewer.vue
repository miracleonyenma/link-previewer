<template>
  <div class="inline relative">
    <!-- display targetURL link -->
    <a class="link underline text-blue-600" :href="targetURL" :target="previewData ? previewData.title : '_blank'"> {{targetURL}} </a>
    <!-- display preview data if object exists -->
    <div v-if="previewData" class="result-preview absolute top-8 left-0 w-72 transform translate-y-4 opacity-0 invisible transition bg-white overflow-hidden rounded-md shadow-lg z-10">
      <!-- display image using the base64 screenshot data -->
      <img v-if="previewData.screenshot" :src="`data:image/jpeg;base64,${previewData.screenshot}`" :alt="previewData.description">
      <!-- display title and description -->
      <div class="details p-4 text-left">
        <h1 class=" font-extrabold text-xl"> {{previewData.title}} </h1>
        <p> {{previewData.description}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from '@vue/runtime-core'
  export default {
    // define targetURL as a prop
    props: ['targetURL'],
    setup(props) {
      // create a reactive previewData object using ref
      const previewData = ref({})

      // function to send a POST request containing the targetURL to the serverless function
      const generatePreview = async () => {
        try {
          const res = await fetch('/.netlify/functions/generate-preview', {
            method: 'POST',
            body: JSON.stringify({
              targetURL : props.targetURL
            })
          })

          const data = await res.json()
          return data
        } catch (err) {

          console.log(err);
          return null
        }
      }

      // run function before component is mounted
      onBeforeMount(async ()=>{
        // run generatePreview() to get the preview data and assign to previewData
        previewData.value = await generatePreview()

        // use object destructuring to get the different descriptions from the preview data
        const {desc, og, twitter} = previewData.value.descriptions

        // assign only one valid value to the description property in the previewData object
        previewData.value.description = (desc || og || twitter || "")
      })

      // make the following entities available to the component
      return { generatePreview, previewData}
    }
  }
</script>

<style scoped>
  .link:hover ~ .result-preview{
    @apply visible opacity-100 translate-y-0;
  }
</style>