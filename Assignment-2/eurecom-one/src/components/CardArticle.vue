<template>
<div class=container>
    <h1>Hello World {{}}</h1>
</div>
</template>

<script>
export default {
    
    data(){

    },
    props: {
        class:{
            type: Object,
            required:true
        },
    }
}
</script>

<style scoped>
.container{
    display: inline-block;
    margin-top: 20px;
    background-color: white;
    border: 1px solid;
    padding: 0px;
    height: 95%;
    width: 100%;
    box-shadow: 0px 5px 10px 0px #888888;

}

</style>
