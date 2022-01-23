<template>
<div class="btn-group">
  <button class="all_mail" @click="onClick1">All Emails</button>
  <button class="new_mail" @click="onClick2">Create new Email</button>
</div>
</template>

<script>
export default {
    props: {
        onClick2: {
            type: Function,
            required: true
        },
        onClick1: {
          type: Function,
          required: true
        }
    }
}
</script>

<style scoped>
.btn-group button {
  background-color: #04aa6d; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 30px 72px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  width: 100%; /* Set a width if needed */
  display: block; /* Make the buttons appear below each other */
}

.btn-group button:not(:last-child) {
  border-bottom: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
</style>