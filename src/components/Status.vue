<template>
  <div id="game-status">
    <div>
      <p>Status</p>
      <p>API: {{ message }}</p>
    </div>
  </div>
</template>

<script>
import { fetchMessage } from '@/services/fetchers'
export default {
  name: "Status",
  data() {
    return {
      message: ''
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