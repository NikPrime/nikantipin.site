<template>
  <div>
    <Navbar/>
    <div class="meme">
      <Meme :url="meme" :key="meme"/>
    </div>
    <VueTailwindPagination class="pagination"
                           style="width: 100%; height: 30px"
                           :current="currentPage"
                           :total="total"
                           :per-page="limit"
                           @page-changed="onPageClick($event)"
                           text-before-input="Страница"
                           text-after-input="Перейти"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { BaseApi } from "@/api/api";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import Meme from "@/components/Meme";

export default {
  name: "MemesPage",
  components: {
    Navbar,
    VueTailwindPagination,
    Meme,
  },
  data() {
    return {
      currentPage: 1,
      page: 1,
      limit: 1,
      total: 20,
      meme: {},
    }
  },
  beforeMount() {
    this.getMeme(1, this.limit);
  },
  methods: {
    onPageClick(page) {
      this.currentPage = page;
      this.getMeme(page, this.limit);
    },
    getMeme(page, limit) {
      const t = this;

      BaseApi.getMemes({ page, limit }).then((res) => {
        const item = res.data?.items[0];
        const meta = res.data?.meta;
        t.currentPage = meta.page;
        t.total = meta.total;
        t.limit = limit;
        t.meme = item.url;

      }).catch((err) => console.log(err));
    },
  }
}
</script>

<style scoped>

.meme {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  max-height: 600px;
  margin-top: 6%;
  margin-bottom: 6%;
}

.pagination {
  position: fixed;
  bottom: 30px;
  width: 100%;
  padding-left: 2px;
  padding-right: 2px;
}
</style>