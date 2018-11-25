<template>
    <div id="box">
    
        <div class="nav">
            <span class="fw">范围</span>
            <mt-button size="small" id="aaa" class="aac" @click.native.prevent="container1">近七天</mt-button>
            <mt-button size="small" id="bbb" @click.native.prevent="container2">近六月</mt-button>
        </div>

        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" :swipeable='false'>
                <mt-tab-container-item id="tab-container1">

                <div id="echarts" v-if="close1"></div>
                
                <!-- :style="{width: '400px', height: '400px'}" -->
                <!-- <mt-cell  title="tab-container 1"></mt-cell> -->
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container2">

                <div id="echartes" v-if="close2"></div>

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
        active: 'tab-container1',
      
    };
  },
    methods:{
        loadchars(){
            var dom = document.getElementById('echarts')
            const option = {
                color: ['#3398DB'],
                title: {
                    text: '近七天',
                    x:'center',
                    y:'top',
                    textAlign:'left'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['10', '11', '12', '13', '14', '15', '16'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390, 330, 220]
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
                color: ['#3398DB'],
                title: {
                    text: '近六月',
                    x:'center',
                    y:'top',
                    textAlign:'left'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['10', '11', '12', '13', '14', '15', '16'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            }
            const charts = echarts.init(doms)
            charts.setOption(option)

            // window.addEventListener("resize",function(){
            //     doms.resize();
            // });
        },
        container2(){
            var b=document.getElementById('bbb')
            var a=document.getElementById('aaa')
            a.classList.remove('aac')
            b.classList.add('aac')
            this.close2=true
            this.close1=false
            this.active='tab-container2'
            setTimeout(()=>{
                this.loadchares()
            })
        },
        container1(){
            var a=document.getElementById('aaa')
            var b=document.getElementById('bbb')
            b.classList.remove('aac')
            a.classList.add('aac')
            this.close1=true
            this.close2=false
            this.active='tab-container1'
             setTimeout(()=>{
                this.loadchars()
            })

        }
    },
    mounted(){
        
        this.loadchars()

    }

}
</script>

<style>
.aac{
    color: #fff;
    background-color: blue;
}
#box{
    height: 100%;
}
.mint-button--default{
    margin: 0 15px;
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
    height:  55%;
    border-radius: 0 0 5px 5px;
}
.mint-tab-container-wrap{
    height: 100%;
}
#echarts{
    width: 95%;
    height: 100%;
}
#echartes{
    width: 95%;
    height: 100%;

}
.nav{
    padding: 20px 10px;
    background-color: #fff;
}
.mint-tab-container-item{
    padding-top: 20px;
    height: 95%;
    background-color: #fff;
}
</style>
