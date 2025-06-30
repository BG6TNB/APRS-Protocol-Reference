import fs from 'fs'

// read menu.md file
const menuMD = fs.readFileSync('generator/menu.md', 'utf-8')





// convert md to list
const regexTitle = /(\#\#\s\d+\s)|((\#\#\s))/img
const regexMD = /\-\s/img
const regexOrder = /\s\d+\s/img
const regexCharacterNeedDelete = /[\?\,\(\)\.\-\:]/img
const regexCharacterNeedConvert = /[\/\ ]/img
let series = 0
let order = 1
let seriesName = ''
const menuList = menuMD.split('\n').map(item => {
    const title = item.replace(regexTitle, '').replace(regexMD, '').trim()
    const fileName = title.toLocaleLowerCase().replace(regexCharacterNeedDelete, '').replace(regexCharacterNeedConvert, '-')

    if (item.indexOf('## ') > -1) {
        series = item.split(' ')[1]
        order = 1
        seriesName = item.replace(regexTitle, '').toLocaleLowerCase().replace(regexCharacterNeedDelete, '').replace(regexCharacterNeedConvert, '-')
        return {
            raw: item,
            type: 'dir',
            series,
            order: 0,
            title,
            fileName,
            path: 'test/' + seriesName
        }
    }

    return {
        raw: item,
        type: 'md',
        series,
        order: order++,
        title,
        fileName: fileName + '.md',
        path: `test/${seriesName}/${fileName}.md`
    }
})
fs.writeFileSync('menuList.json', JSON.stringify(menuList))





const createTemplate = (series, order, title) => `---
order: ${series}.${order}
title: ${title}
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

coming soon...`
try {
    fs.mkdirSync('test')
} catch (err) {
    if (err.code !== 'EEXIST') { throw err }
}
menuList.forEach(item => {
    if (item.type === 'dir') {
        try {
            fs.mkdirSync(item.path)
        } catch (err) {
            if (err.code !== 'EEXIST') { throw err }
        }
        return void 0
    }
    fs.writeFileSync(item.path, createTemplate(item.series, item.order, item.title))
})





// Creating a test.sidebar.config.json based on a List
const sidebarJson = menuList.reduce((a, b) => {
    if (b.type === 'dir') {
        seriesName = b.title
        a[seriesName] = {
            text: b.title,
            collapsed: true,
            items: []
        }
        return a
    }
    a[seriesName].items.push({
        text: b.title,
        link: ('/' + b.path).replace('.md', '')
    })
    return a
}, {})
fs.writeFileSync('.vitepress/test.sidebar.config.json', JSON.stringify(Object.values(sidebarJson)))
