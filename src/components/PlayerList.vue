<template>
  <div class='player-list-container'>
    <table class='player-list-table'>
      <tr>
         <th>Player ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>

      </tr>
      <tr v-for='player in players' :key='player.playerId'>
        <td>{{ player.playerId }}</td>
        <td>{{ player.firstName }}</td>
        <td>{{ player.lastName }}</td>
        <td v-if='player.avatarUrl'><img :src='player.avatarUrl' alt='Player'></td>
        <td v-else><img src='../assets/not-available.png' alt='Not available'></td>
      </tr>      
    </table>
  </div>
</template>

<script>
export default {
  name: 'PlayerList',
  data() {
    return {
      players: []
    }
  },
  mounted() {
    fetch('/darts_api/players', {
      method: 'GET',
      headers: new Headers({
        authToken: 'c94e9029-9a49-44e5-b118-132074e3da19'
      }),
    })
    .then(response => response.json())
    .then(players => this.players = players)
    .catch(err => console.log(err.message))
  },
  methods() {
  }
}
</script>

<style scoped>
.player-list-container {
  display: flex;  
  justify-content: center;
  color: white;
}

.player-list-table {
  border-collapse: collapse;
  width: 50vw;
  background-color: #65a6da;  
  font-weight: 600;
}

td, th {
  border: 1px solid #dddddd;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #ffffff;
  color: #455e8e;
}

img {
  border-radius: 50%;
  height: 100px;
}
</style>