import { defineConfig } from 'vitepress'

import navConfig from './nav.config.json'
import navZhConfig from './nav.zh.config.json'
import documentsSidebarConfig from './documents.sidebar.config.json'
import documentsZhSidebarConfig from './documents.zh.sidebar.config.json'

import markdownItMultimdTable from 'markdown-it-multimd-table'

export default defineConfig({

    title: 'APRS Protocol Reference',
    description: 'Modernized document based on APRS101.PDF',

    base: '/APRS-Protocol-Reference/',

    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/',
            themeConfig: {
                nav: navConfig,
                sidebar: {
                    '/documents/': documentsSidebarConfig
                }
            }
        },
        zh: {
            label: '中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                nav: navZhConfig,
                sidebar: {
                    '/zh/documents/': documentsZhSidebarConfig
                }
            }
        }
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/BG6TNB/APRS-Protocol-Reference' }
        ]
    },

    markdown: {
        config(md) {
            md.use(markdownItMultimdTable)
        }
    },

    sitemap: {
        hostname: 'https://bg6tnb.github.io/APRS-Protocol-Reference/'
    }

})
