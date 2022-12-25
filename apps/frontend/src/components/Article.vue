<template>
  <div class="backArrow">
   <button @click="backButtonClick" class="backButton">
    <p> <i class="arrow left"></i> Назад</p>
   </button>
  </div>
  <div class="articleBlock">
    <div class="articleHeader">
      {{ header }}
    </div>
    <div class="articleText">
      <p class="insertedHtml" v-html="article"></p>
    </div>
  </div>
</template>

<script>
import {BaseApi} from "@/api/api";

export default {
  name: "Article",
  data() {
    return {
      header: "",
      article: "",
    }
  },
  beforeMount() {
    const t = this;
    BaseApi.getArticle(this.$route.params.shortId).then(res => {
      const response = res.data;

      t.header = response.header;
      t.article = response.article;
    })
  },
  methods: {
    backButtonClick() {
      return this.$router.back();
    }
  }
}
</script>

<style scoped>
.backArrow {
  font-size: 19px;
  font-family: "TT Norms Std Condensed";
  height: 50px;
  width: 800px;
  margin: 0 auto;
  text-align: left;
  padding-top: 10px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.backButton:hover {
  font-weight: bold;
}

.backButton:focus {
  outline:0;
}

.articleBlock {
  width: 800px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  background-color: #FFFFFF;
  border-radius: 15px;
  margin: 0 auto;
  font-family: "TT Norms Std Condensed";
  font-size: 22px;
  text-align: left;
  padding: 30px 5% 50px;
}

.articleHeader {
 font-family: "TT Norms Std Condensed";
  font-size: 50px;
  margin-bottom: 25px;
  padding-top: 50px;
}

.insertedHtml ::v-deep .ql-syntax {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
  font-size: 14px;
}

.insertedHtml ::v-deep ul {
  list-style: inside;
}

>>> .insertedHtml ol {
  list-style-type: inside;
  padding-left: 15px;
}

@media (max-width: 800px) {
  .articleBlock {
    width: 500px;
    font-size: 18px;
  }

  .backArrow {
    width: 500px;
  }
}

@media (max-width: 520px) {
  .articleBlock {
    width: 400px;
    font-size: 16px;
  }

  .backArrow {
    width: 400px;
  }
}
</style>