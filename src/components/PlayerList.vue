<template>
  <div class="player-list-container">
    <table class="player-list-table">
      <tr>
         <th>Player ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>

      </tr>
      <tr v-for="player in players" :key="player.playerId">
        <td>{{ player.playerId }}</td>
        <td>{{ player.firstName }}</td>
        <td>{{ player.lastName }}</td>
        <td><img :src="player.avatarUrl" alt="Player"></td>
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
    fetch("/darts_api/players", {
      method: "GET",
      headers: new Headers({
        authToken: 'c94e9029-9a49-44e5-b118-132074e3da19'
      }),
    })
    .then(response => response.json())
    .then(players => this.players = players)
    .catch(err => console.log(err.message))
  },
  methods() {
    //image not available


  }
}
</script>

<style scoped>
.player-list-container {
  display: flex;  
  justify-content: center;
}

.player-list-table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50vw;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #ffffff;
}

img {
  border-radius: 50%;
}
</style>