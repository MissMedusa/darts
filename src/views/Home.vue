<template>
  <MatchDetails/>
  <Menu/>
  <MatchList/>
  <ScoreBoard/>
</template>

<script>
import MatchDetails from '../components/MatchDetails.vue'
import MatchList from '../components/MatchList.vue'
import Menu from '../components/Menu.vue'
import ScoreBoard from '../components/ScoreBoard.vue'

export default {
  name: 'Home',
  components: {
    MatchDetails,
    MatchList,
    Menu,
    ScoreBoard
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
