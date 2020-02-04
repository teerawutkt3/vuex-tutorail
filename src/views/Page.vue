<template>
    <div class="page text-center">
        <h1>Page children router</h1>
        <b-row class=" mt-1 mb-1 justify-content-center">
            <b-col cols="6">
                <b-form>
                    <b-row>
                        <b-col cols="6" >
                            <b-form-group
                                    id="input-group-1"
                                    label="Email address:"
                                    label-for="input-1"
                                    description="We'll never share your email with anyone else."
                            >
                                <b-form-input  id="input-1"  type="email"  required  placeholder="Enter email" size="sm" ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                <b-form-input  id="input-2"  required  placeholder="Enter name" size="sm"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="6" class="text-right">
                            <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        </b-col>
                        <b-col cols="6" class="text-left">
                            <b-form-checkbox value="that">Check that out</b-form-checkbox>
                        </b-col>
                    </b-row>

                    <b-save />
                    &nbsp;
                    <b-reset type="reset"/>
                </b-form>
            </b-col>
        </b-row>
        <br>
        <div id="nav" class="text-center">
            <b-button-group>
                <b-button variant="info" to="/page/page1" style="color: aliceblue">Page1</b-button>
                <b-button variant="info" to="/page/page2" style="color: aliceblue">Page2</b-button>
                <b-button variant="info" to="/page/page3" style="color: aliceblue">Page3</b-button>
            </b-button-group>
        </div>
        <br>
        <router-view/>

    </div>
</template>
