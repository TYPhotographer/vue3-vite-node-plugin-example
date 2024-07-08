<script setup lang="ts">
import { onMounted } from 'vue';
import PluginList from './components/PluginList.vue';
import { initializePlugins } from './plugin-loader'

onMounted(async () => {
  await initializePlugins()
})
</script>

<template>
  <div>
    <PluginList />
  </div>
</template>
