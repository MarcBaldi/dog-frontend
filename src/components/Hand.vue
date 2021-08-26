<template>
  <div id="hand-cards" class="card-columns p-1">
    <Card class="card m-1"></Card>
    <Card class="card m-1"></Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Hand",
  components: {Card}
}
</script>

<style scoped>
#hand-cards {
  background-color: #2c3e50;
}
</style>
