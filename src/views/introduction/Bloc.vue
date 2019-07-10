<template>
  <b-container fluid  class=" contentTitle">
    <b-row class="contentTitle">
      <b-col cols="4" class="textLeft" v-for="(teamVal,index) in this.dataVal" :key="index">
        <router-link class="aColor" :to="{path:'/BlocList/'+ teamVal.id,params:{ num : teamVal.id}}">
          <b-img :src='teamVal.url' style="width: 100%;">
          </b-img>
        </router-link> 
        <span class="imgTitle">
          {{teamVal.title}}
        </span>
        <br /><br />
        <div style="text-align: left;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span> 
            {{teamVal.val}}
          </span>
        </div>
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Bloc',
  data: function(){
    return {
      dataVal : [{
        id : '01',
        url : 'http://zhffcl.org.cn/UserFiles/image/2019-06-19/08_meitu_1_meitu_2.jpg',
        title : '三月雨党支部组织2019年“共产党员献爱心”捐款活动',
        val : '2019年是中国共产党成立98周年。 6月18日，三月雨党群工作部在公司211会议室组织开展了“共产党员献爱心”捐款活动。李迎玉总裁带头捐款...'
      }]
    }
    
  },
  props: {
  msg: String
  },
  components: {
  }
}
</script>

<style scoped lang="less">
@import "~rfs/less";
.textLeft{
  text-align: center;
  padding: 2.5rem;
  padding-left: 3.5rem;
}
.imgTitle{
  .rfs(20);
  font-weight: 600;
}
</style>
