async function createTag({ github, context }) {
	console.info('Creating GitHub tag...')
	const version = process.env.VERSION
	const prefix = process.env.INPUT_PREFIX || ''
	const suffix = process.env.INPUT_SUFFIX || ''
	const tagName = `${prefix}${version}${suffix}`

	console.debug(`Creating tag [${tagName}]...`)
	await github.rest.git.createRef({
		...context.repo,
		ref: `refs/tags/${tagName}`,
		sha: context.sha,
	})
	console.info('GitHub tag created successfully')
}

module.exports = createTag
