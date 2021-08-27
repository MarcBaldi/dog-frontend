<template>
 <div id="card">
   <p id="card-text"> {{cardNumber}}</p>
 </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardNumber: Number
  }
}
</script>

<style scoped>
#card {
  font-size: 3em;
  color: black;
  background-color: lightcyan;
  width: 2em;
  height: 4em;
}
#card-text {
  padding-top: 50%;
}
</style>