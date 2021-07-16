<template>
  <div id="pic">
    <img alt="a Pawn" :src="getFileName()">
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
    getFileName() {
      let res = ""
      switch (this.player) {
        case 0: res= "gelb"
              break
        case 1: res= "rot"
          break
        case 2: res= "gruen"
          break
        case 3: res= "blau"
          break
        default: res= "gelb"
          break
      }
      //console.log(require('@/assets/'+ res + this.id))

      return require('@/assets/pawns/'+ res + this.id + '.png')
    }
  }
}
</script>

<style scoped>
img {
  max-height: 50px;
}
</style>