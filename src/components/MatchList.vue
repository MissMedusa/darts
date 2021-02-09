<template>
  <div class='modal-container' v-if="modalToggle">
    <MatchDetailsModal :clickedMatch="clickedMatch" @close="closeModal" />
  </div>
  <div class='match-list-container'>
    <table class='match-list-table'>
      <tr>         
          <th colspan="2">Player 1</th>
          <th>Score</th>
          <th colspan="2">Player 2</th>          
          <th>Legs to win</th>
      </tr>
      <tr class="match-row" v-for="match in allMatches" :key="match.matchId" @click="toDetailedView(allMatches.indexOf(match))">
        <td><img :src="match.player1.avatarUrl" alt="Player 1"></td>
        <td>{{ match.player1.firstName }} {{ match.player1.lastName}}</td>
        <td>{{ match.player1Score }} vs {{ match.player2Score }}</td>
        <td>{{ match.player2.firstName }} {{ match.player1.lastName}}</td>
        <td ><img :src="match.player2.avatarUrl" alt="Player 2"></td>
        <td>{{ match.legsToWin }}</td>
      </tr>      
    </table>
  </div>
</template>

<script>
import MatchDetailsModal from './MatchDetailsModal.vue'

export default {
  name: 'MatchList',
  components: {
    MatchDetailsModal
  },
  data() {
    return {
      allMatches: [],
      clickedMatch: [],
      modalToggle: false
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
      this.modalToggle = !this.modalToggle
      console.log(this.clickedMatch)
    },
    closeModal() {
      this.modalToggle = !this.modalToggle
    }
  }
}
</script>

<style scoped>
.match-list-container {
  display: flex;
  justify-content: center;
  color: white;
}

.match-list-table {
  border-collapse: collapse;  
  background-color: #65a6da;
  width: 60vw;  
  font-weight: 600;
}

td, th {
  border: 1px solid #dddddd;
  padding: 10px;
}

.match-row:hover {  
  background-color: #64b5f5;
}

.match-row:nth-child(even):hover {  
  background-color: #cdebfd;
}

tr:nth-child(even) {
  background-color: #ffffff;
  color: #455e8e;
}

img {
  border-radius: 50%;
}

</style>