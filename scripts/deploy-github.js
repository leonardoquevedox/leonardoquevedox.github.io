const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/leopq/leopq.github.io.git',
  },
  () => {
    console.log('Website deployed successfully!')
  }
)
