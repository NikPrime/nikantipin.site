import { createApp } from "vue";
import App from "./components/App";

import router from "./router/index";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies"
// import "@ocrv/vue-tailwind-pagination/dist/style.css";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import VueLazyLoad from "vue3-lazyload"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import * as loader from "../src/assets/loader.gif"
import * as defaultImage from "../src/assets/default_image.png"
library.add(fas, fab);

axios.defaults.withCredentials = true;

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("InfiniteLoading", InfiniteLoading)
    .use(router)
    .use(VueAxios, axios)
    .use(VueCookies)
    .use(VueLazyLoad, {
        loading: loader,
        error: defaultImage,
    })
    .mount("#app")
