<template>
  <div id="pic">
    <v-circle :config="configCircle"></v-circle>
<!--    <img alt="a Pawn" :src="getPawnSrc()">-->
    <div v-if="fieldData.currentPawn"></div>
  </div>
</template>

<script>
import vCircle from "konva";

export default {
  name: "FieldNode",
  components: {vCircle},
  props: {
    fieldData: Object,
    posX: Number,
    posY: Number
  },
  data() {
    return {
      configCircle: {
        x: 200,
        y: 200,
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
  methods: {
    getPawnSrc() {
      let color = ""
      switch (this.player) {
        case 0: color = "gelb"
              break
        case 1: color = "rot"
          break
        case 2: color = "gruen"
          break
        case 3: color = "blau"
          break
        default: color = "gelb"
          break
      }
      //console.log(require('@/assets/'+ res + this.id))

      return require('@/assets/pawns/' + color + this.id + '.png')
    }
  },
  mounted() {
    this.displayImage.image.src = this.getPawnSrc();
  }
}
</script>

<style scoped>
img {
  max-height: 50px;
}
</style>