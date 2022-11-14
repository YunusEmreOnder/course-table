<template>
  <span>
    <span :class="classObject" class="text">
      {{ status.name }}<span v-if="lengthNumber != indexNumber + 1">,</span>
    </span>
  </span>
</template>
  
  <script>
export default {
  name: "BaseStatus",
  props: {
    status: Object,
    lengthNumber: Number,
    indexNumber: Number,
  },
  computed: {
    classObject() {
      return this.status.state == 1
        ? "green"
        : this.status.state == 2
        ? "red"
        : "gray";
    },
  },
};
</script>
  

<style  lang="scss" scoped>
.text {
  font-weight: bold;
}
.green {
  color: #19cc95;
}
.red {
  color: red;
}
.gray {
  color: gray;
}
</style>