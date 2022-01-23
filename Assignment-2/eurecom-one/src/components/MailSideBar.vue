<template>
  <aside class="aside mail-aside">
    <MailButtons :onClick1="onClick1" :onClick2="onClick2" />
    
  </aside>
</template>

<script>
import MailButtons from "./MailButtons.vue";
export default {
  name: "MailSideBar",
  data() {
    return {};
  },

  components: {
    MailButtons,
  },

  methods: {
    onClick1() {
      console.log("AAAAAAAAA");
    },
    onClick2() {
      console.log("BBBBBBBB");
    }
  },
};
</script>

<style scoped>
</style>

