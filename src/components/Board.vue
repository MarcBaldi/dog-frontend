<template>
  <div id="board">
    <v-stage :config="configKonva">
      <v-layer id="board-layer">
        <v-circle :config="configCircle"></v-circle>
        <v-circle :config="configCircle2"></v-circle>
      </v-layer>
      <v-layer id="pawn-layer">
        <v-circle :config="configCircle"></v-circle>
        <v-image :config="displayImage"></v-image>
      </v-layer>
    </v-stage>
<!--    <div v-for="n in 4" :key="n">
      <div v-for="m in 4" :key="m">
        <Pawn :player="n" :id="m-1"></Pawn>
      </div>
    </div>-->
  </div>
</template>

<script>
//import Pawn from "@/components/Pawn";

const pawn =require( '@/assets/pawns/' + 'rot2' + '.png')

export default {
  name: "Board",
  //components: {Pawn},
  data() {
    return {
      configKonva: {
        width: 1200,
        height: 1000
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 15,
        fill: "black",
        stroke: "black",
        strokeWidth: 0
      },
      configCircle2: {
        x: 200,
        y: 100,
        radius: 15,
        fill: "black",
        stroke: "black",
        strokeWidth: 0
      },
      displayImage: {
        draggable: true,
        x: 200,
        y: 100,
        image: new Image(),
        width: 20,
        height: 50,
        offset: {
          x: 10,
          y: 50
        },
      }
    };
  },
  mounted() {
    this.displayImage.image.src = pawn;
  }
}
</script>

<style scoped>

</style>