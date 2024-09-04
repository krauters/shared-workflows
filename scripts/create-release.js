async function createRelease({ github, context }) {
    console.info('Creating GitHub tag and release...')
    const version = process.env.VERSION
    const prefix = process.env.INPUT_PREFIX || ''
    const suffix = process.env.INPUT_SUFFIX || ''
    const releaseName = process.env.RELEASE_NAME
    const tagName = `${prefix}${version}${suffix}`
    const name = `${releaseName} ${tagName}`

    console.debug(`Creating release with tag [${tagName}] and name [${name}]...`)
    await github.rest.repos.createRelease({
        ...context.repo,
        tag_name: tagName,
        name,
        body: 'Automatically generated release notes',
        draft: false,
        prerelease: false,
        generate_release_notes: true,
    })
    console.info('GitHub tag and release created successfully.')
}

module.exports = createRelease
