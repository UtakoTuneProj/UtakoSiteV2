import moment from 'moment';
import 'moment/locale/ja';
import { vuetifyConfig } from '@/nuxt.config';

moment.locale('ja');

import Vue from 'vue';
import Vuetify, {VApp} from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import { addDecorator } from '@storybook/vue';

Vue.use(Vuetify, vuetifyConfig);
Vue.component('v-app', VApp);

addDecorator(() => ({
  // vuetify,
  template: `<v-app><story/></v-app>`,
  vuetify: new Vuetify(vuetifyConfig),
}));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
