import { defineStore } from 'pinia'
import { Component, defineAsyncComponent, ref } from 'vue'

import type { NodePlugin, PluginManifest } from '../types/plugin'

export interface PluginInfo {
    name: string;
    component: Component;
}
export const usePluginStore = defineStore('pluginStore', () => {


    async function handleFetchPlugin() {
        const response = await fetch('/plugins/manifest.json')
        const manifest: PluginManifest = await response.json()
        console.log(manifest)

        const pluginsPromise = manifest.plugins.map(async ({ folder, fileName }) => {
            const plugin = await import(`/public/plugins/${folder}/${fileName}.es.js`)
            return {
                name: fileName,
                component: plugin.default as NodePlugin
            }
        })
        plugins.value = await Promise.all(pluginsPromise)
        console.log(plugins.value)
        // for (const { folder, fileName } of manifest.plugins) {
        //     plugins.value.push({
        //         name: fileName,
        //         component: defineAsyncComponent(() => 
        //             import(`/plugins/customNodePlugin/${fileName}.es.js`) as Promise<Component>
        //         )
        //     })
        // }
    }

    const plugins = ref<PluginInfo[]>([])

    return {
        plugins,
        handleFetchPlugin,
    }
})