<template>
  <div class="card">
    <div class="card-info" :id="index">
      <b-icon icon="info-circle"></b-icon>
    </div>
    <b-popover :target="index.toString()" triggers="hover" placement="top">
      <CardInfo :card-id="cardId" :card-name="cardName" :card-desc="cardDesc"></CardInfo>
    </b-popover>
    <div class="card-title">
      <p class="card-title-text"> {{ cardName }}</p>
    </div>
    <div class="card-id">
      <p class="card-id-text"> {{ cardId }}</p>
    </div>
  </div>
</template>

<script>
import {BIcon, BIconInfoCircle,} from 'bootstrap-vue'
import CardInfo from "@/components/CardInfo";

export default {
  name: "Card",
  props: {
    cardId: Number,
    index: Number
  },
  components: {
    CardInfo,
    BIcon,
    // eslint-disable-next-line vue/no-unused-components
    BIconInfoCircle
  },
  computed: {
    cardName: function () {
      switch (this.cardId) {
        case 0: return "Joker"
        case 1: return "Ass"
        case 11: return "Jack"
        case 12: return "Queen"
        case 13: return "King"
        default: return this.cardId.toString()
      }
    },
    cardDesc: function () {
      switch (this.cardId) {
        case 0: return "Can transform in any other card."
        case 1: return "Can walk 1 or 11 fields. Can also spawn a pawn."
        case 4: return "Can walk 4 forwards or backwards!"
        case 7: return "Can walk 7 Fields in total, but may be split up between any of your pawns."
        case 11: return "Switch places of one of your pawns with a pawn of any other player."
        case 13: return "Can walk 13 fields. Can also spawn a pawn."
        default: return "Can walk " + this.cardId.toString() + " fields forward."
      }
    }
  }
}
</script>

<style scoped>
.card {
  font-size: 3em;
  color: black;
  background-color: lightcyan;
  width: 2em;
  height: calc(2em * 10 / 6);
  overflow: hidden;
}

.card-info {
  margin-left: 70%;
  font-size: 1.5rem;
}

.card-title {
  padding-bottom: 3%;
  overflow: hidden;
  white-space: nowrap;
}

.card-id {
  position: absolute;
  margin-left: 10%;
  margin-bottom: 5%;
  font-size: 0.8rem;
}
</style>