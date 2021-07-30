<template>
  <div>
    Company Name is: {{ projects[0].company }}
    <hr />
    <div v-for="project in projects" :key="project.id">
      <GridItem :data="project" />
      <hr />
    </div>
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
            where: { slugCompany: { _eq: "${params.company}" } }
          ) {
            company
            cURL
            pURL
            date
            desc
            id
            location
            logoURL
            projectName
            role
            slugCompany
            slugProjectName
            title
          }
        }
      `)
    })
    return {
      projects: data.portfolio
    }
  },
  data() {
    return {
      type: ''
    }
  }
}
</script>
