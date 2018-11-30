<template>
  <div class="container-fluid"> 
    <div class="row">
      <p>US Passive All Cap Equity</p>
    </div>
    <div class="row">
      <div class="col-8">
        <ul class="nav">
          <router-link 
            v-for="(anchor, key) in anchors"
            :to="anchor.path" 
            :key="key"
            tag="li"
            exact
            id="tabTitles">
              <a>{{anchor.name}}</a>
          </router-link>      
        </ul> 
      </div>
      <div class="col-2">
        <app-dropdown :subtitle="titleOptions"></app-dropdown>
      </div>
      <div class="col-2">
        <app-dropdown :subtitle="titleModule"></app-dropdown>
      </div>
    </div>   
  </div>
</template>

<script>
import DropDown from '../../DropdownGenerator/DropdownGenerator.vue';
export default {
  data() {
    return {
      anchors: [
        {
          path: '/',
          name: 'Performance'       
        },
        {
          path: '/assetFlows',
          name: 'Asset Flows'        
        },
        {
          path: '/constituents',
          name: 'Constituents'        
        },
        {
          path: '/holdingsAnalysis',
          name: 'Holdings Analysis'        
        }
      ], 
      titleOptions: 'Options',
      titleModule: 'Module Help'
    };
  },
  components: {
    'app-dropdown': DropDown
  }
}
</script>


<style scoped>
  ul {
    display: inline-flex;
  }
  
  a {
    margin: 0 10px;
    color: #999999;
  }  

  div.row {
    margin-top: 10px;
    color: #003667;
  }

  div p {
    padding: 5px 10px;
  }

  #tabTitles {
    margin: 10px 5px 0px 10px;
    border-top: 1px solid #999999;
    border-left: 1px solid #999999;
    border-right: 1px solid #999999;
  }
</style>

