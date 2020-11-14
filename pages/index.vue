<template>
  <div class="container">
    <div>
      <Header />
      <Logo />
      <Grid :grid-items="portfolio" />
      <h1 class="title">elan.trybuch.com</h1>
    </div>
  </div>
</template>

<script>
import Grid from '@/components/Grid/Grid'
import Header from '@/components/Header/Header'
import gql from 'graphql-tag'
import { print } from 'graphql/language/printer'

const QUERY = gql`
  query {
    portfolio(order_by: { id: asc }) {
      active
      company
      id
      role
      pURL
      location
      type
      cURL
      projectName
    }
  }
`

export default {
  components: { Grid, Header },
  async asyncData({ app }) {
    const { data } = await app.$hasura({
      query: print(QUERY)
    })

    return {
      portfolio: data.portfolio
    }
  },
  data() {
    return {
      type: ''
    }
  }
}
</script>
