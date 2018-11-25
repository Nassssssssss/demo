<template>
    <div id="box">
    
        <div class="nav">
            <div class="brra">
            <span class="fw">范围</span>
            <mt-button size="small" id="aaa" class="aac" @click.native.prevent="container1">本月</mt-button>
            <mt-button size="small" id="bbb" @click.native.prevent="container2">本季度</mt-button>
            <mt-button size="small" id="ccc" @click.native.prevent="container3">本年</mt-button>
            </div>
        </div>
         
        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" :swipeable='false'>

                <mt-tab-container-item id="tab-container1">
                <div id="echarts" v-if="close1"></div>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container2">
                <div id="echartes" v-if="close2"></div>
                </mt-tab-container-item>
                
                <mt-tab-container-item id="tab-container3">
                <div id="echarters" v-if="close3"></div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
name: 'page-tab-container',
    data() {
    return {
        close1:true,
        close2:false,
        close3:false,
        active: 'tab-container1',
      
    };
  },
    methods:{
        loadchars(){
            var dom = document.getElementById('echarts')
            const option = {
                title : {
                    text: '本月',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            const charts = echarts.init(dom)
            charts.setOption(option)
            // window.addEventListener("resize",function(){
            //     dom.resize();
            // });
        },
        loadchares(){
            var doms = document.getElementById('echartes')
            const option = {
                title : {
                    text: '本季度',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            const charts = echarts.init(doms)
            charts.setOption(option)

            // window.addEventListener("resize",function(){
            //     doms.resize();
            // });
        },
        loadcharers(){
            var domes = document.getElementById('echarters')
            const option = {
                title : {
                    text: '本年',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            const charts = echarts.init(domes)
            charts.setOption(option)

            // window.addEventListener("resize",function(){
            //     doms.resize();
            // });
        },
        container2(){
            var b=document.getElementById('bbb')
            var a=document.getElementById('aaa')
            var c=document.getElementById('ccc')
            a.classList.remove('aac')
            c.classList.remove('aac')
            b.classList.add('aac')
            this.close2=true
            this.close1=false
            this.close3=false
            this.active='tab-container2'
            setTimeout(()=>{
                this.loadchares()
            })
        },
        container1(){
            var a=document.getElementById('aaa')
            var b=document.getElementById('bbb')
            var c=document.getElementById('ccc')
            b.classList.remove('aac')
            c.classList.remove('aac')
            a.classList.add('aac')
            this.close1=true
            this.close2=false
            this.close3=false
            this.active='tab-container1'
             setTimeout(()=>{
                this.loadchars()
            })

        },
         container3(){
            var a=document.getElementById('aaa')
            var b=document.getElementById('bbb')
            var c=document.getElementById('ccc')
            a.classList.remove('aac')
            b.classList.remove('aac')
            c.classList.add('aac')
            this.close3=true
            this.close2=false
            this.close1=false
            this.active='tab-container3'
             setTimeout(()=>{
                this.loadcharers()
            },10)

        }
    },
    mounted(){
        
        this.loadchars()

    }

}
</script>

<style>
.btncs{
    height: 33px;
    width: 66px;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 10px;
    /* margin-left: 5px; */
}
.brra{
    padding:10px 0 10px 0 ;
    border-bottom: 1px solid #ccc
}
.aac{
    color: #fff;
    background-color: blue;
}
#box{
    height: 100%;
}
.mint-button--default{
     margin-left: 15px;
}
.fw{
    font-weight: 700;
    display: inline-block;
    padding: 0 10px;
}
.page-tab-container{
    height: 100%;
}
.mint-tab-container{
    height:  65%;
    border-radius: 0 0 5px 5px;
}
.mint-tab-container-wrap{
    height: 100%;
}
#echarts{
    width: 95%;
    height: 90%;
    padding: 0 0 20px 0
}
#echartes{
    width: 95%;
    height: 90%;

}
#echarters{
    width: 95%;
    height: 90%;

}
.mint-tab-container-item{
    /* padding-top: 20px; */
    height: 80%;
    background-color: #fff;
}
.zb{
    margin-top: 5px;
    border-bottom: 1px solid #ccc;
}
</style>
