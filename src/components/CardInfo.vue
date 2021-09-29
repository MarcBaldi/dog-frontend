<template>
  <div id="card-info-container">
    <h1>Title</h1>
    <p>I am Card {{ cardId }}</p>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  props: {
    cardId: Number
  }
}
</script>

<style scoped>
#card-info {
}

</style>