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
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faHouse)


createApp(App).use(router).use(createPinia()).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
