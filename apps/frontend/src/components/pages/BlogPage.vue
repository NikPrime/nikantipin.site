<template>
  <div>
    <Navbar/>
    <div class="recentArticles">
      <p>Недавние статьи</p>
      <div class="recentArticlesList">
        <RecentArticleBanner v-for="(article, index) in recentArticles" :key="index" :header="article.header"
                       :date="article.date"
                       :time="article.time" :imageUrl="article.imageUrl" :shortId="article.id"/>
      </div>
    </div>
    <div class="articles">
      <p>Все статьи</p>
      <div class="ArticlesList">
        <ArticleBanner v-for="(article, index) in articles" :key="index" :header="article.header" :date="article.date"
                 :time="article.time" :imageUrl="article.imageUrl" :shortId="article.id"/>
      </div>
    </div>
    <InfiniteLoading :articles="articles" @infinite="load" />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import moment from "moment";
import RecentArticleBanner from "@/components/RecentArticleBanner";
import ArticleBanner from "@/components/ArticleBanner";
import { BaseApi } from "@/api/api";

export default {
  name: "BlogPage",
  components: {
    Navbar,
    RecentArticleBanner,
    ArticleBanner,
  },
  data() {
    return {
      recentArticles:[],
      articles: [],
      mainArticle:[],
      page: 1,
      limit: 5,
    }
  },
  beforeMount() {
    this.getRecentArticles();
  },
  methods: {
    load(state) {
      console.log(state)
      this.getArticles(this.page, this.limit);
      ++this.page;
      state.loaded();
    },

    async getRecentArticles() {
      const t = this;
      BaseApi.getArticles({type: "blog", limit: 3}).then((res) => {
        const items = res.data?.items;

        t.recentArticles = items.map(elem => {
          return {
            date: moment(elem.createdAt).format("DD.MM.YYYY"),
            time: moment(elem.createdAt).format("HH:mm"),
            header: elem.header,
            imageUrl: elem.imageUrl,
            id: elem.id,
          }
        });
      }).catch((err) => console.log(err));
    },

    async getArticle(id) {
      return BaseApi.getArticle(id);
    },

    async getArticles(page, limit) {
      const t = this;
      BaseApi.getArticles({type: "blog", page, limit}).then((res) => {
        const items = res.data?.items;

       items.map((elem, index) => {
         if (!(page === 1 && [0, 1, 2].includes(index)))
         t.articles.push({
           date: moment(elem.createdAt).format("DD.MM.YYYY"),
           time: moment(elem.createdAt).format("HH:mm"),
           header: elem.header,
           imageUrl: elem.imageUrl,
           id: elem.id,
         })
        });
      }).catch((err) => console.log(err));
    }
  }
}
</script>

<style scoped>

.recentArticlesList {
  display: flex;
  justify-content: center;
  align-items: center;
}

.articles {
  margin-top: 65px;
}

.ArticlesList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

p {
  font-size: 30px;
  font-family: "TT Norms Std Condensed";
  margin-bottom: 10px;
}

@media (max-width: 975px) {
  .recentArticlesList {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 300px;
  }
}
</style>