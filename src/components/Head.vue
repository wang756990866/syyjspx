<template>
  <div class="head" >
    <b-container class="headContent">
      <b-row >
        <b-col cols="9" class="headLogoVal hidden-sm" style="margin-top: 1.5rem;">
          <img class="headLogo" left alt="Logo"  src="../img/logo.png"></img>
          <span class="headLogoTitle">北京三月雨技术培训有限公司</span>
          
        </b-col>
        <b-col class="">
          
          <b-col class="" style="height: 2.5rem;">
            <img style="height: 2.5rem;" left alt="Logo"  src="http://39.96.80.148:8085/电话01.png"></img>
            <span class="headTitle" >010-83869751</span>
          </b-col>
          <b-col>
            <img style="height: 2.5rem;" left alt="Logo"  src="http://39.96.80.148:8085/电话01.png"></img>
            <span class="headTitle" >010-83869827</span>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  
export default {
  name: 'Head',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
@import "~rfs/less";
  .head{
    line-height: 6.5rem;
    height: 6.5rem;
    width: 100%;
    background-image: url('../img/head.png');
    background-size: 100% 100%;
    color: #d81e06;
  }
  .headTitle{
    .rfs(20);
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #d81e06;
  }
  .headContent{
    width: 100%;
    height: 100%;
    text-align: left;
    line-height: 5rem;
  }
  .headLogoVal{
    .font-size(1.6rem);
    font-weight: 600;
  }
  .headLogo{
    height: 3.5rem;
  }
  .headLogoTitle{
    .rfs(30);
  }
</style>
