<template>
    <div id="User">
        <h1>User</h1>
        <b-card class="mb-3">
            <template v-slot:header>
                Search
            </template>
            <template v-slot:body>
                
            </template>
        </b-card>
        <b-card>
            <template v-slot:header>
                List
            </template>
            <template v-slot:body>
                <UserList/>
            </template>
        </b-card>

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