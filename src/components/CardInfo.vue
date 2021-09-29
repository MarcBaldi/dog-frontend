<template>
  <div class="card-info-container">
    <h1>{{ cardName }}</h1>
    <p>{{ cardDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  props: {
    cardId: Number,
    cardName: String,
    cardDesc: String
  }
}
</script>

<style scoped>
.card-info-container {
  text-align: center;
}

</style>