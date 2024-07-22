const { readFileSync, appendFileSync } = require('fs')

function getVersionFromPackageJson() {
    console.info('Reading version from package.json...')
    const { version } = JSON.parse(readFileSync('./source/package.json', 'utf8'))
    console.debug(`Found version [${version}]`)
    appendFileSync(process.env.GITHUB_ENV, `VERSION=${version}\n`)
    console.info('Version has been set in the environment.')
}

getVersionFromPackageJson()
