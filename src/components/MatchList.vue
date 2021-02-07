<template>
  <MatchDetailsModal :clickedMatch='clickedMatch'/>
  <div class='match-list-container'>
    <table class='match-list-table'>
      <tr>
         <th></th>
          <th>Player 1</th>
          <th>Score</th>
          <th>Player 2</th>
          <th></th>
          <th>Legs to win</th>
      </tr>
      <tr class='match-row' v-for='match in allMatches' :key='match.matchId' @click='toDetailedView(allMatches.indexOf(match))'>
        <td><img :src='match.player1.avatarUrl' alt='Player 1'></td>
        <td>{{ match.player1.firstName }} {{ match.player1.lastName}}</td>
        <td>{{ match.player1Score }} vs {{ match.player2Score }}</td>
        <td>{{ match.player2.firstName }} {{ match.player1.lastName}}</td>
        <td ><img :src='match.player2.avatarUrl' alt='Player 2'></td>
        <td>{{ match.legsToWin }}</td>
      </tr>      
    </table>
  </div>
</template>

<script>

export default {
  name: 'MatchList',  
  data() {
    return {
      allMatches: [],
      clickedMatch: []
    }
  },
  mounted() {
    fetch('/darts_api/allMatches', {
      method: 'GET',
      headers: new Headers({
        authToken: 'c94e9029-9a49-44e5-b118-132074e3da19'
      }),
    })
    .then(response => response.json())
    .then(allMatches => this.allMatches = allMatches)
    .catch(err => console.log(err.message))
  },
  methods: {
    toDetailedView(index) {
      this.clickedMatch = this.allMatches[index]
      console.log(this.clickedMatch)
    }
  }
}
</script>

<style scoped>
.match-list-container {
  display: flex;
  justify-content: center;
}

.match-list-table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 60vw;
}

td, th {
  border: 1px solid #dddddd;
  padding: 10px;
}

.match-row:hover {  
  background-color: #a5cbf1;
}

tr:nth-child(even) {
  background-color: #ffffff;
}

img {
  border-radius: 50%;
}

</style>