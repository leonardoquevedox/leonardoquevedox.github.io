#!/usr/bin/env node

require('colors')
const shell = require('shelljs')
const path = require('path')

const rootPath = path.resolve(__dirname, '../../')
const { exec } = shell

const run = async () => {
  console.log(`☮   Github page: Generating commit...`.yellow)

  const commitMsg = 'Updates Github page version.'
  await exec('git add .', { cwd: rootPath })
  await exec(`git commit -m '${commitMsg}'`, { cwd: rootPath })
  await exec(`git subtree push --prefix public origin gh-pages`, { cwd: rootPath })
  await exec(`git push origin master`, { cwd: rootPath })
  await exec(`git push origin gh-pages`, { cwd: rootPath })
  process.exit()
}

run()
