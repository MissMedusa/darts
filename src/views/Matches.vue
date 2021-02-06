<template>
  <MatchDetails/>
  <MatchList/>
</template>

<script>
import MatchDetails from '../components/MatchDetails.vue'
import MatchList from '../components/MatchList.vue'

export default {
  name: 'Matches',
  components: {
    MatchDetails,
    MatchList
  }
}
</script>

<style>

</style>
