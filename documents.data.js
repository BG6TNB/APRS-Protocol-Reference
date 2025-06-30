import { createContentLoader } from 'vitepress'

export default createContentLoader('documents/**/*.md', {
    transform(rawData) {
        return rawData
    }
})
