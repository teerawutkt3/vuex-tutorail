<template>
    <div id="User">
        <h1>User</h1>
        <UserList />
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