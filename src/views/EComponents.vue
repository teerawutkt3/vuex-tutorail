<template>
    <div>

        <h1 class="mb-4">Components</h1>
        <h3>Buttons</h3>
        <b-save /> &nbsp;
        <b-cancel id="cancel"/> &nbsp;
        <b-back :click="onclickBack"/> &nbsp;
        <b-print id="print"/> &nbsp;
        <b-delete id="delete"/> &nbsp;
        <b-reset id="reset"/> &nbsp;
        <b-create id="create"/> &nbsp;

        <hr>
        <h3>Card</h3>
        <b-row class=" mt-1 mb-1">
            <b-col lg="4"  md="6" sm="12">
                <b-card :imgShow="true" :header="true">
                    <template v-slot:header>
                        Header1
                    </template>
                    <template v-slot:body>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </template>
                </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="12">
                <b-card :imgShow="true" :header="true">
                    <template v-slot:header>
                        Header2
                    </template>
                    <template v-slot:body>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </template>
                </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="12">
                <b-card :imgShow="true" :header="true">
                    <template v-slot:header>
                        Header3
                    </template>
                    <template v-slot:body>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </template>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'e-components',
        methods: {
            onclickBack: () => {
                console.log("onclickBack")
            }
        }
    }
</script>

<style>

</style>