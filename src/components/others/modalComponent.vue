<template>
    <transition name="scale">
        <div class="modal" v-if = "modalComponentVisible">
            <div class="modalContainer">
                <div class="modalHeader">
                    <p class="fleft">{{modalComponentHeading}}</p>
                    <p class="fright modalClose" @click="modalComponentClose"> X </p>
                    <div class="clear"></div>
                </div>
                <div class="modalContent">
                    <slot></slot>
                </div>
                <div class="modalFooter">
                    <button class="fright btnClose" @click="modalComponentClose">Close</button>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name : 'modalComponent',
        props : {
            modalComponentVisible : Boolean,
            modalComponentHeading : String
        },
        methods : {
            modalComponentClose () {
                this.$emit('modalComponentEvent', false)
            }
        }

    }
</script>
<style scoped>
.modal{
	position: fixed;
	z-index: 99999;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0,0,0, 0.8);
	overflow-y: auto;
}

.modalContainer{
	width: 95%;
	max-width: 960px;
	background: #fff;
	margin: 99px auto;
}

.modalHeader{
	min-height: 22px;
	background: #e3e3e3;
	font-size: 22px;
	padding: 11px;
}
.modalContent{
	min-height: 88px;
	background: #fff;
	padding: 44px;
}

.modalFooter{
	min-height: 22px;
	background: #e3e3e3;
	font-size: 22px;
	padding: 11px;
}
/* =============transition=======================*/
.scale-enter-active, .scale-leave-active {
  transition: all .25s;
}
.scale-enter, .scale-leave-to{  
  transform: scale(1.2); 
}

/* ============= end transition=======================*/
/* ========for heading========= */
.fleft{
	float: left;
}

.fright{
	float: right;
}

.clear{
	clear: both;
}
p.modalClose{
	background: #e46a6a;
    display: inline-block;
    padding: 3px 6px;
    color: #fff;
    font-size: 12px;
    border-radius: 14px;
    margin-top: 2px;
    cursor: pointer;
}

p.modalClose:hover{
	background: red;
}

.btnClose{
	background: #f1d4d4;
    display: inline-block;
    padding: 5px 22px;
    color: #c33a3a;
    cursor: pointer;
    border: 1px solid #c38c8c;
}

.btnClose:hover{
	background: #c38c8c;
    color: #fff;
}

</style>