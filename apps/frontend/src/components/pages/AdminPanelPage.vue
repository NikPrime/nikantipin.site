<template>
<div>
  <div class="LogOut">
    <router-link to="/admin" custom v-slot="{ href, navigate }">
      <a :href="href" @click="logOut(navigate, $event)">Log out</a>
    </router-link>
  </div>
  <div class="titles">
    <textarea class="headerPlaceholder" v-model="articleHeader" placeholder="Article header"></textarea>
    <textarea v-model="articleImageUrl" placeholder="Article image url"></textarea>
  </div>
  <div class="articleType">
    <select v-model="selected" name="articleType">
      <option value="blog">Блог</option>
      <option value="algorithm">Алгоритм</option>
    </select>
  </div>
  <quill-editor
      class="quillEditor"
      v-model:value="editorContent"
  />
  <button
      class="submit-button"
      @click="onSubmit">
    Submit
  </button>

</div>
</template>

<script>
import { AdminApi } from "@/api/api";
import { quillEditor } from "vue3-quill"

export default {
  name: "AdminPanelPage",
  components: {
    quillEditor
  },

  data() {
    return {
      articleHeader: "",
      articleImageUrl: "",
      articleType: "",
      editorContent: "",
      selected: "blog"
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("x-access-token");
      this.$router.push("/admin/panel");
    },
    onSubmit() {
      AdminApi.saveArticle({
            imageUrl: this.articleImageUrl,
            header: this.articleHeader,
            article: this.editorContent,
            type: this.selected
          }
      ).then(() => {
        alert("data was successfully saved")
      })
    },
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.quillEditor {
  height: 550px;
  background-color: #FFFFFF;
}

.headerPlaceholder {
  margin-right: 30px;
}

.articleType {
  margin-top: 10px;
}
</style>