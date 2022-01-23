<template>
   <div class="wrapper">
    <Header /> 
    <Nav />
    <!-- inside there are the otpions for the email -->
    <div class="aside-1 container">
        <div class="email-option"><button class="button" @click="emailOption('Inbox')"> Inbox</button></div>
        <div class="email-option"><button class="button" @click="emailOption('Sent')"> Sent</button></div>
        <div class="email-option"><button class="button" @click="emailOption('Inbox')"> Spam</button></div>
    </div>

    <!-- inside there are the emails -->
    <div class="card-email">
        <h1 class="title is-3">{{nameCard}}</h1>
        <table v-if="!loading">
        <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Object</th>
            <th>See Email</th>
        </tr>
        <tr v-for="email in emails" :key="email.id">
            <td>{{ email.email }}</td>
            <td>{{ email.name }}</td>
            <td>{{ email.object }}</td>
            <td><button class="button"> Open </button></td>
        </tr>
        </table>
    
    </div>

    <!-- this is used to send a new email -->
    <div class="card-new-email"></div>

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
        this.updateData();
        var obj = JSON.parse(sessionStorage.getItem("account"));
        console.log(obj)

        return {
            nameCard: "Inbox",
            loading: false,
            emails: [],
        }
    },
    methods:{
        emailOption(name){
            this.nameCard = name;
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

.container{
    display: inline-block;
    background-color: white;
    border: 1px solid;
    box-shadow: 0px 5px 10px 0px #888888;
    margin: 5px 5px 10px 10px;
}

.email-option{
    border-bottom: 1px solid;

}
.email-option button{
    width: 100%;
    height: 100%;
    
}

table{
    table-layout: fixed;
    max-width: 100%;
    margin: 0% auto 0% auto;
    text-align: left;
    border-collapse: separate;
    border-spacing: 0px 7px;
}

table td,
table th{
    padding:0 15px 0 15px;
    word-wrap: break-word;
}

table th{
    border-bottom: 2pt solid black;
}

table td{
    border-bottom: 0.1pt solid gray;
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

