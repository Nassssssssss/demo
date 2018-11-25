<template>
    <div class="box">
        <div class="container">
            <router-link to="usechest" id="aa" class="ab" @click="click1">胸痛</router-link>
            <router-link to="useapoplexy" id="aa" class="ab" @click="click2">卒中</router-link>
            <router-link to="usechild" id="aa" class="ab" @click="click3">患儿</router-link>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {
     created(){
         this.$router.push('/usechest')
     },
    methods:{
        click1(){
            var a=document.getElementById('aa')
            aa.classList.add('classover')
        },
        click2(){},
        click3(){},
    }
}
</script>

<style>
.box{
    height: 100%;
    overflow: hidden;
}
.container{
    border-bottom: 1px solid #666;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
}
.ab{
   color: #666;
   text-decoration: none;
   float: left;
   width: 33.33%;
   text-align: center;
   padding-top: 8px;
   padding-bottom: 8px;
}
.router-link-active{
  color: rgb(45, 137, 153);
}
</style>
