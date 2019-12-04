<template>
    <div class="page">
        <h1>User children router</h1>
        <br>
        <div id="nav">
            <router-link to="/page/page1">Page1</router-link> |
            <router-link to="/page/page2">Page2</router-link>
        </div>
        <br>
        <router-view/>

    </div>
</template>
