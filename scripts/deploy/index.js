#!/usr/bin/env node

require('colors')
const shell = require('shelljs')
const path = require('path')

const rootPath = path.resolve(__dirname, '../../')
const { exec } = shell

const run = async () => {
  const commitMsg = 'Updates Github page version.'
  await exec('npm run build')
  console.log(`☮   Github page: Generating commit...`.yellow)
  await exec('git add .', { cwd: rootPath })
  await exec(`git commit -m '${commitMsg}'`, { cwd: rootPath })
  await exec(`git push origin master -f`, { cwd: rootPath })
  process.exit()
}

run()
