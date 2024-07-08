<!-- src/components/PluginList.vue -->
<template>
  <div class="plugin-list">
    <h3>Loaded Plugins:</h3>
    <ul>
      <li v-for="plugin in plugins" :key="plugin.name">
        <div>
          {{ plugin.name }}
        </div>
        <component :is="plugin.component" :node="{
          data: plugin.name
        }" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { usePluginStore } from '../store/pluginStore'
import { storeToRefs } from 'pinia';

const { plugins } = storeToRefs(usePluginStore())

</script>