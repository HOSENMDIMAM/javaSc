<template>
    <h2>Latest Product</h2>
    <hr>
    <div class="product" v-for="product in allProducts" :key="product.id">
        <router-link :to="'/shopMainPage/shopProductDetails/'+ product.id">
            <div class="productContainer">
            <img src="@/assets/addImage.png">
            <br><br>
            <strong>{{product.name}}</strong>
            <p class="price"> &#2547; {{product.price}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'shopProduct',
        data() {
            return {
                allProducts: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                axios.get("http://localhost:3000/user")
                    .then((res) => {
                        this.allProducts = res.data
                    })
            }
        }

    }
</script>

<style scoped>
    div.product {
        width: 25%;
        float: left;
    }

    div.productContainer {
        margin: 11px;
        min-height: 155px;
        text-align: center;
        padding: 5px;
        cursor: pointer;
    }

    div.productContainer:hover {
        box-shadow: 0 0 3px 2px #e0e0e0;
    }


    .product img {
        width: 100%;
        height: 99px;
        /*border: 2px solid #fff;
	box-shadow: 0 0 3px 2px #eee;*/
    }

    .product a {
        text-decoration: none;
    }

    p.price {
        color: #e07f26;
    }
</style>