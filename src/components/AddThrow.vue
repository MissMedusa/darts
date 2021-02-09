<template>
    <div class="add-modal">
      <div class="modal-header">
        <h2>Form</h2>
        <Button label='Save' class='p-button-primary'/>
      </div>
      <div class="form-container">
          <form action="">
              <h1>SOmething</h1>
          </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddThrow',
  props: ['clickedMatch'],
  data() {
      return {
        matchId: null
      }
  },
  methods: {
/*     addThrow() {
         fetch('/darts_api/addThrow?matchId=' + this.matchId, {
        method: 'POST',
        headers: new Headers({
            authToken: 'c94e9029-9a49-44e5-b118-132074e3da19'        
        }),
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => console.log('Success: ', data))
        .catch(err => console.log(err.message))        
      }, */
  }
}
</script>

<style scoped>
.add-modal {
  width: 50vw;
  padding: 20px;
  margin: 140px auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 75vh;  
  border-radius: 10px;
  z-index: 9999;
}
</style>