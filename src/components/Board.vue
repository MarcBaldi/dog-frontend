<template>
  <div id="board">
    <v-stage :config="configKonva">
      <v-layer id="board-layer">
        <v-circle :config="configCircle"></v-circle>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
      <v-layer id="pawn-layer">
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
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
  components: {Pawn},
  data() {
    return {
      configKonva: {
        width: 1200,
        height: 200
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 15,
        fill: "black",
        stroke: "black",
        strokeWidth: 0
      }
    };
  }
}
</script>

<style scoped>

</style>