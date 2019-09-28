<template>
  <div class="wrapper">
    <div class="header">
      <div class="header_logo">

      </div>
      <div class="header_route">
        <router-link :to='item.path' v-for="(item, index) in routes" :key="index" active-class="active">
          <i class="hro-icon" v-html="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </div>


    </div>
    <div class="hearder_view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  name:'layer',
  props:{},
  data(){
    return {
      routes:[
        {
          path:"/home",
          icon:"&#xe606;",
          name:'首页'
        },
        {
          path:"/customer",
          icon:"&#xe645;",
          name:'客户'
        },
        {
          path:"/staff",
          icon:"&#xe646;",
          name:'员工'
        },
        {
          path:"/fund",
          icon:"&#xe603;",
          name:'公积金'
        }
      ]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
  @navbar-height: 64px;     //Navbar高度
  .wrapper{
    height: 100%;
  }
  .header{
    height: @navbar-height;
    width: 100%;
    background: #252c36;
    .header_logo{
      width: 180px;
      float: left;
    }
    .header_route{
      margin-left: 200px;
      a{
        float: left;
        display: block;
        width: 120px;
        height: @navbar-height;
        text-align: center;
        line-height: 64px;
        color: #fff;
        cursor: pointer;
        i{
          margin-right: 10px;
        }
        &.active{
          background: #09101a;
          color: #a80b19;
        }
      }
    }
  }
  .hearder_view{
      position: absolute;
      width: 100%;
      height: ~"calc(100% - (@{navbar-height}))";
      top: 64px;
      left: 0px;
    }
</style>