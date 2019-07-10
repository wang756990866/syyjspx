<template>
  <div>
    <b-container fluid  class="Content">
      <b-row>
        <b-col cols="12" class="Content">
          <img class="width100 " src="http://39.96.80.148:8085/introductionBa.png" />
        </b-col>
        <b-col cols="12" class="height15"></b-col>
        <b-col cols="2" class="height15"></b-col>
        <b-col cols="8" class="height15 textLeft">
          <span>首页</span>&nbsp;&nbsp;<span>></span>&nbsp;&nbsp;
          <span>公司介绍</span>&nbsp;&nbsp;<span>></span>&nbsp;&nbsp;
          <span></span>&nbsp;&nbsp;&nbsp;&nbsp;
        </b-col>
        <b-col cols="12" class="height15"></b-col>
        <b-col cols="12" class="">
          <b-row class="contentTitle">
            <b-col  class="bd5 ">
              <div class="backgroundRgb238">
                <router-link class="aColor" to="/introduction/">
                  <span class="contentTitleVal">
                    公司简介
                  </span>
                </router-link>
              </div>
            </b-col>
            <b-col  class="bd5">
              <div class="backgroundRgb238">
                <router-link class="aColor" to="/Bloc">
                  <span class="contentTitleVal">公益活动</span>
                </router-link>
              </div>
            </b-col>
            <b-col  class="bd5">
              <div class="backgroundRgb238">
                <router-link class="aColor" to="/Idea">
                  <span class="contentTitleVal">文化理念</span>
                </router-link>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="height15"></b-col>
        <b-col cols="12" >
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
  msg: String
  },
  components: {
  }
}
</script>

<style scoped lang="less">
@import "~rfs/less";

  
.aColor{
  color: black;
}
.Content{
  background-color: white;
  margin: 0;
  padding: 0;
  padding-left: 0;
  padding-right: 0;
}

.backgroundRgb238{
  width: 100%;
  background-color: rgba(238,238,238,1);
  padding: 0.3rem;
  margin: 1rem;
}
.contentTitleVal{
  .rfs(20);
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
