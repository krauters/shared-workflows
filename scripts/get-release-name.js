const { appendFileSync } = require('fs')
// const fetch = require('node-fetch')

async function getReleaseName() {
    console.info('Getting release name...');
    const apiUrl = 'https://testapi.devtoolsdaily.com/users';
    const response = await fetch(apiUrl);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const releaseName = Math.random() < 0.5 ? data[randomIndex].firstName : data[randomIndex].lastName;
    console.debug(`Generated release name [${releaseName}]`);
    appendFileSync(process.env.GITHUB_ENV, `RELEASE_NAME=${releaseName}\n`);
    console.info('Release name has been set in the environment.');
}

getReleaseName().catch(err => {
    console.error(err);
    process.exit(1);
});

module.exports = getReleaseName;
