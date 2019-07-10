<template>
  <div>
    <b-container fluid  class="Content" style="background-color: rgba(255, 255, 255, 1);color: white;">
      <b-row>
        <b-col cols="12" class="Content">
          <img class="width100 " src="../../img/teacherba.png" />
        </b-col>
        <b-col cols="12" class="height15"></b-col>
        <b-col cols="2" class="height15 bd1" ></b-col>
        <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
          <b-img src="http://39.96.80.148:8085/indexTitle/mingshiTitle.png"></b-img>
        </b-col>
        <b-col cols="12" style="height: 2.5rem;ext-align: center;line-height: 2.5rem;">
        </b-col>
        <b-col cols="12" class="height20"></b-col>
        <b-col cols="12" class="height20"></b-col>
        <b-col cols="12" style="background-image: url('http://39.96.80.148:8085/img/introductionBg.png');">
          <b-row>
            <b-col cols="2" ></b-col>
            <b-col cols="8" class="bd1" >
              <b-row>
                <b-col cols="3" class=" course1 pm" style="padding: 1rem;" v-for="teamVal in teacherVal" :key="teamVal.imgurlVal">
                  <b-row class="textLeft">
                    <b-col cols="12" class="course2 pm" style="padding: 1rem;">
                      <img class="width100" :src="teamVal.imgurlVal"/>
                    </b-col>
                    <b-col cols="2"></b-col>
                    <b-col cols="8" style="background-color: rgba(93,28,23,0.8);text-align: center;">
                      <span class="teacherNameSpan">{{teamVal.nameVal}}</span>
                    </b-col>
                    <b-col cols="12" class="course2 pm" style="padding: 1rem;">
                      <span class="teacherValSpan">
                        {{teamVal.valVal}}
                      </span>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        
        <b-col cols="2" ></b-col>
        <b-col cols="12" class="height35"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from '@/components/indexContent/Carousel.vue'
import Root from '@/components/Root.vue'

export default {
  name: 'Teacher',
  data : function(){
    return {
      teacherVal : [{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher01.png',
        nameVal : '李迎玉',
        valVal : '中共党员，经济师，曾任安彩高科上市公司董事。2003年成立北京三月雨文化传播有限责任公司，十六年专注于党性教育、廉政教育、红色文化等各类主题展厅的建设。目前在全国范围内建设了900多个主题教育展厅，接受教育的公职人员及党员干部超过数千万人次，受到了各级领导认可及广泛好评。2016年7月1日，李迎玉在人民大会堂参加“庆祝中国共产党成立95周年大会”。曾被评为社会领域纪念建党90周年优秀党务工作者，并获得过中国改革十大最具影响力人物等多项荣誉。'
      },{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher02.png',
        nameVal : '于延俊',
        valVal : '中国博物馆协会纪念馆专业委员会原秘书长、中国人民抗日战争纪念馆副馆长、文博研究员。全国讲解员、导游员大赛资深专家评委、策划和筹备负责人，全国红办、国家文物局、国家旅游局专家库专家，全国博物馆纪念馆管理业务培训导师和教材编写者，讲解员职业技能等级标准制定人之一，北京、延安等多个国家级展览项目的策划和编辑工作。在抗战馆担任副馆长的16年，率领讲解员参加了十几个国家级重要展览的主讲，先后完成了为江泽民、胡锦涛、***等党和国家领导人以及外国首脑的重大接待任务的讲解培训，培养出五名全国讲解员大赛一等奖获得者。'      
      },{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher03.png',
        nameVal : '周江平',
        valVal : '北京大学医学部、中国民航大学等特聘资深礼仪培训师、全国A级车展特聘礼仪培训师，曾担任江泽民、胡锦涛、李鹏、朱镕基、贾庆林、罗干等国家领导人的讲解服务工作，获得全国优秀讲解员称号。周老师十多年来致力于礼仪服务的学习、实践、培训工作，近年来为国家党政机关、各类事业单位、高等院校、等多个行业和单位做过大型培训，活跃在社会各界。优雅的女人知性内敛，透着智慧，即使只是抿着嘴静静地站着，眼底的温柔和恬静依然动人。'      
      },{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher04.png',
        nameVal : '吕敏洁',
        valVal : '中国礼仪学者范智先生第67弟子；范氏礼仪传承者；ACIC国际注册高级礼仪师；《范氏礼仪》中国高级礼仪师；“心行仪礼”身心礼仪培训师；WSET二级品酒师；国家三级品酒师；NLP国际专业执行师；形象诊断师；全息宇宙国际催眠师；东方思维心理学。从事葡萄酒文化旅游及培训师工作十六年，擅长葡萄酒文化及鉴赏、礼仪文化及实操培训、身心梳理训练、当众讲话与沟通技巧、领导力及团队建设培训、旅游服务发展及服务标准培训等专业培训课程。'      
      },{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher05.png',
        nameVal : '张栓中',
        valVal : '中国人民抗日战争纪念馆馆员(2017年至今借调中央宣传部宣传教育局工作)，北京市十佳讲解员，北京博物馆学会社教专业委员会委员、志愿者专业委员会副秘书长，中国博物馆协会社教专业委员会委员、志愿者专业委员会委员。2008年参加工作以来，先后参与多个国家级大型展览接待讲解工作，先后接待观众三十多万人，多次接待***等党和国家领导人以及日本前首相村山富市等外国政要，策划“清明节的铭记”、“抗战党课”“魅力北京 百场讲述”等多个社会教育活动，参与主创“砥砺奋进的五年”大型成就展、“伟大的变革_庆祝改革开放40周年”大型展览，曾撰写多篇研究论文，多次为抗战馆、汽车博物馆、妇女儿童博物馆等各地博物馆培训讲解员，多次受邀在北京大学、清华大学、人民大学开设讲座，具有丰富理论知识和实践经验。'      
      },{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher06.png',
        nameVal : '范晶',
        valVal : '军事科学院军队政治工作研究院副研究员，上校军衔，先后获得临床医学学士学位、军队政治工作学硕士学位，作战指挥学博士学位，获全军教学优秀成果一等奖、案例分析成果奖、全军优秀论文；空军教学优秀成果一等奖、空军优秀论文。负责参与全军重大课题7项研讨研发。曾获得第七届中国军校大学生电视演讲大赛金奖、全军文化工作课讲课比赛二等奖等，全国红色故事金牌讲解员等荣誉并荣立二等功。多次受邀被授予全国三八红旗手荣誉称号。'      
      },{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher07.png',
        nameVal : '朱宁',
        valVal : '硕士研究生学历，毕业于中国传媒大学播音主持艺术学院，就职于中国人民抗日战争纪念馆，跨界声音工作者。钻研有声语言艺术十余年，求学期间曾任西藏卫视《午间新闻》、《晚间新闻》主播，并参与出镜现场报道，长期为中央电视台《平安365》、中国国际广播电台《你知道吗》等栏目配音，并有大量企业专题片、晚会画外音、博物馆语音导览等配音经验。近年来，在海淀北部文化馆开设播音主持艺术普及课程，并曾赴新疆军区政治部为讲解员授课，广受好评。从爱好者到从业者，一路风雨兼程，始终铭记：言为心声。'      
      },{
        imgurlVal : 'http://39.96.80.148:8085/img/teacher08.png',
        nameVal : '尹金妮',
        valVal : '中共党员，曾任陕西眉县电视台、河南电视台新农村频道、中央电视台发现之旅频道等多家媒体记者、编辑、主持人等相关职务，擅长有声语言表达、采访沟通、组织策划等相关领域，获省市级优秀电影电视作品多种奖项，原创作品《琚翠薇——不悔青春 不悔人生 为梦想铸造传奇》《话陶瓷之悠悠 一横一竖引情怀》等文学作品均已出版成书。现为北京三月雨文化传播有限责任公司讲解员培训讲师。'      
      }]
    }
  },
  props: {
  msg: String
  },
  components: {
    Carousel,
    Root
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
.pm{
  border: 1rem rgba(1, 1, 1, 0);
}

.contentTitleVal{
  .rfs(20);
  font-size: 1.5rem;
  font-weight: 600;
}
.indexModuleTitle{
  
}
.teacherValSpan{
  .rfs(12);
  font-weight: 400;
  padding: 1rem;
  border: 1rem solid rgba(1, 1, 1, 0);
  color: black;
}
.contentTitle{
  width: 80%;
}
.teacherNameSpan{
  color: white;
  .rfs(18);
  font-weight: 600;
}
</style>
