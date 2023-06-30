
import { presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import { VitePluginConfig } from '@unocss/vite';

const unoCSSConfig: VitePluginConfig = {
  presets: [
    presetIcons(),
    presetUno({ dark: "media" })
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|stories.ts)($|\?)/,
        'src/**/*.{js,ts}',
        '**/*.{jpg,jpeg,png,gif,svg}',
      ],
    }
  }
}

export default unoCSSConfig;