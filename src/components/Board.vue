<template>
  <div id="board">
    <div v-for="n in 4" :key="n">
      <div v-for="m in 4" :key="m">
        <Pawn :player="n" :id="m-1"></Pawn>
      </div>
    </div>
  </div>
</template>

<script>
import Pawn from "@/components/Pawn";

export default {
  name: "Board",
  components: {Pawn}
}
</script>

<style scoped>

</style>