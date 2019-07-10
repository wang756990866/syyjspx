<!-- eslint-disable -->
<template>
  <div class=" rootContent">
    <b-container fluid class="CarouselContent rootContent">
      <b-row align-v="center">
        <b-col cols="12" class="height20"></b-col>
        <b-col cols="12">
          <span>版权所有：北京三月雨技术培训有限公司</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>地址：北京丰台区园博园二号门欧洲园内</span>&nbsp;&nbsp;&nbsp;&nbsp;
          
        </b-col>
        <b-col cols="12">
          <span>邮编：100072</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>咨询电话1：010-83869751 </span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>咨询电话2：010-83869827 </span>&nbsp;&nbsp;&nbsp;&nbsp;
        </b-col>
        <b-col cols="12">
          <span>培训顾问：曹老师:     13693145147</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>电子邮箱：181557403@qq.com</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>培训顾问：刘老师:     13466418891</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>电子邮箱：365081332@qq.com</span>&nbsp;&nbsp;&nbsp;&nbsp;
        </b-col>
        <b-col cols="12">
          <span> 京ICP备19022818号-1</span>
        </b-col>
        <b-col cols="12" style="background-color: orangered;height: 3rem;line-height: 3rem;font-size: 1.25rem;">
          <span>北京三月雨反腐倡廉网 ：</span>
          <a href="http://www.zhffcl.org.cn/">http://www.zhffcl.org.cn</a>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="12" style="text-align: center;">
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Root',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.CarouselContent{
  width: 100%;
  background-color: rgba(220,221,221,1);
}
.rootContent{
  margin: 0;
  padding: 0;
}
</style>
