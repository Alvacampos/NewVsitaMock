import Vue from 'vue'
import Router from 'vue-router'
import Performance from './components/Performance/Performance.vue';
import AssetFlows from './components/AssetFlows/AssetFlows.vue';
import Constituents from './components/Constituents/Constituents.vue';
import HoldingsAnalysis from './components/HoldingsAnalysis/HoldingsAnalysis.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Performance',
      component: Performance
    },
    {
      path: '/assetFlows',
      name: 'Asset Flows',
      component: AssetFlows
    },
    {
      path: '/constituents',
      name: 'Constituents',
      component: Constituents
    },
    {
      path: '/holdingsAnalysis',
      name: 'Holdings Analysis',
      component: HoldingsAnalysis
    }
  ]
})
