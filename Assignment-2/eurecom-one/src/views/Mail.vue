<template>
   <div class="wrapper">
    <Header /> 
    <Nav />
    <!-- inside there are the otpions for the email -->
    <div class="aside-1 container">
        <div class="email-option"><button class="button" @click="emailOption('Inbox')"> Inbox</button></div>
        <div class="email-option"><button class="button" @click="emailOption('Sent')"> Sent</button></div>
        <div class="email-option"><button class="button" @click="emailOption('Deleted')"> Deleted</button></div>
        <div class="email-option"><button class="button" @click="emailOption('Spam')"> Spam</button></div>

    
    </div>

    <!-- inside there are the emails -->
    <div class="card-email" v-if="!readEmail && !newEmail">
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

    <!-- this is used to read the email -->
    <div class="card-new-email" v-if="readEmail && !newEmail">
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

    <!-- newEmail -->
    <div class=contact-form v-if=newEmail>
        <div class=new-email>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">From</label>
            </div>
            <div class="field-body">
                <div class="field">
                <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Name" :value="user.completName" readonly>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                    <input class="input is-success" type="email" placeholder="Email" :value="user.email" readonly>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label"></div>
        </div>
        
        <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">To</label>
        </div>
        <div class="field-body">
            <div class="field has-addons">
                <p class="control">
                    <input class="input toEmail" type="text" placeholder="new email">
                </p>
                <p class="control buttonToEmail">
                    <a class="button is-static">
                    @eurecom.fr
                    </a>
                </p>
            </div>
        </div>
        </div>


        <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">Subject</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <input class="input" type="text" placeholder="Subject" v-model="objectSent">
                </div>
            </div>
        </div>
        </div>

        <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">Text</label>
        </div>
        <div class="field-body">
            <div class="field">
            <div class="control">
                <textarea class="textarea" placeholder="Insert Here your email" v-model="textSent"></textarea>
            </div>
            </div>
        </div>
        </div>

        <div class="field is-horizontal">
        <div class="field-label">
            <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
            <div class="field">
            <div class="control">
                <button class="button is-primary" @click="newEmailClick()">
                Send Email
                </button>
            </div>
            </div>
        </div>
        </div>
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

        let sentId = JSON.parse(sessionStorage.getItem("sent"))
        if (sentId == null) sentId = []

        this.updateData();
        
        var obj = JSON.parse(sessionStorage.getItem("account"));
        console.log(obj)
        
        return {
            user: obj,
            nameCard: "Inbox",
            emails: [], // contains the emails fetched from firebase
            
            nameSent: "", //the name used inside the reading email object
            dateSent: "", //used inside reading email object
            objectSent: "", //used inside reading email object
            textSent:"", //the text sent/read

            sentId: sentId, //used to store all the sent email
            spamId: spamId, //used to store the emails in the spam
            deleteId: deleteID,//used to store the delete emails in the spam
            correctId:[],//the correct id to display (filtered)
            input_text: "", //used to filter the emails

            newEmail: false,//flag to trigger the new email
            readEmail: false,//flag to triggere read the email
            loading: true, //flag to display the table only after have loaded from firebase

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
            if(name == 'reply'){
                console.log('reply')
                this.newEmail = true;
                
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
        newEmailClick(){
            var today = new Date();

            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let newObj = {
                email: this.user.email,
                registered: date,
                object: this.objectSent,
                about: this.textSent
            }
            console.log(newObj)
            this.sentId.push(newObj)
            sessionStorage.setItem('sent', JSON.stringify(this.sentId))
            this.loading=false
            this.newEmail=false
            this.readEmail=false
        },
        openEmail(email){
            email = JSON.parse(email)
            this.nameSent = email.email
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
            if (name == 'Sent'){
                this.nameCard = "Sent"
                console.log('Sent');
                this.correctId = this.sentId
            }

            this.newEmail=false;
            this.readEmail=false;
            this.loading=false



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

            this.loading=false
            
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
.new-email{
    background-color: #c2c2c2;
    width: 70%;
    margin: 10% auto 0px auto;
    padding: 50px 70px 50px 0;
    border: 1px solid;
}

.toEmail{
    margin-left: 20px;
}
.buttonToEmail{
    float: left !important;
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
.card-new-email, 
.contact-form{
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

@media (max-width: 1000px) { 
	.card-email{
		font-size: 8px;
		grid-row: 4;
		grid-column: 1/6;
		margin-top: 20px;
	}
	
	.aside-1 {
		grid-column: 1/6;
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		grid-template-rows: 50px;
		
	}
	
	.wrapper {
		display: grid;
		grid-template-columns: 20% 20% 20% 20% 20%;
		grid-template-rows: 150px 50px 50px 800px 20% 20%;
	}
	
	table{
		overflow-y:scroll;
		max-width: 100%;
		height:500px;
		display:block;
		margin-left: 0%;
		text-align: left;
  
		border-collapse: separate;
		border-spacing: 0px 7px;
	}

	table td,
	table th{
		padding:0 0px 0 10px;
		word-wrap: break-word;
		vertical-align: middle;
	}
	
	table button{
		margin-bottom: 4px;
		width: 50px;
		padding-left:10px;
		text-align: center;
		width:40px;
		font-size:11px;
		left: -10px;
	}
	
}
</style>

