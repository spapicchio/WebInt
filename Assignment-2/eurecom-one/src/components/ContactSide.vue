<template>
<div class=container>
	<div id="sidebar" class="sidebar">
		<a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
        <img
        id=user-image
        :src="picture"
        :alt="completeName"
        />

        <h1>Hello <b>{{completeName}}</b></h1>
        <h3>Welcome to Eurecom One</h3>
        <div class=contact>
            <p> <b>Contact information</b> <br>
                 <b>First Name:</b> {{firstName}} <br>
                 <b>Last Name:</b> {{lastName}} <br>
                 <b>Email:</b> {{email}} <br>
                 <b>Cell:</b> {{cell}} <br>
                 <b>Address:</b> {{adress}}, {{city}}, {{state}} <br>
                 <b>SSN:</b> 2 69 05 49 588 157 80  <br>

            </p>

            <p> <b>Eurecom Details</b> <br>
            <b>Master track:</b> Data Science <br>
            <b>Attending Course:</b> WebInt <br>
            <b>Closest Exam:</b> 07/02/2022 <br>
            <b>Tax:</b> All payed <br>
            <b>Applyed:</b> 2021/2023 <br>
            </p>
        </div>
	</div>
</div>

</template>

<script>
export default {

data(){
        // Retrieve the information of the user
        var obj = JSON.parse(sessionStorage.getItem("account"));
        console.log(obj);
        return {
            firstName: obj.firstName,
            lastName: obj.lastName,
            completeName: obj.completName,
            picture: obj.picture,
            email:obj.email,
            cell:obj.complete[0].cell,
            adress:obj.complete[0].location.street.name,
            city:obj.complete[0].location.city,
            state:obj.complete[0].location.state,
         
        }
    },
	
	methods: {
		closeNav() {
			document.getElementById("sidebar").style.display = "none"; 
			document.getElementById("SideBar2").style.display = "initial";
			document.getElementById("container").style.marginLeft = "0";
		} 
	},
};
</script>

<style scoped>
.container{
    display: inline-block;
    background-color: white;
    border: 1px solid;
    padding: 0px;
    box-shadow: 0px 5px 10px 0px #888888;
    margin: 20px 5px;
}

#user-image{
    margin-top: 1rem;
    border-radius: 50%;
     border: 5px #333 solid;
}
.contact{
    text-align: left;
    margin-left: 10px;
}
.contact p{
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 0.8em;
    margin-bottom: 20px;
    margin-right: 10px;

}
h1{
    max-width:100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5em;
    text-align: center;
    color: #2c3e50;
    margin: 0px 10px 
}
h3{
    width:100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.em;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  
}

@media (max-width: 1000px) { 
	.sidebar{
		display: none;
	}

 }

</style>