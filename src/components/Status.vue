<template>
  <div id="game-status">
    <div>
      <h2>Status</h2>
      <p>API: {{ message }}</p>
      <p>Round: {{ roundNumber }}</p>
      <p>Player: {{ playerTurn }}</p>
      <p>Phase: {{ gamePhase }}</p>
    </div>
  </div>
</template>

<script>
import { fetchMessage } from '@/services/fetchers'
export default {
  name: "Status",
  data() {
    return {
      message: '',
      roundNumber: 0,
      playerTurn: 0,
      gamePhase: 0, // TODO: computed value
    }
  },
  async created() {
    try {
      this.message = await fetchMessage()
    }
    catch(error){
      this.message = 'offline'
    }
  }
}
</script>

<style scoped>
#game-status{
  color: white;
  padding: 1em;
  background-color: black;
}
</style>