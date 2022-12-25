<template>
  <a class="bannerArticle" :href="`/#/article/${shortId}`">
    <div>
      <img class="bannerImage" v-lazy="{ src: imageUrl, loading: defaultImage, error: defaultImage }" />
    </div>
    <div class="bannerSecondPart">
      <div class="bannerTimeDate">{{ handleData }} | {{ time }}</div>
      <div class="bannerHeader">{{ header }}</div>
    </div>
  </a>
</template>

<script>
import moment from "moment";
import * as defaultImage from "../assets/default_image.png";

export default {
  name: "ArticleBanner",
  props: ["header", "date", "time", "imageUrl", "shortId"],
  computed: {
    handleData() {
      return moment(this.date, "DD.MM.YYYY").format("DD MMMM YYYY");
    }
  },
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
  padding: 15px;
  font-family: "TT Norms Std Condensed";
  font-size: 23px;
  width: 800px;
  text-decoration: none;
  background-color: #FFFFFF;
  margin-bottom: 30px;
  border-radius: 7px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.bannerArticle:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
}

.bannerImage {
  width: 280px;
  height: 196px;
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
  font-family: "TT Norms Std Condensed";
}

.bannerHeader {
  flex-grow: 2;
  min-font-size: 30px;
  color: #343434;
  font-weight: bold;
}
@media (max-width: 900px) {
  .bannerArticle {
    width: 600px;
  }
}

@media (max-width: 625px) {
  .bannerArticle {
    width: 400px;
    font-size: 18px;
  }
  .bannerImage {
    width: 170px;
    height: 130px;
  }
}
</style>