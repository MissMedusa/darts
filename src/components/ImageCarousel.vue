<template>
    <div id='image-container'>        
        <img class='images' src='../assets/1.jpg'>
        <img class='images' src='../assets/2.jpg'>
        <img class='images' src='../assets/3.jpg'>
        <img class='images' src='../assets/4.jpg'>
        <h1>Welcome to Darts API.<br>You can view existing matches, other players, or you can start your own match!</h1>
    </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  data() {
    return {
    }
  },
  mounted() {
    var slideIndex = 0
    carousel()
    function carousel(){
        var images = document.getElementsByClassName('images');
        for (let i = 0; i < images.length; i++) {
                images[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > images.length) {slideIndex = 1}
        images[slideIndex-1].style.display = 'block';
        setTimeout(carousel, 4000); // Change image every 2 seconds
    }
  }
}
</script>

<style scoped>
.image-container {
  position: relative;
  text-align: center;
}

.images {
  max-height: 70vh;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  display: none;
}

h1 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 52px;
  color: white;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
}
</style>