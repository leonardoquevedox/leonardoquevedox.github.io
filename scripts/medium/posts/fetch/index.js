#!/usr/bin/env node

require('colors')
const axios = require('axios')
const shell = require('shelljs')
const path = require('path')
const fs = require('fs-extra')

const { exec } = shell
const rootPath = path.resolve(__dirname, '../../../../')
const postsJsonPath = path.join(rootPath, 'src', 'config', 'posts.js')

const getPostsFileContent = posts => {
  const stringified = JSON.stringify(posts, null, 4)
  return `export default ${stringified}`
}

const run = async () => {
  try {
    console.log(`☮   Github page: Fetching Medium posts...`.yellow)
    console.log(rootPath)
    const mediumRssFeed = 'https://medium.com/feed/@leonardoquevedo'
    const rssToJsonApi = 'https://api.rss2json.com/v1/api.json'
    const response = await axios.get(rssToJsonApi, { params: { rss_url: mediumRssFeed } })
    if (response) {
      const posts = response.data
      await fs.writeFileSync(postsJsonPath, getPostsFileContent(posts))
      await exec(`npx prettier --write ${postsJsonPath}`)
    }
  } catch (e) {
    console.log(e)
  } finally {
    process.exit()
  }
}

run()
