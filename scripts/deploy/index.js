#!/usr/bin/env node

require('colors')
const shell = require('shelljs')
const path = require('path')

const rootPath = path.resolve(__dirname, '../../')
const { exec } = shell

const run = async () => {
  console.log(`☮   Github page: Generating commit...`.yellow)
  const commitMsg = 'Updates Github page version.'
  await exec(`cp ./CNAME ./public/CNAME`, { cwd: rootPath })
  await exec(`cp ./.gitconfig ./public/.gitconfig`, { cwd: rootPath })
  await exec('git add .', { cwd: rootPath })
  await exec(`git subtree split --prefix public -b gh-pages`, { cwd: rootPath })
  await exec(`git commit -m '${commitMsg}'`, { cwd: rootPath })
  await exec(`git push origin master -f`, { cwd: rootPath })
  await exec(`git push origin gh-pages -f`, { cwd: rootPath })
  process.exit()
}

run()
