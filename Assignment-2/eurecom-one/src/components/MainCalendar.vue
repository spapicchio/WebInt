<template>
  <article class="mainCalendar">
    <Calendar />
  </article>
</template>
<script>
import Calendar from './Calendar.vue'

export default {
  name: 'app',
  components: {
    Calendar
  }
}
</script>