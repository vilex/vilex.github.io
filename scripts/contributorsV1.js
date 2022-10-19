const { writeFileSync } = require('fs')
const { resolve } = require('path')
const { Octokit } = require('@octokit/core')
const { token } = require('./token.local')
const octokit = new Octokit( { auth: token } )
const axios = require('axios')



const ins = axios.create({
    headers: {
        cookie: '_octo=GH1.1.1339750895.1653801981; _device_id=14324c5d6f9509d9769b2bfbddd954df; color_mode=%7B%22color_mode%22%3A%22auto%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; preferred_color_mode=light; tz=Asia%2FShanghai; user_session=z9-wV50s0xMVTONfml4Ao6ocua7FWFNmGsve4PjNn3kufV6C; __Host-user_session_same_site=z9-wV50s0xMVTONfml4Ao6ocua7FWFNmGsve4PjNn3kufV6C; tz=Asia%2FShanghai; logged_in=yes; dotcom_user=vilex; has_recent_activity=1; _gh_sess=Q7pBk5i7psgZB0tirLX1dtwPit95SU%2FovRlocnIWBt1B0%2Fvt%2Bt7aiXFIWWfl0%2BN8worXO7c6UyPujwI5bnnivQkE2FWffZs9X%2B7u89ivih1Hq0uatEQJOJRXbHOwLCcEpYXycc7NT9UIgnxmFJ8uuChVbIwt176pL1aWdxbj62qhk3vep9himDMBl0%2Fm0LzQSF%2FWs951Z1SHlvyZ5eih3pyiE2xR%2BfywLJKssc1Xy2kid7hCq8UdfvrjEBIX60gntDcCELGlD%2Fk5GCa%2BSHlHAt%2BxQC%2FdY2iYzWM8u7MMzYJRrZPGcPSKMmnsm9HepEdCgzkK3fbSleNr8QrWiL13ZC7860d7YaTGD0b2Pxkz%2FDfXJuy2viIOOkaBAuBa9cYB%2Fv0Gu0lZdcYNWsqWopmTzlcdCu4VbmaoU75RLjrJheXAjwXmDh8vzKk2nJF3ee2JgSLm84VQGlVCcnlrdn00g62rDoXg11GAAV23oCENTmvRJk61s7%2BBoWmTZ6sAp4i2yzEQkCT2fiFzNvHBTyolW1bLpxxgVIXOJxay9RswfwPVBywwoDfmAT3MJcl68tQqqYeMqM4OrRFH%2FpKZKLYasNBYqIUftZ3rAWzulwDKr5ugDHY4jkVjii3TPuvwC%2B8Jqq8DZWLYdO65oZIN31e2Ru%2BVALgsKdE7brToNNDsbbxWxJ4VQ6%2BaLn2scqv5Ca9RELqK30E2kzP3RCeagl%2BbnzsT3KP%2FW19eGE9MshsUZ5v8lNhdHmwW9cIt09gHcJpT--OvosxOZYwJa1os80--16blR4cwgkPv09VllFoHlw%3D%3D'
    }
})

const urls = [
    {
        url: `https://github.com/vilex/vilex/graphs/contributors?type=a`,
        onwer: `vilex`,
        repo: `vilex`
    },
    {
        url: `https://github.com/vilex/vilex.github.io/graphs/contributors?type=a`,
        onwer: `vilex`,
        repo: `vilex.github.io`
    },
    
]




const output = []

async function start() {

    if (repos.length) {
        const repo = repos.shift()
        
        const res = await ins.get(repo.url)
        console.log(res)
        if (res && res.status === 200) {
            // console.log(res)
            if (Array.isArray(res.data)) {
                
                // output.push(...res.data)  
            }
        }
        
        // start()

    } else {
        let fileString = `export const contributors = [
            {
                repo: '贡献人员',
                list: ${JSON.stringify(output,null, 2)}
            }
        ]`
        // writeFileSync(resolve('src/static_data/contributors.ts'), fileString)
        console.log('completed.')
    } 
    
}

start()