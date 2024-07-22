const { appendFileSync } = require('fs')

async function checkIfTagExists({ github, context }) {
    console.info(`Checking if tag exists for [${context.repo.repo}]...`)
    const { data: tags } = await github.rest.repos.listTags(context.repo)
    const version = process.env.VERSION
    const tagExists = tags.some(tag => tag.name === version)
    console.debug(`Tag for version [${version}] exists [${tagExists}]`)
    appendFileSync(process.env.GITHUB_ENV, `TAG_EXISTS=${tagExists}\n`)
    console.info('Tag existence has been set in the environment.')
}

module.exports = checkIfTagExists
