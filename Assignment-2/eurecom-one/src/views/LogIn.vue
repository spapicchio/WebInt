<template>
    <div class="container">
    <div>
        <img src='../assets/logo.png' @click="iconClick">
    </div>
    
    <div class=form>
        <h1>LogIn Page</h1>

        <img
        id=user-image
        v-if = "seen"
        :src="picture"
        :alt="`${firstName} ${lastName}`"
        :class="gender"
        />

        <div class="field">
            <p class="control has-icons-left">
                <input :class=nameClass type="text" placeholder="Name and Surname" :value="`${firstName} ${lastName}`">
                <span class="icon is-small is-left">
                    <i class="fas fa-file-signature"></i>
                </span>

            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="email" placeholder="Email" :value=email>
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>

            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" :value=password @input="check($event)">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
            </div>
            <div class="field">
            <p class="control">
                <button class="button is-success" @click=logIn>
                Login
                </button>
                <button class="button is-success" @click=getUser>Random User</button>
            </p>
        </div>
    </div>
    
    </div>
</template>

<script>

export default ({
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            picture: '',
            password: '',
            nameClass: 'input',
            emailClass:'',
            passwordClass:'',
            seen: false
        }
    },
    methods:{
        async getUser(){
            console.log('clicked Random User') 
            //this.$router.push("/Home")
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();
            console.log(results)
            this.firstName =  results[0].name.first,
            this.lastName= results[0].name.last,
            this.email= results[0].email ,
            this.picture= results[0].picture.large
            this.password= results[0].login.password
            this.seen=true
            },

            logIn(){
                console.log("LogIn clicked");
            },
            
            check(event){
                console.log(event)
            }
        }
})
</script>

<style scoped>
button{
    margin: 0px 10px 0 10px
}
.form{
    max-width: 400px;
    padding: 30px 30px 30px 30px;

    margin: 0 auto 200px auto;
    background-color: rgb(241, 238, 238);
}
h1{
    width:100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 2em;
    text-align: center;
    color: #2c3e50;
}

div{
    width:100%
}

.container{
    display:block;
}

.form h1,
.form h3 {
width:100%;
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
font-size: 2em;
text-align: center;
color: #2c3e50;
margin-bottom: 1rem;
font-weight: normal;
}

#user-image {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

</style>