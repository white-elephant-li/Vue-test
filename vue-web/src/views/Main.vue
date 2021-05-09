<template>
    <div>
        <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
    </div>
</template>

<script>
import toolBar from '@c/ToolBar.vue';
export default {
    components: {
        'tool-bar': toolBar
    },
    methods: {
        onChangeFragment: (componentName)=>{
            console.log(componentName);
        }
    },
}
</script>

<style >

</style>