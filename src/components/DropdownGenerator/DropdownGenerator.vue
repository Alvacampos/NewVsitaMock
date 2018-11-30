<template>
  <div class="dropdown row" id="wrapper">
    <button class="btn dropdown-toggle buttonToggler" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{subtitle}}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <router-link to="/Overview" class="dropdown-item"><a>Dummy Button</a></router-link>
    </div>
  </div> 
</template>

<script>
  export default {
    props: ['subtitle']
  }
</script>

<style scoped>
  .buttonToggler {
    font-size: 15px;
    font-weight: bold;   
    color: #003667;
    background-color: #E0E6ED;    
    padding: 2px;
    margin: 0;
  }

  #wrapper {
    background-color: #E0E6ED;  
    width: 70%;    
    padding: 0px 5px;    
  }  
</style>