<template>
  <ImageCarousel />
  <div class="info-container">
    <h1>Darts is a competitive sport in which two or more players bare-handedly throw small sharp-pointed missiles known as darts at a round target known as a dartboard.</h1>
    <h2>A game of darts is generally contested between two players, who take turns. The most common objective is to reduce a fixed score, commonly 301 or 501, to zero. <br>The final dart must land in either the bullseye or a double segment to win. Not all three darts need to be thrown on the final turn; the game can be finished on any of the three darts.
    <br>A throw that reduces a player's score below zero, to exactly one, or to zero but not ending with a double or bullseye is known as "going bust", with the player's score being reset to the value before starting the turn, and the remainder of the turn being forfeited.
    </h2>
  </div>  
</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue'

export default {
  name: 'Home',
  components: {
    ImageCarousel
  }
}
</script>

<style scoped>
.info-container {
  width: 70vw;
  margin: auto;
  padding-top: 5vh;
}

h1 {
  padding: 3vh 0vh;  
  color: white;
}

h2 {
  color: white;
  padding: 2vh 5vh;
  text-align: justify;  
}
</style>
