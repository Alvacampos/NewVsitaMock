<template>
  <div id="app" class="container-flex">
    <app-top-navbar></app-top-navbar>    
    <div class="row">
      <div class="col-2" id="asd">
        <app-side-bar></app-side-bar>         
      </div>      
      <div class="col-10">        
        <div class="row">
          <app-inner-bar></app-inner-bar>
        </div>
        <div class="row">
          <router-view/>
        </div>  
      </div>
    </div>    
  </div>
</template>

<script>
import TopNavBar from './components/NavBars/TopNavBar/TopNavBar.vue';
import SideBar from './components/NavBars/SideBar/SideBar.vue';
import InnerBar from './components/NavBars/InnerBar/InnerBar.vue'
export default {
  components: {
    'app-top-navbar': TopNavBar,
    'app-side-bar': SideBar,
    'app-inner-bar': InnerBar
  }
}
</script>

<style>
  div.tabs {
    margin-top: 0px;
    border-top: 1px solid #999999;
    width: 100%;
  }  
</style>
