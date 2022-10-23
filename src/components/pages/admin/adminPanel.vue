<template>
<div class="admin">
    <div id ="header">
        <h1 class="fleft">Simple Ecomerce</h1>
        <a class="fright" href="#">Logout</a>
    </div>
    <div id="sidebar">
        <ul class="nav">
            <li>
                <router-link to ="/adminPanel/adminCategory">
                    Category
                </router-link>
            </li>
            <li>
                <router-link to ="/adminPanel/adminSupplier">
                    Supplier
                </router-link>
            </li>
            <li>
                <router-link to = "/adminPanel/adminProduct">
                    product
                </router-link>
            </li>
            <li>
                <router-link to = "/shopMainPage">
                    Shop
                </router-link>
            </li>
        </ul>

    </div>
    <div id="main">
        <router-view />
    </div>
</div>
</template>

<script>
export default {
    name: 'adminPanel',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body{
	background: #e3e3e3;
	color: #757575;
}

a{
	text-decoration: none;
}
#header{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: #2a669e;
	padding: 9px;
	height: 55px;
	border-bottom: 1px solid #f1f1f1;
}
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body{
	background: #e3e3e3;
	color: #757575;
}

a{
	text-decoration: none;
}
#sidebar{
	position: fixed;
	top: 55px;
	left: 0;
	bottom: 0;
	background: #eeeeee;
	width: 288px;
	overflow-y: auto;
	border-right: 1px solid #dadada;
	border-top: 1px solid #dadada;
}
#main{
	position: fixed;
	top: 55px;
	left: 288px;
	bottom: 0;
	right: 0;
	padding: 22px 44px;
	overflow-y: auto;
	background: #fff;
}

.fleft{
	float: left;
}

.fright{
	float: right;
}

.nav{
	margin-top: 44px;
}

/* .nav li{

} */

.nav li a{
	display: block;
	padding: 9px 22px;
	font-size: 22px;
	text-decoration: none;
	color: #3c3c3c;
    text-shadow: 0 1px 0 #fff;
}

.nav li a.active, .nav li a.router-link-active, .nav li a:hover{
	background: #fff;
    color: #4d90fe;
}




</style>
