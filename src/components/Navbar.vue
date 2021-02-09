<template>
  <div id='navbar'>
    <div id='logo-container'>
      <img label='DartsAPI' id='logo' src='../assets/logo.png' alt='Logo'>
      <span id='project-name'>Darts API</span>
    </div>
    <TabMenu :model='items' />
    <Button label='New match' class='p-button-primary' @click="$router.push('newmatch')"/>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
      return {
        items: [
                  {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                  {label: 'Matches', icon: 'pi pi-fw pi-list', to: '/matches'},
                  {label: 'Players', icon: 'pi pi-fw pi-users', to: '/players'}
              ]
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.9) ;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 9999;
}

#logo-container {
  display: flex;
  font-weight: 600;  
}

#project-name {
  align-self: center;
  margin-left: 10px;
}

#logo {
  height: 50px;
}
</style>