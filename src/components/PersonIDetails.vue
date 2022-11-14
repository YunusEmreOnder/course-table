<template>
  <div>
    <h1>{{ details.name }} {{ details.lastname }}</h1>
    <p class="text">İştirak etdiyi qrup: {{ details.groupName }}</p>
    <p class="text">Kursun adı: {{ details.courseName }}</p>
    <table class="table">
      <thead>
        <tr>
          <th>İştirakçının Soyadı Adı</th>
          <th>Toplam aralıq imtahanlar üzrə nəticə</th>
          <th>Canlı dərsdə iştirak</th>
          <th>Video dərslərə baxış</th>
          <th>Praktikada iştirak</th>
          <th>Əlaqə</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ details.name }} {{ details.lastname }}</td>
          <td>{{ details.totalExamResult }}</td>
          <td>{{ details.liveLesson }}</td>
          <td>{{ details.videoLesson }}</td>
          <td>{{ details.paricipationApp }}</td>
          <td>{{ details.contact }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PersonIDetails",
  props: {
    details: Object,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
  font-size: 30px;
  color: #253858;
}
.text {
  font-weight: 400;
  font-size: 16px;
  color: #253858;
}
</style>