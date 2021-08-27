<template>
  <div id="hand-cards" class="card-columns p-1">
      <Card v-for="(card, index) in handData" :key="index"
            :card-number="card"
            class="card m-1"
      ></Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import {fetchHandCards} from "@/services/fetchers";
export default {
  name: "Hand",
  components: {Card},
  data() {
    return {
      handData: []
    }
  },
  async created() {
    try {
      this.handData = await fetchHandCards(1)
    }
    catch(error){
      this.handData = []
    }
  }
}
</script>

<style scoped>
#hand-cards {
  background-color: #2c3e50;
}
</style>
