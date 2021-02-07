<template>
    <div id='image-container'>
        <img class='images' src='../assets/1.jpg'>
        <img class='images' src='../assets/3.jpg'>
        <img class='images' src='../assets/4.jpg'>
        <img class='images' src='../assets/6.jpg'>
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
.images {
  max-height: 70vh;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  display: none;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>