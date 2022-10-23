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
                        Category Name
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="newCategory.name" placeholder="Category Name">
                    </td>
                </tr>
                <tr>
                    <td>
                        Category Description
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
                        Category Name
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="editCategory.name" placeholder="Category Name">
                    </td>
                </tr>
                <tr>
                    <td>
                        Category Description
                    </td>
                    <td>
                        <textarea type="text" v-model="editCategory.description" placeholder="Write your short description . . ."></textarea>
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
        
        <h2 class="fleft">Categories</h2>
        <button class="addBtn fright" @click="addNewEvent">Add New</button>
        <div class="clear"></div>
        <hr>
        <table class="nice-table">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>

            <tr v-for ="category in categories" :key="category.id" >
                <td>{{category.id}}</td>
                <td>{{category.name}}</td>
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
                    description : ''
                 },
                 editCategory : {},
                 deleteCategory : {},
                 categories : []
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
                    let response = res.data
                    response.forEach((item) => {
                        console.log(item.username)
                        if (!(item.username && item.password)){
                        // loop er bitor evabe kaj hobe na
                        // this.categories = item
                        // correct
                            this.categories.push(item)
                        }

                    })
                    console.log(res.data[1].name);
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
                axios.put("http://localhost:3000/user/" + this.editCategory.id,this.editCategory)
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
                this.editCategory = edit_msg
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


</style>