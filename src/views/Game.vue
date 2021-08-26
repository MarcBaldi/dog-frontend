<template>
  <div class="game">
    <div class="row">
      <div class="col-8">
        <Board/>
      </div>
      <div class="col-4">
        <Status/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Hand/>
      </div>
    </div>
  </div>
</template>

<script>
import Board from "@/components/Board";
import Hand from "@/components/Hand";
import Status from "@/components/Status";
export default {
  components: {Status, Hand, Board}
}
</script>
