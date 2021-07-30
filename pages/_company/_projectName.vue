<template>
  <div>
    Project Name is: {{ project[0].projectName }}
    <hr />
    <GridItem :data="project[0]" />
  </div>
</template>
<script>
import gql from 'graphql-tag'
import { print } from 'graphql/language/printer'

import GridItem from '@/components/GridItem/GridItem'

export default {
  components: { GridItem },
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
            logoURL
            projectName
            role
            title
          }
        }
      `)
    })
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
