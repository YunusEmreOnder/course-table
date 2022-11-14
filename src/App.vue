<template>
  <div id="app">
    <div class="container">
      <PersonIDetails :details="personData.personalInfo" />
      <BaseTable :sections="personData.sections" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { PERSON_GET_DATA, PERSON_FETCH_DATA } from "./constants/index";
import BaseTable from "./components/BaseTable.vue";
import PersonIDetails from "./components/PersonIDetails.vue";
export default {
  name: "App",
  components: { BaseTable, PersonIDetails },
  created() {
    this.fetchPersonData();
  },
  computed: {
    ...mapGetters({
      personData: PERSON_GET_DATA,
    }),
  },
  methods: {
    ...mapActions({
      fetchPersonData: PERSON_FETCH_DATA,
    }),
  },
};
</script>
