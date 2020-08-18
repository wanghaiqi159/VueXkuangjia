<template>
<div style="width:100%;height:100%;">
这里是首页
    <div style="display:flex;width:100%;height: calc(100% - 25px)">
        <div style="width:20%;height: 100%;border:1px solid red;">
        侧边导航123
        </div>
        <div style="width:80%;height: 100% ;border:1px solid red;">
            <router-view></router-view>
        </div>
    </div>
</div>
    
    
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>