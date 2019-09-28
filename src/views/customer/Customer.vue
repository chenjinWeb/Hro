<template>
  <div class="wrapper">
    
    <div class="nav_left">
        <router-link to='/customer/social' active-class="active">
            <i class="hro-icon">&#xe718;</i>
            <span>参保明细</span>
        </router-link>
        <router-link to='/customer/rule' active-class="active">
            <i class="hro-icon">&#xe61b;</i>
            <span>社保规则设置</span>
        </router-link>
    </div>

    <div class="nav_right">
        <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
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
    .wrapper{
        background: #f7f8fa;
    }
    .nav_left{
        width: 190px;
        background: #fff;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding-top: 10px;
        border-right: 10px solid #f7f8fa;
        a{
            display: block;
            height: 45px;
            line-height: 45px;
            color: #4f4f4f;
            padding-left: 4px;
            i{
                margin-left: 10px;
                margin-right: 15px;
            }
            &.active{
                color: #a80b19;
                border-left: 4px solid #a80b19;
                padding-left: 0px;
                background: #ffebed
            }
        }
    }
    .nav_right{
        background: #fff;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding-left: 190px;
        border-top: 10px solid #f7f8fa;
    }
</style>