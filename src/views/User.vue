<template>
    <div id="User">        
        <UserList/>

    </div>
</template>

<script>
    import UserList from '../components/user/UserList'

    export default {
        name: "User",
        components: {
            UserList
        }
    };
</script>

<style scoped>

</style>