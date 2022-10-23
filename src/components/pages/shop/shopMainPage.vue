<template>
    <div id="admin">
        <div id="header">
            <h1 class="fleft">Simple Ecomerce</h1>
            <!-- <a class="fright" href="#">Home</a> -->
            <router-link to="/adminPanel/adminCategory" class="fright">
                Home
            </router-link>
        </div>
        <div id="shop">
            <div id="shopContainer">
                <!-- router-view holo shopProducts k dekhano -->
                <router-view />
            </div>
        </div>
        <div id="cart">
            <div id="cartContainer">
                <h2>Your Cart</h2>
                <hr>
                <table class="cart">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <th>p</th>
                        <th>{{curt}}</th>
                        <th>pr</th>
                    </tr>
                    <tr>
                        <th>
                            <button @click="checkout">Checkout</button>
                            
                        </th>
                    </tr>
                </table>

            </div>
        </div>
    </div>
    <!-- <ProductDetails :AddToCartShowing="AddToCartShowing"></ProductDetails> -->
    </template>

<script>
    // import ProductDetails from '@/components/pages/shop/shopProductDetails.vue'

    export default {
        name: 'shopMainPage',
        // props : {
        //     AddToCartShowing : Number
        // },
        data() {
            return {
                msg: 'hello',
                curt : []
            }
        },
        // components : {
        //     ProductDetails
        // },
        mounted () {
            // this.$emit("AddToCartShowing", peyload => {
            //     this.curt.push(peyload)
            //     console.log(this.curt)
            // })
        },
        methods: {
            // AddToCartShowing (e) {
            //     console.log(e)
            // },
            checkout() {
                console.log("okkkkkkkkk")
            }
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #e3e3e3;
        color: #757575;
    }

    #header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #2a669e;
        padding: 9px;
        height: 55px;
        border-bottom: 1px solid #f1f1f1;
    }

    a {
        text-decoration: none;
    }

    #shop {
        position: fixed;
        top: 55px;
        left: 0;
        right: 333px;
        bottom: 0;
        background: #fff;
        overflow-y: auto;
    }

    #shopContainer {
        padding: 44px 0;
        width: 666px;
        margin: auto;
    }

    #cart {
        position: fixed;
        top: 55px;
        right: 0;
        width: 333px;
        background: #f1f1f1;
        bottom: 0;
        overflow-y: auto;
    }

    #cartContainer {
        padding: 22px;
    }

    table.cart {
        width: 100%;
    }

    table.cart th {
        text-align: left;
    }

    #main {
        position: fixed;
        top: 55px;
        left: 288px;
        bottom: 0;
        right: 0;
        padding: 22px 44px;
        overflow-y: auto;
        background: #fff;
    }

    .fleft {
        float: left;
    }

    .fright {
        float: right;
    }

</style>