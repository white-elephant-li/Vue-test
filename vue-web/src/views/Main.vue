<template>
    <div class="main">
        <component :is="currentComponent"></component>
        <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
    </div>
</template>

<script>
import toolBar from '@c/currency/ToolBar.vue';
export default {
    components: {
        'tool-bar': toolBar,
        //异步组件引入
        'home': () => import('@c/Home'),
        'my': () => import('@c/My'),
        'shopping': () => import('@c/Shopping'),
    },
    data: function() {
        return {
            currentComponent: 'home'
        }
    },
    methods: {
        // 组件切换
        onChangeFragment: function(componentName){
            this.currentComponent = componentName;
        }
    },
}
</script>

<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;    
    }
</style>