<template>
  <div>
    Project Name is: {{ $route.params.slugProjectName }}
    <span v-html="project[0].desc"></span>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import { print } from 'graphql/language/printer'

// const QUERY = gql`
//   query MyQuery {
//     portfolio(
//       where: { projectName: { _eq: "{$route.params.slugProjectName}" } }
//     ) {
//       company
//       cURL
//       date
//       location
//       projectName
//       role
//       title
//     }
//   }
// `

export default {
  async asyncData({ params, app }) {
    const { data } = await app.$hasura({
      query: print(gql`
        query MyQuery {
          portfolio(
            where: { slugProjectName: { _eq: "${params.projectName}" } }
          ) {
            company
            cURL
            date
            desc
            location
            projectName
            role
            title
          }
        }
      `)
    })
    console.log(data)
    return {
      project: data.portfolio
    }
  },
  data() {
    return {
      type: ''
    }
  }
}
</script>
