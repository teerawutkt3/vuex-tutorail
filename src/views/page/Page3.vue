<template>
    <div class="">
        <h1>page3</h1>
        <b-row class="justify-content-center">
            <b-col cols="5">
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            </b-col>
        </b-row>
        <b-row class="my-1 justify-content-center" v-for="type in types" :key="type">
            <b-col sm="3">
                <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
            </b-col>
            <b-col sm="5">
                <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Please select an option' },
                    { value: 'a', text: 'This is First option' },
                    { value: 'b', text: 'Selected Option' },
                    { value: { C: '3PO' }, text: 'This is an option with object value' },
                    { value: 'd', text: 'This one is disabled', disabled: true }
                ],
                types: [
                    'text',
                    'number',
                    'email',
                    'password',
                    'search',
                    'url',
                    'tel',
                    'date',
                    'time',
                    'range',
                    'color'
                ]
            }
        }
    }
</script>