<template>
  <div class="match-list-container">
    <table class="match-list-table">
      <tr>
         <th>Match ID</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Legs to win</th>
          <th>Player 1 score</th>
          <th>Player 2 score</th>

      </tr>
      <tr v-for="match in allMatches" :key="match.matchId">
        <td>{{ match.matchId }}</td>
        <td>{{ match.player1.firstName + " " + match.player1.lastName}}</td>
        <td>{{ match.player2.firstName + " " + match.player1.lastName}}</td>
        <td>{{ match.legsToWin }}</td>
        <td>{{ match.player1Score }}</td>
        <td>{{ match.player2Score }}</td>
      </tr>      
    </table>
  </div>
</template>

<script>
export default {
  name: 'MatchList',
  data() {
    return {
      allMatches: []
    }
  },
  mounted() {
    fetch("/darts_api/allMatches", {
      method: "GET",
      headers: new Headers({
        authToken: 'c94e9029-9a49-44e5-b118-132074e3da19'
      }),
    })
    .then(response => response.json())
    .then(allMatches => this.allMatches = allMatches)
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>