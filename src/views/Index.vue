<!-- eslint-disable -->
<template>
  <div class="about">
    <Head msg="北京三月雨技术培训有限公司"></Head>
    <div style="position: absolute;background: #FFFFFF;height: 3.5rem;width: 100%;z-index: 2;"></div>
    <div class="menuContent">
      <b-navbar hidden-sm toggleable="lg" type="dark" style="height: 100%;">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav  class="navbarContent ">
            <b-container class="bv-example-row">
              <b-row class="Content" >
                <b-col  style="border-left: none;" :class="current1?borderLeft1:borderLeft2" @mouseover="mouseOver1(1)" @mouseleave="mouseLeave()">
                  <b-nav-item href="#" style="position: absolute;z-index: 6;display: block;margin-left: 0.5rem;">
                    <router-link :class="current1?aColor:blackSpan" to="/" >
                      <span  style="font-family: 微软雅黑,'Microsoft Yahei';">首页展示</span>
                    </router-link>
                    
                  </b-nav-item>
                </b-col>
                <b-col :class="current2?borderLeft1:borderLeft2" @mouseover="mouseOver1(2)" @mouseleave="mouseLeave()">
                  <b-nav-item href="#" style="position: absolute;z-index: 6;display: block;margin-left: 0.5rem;">
                    <router-link :class="current2?aColor:blackSpan" to="/introduction">
                      <span style="font-family: 微软雅黑,'Microsoft Yahei';">公司介绍</span>
                    </router-link>
                  </b-nav-item>
                </b-col>
                <b-col :class="current3?borderLeft1:borderLeft2" @mouseover="mouseOver1(3)" @mouseleave="mouseLeave()" >
                  <b-nav-item href="#" style="position: absolute;z-index: 6;display: block;margin-left: 0.5rem;">
                    <router-link :class="current3?aColor:blackSpan" to="/course">
                      <span style="font-family: 微软雅黑,'Microsoft Yahei';">课程体系</span>
                    </router-link>
                  </b-nav-item>
                </b-col>
                <b-col :class="current4?borderLeft1:borderLeft2" @mouseover="mouseOver1(4)" @mouseleave="mouseLeave()">
                  <b-nav-item href="#" style="position: absolute;z-index: 6;display: block;margin-left: 0.5rem;">
                    <router-link :class="current4?aColor:blackSpan" to="/teacher">
                      <span style="font-family: 微软雅黑,'Microsoft Yahei';">名师风采</span>
                    </router-link>
                  </b-nav-item>
                </b-col>
                <b-col :class="current5?borderLeft1:borderLeft2" @mouseover="mouseOver1(5)" @mouseleave="mouseLeave()">
                  <b-nav-item href="#" style="position: absolute;z-index: 6;display: block;margin-left: 0.5rem;">
                    <router-link :class="current5?aColor:blackSpan" to="/news">
                      <span style="font-family: 微软雅黑,'Microsoft Yahei';">培训要闻</span>
                    </router-link>
                  </b-nav-item>
                </b-col>
                <b-col  :class="current6?borderLeft1:borderLeft2" @mouseover="mouseOver1(6)" @mouseleave="mouseLeave()">
                  <b-nav-item href="#" style="position: absolute;z-index: 6;display: block;margin-left: 0.5rem;">
                    <router-link :class="current6?aColor:blackSpan" to="/cadet">
                      <span  style="font-family: 微软雅黑,'Microsoft Yahei';">学员中心</span>
                    </router-link>
                  </b-nav-item>
                </b-col>
                <b-col  :class="current7?borderLeft1:borderLeft2" @mouseover="mouseOver1(7)" @mouseleave="mouseLeave()">
                  <b-nav-item href="#" style="position: absolute;z-index: 6;display: block;margin-left: 0.5rem;">
                    <router-link :class="current7?aColor:blackSpan" to="/contact" >
                      <span style="font-family: 微软雅黑,'Microsoft Yahei';">联系我们</span>
                    </router-link>
                  </b-nav-item>
                </b-col>
                <b-col >
                  <b-nav-item href="#" style="color: #FFFFFF;">
                    1
                  </b-nav-item>
                </b-col>
              </b-row>
              
            </b-container>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div style="position: fixed;z-index: 2;width: 100%;text-align: right;margin-top: 32%;">
        <router-link to="/recruitStudent">
          <b-img src="http://39.96.80.148:8085/recruitStudent.png"></b-img>
        </router-link>
        
      </div>
    </div>
    <router-view/>
    <b-row>
      <b-col >
          <Root></Root>
      </b-col>
    </b-row>
  </div>
</template>
<script>
// @ is an alias to /src Menu
import Head from '@/components/Head.vue'
import Root from '@/components/Root.vue'

export default {
  name: 'index',
  data: function(){
    return {
      current1 : true,
      current2 : true,
      current3 : true,
      current4 : true,
      current5 : true,
      current6 : true,
      current7 : true,
      titleVal : ['首页展示','公司介绍','培训课程','名师风采','培训要闻','学员中心','联系我们'],
      borderLeft : 'borderLeft',
      aColor : 'aColor',
      borderLeft1 : 'borderLeft1',
      borderLeft2 : 'borderLeft2',
      blackSpan : 'blackSpan',
    }
  },
  components: {
    Head,
    Root
  },
  methods: {
        mouseOver1: function(inti){
      debugger
      if (inti == 1) {
        this.current1 = false;
      } else
      if (inti == 2) {
        this.current2 = false;
      } else
            if (inti == 3) {
              this.current3 = false;
            } else
      if (inti == 4) {
        this.current4 = false;
      } else
      if (inti == 5) {
        this.current5 = false;
      } else
      if (inti == 6) {
        this.current6 = false;
      } else
      if (inti == 7) {
        this.current7 = false;
      } 
        },
     mouseOver2: function(ever){
        this.current = 2;
    },
     mouseOver3: function(ever){
        this.current = 3;
    },
     mouseOver4: function(ever){
        this.current = 4;
    },
     mouseOver5: function(ever){
        this.current = 5;
    },
    mouseOver6: function(ever){
        this.current = 6;
    },
    mouseOver7: function(ever){
        this.current = 7;
    },
        mouseLeave: function () {
            this.current1 = true;
      this.current2 = true;
      this.current3 = true;
      this.current4 = true;
      this.current5 = true;
      this.current6 = true;
      this.current7 = true;
      
        },
    
    }
}
</script>
<style lang="less">
  @import "~rfs/less";
  html,body{
    overflow-x:hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
  }
  @font-face {
    font-family: 'FZXiHei I-Z08S';
    src:url('font/fang/方正细黑一简体.woff') format('woff');/*non-IE*/
  }
  a{
    color: black;
    text-decoration:none;
  }
  a:hover{
    color: black;
    text-decoration:none;
  }
  .Content{
    margin: 0!important;
    padding: 0!important;
    width: 100%;
  }
  .indexModuleSubhead{
    .rfs(30);
    font-weight: 400;
    font-family: 'FZXiHei I-Z08S','方正细黑-简体';
  }
  .aColor:hover{
    color: black;
    font-family: Microsoft YaHei;
  }
  .indexModuleTitle{
    .rfs(64);
    font-weight: 600;
    font-family: Arial;
  }
  .bd1{
    border: 1px solid;
  }
  .bd5{
    border: 5px solid rgba(198, 18, 23, 0);
  }
  .pm{
    padding: 0.1rem;
    margin: 0;
  }
  .height15{
    height: 1.5rem;
  }
  .height20{
    height: 2.5rem;
  }
  .height35{
    height: 15rem;
  }
  .width100{
    width: 100%;
  }
  .redSpan{
    color: red;
  }
  .menuContent{
    height: 5rem;
    width: 100%;
    background-color: rgba(98, 23, 28,0.8);
  }
  .navbarContent{
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    color: rgba(98, 23, 28, 0.9);
    font-weight: 600;
  }
  .textCenter{
    text-align: center;
  }
  .textLeft{
    text-align: left;
  }
  .background114{
    background: rgba(114, 113, 113, 1);
  }
  .backgroundBlack{
    background: white;
  }
  .aColor{
    color: black;
    font-family: "Microsoft YaHei";
  }
  .contentTitle{
    padding-left: 18%;
    padding-right: 18%;
  }
  .whiteSpan{
    color: white;
  }
  .blackSpan{
    display: block;
    color: black;
  }
  .blackSpan:hover{
    display: block;
    color: black;
  }
  .borderLeft1{
    border: 1px solid white; 
    border-top: none; 
    border-right: none;
    border-bottom: none;
    text-align: center;
  }
  .borderLeft2{
    border: 1px solid white; 
    border-top: none; 
    border-right: none;
    border-bottom: none;
    color: black;
    background-color: rgb(208, 208, 208);
    text-align: center;
  }
  .dengbi29{
    padding-bottom: 29%;
    height: 0;
  }
</style>
