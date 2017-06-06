<template>
    <div id='demo'>
        {{$store.state.count}}
        {{msg}}
    </div>
</template>
<script>
    export default{
        name:'',
        data(){
            return {
                msg:'hi'
            }
        }
    }
</script>
