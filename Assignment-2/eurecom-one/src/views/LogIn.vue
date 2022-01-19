<template>
    <div class="container">
    <div>
        <img src='../assets/logo.png' @click="iconClick">
    </div>
    
    <div class=form>
        <h1>LogIn Page</h1>

        <img
        id=user-image
        v-if = "form.seen"
        :src="form.picture"
        :alt="`${form.firstName} ${form.lastName}`"
        />

        <div class="field">

            <p :class=formClass.name.pClass>
                <input :class=formClass.name.inputClass type="text" placeholder="Name and Surname" v-model=form.completName @blur="nameCheck(event)">
                <span class="icon is-small is-left">
                    <i class="fas fa-file-signature"></i>
                </span>
                <span class="icon is-small is-right" v-if = "formClass.name.seen">
                    <i class="fas fa-check"></i>
                </span>
                <span class="icon is-small is-right" v-if = "formClass.name.error">
                    <i class="fas fa-envelope"></i>
                </span>
            </p>
        </div>

        <div class="field">
            <p :class=formClass.email.pClass>
                <input :class=formClass.email.inputClass type="email" placeholder="Email" v-model=form.email  @blur="emailCheck()">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right" v-if = "formClass.email.seen">
                    <i class="fas fa-check"></i>
                </span>
                <span class="icon is-small is-right" v-if = "formClass.email.error">
                    <i class="fas fa-envelope"></i>
                </span>

            </p>
        </div>

        <div class="field">
            <p :class=formClass.psw.pClass>
                <input :class=formClass.psw.inputClass type="password" placeholder="Password" v-model=form.password  @blur="pswCheck()">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
                <span class="icon is-small is-right" v-if = "formClass.psw.seen">
                    <i class="fas fa-check"></i>
                </span>
                <span class="icon is-small is-right" v-if = "formClass.psw.error">
                    <i class="fas fa-envelope"></i>
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
            form: {
                firstName: '',
                lastName: '',
                completName: '',
                email: '',
                picture: '',
                password: '',
                seen: false,
                id: 1
            },
            formClass: {
                name: {
                    inputClass: 'input',
                    pClass: 'control has-icons-left',
                    seen: false,
                    error: false
                },
                email: {
                    inputClass: 'input',
                    pClass: 'control has-icons-left',
                    seen: false,
                    error: false
                },
                psw: {
                    inputClass: 'input',
                    pClass: 'control has-icons-left',
                    seen: false,
                    error: false
                },
                nameClass: 'input',
                emailClass:'',
                passwordClass:'',
            }        
        }
    },
    methods:{
        nameCheck(){
                //if (! condition ){ // used to ad some kind of constraint on name
                //    this.formClass.name.inputClass = "input is-danger"
                //    this.formClass.name.error= true 
                //   alert('insert a valid Name')
                //}
                //else{
                    this.formClass.name.inputClass = "input is-success"
                    this.formClass.name.seen= true
                //}
                
                this.formClass.name.pClass = "control has-icons-left has-icons-right"
                
            },
        emailCheck(){

                if (! this.form.email.includes('@')){ 
                    this.formClass.email.inputClass = "input is-danger"
                    this.formClass.email.error= true 
                    alert('insert a valid Email')
                }
                else{
                    this.formClass.email.inputClass = "input is-success"
                    this.formClass.email.seen= true
                }
                this.formClass.email.pClass = "control has-icons-left has-icons-right"
            },

        pswCheck(){
                //if (! (true == true) ){ // used to add some kind of constraints 
                //    this.formClass.psw.inputClass = "input is-danger"
                //    this.formClass.psw.error= true 
                //    alert('insert a valid Password')
                //}
                //else{
                    this.formClass.psw.inputClass = "input is-success"
                    this.formClass.psw.seen= true
                //}
                this.formClass.psw.pClass = "control has-icons-left has-icons-right"
            },
        
        async getUser(){
            console.log('clicked Random User') 
            //this.$router.push("/Home")
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();
            console.log(results) 
            this.form.firstName =  results[0].name.first,
            this.form.lastName= results[0].name.last,
            this.form.completName = this.form.firstName + " " + this.form.lastName,
            this.form.email= results[0].email ,
            this.form.picture= results[0].picture.large
            this.form.password= results[0].login.password
            this.form.seen=true

            this.formClass.name.inputClass = "input is-success"
            this.formClass.name.pClass = "control has-icons-left has-icons-right"
            this.formClass.name.seen= true

            this.formClass.email.inputClass = "input is-success"
            this.formClass.email.pClass = "control has-icons-left has-icons-right"
            this.formClass.email.seen= true

            this.formClass.psw.inputClass = "input is-success"
            this.formClass.psw.pClass = "control has-icons-left has-icons-right"
            this.formClass.psw.seen= true
            },

        logIn(){
                console.log("LogIn clicked");
                if (!this.form.completName || !this.form.email || !this.form.password){
                    alert("missing values on the form")
                }
                else{
                    var storage = window.sessionStorage;
                    storage.setItem(this.form.id, this.form);
                    this.$router.push('/home')
                }

            },

            
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