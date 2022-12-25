<template>
  <a class="bannerArticle" :href="`/#/article/${shortId}`">
    <img class="bannerImage" v-lazy="{ src: imageUrl, loading: defaultImage, error: defaultImage }" />
        <div class="bannerSecondPart">
          <div class="bannerTimeDate">{{ date }} | {{ time }}</div>
          <div class="bannerHeader">{{ header }}</div>
        </div>
  </a>
</template>

<script>
import * as defaultImage from "../assets/default_image.png";

export default {
  name: "RecentArticleBanner",
  props: ["header", "date", "time", "imageUrl", "shortId"],
  data() {
    return {
      defaultImage
    }
  }
}
</script>

<style scoped>

.bannerArticle {
  display: flex;
  flex-direction: column;
  font-family: "TT Norms Std Condensed";
  font-size: 18px;
  text-decoration: none;
  max-width: 300px;
  height: 280px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
}

.bannerArticle:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
}

.bannerImage {
  width: 300px;
  height: 200px;
}

.bannerSecondPart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding-left: 5px;
}

.bannerTimeDate {
  font-size: 15px;
  flex-grow: 1;
  color: #343434;
}

.bannerHeader {
  flex-grow: 2;
  min-font-size: 30px;
  color: #343434;
  font-weight: bold;
}

</style>