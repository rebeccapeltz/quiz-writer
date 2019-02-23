<template>
  <div id="app">
    <h1>Quiz Writer</h1>
    <div>
      <div class="right-align login">
        <b-form inline>
          <label class="sr-only" for="inlineFormInputName2">User Name</label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="User Name"/>

          <label class="sr-only" for="inlineFormInputGroupUsername2">Password</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inlineFormInputGroupUsername2" placeholder="Password"/>
          </b-input-group>

          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

          <b-button variant="primary">Login</b-button>
        </b-form>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: Barlow;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d0d0e;
  padding-top: 60px;
  background-color: rgb(190, 15, 15);
}
h1 {
  color: white;
}

.right-align {
  display: flex;
  justify-content: flex-end;
}
.login {
  padding: 5px;
}
</style>
