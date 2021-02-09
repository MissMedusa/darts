<template>
  <div class='add-modal-container' v-if="addModalToggle">
    <AddThrow :chosenPlayerId="chosenPlayerId" :matchId="matchId" @close="closeAddModal"/>
  </div>
  <div class="backdrop" @click.self="closeModal">
    <div class="details-modal">
      <div class="table-container">
        <table class="details-table" v-for="(leg, legIndex) in matchLegDetails" :key="leg.numberOfLeg">
          <tr>
            <th colspan="6" class="leg">Leg {{ leg.numberOfLeg }}</th>
          </tr>
          <tr> 
            <th colspan="6" class="player">Player 1<button @click="toAddThrow(clickedMatch.player1.playerId)">Add throw</button></th>          
          </tr>
          <tr>
            <th>Throw</th>
            <th>Dart 1</th>          
            <th>Dart 2</th>          
            <th>Dart 3</th>
            <th>Total</th>
            <th>Score - 501</th>
          </tr>
          <tr v-for="round in matchLegDetails[legIndex].player1Throws" :key="round.round">
            <td>{{ round.round }}</td>
            <td>{{ round.darts[0] }}</td>
            <td>{{ round.darts[1] }}</td>
            <td>{{ round.darts[2] }}</td>
            <td>{{ round.score }}</td>
            <td>{{  }}</td>
          </tr>
          <tr>
            <th colspan="6" class="player">Player 2<button @click="toAddThrow(clickedMatch.player2.playerId)">Add throw</button></th>
          </tr>
          <tr>
            <th>Throw</th>
            <th>Dart 1</th>          
            <th>Dart 2</th>          
            <th>Dart 3</th>
            <th>Total</th>
            <th>Score - 501</th>
          </tr>
          <tr v-for="round in matchLegDetails[legIndex].player2Throws" :key="round.round">
            <td>{{ round.round }}</td>
            <td>{{ round.darts[0] }}</td>
            <td>{{ round.darts[1] }}</td>
            <td>{{ round.darts[2] }}</td>
            <td>{{ round.score }}</td>
            <td>{{  }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AddThrow from './AddThrow.vue'

export default {
  name: 'MatchDetailsModal',
  props: ['clickedMatch'],
  emits: ['close'],
  components: {
    AddThrow
  },
  data() {
    return {
      matchLegDetails: [],
      matchId: this.clickedMatch.matchId,
      previousScore: 501,
      currentScore: 0,
      addModalToggle: false,
      chosenPlayerId: ''
    }
  },
  mounted() {
    fetch('/darts_api/matchLegs?matchId=' + this.matchId, {
      method: 'GET',
      headers: new Headers({
        authToken: 'c94e9029-9a49-44e5-b118-132074e3da19'        
      }),
    })
    .then(response => response.json())
    .then(matchLegDetails => this.matchLegDetails = matchLegDetails)
    .catch(err => console.log(err.message))
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    toAddThrow(playerId) {
      this.chosenPlayerId = playerId
      this.addModalToggle = !this.addModalToggle
    },
    closeAddModal() {
      this.addModalToggle = !this.addModalToggle
    }
  }
}
</script>

<style scoped>
.details-modal {
  width: 50vw;
  padding: 20px;
  margin: 140px auto;
  background-color: white;
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 75vh;  
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.table-container {
  overflow-y: auto;
}
.details-table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;  
  border: 3px solid #eeeeee;
}

td, th {
  border: 1px solid #dddddd;
  padding: 10px;
}

.leg {
  color: white;
  background-color: #3996e2;
}

.player {  
  color: white;
  background-color: #7a8b9b;
}

.modal-header {
  display: flex;
  justify-content: space-around;
  height: 50px;
  margin: 20px;
}

h2 {
  align-self: center;
}

button {
    color: #ffffff;
    background: #2196F3;
    border: 2px solid #5ba7e6;
    padding: 5px 10px;    
    margin-left: 10px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 3px;
}

</style>
