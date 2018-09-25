const fetch = require('node-fetch')
const key = require('./key')

let query = `{
    repository(owner: "abazlinton", name: "github_graph_ql_test") {
      releases(last: 10) {
        nodes {
          tag {
            name
          }
        }
      }
    }
  }`


newQuery = query.replace(/"/g, '\\\"')
newQuery = newQuery.replace(/\n/g, '\\n')

const body = `{"query": "${newQuery}"}`


console.log(body)

fetch('https://api.github.com/graphql', {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${key}`,
    // "Content-Type": "application/json"
  },
  body: body
})
  .then((res) => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
