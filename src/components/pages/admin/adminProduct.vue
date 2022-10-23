<template>
    <div>
        <!-- Add modal -->
        <modal-Component v-if="modalView"
        :modalComponentHeading="modalComponentHeading"
        :modalComponentVisible="modalComponentVisible"
        @modalComponentEvent="modalComponentEvent">
            <table>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="newCategory.name" placeholder="Category Name">
                    </td>
                </tr>
                <tr>
                    <td>
                        Category
                    </td>
                    <td>
                        <select v-model="newCategory.Category">
                            <option value="">
                                --Select--
                            </option>
                            <option v-for="category in  categories" :key="category.id">
                                {{category.name}}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Supplier
                    </td>
                    <td>
                        <select v-model="newCategory.Supplier">
                            <option value="">
                                --Select--
                            </option>
                            <option>
                                {{newCategory.Supplier}}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price
                    </td>
                    <td>
                        <input type="text" v-model="newCategory.price" placeholder="price">
                    </td>
                </tr>
                <tr>
                    <td>
                        Image
                    </td>
                    <td>
                        <input type="file" id="image" @change="onfileChange">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <img src="@/assets/addImage.png" alt="No Image Selected" class="thumbnile">
                    </td>
                </tr>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <textarea type="text" v-model="newCategory.description" placeholder="Write your short description . . ."></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td class="tdBtn">
                        <button class="addBtn fright" @click="showingAddModal">Save</button>
                    </td>
                </tr>
            </table>
        </modal-Component>
        <!-- Edit modal -->
        <modal-Component v-if = "modalEdit"
        :modalComponentHeading="modalComponentHeading"
        :modalComponentVisible="modalComponentVisible"
        @modalComponentEvent="modalComponentEvent">
            <table>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="clickedProduct.name" placeholder="Category Name">
                    </td>
                </tr>
                <tr>
                    <td>
                        Category
                    </td>
                    <td>
                        <select v-model="clickedProduct.Category">
                            <option value="">
                                --Select--
                            </option>
                            <option v-for="category in  categories" :key="category.id">
                                {{category.Category}}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Supplier
                    </td>
                    <td>
                        <select v-model="clickedProduct.Supplier">
                            <option value="">
                                --Select--
                            </option>
                            <option>
                                {{clickedProduct.Supplier}}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price
                    </td>
                    <td>
                        <input type="text" v-model="clickedProduct.price" placeholder="price">
                    </td>
                </tr>
                <tr>
                    <td>
                        Image
                    </td>
                    <td>
                        <input type="file" id="image" @change="onfileChange">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <img src="@/assets/addImage.png" alt="No Image Selected" class="thumbnile">
                    </td>
                </tr>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <textarea type="text" v-model="clickedProduct.description" placeholder="Write your short description . . ."></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td class="tdBtn">
                        <button class="addBtn fright" @click="updateAddModal">Upgrade</button>
                    </td>
                </tr>
            </table>
        </modal-Component>
        <!-- Delete modal -->
        <modal-Component v-if = "modalDelete"
        :modalComponentHeading="modalComponentHeading"
        :modalComponentVisible="modalComponentVisible"
        @modalComponentEvent="modalComponentEvent">
            <h2>you are Going to Delete 
                 '{{deleteCategory.name}}'
            </h2>
            <button class="addBtn" @click="DeleteModal">Yes</button>
            <button class="addBtn" @click="modalComponentVisible = false">No</button>
           
        </modal-Component>
        <!-- showing page -->
        <h2 class="fleft">Categories</h2>
        <button class="addBtn fright" @click="addNewEvent">Add New</button>
        <div class="clear"></div>
        <hr>
        <table class="nice-table">
            <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Supplier</th>
                <th>description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>

            <tr v-for ="category in categories" :key="category.id" >
                <td>{{category.id}}</td>
                <td><img src="@/assets/addImage.png" alt="" class="icon"></td>
                <td>{{category.name}}</td>
                <td>{{category.Category}}</td>
                <td>{{category.Supplier}}</td>
                <td>{{category.description}}</td>
                <td><button class="edit" @click="modalComponentVisibleEdit(category)">Edit</button></td>
                <td><button class="delete" @click="DeleteCategory(category)">Delete</button></td>
            </tr>

        </table>
    </div>
    <!-- <div id="loading" v-if="loadingPage">
        <img src="/src/assets/img/Loading_2.gif">
    </div> -->

</template>
<script>
    import  axios from 'axios'
    export default {
        name : 'adminCategory',
        data () {
            return {
                 modalComponentVisible : false,
                 modalComponentHeading : '',
                 modalView : false,
                 modalEdit : false,
                 modalDelete : false,
                //  loadingPage  : false,
                 newCategory : {
                    name : '',
                    description : '',
                    Category : '',
                    Supplier : 'Supplier',
                    price : 0,
                    picture : '@/assets/addImage.png'
                 },
                 clickedProduct : {},
                 deleteCategory : {},
                 categories : [],
                 percent : 0
            }
        },
        mounted() {
            this.init()
        },
        methods : {
            // GET API
            init() {
                axios.get("http://localhost:3000/user")
                .then((res) => {
                    res.data.forEach((item) => {
                        if (!(item.username && item.password)){
                            console.log(item)
                            this.categories.push(item)
                        }
                    })
                })
            },
            // POST API
            showingAddModal() {
                this.loadingPage  = true
                axios.post("http://localhost:3000/user",this.newCategory)
                  .then((res) => {
                    this.modalComponentVisible = false
                    this.newCategory.name = ''
                    this.newCategory.description = ''
                    //init er maddome get api k refresh kre
                    this.init()
                    console.log(res.data);
                  })

                console.log("okkkkkkk");
            },
            // PUT API
            updateAddModal () {
                //1st time id Number pass then data pass
                axios.put("http://localhost:3000/user/" + this.clickedProduct.id,this.clickedProduct)
                  .then((res) => {
                    this.modalEdit = false
                    console.log("edit data : " , res.data);
                  })
            },
            // DELETE API
            DeleteModal() {
                axios.delete("http://localhost:3000/user/" + this.deleteCategory.id)
                  .then((res) => {
                    this.modalDelete = false
                    this.init()
                    console.log(res);
                  })
                this.deleteCategory = {}
            },
            addNewEvent () {
                this.modalEdit = false
                this.modalDelete = false
                this.modalView = true
                this.modalComponentVisible = true
                this.modalComponentHeading = 'Add New categories'
            },
            modalComponentEvent(msg) {
                this.modalComponentVisible = msg
            },
            // modal Edit
            modalComponentVisibleEdit (edit_msg) {
                console.log(edit_msg);
                this.modalView = false
                this.modalDelete = false
                this.modalEdit = true
                this.modalComponentVisible = true
                this.clickedProduct = edit_msg
                this.modalComponentHeading = 'Upgrade Category'
            },
            // Delete data
            DeleteCategory (delete_msg) {
                console.log(delete_msg);
                this.modalView = false
                this.modalEdit = false
                this.modalDelete = true
                this.modalComponentVisible = true
                this.deleteCategory = delete_msg
                
                this.modalComponentHeading = 'Are you sure!'
            },
            // image click
            onfileChange (e) {
                let file = e.terget.files || e.dataTransfer.files
                console.log(file);
            }
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

.fleft{
	float: left;
}

.fright{
	float: right;
}
.addBtn{
	color: #fff;
    background: #1982e4;
    border: 1px solid #1b6eb9;
    padding: 4px 11px;
    font-size: 17px;
    cursor: pointer;
}

.addBtn:hover{
	background: #0e5ca5;    
}
.clear{
	clear: both;
}
/* pass modalComponent */
input {
    width : 250px;
    height : 40px;
    margin-bottom: 20px;
}
td {
    color : rgba(18, 18, 20, 0.911);
    margin: 20px;
}
textarea{
    width: 350px;
    height: 100px;
}

/* self */

table.nice-table{
	width: 100%;
}

table.nice-table tr:nth-child(2n+1){
	background: #f7f7f7;
}

table.nice-table tr th, table.nice-table tr td, td{
	padding: 9px;
}

table.nice-table tr th{
	background: #9c69a0;
	color: #fff;
	text-align: left;
}

button.edit{
	background: #68b346;
    border: none;
    padding: 2px 9px;
    border-radius: 13px;
    color: #fff;
    cursor: pointer;
}

button.edit:hover{
	background: #3a771f;    
}

button.delete{
	background: #ce4c34;
    border: none;
    padding: 2px 9px;
    border-radius: 13px;
    color: #fff;
    cursor: pointer;
}

button.delete:hover{
	background: #ea2500;
}
#loading{
	position: fixed;
	z-index: 999999999;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(255,255,255, 0.8);
	text-align: center;
	color: #fff;
	font-size: 55px;
	padding-top: calc(50vh - 158px);
}

img.thumbnile{
	width: 177px;
	height: 177px;
}

img.icon{
	width: 55px;
	height: 55px;
}

.product-left{
	float: left;
	width: 50%;	
}

.product-left img{
	max-width: 100%;
}


</style>