/* Set up using Vue 3 */
import { createApp } from 'vue';
import App from './App.vue';

/* import global style */
import './style.css';

/* import router component */
import router from '@/router';

/* import store component */
import { createPinia } from 'pinia';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faUser,
  faUserSecret,
  faHouse,
  faDashboard,
  faDownload,
  faUpload,
  faFileArrowDown,
  faEllipsisVertical,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faGithub, faRocketchat } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
  faUser,
  faUserSecret,
  faTwitter,
  faHouse,
  faGithub,
  faDashboard,
  faDownload,
  faUpload,
  faFileArrowDown,
  faEllipsisVertical,
  faRightFromBracket,
  faRocketchat);

/* import element-plus */
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App)
  .use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(ElementPlus)
  .mount('#app');
