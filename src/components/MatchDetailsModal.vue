<template>
  <div class='match-details-modal'>
    Match details
  </div>
</template>

<script>
export default {
  name: 'MatchDetailsModal',
  props: ['clickedMatch'],
  data() {
    return {
      matchLegDetails: []
    }
  },
  mounted() {
    fetch('/darts_api/matchLegs', {
      method: 'GET',
      headers: new Headers({
        authToken: 'c94e9029-9a49-44e5-b118-132074e3da19',
        matchId: clickedMatch.matchId
      }),
    })
    .then(response => response.json())
    .then(matchLegDetails => this.matchLegDetails = matchLegDetails)
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>

</style>
