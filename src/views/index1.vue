<template>
    <div>
        这里是子路由
        <div>当前时间{{time}}</div>
        <div>当前时间戳{{timestamp_data}}</div>
        <button @click="tiao()">跳转地图</button>
        <div>当前宽度:{{styeWidth}}</div>
        <div>当前高度:{{styeHeight}}</div>
        <button @click="router()">获取权限</button>
        <div class="ha1" :style="{width:styeWidth*0.3+'px',height:styeHeight*0.3+'px'}"></div>
        <template>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </template>
        <div>
            加减计算
            <div>
                {{test}}
                <button @click="Add()">添加</button>
                <button @click="reduce()">减少</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{ 
            time:"",
            timestamp_data:"",
            DataTime:[
                {
                    name:'小明',
                    Time:'2019-10-09'
                },
                {
                    name:"小红",
                    Time:'2018-10-09'
                },
                {
                    name:'小灰',
                    Time:'2019-09-08'
                },
                {
                    name:"小法",
                    Time:'2019-02-08'
                },
                {
                    name:"小红",
                    Time:'2018-10-22'
                },
                {
                    name:"小红",
                    Time:'2018-10-05'
                },{
                    name:"小红",
                    Time:'2018-10-11'
                }
            ],
            DataTimelist:[
                {
                    name:'小明',
                    Time:'2009'
                },
                {
                    name:"小红",
                    Time:'2012'
                },
                {
                    name:'小灰',
                    Time:'2011'
                },
                {
                    name:"小法",
                    Time:'2013'
                },
                {
                    name:"小红",
                    Time:'2014'
                },{
                    name:"小红",
                    Time:'2015'
                },{
                    name:"小红",
                    Time:'2012'
                },{
                    name:'小明',
                    Time:'2009'
                },
                {
                    name:"小红",
                    Time:'2012'
                },
                {
                    name:'小灰',
                    Time:'2011'
                },
                {
                    name:"小法",
                    Time:'2013'
                },
                {
                    name:"小红",
                    Time:'2014'
                },{
                    name:"小红",
                    Time:'2015'
                },{
                    name:"小红",
                    Time:'2012'
                },
            ],
            arrayDate:[
                {
                    name:"小白",
                    age:15
                },
                {
                    name:"小黑",
                    age:13,
                },
                {
                    name:"小红",
                    age:19,
                },
                {
                    name:'小兰',
                    age:20
                },
                {
                    name:"小黑黑",
                    age:10
                }
            ],
            styeWidth:[],
            styeHeight:[],
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
                value: ''
            }
    },
    computed: { 
        test () {
            return this.$store.state.listData 
        },
        listData() {
            return this.$store.state.ListGetData
        },
        listDataGet() {
            return this.$store.state.ListGetData
        }
    },
    created(){
        window.addEventListener('resize', this.getHeight());
        this.$store.dispatch("ListGET")
    },
    mounted(){
        console.log(this.listDataGet)
        setTimeout(()=>{
            console.log(this.listData)
        },2000)
        this.styeWidth = document.body.offsetWidth; 
        this.styeHeight = document.body.offsetHeight;
        setInterval(()=>{
            this.timestamp_data = (new Date()).valueOf();
            this.time = this.timestamp(this.timestamp_data)
        },1000)
        this.compare()
        this.change(this.DataTime)
        this.chanAge(this.arrayDate)
    },
    methods:{
        tiao(){
            this.$router.push("/test3")
        },
        router(){
            sessionStorage.setItem("next","这是跳转权限")
        },
        getHeight(){
            this.styeHeight = document.body.clientHeight;
            this.styeWidth = document.body.clientWidth;
        },
        change(e){
            e.sort((a,b)=>{
                return Date.parse(b.Time) - Date.parse(a.Time)
            })
            console.log(e)
        },
        chanAge(e){
            e.sort((a,b)=>{
                return a.age - b.age
            })
            console.log(e)
        },
        Add() {
            this.$store.commit("Add")
        },
        reduce() {
            this.$store.commit("reduce")
        },
        compare(){
            let a = {}
            this.DataTimelist.forEach((item)=>{
                if(a[item.Time]){
                    a[item.Time]++
                }else{
                    a[item.Time]=1
                }
            })
            console.log(a)
        }
    }
}
</script>
<style scoped>
.ha1{
    border: 1px solid black;
    background-color: red;
}
</style>