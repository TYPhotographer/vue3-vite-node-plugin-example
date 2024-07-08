// src/types/plugin.d.ts
import { DefineComponent } from 'vue'

export interface NodeData {
  type: string;
  [key: string]: any;
}

export interface NodeProps {
  node: NodeData;
}

export type NodePlugin = DefineComponent<NodeProps>;

interface Plugin {
  folder: string;
  fileName: string;
}

export interface PluginManifest {
  plugins: Plugin[];
}