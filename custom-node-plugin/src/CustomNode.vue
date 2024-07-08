<template>
    <div class="custom-node">
      {{ node.data }}
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import type { NodeData } from 'plugin-dev-kit'
  
  export default defineComponent({
    name: 'CustomNode',
    props: {
      node: {
        type: Object as PropType<NodeData>,
        required: true
      }
    }
  })
  </script>