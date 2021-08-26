<template>
  <div class="game">
    <div>
      <p>API:  {{ message }}</p>
    </div>
    <div v-for="n in 4" :key="n">
      <div v-for="m in 4" :key="m">
        <Pawn :player="n" :id="m-1"></Pawn>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchMessage } from '@/services/fetchers'
import Pawn from "@/components/Pawn";
export default {
  components: {Pawn},
  data() {
    return {
      message: 'offline'
    }
  },
  async created() {
    try {
      this.message = await fetchMessage()
    }
    catch(error){
      this.message = 'server error :('
    }
  }
}
</script>
