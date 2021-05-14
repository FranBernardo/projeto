<template>
  <div class="home">
    
     <h3>ADD User</h3>

    <form v-on:submit.prevent="handleSubmitForm()">
      <!--last_name-->
      <label> Last Name </label>
      <input type="text" placeholder="User name" v-model="user.last_name"><br>
      <!--first_name -->
      <label> First Name </label>
      <input type="text" placeholder="first Name" v-model="user.first_name"/><br>
      <!-- email -->
      <label> Email </label>
      <input type="text" placeholder="Email" v-model="user.email"/><br>
      <!--Senha-->
      <label> Password </label>
      <input type="text" placeholder="password" v-model="user.password"/><br>

      <div>
        <button @click="submitNewUser">
            ADD
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import UserService from '@/services/UserService';

export default {
  name: 'Home',
  data(){
    return{
      user: {
        last_name: null,
        first_name:null,
        email:null,
        password:null
      }
    }
  },
  methods:{
    handleSubmitForm(){},
    
    async submitNewUser() {
      try{
        
        await UserService.createUsers(this.user);
      
      }catch (error) {
        console.log(error);
      }
    },
  },

}
</script>
