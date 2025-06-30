import { defineConfig } from 'vitepress'

import navConfig from './nav.config.json'
import documentsSidebarConfig from './documents.sidebar.config.json'

import markdownItMultimdTable from 'markdown-it-multimd-table'

export default defineConfig({

    title: 'APRS Protocol Reference',
    description: 'Modernized document based on APRS101.PDF',

    themeConfig: {
        nav: navConfig,
        sidebar: {
            '/documents/': documentsSidebarConfig
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/BG6TNB/APRS-Protocol-Reference' }
        ]
    },

    markdown: {
        config(md) {
            md.use(markdownItMultimdTable)
        }
    }

})
