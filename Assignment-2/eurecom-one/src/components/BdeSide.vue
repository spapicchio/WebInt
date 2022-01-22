<template>
<div class=container>
        <img
        src="../assets/bde.png"
        alt="BDE"
        />

        <h1><b>BDE</b> is the best Student Association!</h1>
        <div class=contact>
            <p>
                The Student Association (Bureau des Elèves) is made up of 10 students 
                (8 for the BDE and 2 for the BDS) representing the home institutions 
                of EURECOM's students. The board is elected by students for one year 
                after an event-filled campaign.
            </p>

            <p> 
                Conctact us to have a clearer idea on what you can do with us!
                <br>
                    <button class="button is-dark is-medium"  @click=onClick v-if="!showForm">
                        Contact us
                    </button>
            </p>
            
            <!-- Email Sent text -->
            <div id="emailSent-id" class="control has-icons-left has-icons-right"  v-if="sent">
                <input class="input is-success is-rounded " type="text" value="Email sent!" readonly>
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>

            <!-- Form to contact BDE -->
            <div class=contact-form v-if=showForm>
                
                <!-- Email -->
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-success" type="email" placeholder="Email input" :value=email readonly>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                </div>

                <!-- Subject -->
                <div class="field">
                    <label class="label">Subject</label>
                    <div class="control">
                        <div class="select" >
                            <select ref=selected v-model="selected">
                                <option selected="selected">General question</option>
                                <option>New Event</option>
                                <option>Founding</option>
                                <option>About</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- Message -->
                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea ref="message" class="textarea" placeholder="Write here your message" v-model="mailBDE"></textarea>
                    </div>
                </div>

                <!-- mainling list -->
                <div class="field">
                    <div class="control">
                        <p>Do you want to be inserted in the mainling list?</p>
                        <label class="radio">
                            <input type="radio" name="question" value="Yes" v-model="picked">
                            Yes
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" value="No" v-model="picked" checked>
                            No
                        </label>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link is-rounded" @click=submitClick>Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light is-rounded" @click=cancelClick >Cancel</button>
                    </div>
                </div>
            </div>

            

        </div>



</div>

</template>

<script>
export default {
data(){
        var obj = JSON.parse(sessionStorage.getItem("account"));
        console.log(obj)
        return {
           firstName: obj.firstName,
           lastName: obj.lastName,
           completeName: obj.completName,
           showForm: false,
           email: obj.email,
           mailBDE: "",
           picked: "No",
           selected: "General Question",
           sent: false,
        }
    },
methods:{
    onClick(){
        console.log("contact us clicked")
        this.cancelClick();
        this.showForm=true;
        this.sent = false;
    },
    cancelClick(){
        console.log('cancel clicked');
        this.mailBDE = "";
    },
    submitClick(){
        console.log("submitClicked");
        if (this.selected == ""){
            this.$refs.selected.focus();
            //console.log(this.$refs.message)
            return
        }
        if (this.mailBDE == ""){
            this.$refs.message.focus();
            //console.log(this.$refs.message)
            return
        }
        this.showForm =false;
        this.sent = true;
        console.log(this.picked + " | " + this.selected + " | " + this.mailBDE)
    },
},

}
</script>

<style scoped>

.container{
    display: inline-block;
    background-color: white;
    border: 1px solid;
    padding: 0px;
    box-shadow: 0px 5px 10px 0px #888888;
    margin: 1px 5px;
}
.container img{
    margin: 10px auto 5px auto;
    max-width: 80%;
    border: 2px #333 solid;
    border-radius: 50%;
}
.contact{
    text-align: left;
    margin-left: 10px;
    margin-right: 10px;
}
.contact p{
    width: 300px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 0.8em;
    margin-bottom: 20px;
}


.contact p button{
    margin: 30px auto 5px 25%;
    max-width: 300px;
}
.contact-form{
    max-width: 80%;
    margin: 10px auto 10px auto;
}
.field.is-grouped{
    display: flex;
    max-width: 70%;
    margin: 10px auto 10px auto;
}

#emailSent-id{
    margin: 10px 0px 20px 0;
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

</style>