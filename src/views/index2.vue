<template>
    <div id="map" style="width:100%; height:100%; border:1px solid yellow;">
        
    </div>
</template>
<script>
import BMap from 'BMap'
export default {
    data(){
        return{

        }
    },
    methods:{
        createMap () {
            // // // 创建Map实例
            // var map = new BMap.Map("map");
            // // 初始化地图,设置中心点坐标和地图级别
            // map.centerAndZoom(new BMap.Point(121.48789949,31.24916171), 11)
            // // let point = new BMap.Map.point(121.48789949,31.24916171)
            // //添加地图类型控件
            // map.addControl(new BMap.MapTypeControl({
            //     mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]
            // }))
            // // 设置地图显示的城市 此项是必须设置的
            // map.setCurrentCity("上海")
            // //开启鼠标滚轮缩放
            // map.enableScrollWheelZoom(true)
            

            var map = new BMap.Map('map')
            var point = new BMap.Point(121.48789949,31.24916171)
            
            map.centerAndZoom(point, 12)
            var marker = new BMap.Marker(point) // 创建标注
            map.addOverlay(marker)    // 将标注添加到地图中
            map.setCurrentCity("上海")
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]
            }))
            map.enableScrollWheelZoom(true)
        }

    },
    mounted(){
        this.createMap();
    }
}
</script>
<style scoped>

</style>