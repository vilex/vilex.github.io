const { writeFileSync } = require('fs')
const { resolve } = require('path')
const { Octokit } = require('@octokit/core')
const { token } = require('./token.local')
const octokit = new Octokit( { auth: token } )


const repos = [
    {
        url: `/repos/vilex/vilex.github.io/contributors`,
        onwer: `vilex`,
        repo: `vilex.github.io`
    },
    {
        url: `/repos/vilex/vilex/contributors`,
        onwer: `vilex`,
        repo: `vilex`
    }
]

const output = []

async function start() {

    if (repos.length) {
        const repo = repos.shift()
        const res = await octokit.request(`GET ${repo.url}`, {
            owner: repo.onwer,
            repo: repo.repo
        })
        if (res && res.status === 200) {
            if (Array.isArray(res.data)) {
                output.push(...res.data)  
            }
        }
        
        start()

    } else {
        let fileString = `export const contributors = [
            {
                repo: '贡献人员',
                list: ${JSON.stringify(output,null, 2)}
            }
        ]`
        writeFileSync(resolve('src/static_data/contributors.ts'), fileString)
        console.log('completed.')
    } 
    
}

start()