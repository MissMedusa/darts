<template>  
      <div class="form-container">            
          <form @submit.prevent="handleSubmit">
              <h1>Create new match</h1>
              <label for="">Player 1 ID</label>
              <input type="text" name="player1Id" id="player1Id" required v-model="player1Id">
              <label for="">Player 2 ID</label>
              <input type="text" name="player2Id" id="player2Id" required v-model="player2Id">
              <label for="">Legs to win</label>
              <input type="number" name="legsToWin" id="legsToWin" required v-model="legsToWin">
              <div class="submit">
                <button>Create</button>
              </div>              
          </form>
      </div>
</template>

<script>
export default {
  name: 'CreateMatch',
  data() {
      return {
          player1Id: '',
          player2Id: '',
          legsToWin: 3
      }
  },
  methods: {
    handleSubmit() {
        fetch('/darts_api/createMatch?player1Id=' + this.player1Id + '&player2Id=' + this.player2Id + '&legsToWin=' + this.legsToWin, {
        method: 'POST',
        headers: new Headers({
            authToken: 'c94e9029-9a49-44e5-b118-132074e3da19'        
        }),
        })
        .then(response => response.json())
        .then(data => console.log('Success: ', data))
        .catch(err => console.log(err.message))
        alert('Match created!');
      }
  }
}
</script>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {    
    display: inline-block;
    margin: 25px 0 15px;   
    font-weight: 600;
    color: #6c757d;
}
input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
button {
    color: #ffffff;
    background: #2196F3;
    border: 1px solid #2196F3;
    padding: 0.5rem 1rem;
    margin-top: 20px;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 3px;    
}
.submit, h1 {
    text-align: center;
}

h1 {
    color: #6c757d;
    font-weight: 600;
}
</style>