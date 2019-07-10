<template>
  <b-container fluid  class=" contentTitle">
    <b-row class="contentTitle" style="padding: 0;">
      <b-col cols="12" class="textLeft">
        <span class="imgTitle">
          {{this.dataEntry.title}}
        </span>
        <br /><br />
        <div style="text-align: left;" v-html="this.dataEntry.val">
        </div>
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BlocList',
  data: function(){
    return {
      id : '',
      dataEntry : {
        title : '',
        date : '',
        val : ''
      },
      dataVal : [{
        url : 'http://39.96.80.148:8085/introduction/introductionBlocImg01.png',
        title : '三月雨党支部组织2019年“共产党员献爱心”捐款活动1',
        val : '<p style="text-align: center; line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;<img height="147" width="600" alt="" src="http://39.96.80.148:8085/img/M_TB6G7(13]8OXLU144$A$Q_meitu_3.jpg"/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2019年是中国共产党成立98周年。 6月18日，三月雨党群工作部在公司211会议室组织开展了“共产党员献爱心”捐款活动。李迎玉总裁带头捐款。</span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 人人献出一点爱，世界将变成美好的人间。为进一步弘扬中华民族扶贫济困传统美德和社会主义核心价值观，三月雨党支部利用微信群、公司邮箱等，搞好深入动员，本着“捐款自愿，不限数额”的捐款原则，号召领导带头、党员带头，扎实做好捐款活动。</span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="text-align: center; line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;<img height="399" width="600" alt="" src="http://39.96.80.148:8085/img/08_meitu_1_meitu_2.jpg"/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 广大党员、爱心人士积极行动起来，参与爱心奉献。流动党员刘天军、李太存、梁俊喜和付爱忠主动到捐款现场奉献爱心；特别是事业五部郭阳和监察部监察房欣、法务秦霞两位同志,虽然不是党员身份，但行动一点不落后，早早地准备好善款。令人感动的是：房欣同志当天因公出差在外，他专门委托爱人董颖伟前来捐出 100 元，表达他个人的一片爱心。</span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14pt;"><br/></span></p><p style="text-align: center; line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;<img height="399" width="600" alt="" src="http://39.96.80.148:8085/img/03_meitu_1.jpg"/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 善款有限，爱心无价。本次捐款活动筹集的全部款项将存入北京市丰台区慈善协会。三月雨党支部愿充分发扬“一方有难、八方支援”的优良传统和互助精神,把大家的爱心传递下去。</span></p><p><br/></p>'
      },{
        url : 'http://39.96.80.148:8085/introduction/introductionBlocImg01.png',
        title : '三月雨党支部组织2019年“共产党员献爱心”捐款活动4',
        val : '<p style="text-align: center; line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;<img height="147" width="600" alt="" src="http://39.96.80.148:8085/img/M_TB6G7(13]8OXLU144$A$Q_meitu_3.jpg"/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2019年是中国共产党成立98周年。 6月18日，三月雨党群工作部在公司211会议室组织开展了“共产党员献爱心”捐款活动。李迎玉总裁带头捐款。</span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 人人献出一点爱，世界将变成美好的人间。为进一步弘扬中华民族扶贫济困传统美德和社会主义核心价值观，三月雨党支部利用微信群、公司邮箱等，搞好深入动员，本着“捐款自愿，不限数额”的捐款原则，号召领导带头、党员带头，扎实做好捐款活动。</span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="text-align: center; line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;<img height="399" width="600" alt="" src="http://39.96.80.148:8085/img/08_meitu_1_meitu_2.jpg"/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 广大党员、爱心人士积极行动起来，参与爱心奉献。流动党员刘天军、李太存、梁俊喜和付爱忠主动到捐款现场奉献爱心；特别是事业五部郭阳和监察部监察房欣、法务秦霞两位同志,虽然不是党员身份，但行动一点不落后，早早地准备好善款。令人感动的是：房欣同志当天因公出差在外，他专门委托爱人董颖伟前来捐出 100 元，表达他个人的一片爱心。</span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14pt;"><br/></span></p><p style="text-align: center; line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;<img height="399" width="600" alt="" src="http://39.96.80.148:8085/img/03_meitu_1.jpg"/></span></p><p style="line-height: 1.75em;"><span style="font-size: 14pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br/></span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 善款有限，爱心无价。本次捐款活动筹集的全部款项将存入北京市丰台区慈善协会。三月雨党支部愿充分发扬“一方有难、八方支援”的优良传统和互助精神,把大家的爱心传递下去。</span></p><p><br/></p>'
      }]
    }
    
  },
  mounted: function (){
    this.getRequest();
  },
  methods : {
    getRequest:function(){
      this.id = this.$route.params.num;
    },
  },
  watch: {
    id : function(val){
      
      if(val == "01"){
        this.dataEntry=this.dataVal[0];
      }else
      if(val == "02"){
        this.dataEntry=this.dataVal[1];
      }else
      if(val == "03"){
        this.dataEntry=this.dataVal[2];
      }else
      if(val == "04"){
        this.dataEntry=this.dataVal[3];
      }
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
