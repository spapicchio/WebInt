<template>
    <nav class="navbar">
        <div id=first>
            <img src='../assets/favicon.png' @click="iconClick">
        </div>
        
        <Button :onClick="userClick" class_name="button" text="user-name"></Button>
        <Button :onClick="whishClick" class_name="button fa fa-heart" text=""></Button>
        <Button :onClick="logoutClick" class_name="button is-danger" text="Log-out"></Button>
    
    
    </nav>
</template>

<script>
import Button from "./Button"

export default {
    name: 'Navbar',
    components:{
        Button
    },
    props: {        
    },
    methods: {
        iconClick() {
            console.log('Icon clicked')
            this.$router.push("")
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
img{
    max-width: 30%;
    margin-left: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
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
    align-items: center;
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
