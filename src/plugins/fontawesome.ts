import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';

import Icon from '@/components/Icon.vue';

Vue.component('vb-icon', Icon);
Vue.component('fa-icon', FontAwesomeIcon);

library.add(far, fas, fal, fad);
