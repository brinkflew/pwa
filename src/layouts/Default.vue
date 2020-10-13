<template>
  <div class="container">
    <h1>Default layout</h1>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Default'
});
</script>
