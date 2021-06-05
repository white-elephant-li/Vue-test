<template>
    <div class="main">
<!--keep-alive保持回退-->
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>
        <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
    </div>
</template>

<script>
import ToolBar from '@c/currency/ToolBar';
import Home from '@c/Home';
import Shopping from '@c/Shopping';
import My from '@c/My';
export default {
    name: 'Main',
    components: {
        ToolBar,
        'home': Home,
        'shopping': Shopping,
        'my': My
    },
    activated: function() {
        this.pushComponent();
    },
    data: function() {
        return {
            currentComponent: 'home'
        }
    },
    methods: {
        pushComponent: function (){
            let componentIndex = this.$route.params.componentIndex;
            if (!componentIndex) return;
            this.$refs.toolBar.onChangeComponent(componentIndex);
        },
        // 组件切换
        onChangeFragment: function(componentName){
            this.currentComponent = componentName;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>

