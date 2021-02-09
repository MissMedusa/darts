<template>
  <div class="add-backdrop" @click.self="closeAddModal">
    <div class="add-modal">
      <div class="form-container">
          <form @submit.prevent="addThrow">
              <h3>Please input in this format: 0-20, 25, D{1-20}, BULL, T{1-20}</h3>
              <label for="">Dart 1</label>
              <input type="text" name="darts" id="darts" required v-model="data.darts[0]">              
              <label for="">Dart 2</label>
              <input type="text" name="darts" id="darts" v-model="data.darts[1]">   
              <label for="">Dart 3</label>
              <input type="text" name="darts" id="darts" v-model="data.darts[2]">          
              <div class="submit">
                <button>Add throw</button>
              </div>              
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddThrow',  
  emits: ['close'],
  props: ['chosenPlayerId', 'matchId'],
  data() {
      return {
        data: {
          playerId: this.chosenPlayerId,
          darts: [],
          score: 0,
          round: 0
        }        
        
      }
  },
  methods: {
    closeAddModal() {
      this.$emit('close')
      console.log(this.matchId)
    },
    addThrow() {
        //todo: score calculation          
        fetch('/darts_api/addThrow?matchId=' + this.matchId, {
        method: 'POST',
        headers: {
          'authToken': 'c94e9029-9a49-44e5-b118-132074e3da19',
          'Content-Type': 'application/json'  
        },
        body: JSON.stringify(this.data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success: ', data)
          this.$router.push('matches')
        })
        .catch(err => console.log(err.message))        
      },
  }
}
</script>

<style scoped>
.add-backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 9900;
}

.add-modal {
  width: 50vw;
  padding: 20px;
  margin: 140px auto;
  background-color: white;
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 75vh;  
  border-radius: 10px;
  z-index: 9999;
}

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
.submit, h3 {
    text-align: center;
}

h3 {
    color: #6c757d;
    font-weight: 600;
}
</style>