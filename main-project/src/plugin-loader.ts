import { usePluginStore } from './store/pluginStore'

export async function initializePlugins() {
  const pluginStore = usePluginStore()
  await pluginStore.handleFetchPlugin()
}