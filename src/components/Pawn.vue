<template>
  <div id="pic">
    <img alt="a Pawn" :src="getPawnSrc()">
  </div>
</template>

<script>
export default {
  name: "Pawn",
  props: {
    player: Number,
    id: Number
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
  }
}
</script>

<style scoped>
img {
  max-height: 50px;
}
</style>