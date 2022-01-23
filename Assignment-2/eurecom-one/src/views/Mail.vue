<template>
   <div class="wrapper">
    <Header /> 
    <Nav />
    <!-- inside there are the otpions for the email -->
    <div class="aside-1 container">
        <div class="email-option"><button class="button" @click="emailOption('Inbox')"> Inbox</button></div>
        <div class="email-option"><button class="button" @click="emailOption('Deleted')"> Deleted</button></div>
        <div class="email-option"><button class="button" @click="emailOption('Spam')"> Spam</button></div>
    </div>

    <!-- inside there are the emails -->
    <div class="card-email" v-if="!readEmail">
        <h1 class="title is-3">{{nameCard}}</h1>
        <input v-model="input_text" class="input is-hovered" type="text" placeholder="Search Emails" >

        <table v-if="!loading">
        <tr>
            <th>Email</th>
            <th>Date</th>
            <th>Object</th>
            <th>See Email</th>
        </tr>
        <tr v-for="email in emailFiltered()" :key="email.id">
            <td>{{ email.email }}</td>
            <td>{{ email.registered }}</td>
            <td>{{ email.object }}</td>
            <td><button class="button" @click="openEmail(JSON.stringify(email))"> Open </button></td>
        </tr>
        </table>
    
    </div>

    <!-- this is used to send a new email -->
    <div class="card-new-email" v-if="readEmail">
        <div class="header-mail">
            <p><b>From:</b> {{nameSent}}</p>
            <p><b>Date:</b> {{dateSent}}</p>
            <p><b>Object:</b> {{objectSent}}</p>
            <div class="button-header">
                <button class="button is-success" @click="headerButton('reply')">Reply</button>
                <button class="button" @click="headerButton('spam')">Spam</button>
                <button class="button is-danger" @click="headerButton('delete')">Delete</button>
                
            </div>
        </div>
        <div class="text-email">
            <p>{{textSent}}</p>
        </div>

    </div>

    <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';
import { getFirestore, doc, getDoc } from "firebase/firestore"

export default {
    name: "Mail",
    data(){
        let spamId = JSON.parse(sessionStorage.getItem("spam"))
        if (spamId == null) spamId = []
        let deleteID = JSON.parse(sessionStorage.getItem("delete"))
        if (deleteID == null) deleteID = []
        this.updateData();
        var obj = JSON.parse(sessionStorage.getItem("account"));
        console.log(obj)
        
        return {
            nameCard: "Inbox",
            loading: false,
            emails: [],
            readEmail: false,
            nameSent: "",
            dateSent: "",
            objectSent: "",
            textSent:"",
            spamId: spamId,
            deleteId: deleteID,
            correctId:[],
            email: null,
            input_text: "",
        }
    },
    methods:{
        emailFiltered(){

            return this.correctId.filter(email => {
                if (JSON.stringify(email.email).toLowerCase().startsWith('"'+this.input_text.trim().toLowerCase()))
                    return true
                if (JSON.stringify(email.registered).toLowerCase().startsWith('"'+this.input_text.trim().toLowerCase()))
                    return true
                if (JSON.stringify(email.object).toLowerCase().startsWith('"'+this.input_text.trim().toLowerCase()))
                    return true
                if(this.input_text == "")
                    return true
                
                return false
            });
        },
        updateEmails(){
            this.correctId = this.emails.filter((email) => {
                return !(this.spamId.includes(email._id) || this.deleteId.includes(email._id))
            })
        },
        headerButton(name){
            console.log('clicked')
            if(name == 'reply'){
                console.log('reply')
                
            }
            if(name == 'spam'){
                this.spamId.push(this.email._id)
                sessionStorage.setItem("spam", JSON.stringify(this.spamId))
                this.updateEmails();
                this.readEmail = false;
                

            }
            if (name == 'delete'){
                this.deleteId.push(this.email._id)
                sessionStorage.setItem("delete", JSON.stringify(this.deleteId))
                this.updateEmails();
                this.readEmail = false;
                
            }   
        },
        openEmail(email){
            email = JSON.parse(email)
            this.nameSent = email.name
            this.objectSent = email.object
            this.dateSent = email.registered
            this.textSent = email.about
            this.email = email
            this.readEmail = true

        },
        emailOption(name){
            if (name == 'Inbox'){
                console.log('Inbox');
                this.nameCard="Inbox"
                this.updateEmails();
            }

            if (name == 'Spam'){
                this.nameCard = "Spam"
                console.log(this.spamId);
                this.correctId = this.emails.filter((email) => {
                return this.spamId.includes(email._id)
                
            })
            }      
            if (name == 'Deleted'){
                this.nameCard = "Deleted"
                console.log('Deleted');
                this.correctId = this.emails.filter((email) => {
                    return this.deleteId.includes(email._id)
                })
            }


        },
        async updateData(){
            // firestore instance
 
            // firestore instance
            const db = getFirestore();
            // reference inside the firestore db
            const ref = doc(db, "users", "simone");

            const docSnap = await getDoc(ref);

            if (docSnap.exists()) {
            this.emails = docSnap.data().inbox;
            console.log(docSnap.data().inbox)

            this.correctId = this.emails.filter((email) => {
                return !(this.spamId.includes(email._id) || this.deleteId.includes(email._id))
            })
            
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }


            
        },
    },
    components: {
        Footer,
        Nav,
        Header,
    
    },
    };
</script>

<style scoped>
input{
    width: 80%;    
}
.container{
    display: inline-block;
    background-color: white;
    border: 1px solid;
    box-shadow: 0px 5px 10px 0px #888888;
    margin: 5px 5px 10px 10px;
}


.header-mail{
     border: 1px solid;
     text-align: left;
     max-width: 50%;
     margin: 50px auto 0 auto;
     background-color: #d3d3d3;
     text-size-adjust: 2em;
     font-size: 25px;
     padding: 10px;
}
.header-mail p,
.text-mail p{
    margin: 15px 15px 15px 15px;
    margin-left:20px;
}
.text-email{
    padding: 10px;
    border: 1px solid;
    text-align: left;   
    max-width: 50%;
    margin: 0 auto 0 auto;
    background-color: #d3d3d3;
    font-size: 20px
}

.button-header{
    margin:0 5px 0 5px;
}
.button-header button{
    margin:0 5px 0 5px;
}

.email-option{
    border-bottom: 1px solid;

}
.email-option button{
    width: 100%;
    height: 100%;
    
}

table{
    overflow-y:scroll;
    max-width: 80%;
    height:500px;
    display:block;
    margin-top: 10px;
    margin-left: 10%;
    text-align: left;
  
    border-collapse: separate;
    border-spacing: 0px 7px;
}
table tr{
    margin: 0 auto 0 50px;
}

table td,
table th{
    padding:0 15px 0 15px;
    word-wrap: break-word;
    vertical-align: middle;
}
table button{
    margin-bottom: 4px;
}

table th{
    border-bottom: 2pt solid black;
}

table td{
    border-bottom: 0.1pt solid gray;
}

table th{
    width:30%;
}
.wrapper {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 150px 50px 20% 20% 20% 20%;
}
.header{
    grid-column: 1/6;
    grid-row-start:1;
}
.nav{
    grid-row-start: 2;
    grid-column: 1/6;
}
.main {
    text-align: center;
    background:  rgba(218, 218, 218, 0.151);
    grid-column: 2/5;
    grid-row: 3/7;
}
.card-email,
.card-new-email{
    text-align: center;
    grid-column: 2/6;
    grid-row: 3/7;
    box-shadow: 0px 5px 10px 0px #888888;
    margin: 5px 5px 10px 10px;
}



.aside-1 {
    background: rgba(134, 134, 134, 0.151);
    grid-column: 1;
    grid-row: 3/7;
}

.footer{
    grid-row: 7;
    grid-column: 1/6;
}
@media all and (min-width: 600px) {
  .aside { flex: 1 0 0; }
}
</style>

