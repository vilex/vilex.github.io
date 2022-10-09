const { writeFileSync } = require('fs')
const { resolve } = require('path')
const { Octokit } = require('@octokit/core')
const { token } = require('./ token.local')
const octokit = new Octokit( { auth: token } )




async function start() {
    const response = await octokit.request(`GET /repos/vilex/vilex.github.io/contributors`, {
        owner: 'vilex',
        repo: 'vilex.github.io'
    })
    
    if (response && response.status === 200) {
        if (Array.isArray(response.data)) {
            let fileString = `export const contributors = [
                {
                    repo: 'vilex.github.io',
                    list: ${JSON.stringify(response.data,null, 2)}
                }
            ]`
            
            writeFileSync(resolve('src/static_data/contributors.ts'), fileString)
        }
    }
    
    console.log('completed.')
}




start()