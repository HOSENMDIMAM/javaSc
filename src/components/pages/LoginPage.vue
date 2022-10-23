<template>
<div class="login">
    <div class="loginHeader">
        User Login
    </div>
    <div class="loginContainer">
        <table>
            <tr>
                <td>Username</td>
                <td>:</td>
                <td><input type="text" placeholder="Username" v-model="user.username"></td>
            </tr>
            <tr>
                <td>Password</td>
                <td>:</td>
                <td><input type="password" placeholder="Password" v-model="user.password"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><button class="addBtn" @click="loadingNow()">Login</button></td>
            </tr>
        </table>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'LoginPage',
    data () {
        return {
            user: {
                username :"",
                password : ""
            }
        }
    },
    methods: {
        
        loadingNow() {
            axios.get('http://localhost:3000/user')
              .then((res) => {
                let response = res.data
                response.forEach((item) => {
                    if (item.username === this.user.username && item.password === this.user.password){
                        this.$router.push({name : "adminPanel"})
                    } else {
                        console.log('try again')
                    }
                })
              }).catch((Error) => {
                console.log(Error)
              })
            console.log(this.user)
        }
    }
}
</script>
<style scoped>
.login{
	width: 377px;
    min-height: 174px;
    border: 1px solid #eaeaea;
    background: #efefef;
    margin: 111px auto;
    border: 1px solid #cccccc;
}

.loginHeader{
	padding: 9px 22px;
    background: #1794b5;
    color: #fff;
}

.loginContainer{
	padding: 22px;
}
.addBtn{
	color: #fff;
    background: #1982e4;
    border: 1px solid #1b6eb9;
    padding: 4px 11px;
    font-size: 17px;
    cursor: pointer;
    margin: 20px;
}

</style>