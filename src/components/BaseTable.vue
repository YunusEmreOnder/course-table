<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Tədris elementinin adı</th>
          <th>Növü</th>
          <th>Tarix</th>
          <th>Statusu</th>
        </tr>
      </thead>
      <tbody v-for="(section, index) in sections" :key="index">
        <tr class="emptyCell" v-if="index != 0">
          <td colspan="4"></td>
        </tr>
        <tr>
          <td class="secondTitle" colspan="4">
            Bölüm {{ index + 1 }}: {{ section.name }}
          </td>
        </tr>
        <tr v-for="(course, courseIndex) in section.courses" :key="courseIndex">
          <td>{{ courseIndex + 1 }}. {{ course.name }}</td>
          <td>{{ course.type }}</td>
          <td>
            <font-awesome-icon
              icon="fa-solid fa-clock"
              class="fs-6 text-black-50 me-1"
            />
            {{ dateFormat(course.startTime) }}
            <span v-if="course.endTime"
              >- {{ hourFormat(course.endTime) }}</span
            >
          </td>
          <td>
            <BaseStatus
              v-for="(status, statusIndex) in course.status"
              :status="status"
              :key="statusIndex"
              :length-number="course.status.length"
              :index-number="statusIndex"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
import BaseStatus from "../components/BaseStatus.vue";
export default {
  name: "BaseTable",
  components: { BaseStatus },
  props: {
    sections: Array,
  },
  methods: {
    dateFormat(date) {
      return moment(date).format("DD MMMM YYYY, HH:mm");
    },
    hourFormat(date) {
      return moment(date).format("HH:mm");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
