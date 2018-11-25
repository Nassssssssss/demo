<template>
    <div class="box">
        <div class="container">
            <router-link to="comechest"  class="ab" >胸痛</router-link>
            <router-link to="comeapoplexy"  class="ab" >卒中</router-link>
            <router-link to="comechild"  class="ab" >患儿</router-link>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {
     created(){
         this.$router.push('/comechest')
     },
    methods:{
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
.nav{
    background-color: #fff;
}
</style>
