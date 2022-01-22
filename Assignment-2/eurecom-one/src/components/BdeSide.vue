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
                    <button class="button is-dark is-medium"  @click=onClick>
                        Contact us
                    </button>
            </p>

            <div class=contact-form v-if=showForm>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                    <label class="label">Subject</label>
                    <div class="control">
                        <div class="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                        </div>
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                    </div>

                    <div class="field">
                    <div class="control">
                        <label class="checkbox">
                        <input type="checkbox">
                        I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                    </div>

                    <div class="field">
                    <div class="control">
                        <label class="radio">
                        <input type="radio" name="question">
                        Yes
                        </label>
                        <label class="radio">
                        <input type="radio" name="question">
                        No
                        </label>
                    </div>
                    </div>

                    <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
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
           showForm: true 
        }
    },
methods:{
    onClick(){
        console.log("clicked")
    }
}

};
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

button{
    margin: 30px auto 5px 25%;
    max-width: 300px;
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