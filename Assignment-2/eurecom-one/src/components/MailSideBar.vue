<template>
  <aside class="aside mail-aside">
   <MailButtons />
  </aside>
</template>

<script>
  import MailButtons from './MailButtons.vue';
  export default {
  name: "MailSideBar",
  data(){
    return {

    }
  },

  components: {
    MailButtons,
  },
};
</script>

<style scoped>

</style>

