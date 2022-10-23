<template>
    <div>
        <h1 class="fleft"> {{product.name}}</h1>
        <!-- all product a redirect krbe -->
        <router-link to="/shopMainPage/shopProduct" class="fright">
            All Products
        </router-link>
        <!-- div clear -->
        <div class="clear"></div>
        <hr>

        <div class="product-left">
            <img src="@/assets/addImage.png">
            <br>
        </div>
        <div class="product-right">
            <div class="product-description">
                <p>
                    <strong>Category : </strong> {{product.Category}} <br><br>
                    <strong>Supplier : </strong> {{product.Supplier}} <br><br>
                    <strong>Price : </strong> {{product.price}} <br><br>
                    <strong>Description : </strong> {{product.description}} <br><br>
                </p>
                <strong>Quantity : </strong>
                <input type="number" class="input-number" v-model="Quantity">
                <button class="addBtn" @click="AddToCart()"> Add to cart</button>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    // import c_Product from '@/components/pages/shop/shopMainPage.vue'

    export default {
        name: 'shopProductDetails',
        data() {
            return {
                productID : 0,
                Quantity : 1,
                product : {}

            }
        },
        // components : {
        //     c_Product
        // },
        mounted () {
            // er maddome link er id number pabo rout er moddeme
            this.productID = this.$route.params.id
            console.log(this.productID);
            this.init()
        },
        methods : {
            init() {
                axios.get('http://localhost:3000/user/' + this.productID)
                  .then((res) => {
                    this.product = res.data
                    console.log(res.data.id , this.product);
                  })
            },
            AddToCart () {
                let Quantity = "Ok"
                // let Product = this.Product
                console.log("qanayiy"+Quantity)
                this.$emit('AddToCartShowing',Quantity)
            }
        }

    }
</script>
<style scoped>
    .fleft {
        float: left;
    }

    .fright {
        float: right;
    }

    .clear {
        clear: both;
    }

    hr {
        border-top: none;
        margin: 15px 0;
    }

    .product-left {
        float: left;
        width: 50%;
    }

    .product-left img {
        max-width: 100%;
    }

    .product-right {
        float: right;
        width: 50%;
    }

    .product-description {
        margin-left: 33px;
    }

    .input-number {
        width: 55px;
    }

    .addBtn {
        color: #fff;
        background: #1982e4;
        border: 1px solid #1b6eb9;
        padding: 4px 11px;
        font-size: 17px;
        cursor: pointer;
    }
    .addBtn:hover {
        background: #0e5ca5;
    }
</style>