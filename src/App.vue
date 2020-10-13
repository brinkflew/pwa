<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  computed: {
    layout() {
      return `layout-${this.$route.meta.layout || 'default'}`;
    }
  }
});
</script>
