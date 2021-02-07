<template>
  <div id='navbar'>
    <div id='logo-container'>
      <img label='DartsAPI' id='logo' src='../assets/logo.png' alt='Logo'>
      <span id='project-name'>Darts API</span>
    </div>
    <TabMenu :model='items' />
    <Button label='New match' class='p-button-primary'/>
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
                  {label: 'Players', icon: 'pi pi-fw pi-users', to: '/players'},              
                  {label: 'About', icon: 'pi pi-fw pi-question-circle', to: '/about'}
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
  background-color: #ffffff;
}

#logo-container {
  display: flex;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: #4e4e4e;
}

#project-name {
  align-self: center;
  margin-left: 10px;
}

#logo {
  height: 50px;
}
</style>