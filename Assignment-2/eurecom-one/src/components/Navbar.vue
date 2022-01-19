<template>
<div class=introduction>
    <img src='../assets/logo.png' @click="iconClick">
    
    <div class=user>
        <img
        id=user-image
        v-if = "form.seen"
        :src="form.picture"
        :alt="`${form.firstName} ${form.lastName}`"
        />
        <h1>Hello {{form.completName}}</h1>
        <h3>Welcome to Eurecom One!</h3>

    </div>
    
</div>
    <nav>
        

    </nav>
</template>

<script>


export default {
    name: 'Navbar',
    
    data(){
        // it contains all the detail of the account
        var obj = JSON.parse(sessionStorage.getItem("account"));
        console.log(obj)
        return {
            form: obj
        }
    },
    components:{
      
    },
    props: {  
           
    },
    methods: {
        iconClick() {
            console.log('Icon clicked')
            this.$router.push("/home")
        },
        userClick(){
            console.log('User clicked')
            this.$router.push("")
            
        },
        whishClick(){
            console.log('Whish clicked')
            this.$router.push("whish")
        },
        logoutClick(){
            console.log('LogOut clicked')
            this.$router.push("login")
        }
    }
}
</script>

<style scoped>
.introduction{
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    height: 150px;
    justify-content: space-between;
    border-bottom: solid black;

}

.introduction img{
   max-width: 30%;
   margin: 10px 0 auto 50px;
   float:right;
}

.introduction #user-image {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: .8rem;
}

.user{
    margin: 40px 40px auto auto;
    width: 40%; 
}
.user img{
    margin: 0 0 30px 0;
    width: 100px; 
}
.user h1,
.user h3{
    float: right;
    margin-right:30px;
}


h1{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 2em;
    text-align: center;
    color: #2c3e50;
}
h3 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5em;
    text-align: center;
    color: #2c3e50;
}

nav #first{
    width: 70%;
    display: flex;
}
nav{
    display: flex;
    max-width: 80%;
    margin: 0 auto 1% auto;
    background-color: black;
    justify-content: space-around;
    align-items: left;
    border-radius: 5px;
}

button{
    margin: 0 10px;
}

@media screen and (max-width: 800px) {
	nav{
		max-width:100%;
	}
}
</style>
