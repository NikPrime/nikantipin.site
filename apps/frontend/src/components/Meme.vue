<template>
  <img class="memeImage" v-lazy="{ src: url, loading: loader, error: loader }" >
</template>

<script>
import * as loader from "../assets/loader.gif"
export default {
  name: "Meme",
  props: ["url"],
  data() {
    return {
      loader: loader
    }
  },
}
</script>

<style scoped>
.memeImage {
  max-width: 600px;
  max-height: 600px;
  object-fit: contain;
}
</style>