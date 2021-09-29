<template>
  <div id="card">
    <div id="card-info">
      <b-icon icon="info-circle"></b-icon>
    </div>
    <b-popover target="card-info" triggers="hover" placement="top">
      <CardInfo :card-id="cardNumber"></CardInfo>
    </b-popover>
    <div id="card-title">
      <p id="card-title-text"> {{ cardNumber }}</p>
    </div>
    <div id="card-id">
      <p id="card-id-text"> {{ cardNumber }}</p>
    </div>
  </div>
</template>

<script>
import {BIcon, BIconInfoCircle,} from 'bootstrap-vue'
import CardInfo from "@/components/CardInfo";

export default {
  name: "Card",
  props: {
    cardNumber: Number
  },
  components: {
    CardInfo,
    BIcon,
    // eslint-disable-next-line vue/no-unused-components
    BIconInfoCircle
  }
}
</script>

<style scoped>
#card {
  font-size: 3em;
  color: black;
  background-color: lightcyan;
  width: 2em;
  height: calc(2em * 10 / 6);
  overflow: hidden;
}

#card-info {
  margin-left: 70%;
  font-size: 1.5rem;
}

#card-title {
  margin-bottom: 15%;
}

#card-id {
  position: absolute;
  margin-left: 10%;
  margin-bottom: 5%;
  font-size: 0.8rem;
}
</style>