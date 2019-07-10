<template>
  <div class="container-fluid Content">
    <b-container fluid  class="Content ">
      <b-row>
      <b-col >
            <Carousel></Carousel>
        </b-col>
      </b-row>
      <b-row >
        <b-col cols="12" class="indexModule indexCourse" 
        style="background-image: url('http://39.96.80.148:8085/img/indexCompanyBg.png');
          background-size: 100% 100%;background-position: 100% 100%;">
          <b-col cols="12" style="height: 2.5rem;"></b-col>
          <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
            <b-img src="http://39.96.80.148:8085/img/indexCompanyTitle.png"></b-img>
          </b-col>
          <b-col cols="12" style="height: 2.5rem;ext-align: center;line-height: 2.5rem;">
          </b-col>
          <b-col cols="12" style="height: 1.5rem;"></b-col>
          <b-col cols="12">
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="8">
                <div style="line-height: 2.5rem;background-color: rgba(255,255,255,0.2);width: 100%;
                height: 100%;font-size: 18px;text-align: left;padding: 1rem;color: #000000;">
                <br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>{{indexIntro}}</span>
                  
                  <br /><br />
                </div>
              </b-col>
            </b-row>
          </b-col>
          
          <b-col cols="12" style="height: 5rem;"></b-col>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="indexAdvantage">
            <b-row align-v="center">
              <b-col cols="12" style="height: 2.5rem;"></b-col>
              <b-col cols="12" style="height: 2.5rem;text-align: center;line-height: 2.5rem;">
                <!-- <span class="indexModuleSubhead blackSpan">我们的优势</span> -->
                <b-img key="111" src="http://39.96.80.148:8085/indexTitle/youshiTitle.png"></b-img>
              </b-col>
              <b-col cols="12"  style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;  ">
                <!-- <span class="indexModuleSubhead blackSpan">OUR</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="indexModuleSubhead redSpan">ADVANTAGE</span> -->
              </b-col>
              <b-col cols="12" style="height: 1.5rem;">
              </b-col>
              <b-col offset="2" offset-sm="4" offset-md="4" offset-lg="0" offset-xl="2"  cols="4" xl="2" lg="4" md="4" sm="4"  >
                  <b-col cols="12">
                    <div class="indexModuleContentTitle" ><span>
                      博物馆与讲解
                    </span></div>
                    
                  </b-col>
                  <b-col cols="12" style="height: 0.3rem;"></b-col>
                  <b-col >
                    <img class="width100" src="../../img/01.png" />
                  </b-col>
              </b-col>
              <b-col offset="1" offset-sm="4" offset-md="4" offset-lg="0" offset-xl="0" cols="4" xl="2" lg="4" md="4" sm="4"  >
                  <b-col cols="12">
                    <div class="indexModuleContentTitle" ><span>
                      展厅接待与礼仪综合修养
                    </span></div>
                    
                  </b-col>
                  <b-col cols="12" style="height: 0.3rem;"></b-col>
                  <b-col >
                    <img class="width100" src="../../img/02.png" />
                  </b-col>
              </b-col>
              <b-col offset="2" offset-sm="4" offset-md="4" offset-lg="0" offset-xl="0"  cols="4" xl="2" lg="4" md="4" sm="4" >
                  <b-col cols="12">
                    <div class="indexModuleContentTitle" ><span>
                      礼仪综合与现场实践
                    </span></div>
                    
                  </b-col>
                  <b-col cols="12" style="height: 0.3rem;"></b-col>
                  <b-col >
                    <img class="width100" src="../../img/03.png" />
                  </b-col>
              </b-col>
              <b-col offset="1" offset-sm="4" offset-md="4" offset-lg="0" offset-xl="0"  cols="4" xl="2" lg="4" md="4" sm="4" >
                  <b-col cols="12">
                    <div class="indexModuleContentTitle " ><span>
                      妆容修饰课程
                    </span></div>
                    
                  </b-col>
                  <b-col cols="12" style="height: 0.3rem;"></b-col>
                  <b-col >
                    <img class="width100" src="../../img/04.png" />
                  </b-col>
              </b-col>
              <b-col cols="12" style="height: 2rem;max-height: 3rem;min-height: 0.5rem;"></b-col> 
            </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="indexModule indexCourse">
          <b-col cols="12" style="height: 2.5rem;"></b-col>
          <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
            <b-img src="http://39.96.80.148:8085/indexTitle/peixunTitle1.png"></b-img>
          </b-col>
          <b-col cols="12" style="height: 2.5rem;ext-align: center;line-height: 2.5rem;">
          </b-col>
          <b-col cols="12" style="height: 1.5rem;">
            
          </b-col>
          <b-col cols="12" >
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="8">
                <b-row>
                  <b-col  cols="2"  class=" course1 pm">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="courseTitle">
                          <router-link class="aColor" to="/courseVal/1">
                            <span style="display: block;padding-top: 35%;color: #000000;">时政常识</span>
                          </router-link>
                        </div>
                        <div class="courseTitleVal">
                          <router-link class="aColor" to="/courseVal/1">
                            <img class="width100" src="../../img/course3.png"/>
                          </router-link>
                        </div>
                      </div>
                    </div>
                    
                  </b-col>
                  <b-col cols="2" class=" course1 pm" >
                    <router-link class="aColor" to="/courseVal/1">
                      <img class="width100" src="../../img/course1.png"/>
                    </router-link>
                  </b-col>
                  <b-col cols="2" class=" course1 pm" >
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="courseTitle">
                          <router-link class="aColor" to="/courseVal/2">
                            <span style="display: block;padding-top: 35%;color: #000000;">讲解礼仪</span>
                          </router-link>
                        </div>
                        <div class="courseTitleVal">
                          <router-link class="aColor" to="/courseVal/2">
                            <img class="width100" src="../../img/course4.png"/>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="2" class=" course1  pm" >
                    <router-link class="aColor" to="/courseVal/1">
                      <img class="width100" src="../../img/course2.png"/>
                    </router-link>
                    
                  </b-col>
                  <b-col cols="2" class=" course1 pm" >
                      <div class="flip-container">
                        <div class="flipper">
                          <div class="courseTitle">
                            <router-link class="aColor" to="/courseVal/3">
                              <span style="display: block;padding-top: 35%;color: #000000;">观摩演练</span>
                            </router-link>
                          </div>
                          <div class="courseTitleVal">
                            <router-link class="aColor" to="/courseVal/3">
                              <img class="width100" src="../../img/course5.png"/>
                            </router-link>
                          </div>
                        </div>
                      </div>
                  </b-col>
                  <b-col cols="2" class=" course1  pm" >
                    <router-link class="aColor" to="/courseVal/1">
                      <img class="width100" src="../../img/course2.png"/>
                    </router-link>
                    
                  </b-col>
                </b-row>
                <b-row>
                  <b-col  cols="2"  class=" course2 pm">
                    <router-link class="aColor" to="/courseVal/1">
                      <img class="width100" src="../../img/course3.png"/>
                    </router-link>
                  </b-col>
                  <b-col cols="2" class=" course2 pm" >
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="courseTitle">
                          <router-link class="aColor" to="/courseVal/4">
                            <span style="display: block;padding-top: 35%;color: #000000;">价值理念</span>
                          </router-link>
                        </div>
                        <div class="courseTitleVal">
                          <router-link class="aColor" to="/courseVal/4">
                            <img class="width100" src="../../img/course1.png"/>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="2" class=" course2  pm" >
                    <router-link class="aColor" to="/courseVal/1">
                      <img class="width100" src="../../img/course4.png"/>
                    </router-link>
                  </b-col>
                  <b-col cols="2" class=" course2 pm" >
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="courseTitle">
                          <router-link class="aColor" to="/courseVal/5">
                            <span style="display: block;padding-top: 35%;color: #000000;">讲解语言</span>
                          </router-link>
                        </div>
                        <div class="courseTitleVal">
                          <router-link class="aColor" to="/courseVal/5">
                            <img class="width100" src="../../img/course2.png"/>
                          </router-link>
                        </div>
                      </div>
                    </div>
                    
                  </b-col>
                  <b-col  cols="2"  class=" course2 pm">
                    <router-link class="aColor" to="/courseVal/1">
                      <img class="width100" src="../../img/course5.png"/>
                    </router-link>
                  </b-col>
                  <b-col cols="2" class=" course2 pm" >
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="courseTitle">
                          <router-link class="aColor" to="/courseVal/6">
                            <span style="display: block;padding-top: 35%;color: #000000;">文化修养</span>
                          </router-link>
                        </div>
                        <div class="courseTitleVal">
                          <router-link class="aColor" to="/courseVal/6">
                            <img class="width100" src="../../img/course2.png"/>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="2"></b-col>
            </b-row>
          </b-col>
          <b-col cols="12" style="height: 5rem;"></b-col>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="indexModule indexNewsBg">
            <b-row align-v="center">
              <b-col cols="12" style="height: 2.5rem;"></b-col>
              <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
                <b-img src="http://39.96.80.148:8085/indexTitle/indexNewsBg.png"></b-img>
              </b-col>
              <b-col cols="10" class="indexNewsReturn">
                <router-link to="/news">
                  <span style="font-family: 微软雅黑,'Microsoft Yahei'; color: #000000;">了解更多  ></span>
                </router-link>
              </b-col>
              <b-col cols="12" class="height15"></b-col>
              <b-col>
                <b-row :key="index" class="newsBa" v-for="(tab,index) in newsData">
                  <b-col cols="12" >
                    <b-row class="contentTitle textLeft ">
                      <b-col cols="2" class="bd5 whiteSpan">
                        <router-link class="aColor" :to="{path:'/newsVal/'+ tab.id,params:{ num : tab.id}}">
                          <img class="width120" :src="tab.imgurl" />
                        </router-link>
                      </b-col>
                      <b-col cols="1" class="bd5 whiteSpan">
                      </b-col>
                      <b-col cols="8" class="bd5 whiteSpan newVal">
                        <router-link class="aColor" :to="{path:'/newsVal/'+ tab.id,params:{ num : tab.id}}">
                          <span class="newValTitle">{{tab.title}}</span><br /><br />
                          <!-- <span class="newValSubhead whiteSpan08">{{tab.subhead}}</span><br /><br /> -->
                          <span class="newValContent whiteSpan08">
                            {{tab.val}}
                          </span>
                        </router-link>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" class="height20 whiteSpan08">
                    ------------------------------------------------------------------------------------------------------------------------------------------------
                    ---------------------------------------------------------------------------------------
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col class="indexModule indexTeacher">
            <b-row align-v="center">
              <b-col cols="12" style="height: 2.5rem;"></b-col>
              <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
                <b-img src="http://39.96.80.148:8085/indexTitle/mingshiTitle.png"></b-img>
              </b-col>
              <b-col cols="12" style="height: 2.5rem;ext-align: center;line-height: 2.5rem;">
              </b-col>
              <b-col cols="12" class="height15"></b-col>
              <b-col cols="12" >
                <b-row>
                  <b-col cols="2" ></b-col>
                  <b-col cols="8" >
                    <b-row>
                      <b-col cols="2" class="bd5">
                        <b-row class="indexTeacherRed">
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="textCenter">
                            <span class="indexTeacherTitle whiteSpan">校长简介</span>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" >
                            <router-link to="/teacher">
                              <img class="width100" src="../../img/teacher1.png"/>
                            </router-link>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="height35 textLeft">
                            <router-link to="/teacher">
                              <span class="whiteSpan indexTeacherVal ">
                                李迎玉<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中共党员，经济师，曾任安彩高科上市公司董事。
                                2003年成立北京三月雨文化传播有限责任公司。 2016年7月1日，参加“庆祝中国共产党成立95
                                周年大会”。获得过中国改革十大最具影响力人物等多项荣誉。
                              </span>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height20"></b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="2" class="bd5 ">
                        <b-row class="background114">
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="textCenter">
                            <span class="indexTeacherTitle whiteSpan">专家简介</span>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          
                          <b-col cols="12" class="height35 textLeft">
                            <router-link to="/teacher">
                              <span class="whiteSpan indexTeacherVal ">
                                于延俊<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国博物馆协会纪念馆专业委员会原秘书长、中国人
                                民抗日战争纪念馆副馆长、文博研究员。 北京、延安等多个国家级展览项目的策划和编辑工作。
                                在抗战馆担任副馆长16年，率领讲解员参加了十几个国家级展览的主讲。
                              </span>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height15"></b-col><br />
                          <b-col cols="12" >
                            <router-link to="/teacher">
                              <router-link to="/teacher">
                                <img class="width100" src="../../img/teacher2.png"/>
                              </router-link>
                               
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height20"></b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="2" class="bd5">
                        <b-row class="indexTeacherRed">
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="textCenter">
                            <span class="indexTeacherTitle whiteSpan">讲师简介</span>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" >
                            <router-link to="/teacher">
                              <img class="width100" src="../../img/teacher3.png"/>
                            </router-link>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="height35 textLeft">
                            <router-link to="/teacher">
                              <span class="whiteSpan indexTeacherVal ">
                                朱宁<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;硕士研究生学历，毕业中国传媒大学播音主持艺术学院，
                                就职于中国人民抗日战争纪念馆，跨界声音工作者。 近年来，在海淀北部文化馆开设播音主持艺术普及
                                课程，并赶赴新疆军区政治部为讲解员授课，广受好评。
                              </span>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height20"></b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="2" class="bd5 ">
                        <b-row class="background114">
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="textCenter">
                            <span class="indexTeacherTitle whiteSpan">讲师简介</span>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          
                          <b-col cols="12" class="height35 textLeft">
                            <router-link to="/teacher">
                              <span class="whiteSpan indexTeacherVal ">
                                张栓中<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国人民抗日战争纪念馆馆员(2017年至今借调中央宣传部宣
                                传教育局工作)，北京市十佳讲解员，北京博物馆学会社教专业委员会委员、志愿者专业委员会副秘书长，中国
                                博物馆协会社教专业委员会委员、志愿者专业委员会委员。
                              </span>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" >
                            <router-link to="/teacher">
                              <img class="width100" src="../../img/teacher4.png"/>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height20"></b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="2" class="bd5">
                        <b-row class="indexTeacherRed">
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="textCenter">
                            <span class="indexTeacherTitle whiteSpan">讲师简介</span>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" >
                            <router-link to="/teacher">
                              <img class="width100" src="../../img/teacher5.png"/>
                            </router-link>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="height35 textLeft">
                            <router-link to="/teacher">
                              <span class="whiteSpan indexTeacherVal ">
                                周红平<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京大学医学部、中国民航大学等特聘资深礼仪培训师、全国A级车展
                                特聘礼仪培训师，曾担任江泽民、胡锦涛、李鹏、朱镕基、贾庆林、罗干等国家领导人的讲解服务工作，获得全国优
                                秀讲解员称号。
                              </span>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height20"></b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="2" class="bd5 ">
                        <b-row class="background114">
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" class="textCenter">
                            <span class="indexTeacherTitle whiteSpan">讲师简介</span>
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          
                          <b-col cols="12" class="height35 textLeft">
                            <router-link to="/teacher">
                              <span class="whiteSpan indexTeacherVal ">
                                尹金妮<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;曾任陕西眉县电视台、河南电视台新农村频道、中央电视台发现之旅频道多
                                家媒体记者、编辑、主持人等领域。 原创作品《琚翠薇——不悔青春不悔人生为梦想铸造传奇》《话陶瓷之悠悠 一横一竖引情怀》
                                等出版成书
                              </span>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height15"></b-col>
                          <b-col cols="12" >
                            <router-link to="/teacher">
                              <img class="width100" src="../../img/teacher6.png"/>
                            </router-link>
                            
                          </b-col>
                          <b-col cols="12" class="height20"></b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="2"></b-col>
                </b-row>
                
              </b-col>
              <b-col cols="12" class="height15"></b-col>
              <b-col cols="12" class="height15"></b-col>
            </b-row>
            
        </b-col>
      </b-row>
      <b-row>
        <b-col class="indexModule indexStudent">
          <b-row align-v="center" style="background-color: rgba(62, 58, 57,1);border-top: solid 2px rgba(0,0,0,0.2);">
            <b-col cols="12" style="height: 2.5rem;"></b-col>
            <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
              <router-link to="/cadet">
                <b-img src="http://39.96.80.148:8085/indexTitle/xueyuanTitle.png"></b-img>
              </router-link>
            </b-col>
            <b-col cols="12" style="height: 2.5rem;ext-align: center;line-height: 2.5rem;">
            </b-col>
            <b-col cols="12" class="height15"></b-col>
          </b-row>
        </b-col>
      </b-row>
      
      
      
    </b-container>
  </div>  
  
</template>

<script>
import Carousel from '@/components/indexContent/Carousel.vue'

export default {
  name: 'IndexContent',
  data: function(){
    return {
      indexIntro : '北京三月雨文化传播有限责任公司培训部讲解员培训工作一直以来受到各服务单位的一致好评，采取每月集中开设讲解员培训班的形式进行讲解员培训。实战派资深专家授课，课程内容不断迭代升级，颠覆性理论认知，并伴有全新的案例，课程内容干货多、针对性强，输出即能落地。对于工作中疑难问题，专家现场点评并给予引导，以期解惑。考核发证用实力说话，专家指导考核打造自己专属的讲解风格，拿到一份通往专业讲解员的“敲门砖”与职场升职的“垫脚石”。',
      newsData : [
        {
          id : 4,
          title : "三月雨开展政务礼仪沙龙活动",
          subhead : " ",
          val : "政务礼仪是国家公务机关及相关事业单位在内部沟通交流及对外服务，与社会接触时的礼仪...",
          imgurl : 'http://39.96.80.148:8085/news/list04.jpg'
        },
        {
          id : 3,
          title : "三月雨第十二期讲解员培训圆满收官",
          subhead : "花香尽染四月天，不忘初心铸芳华 ———第十二期讲解员培训班完美收官",
          val : "一月一期一相聚，4月22日至4月27日北京三月雨在最美四月天如期迎来了第12期讲解员培训班各位实力派岗位精英学员的到来，让我们五天四晚为伴，激昂文字挥斥豪情，收获我国最顶级的“文化食粮”！...",
          imgurl : 'http://39.96.80.148:8085/news/news3.jpg'
        },
        {
          id : 2,
          title : "三月雨第十一期讲解员培训圆满收官",
          subhead : "语出山花烂漫时 文成润物细无声 ———第十一期讲解员培训班完美收官",
          val : "三月春光烂漫时，北京三月雨第十一期讲解员培训班在园博园无限芬芳中拉开帷幕，来自大江南北不同锦绣城市的学员相聚在四知堂，启程为期四天的精英集训。...",
          imgurl : 'http://39.96.80.148:8085/news/news2.jpg'
        }
      ]
    };
  },
  props: {
    msg: String
  },
  components: {
    Carousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~rfs/less";

.indexModule{
  width: 100%;
  height:auto!important;
  height: 30rem;
  min-height: 30rem;
}
.Content{
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: beige
}
.indexAdvantage{
  background-color: #DCDDDD;
}
.indexCourse{
  background-color: rgba(98, 23, 28,0.9);
}
.indexNewsBg{
  background-color: rgb(181, 181, 182);
}
.indexTeacher{
  background-color: rgba(201, 202, 202, 1);
}
.indexStudent{
  
  background-image: url('../../img/student.png');
  background-size: 100% 79%;
  background-position: 100% 100%;
  padding-bottom: 35%;
  height: 0;
}
.advantageContent{
  
}
.indexModuleTitle{
  .rfs(64);
  font-weight: 500;
  font-family: 'Noto Sans CJK SC', 'Noto Sans CJK', 'Source Han Sans', source-han-sans-simplified-c, sans-serif;
}
.indexModuleSubhead{
  .rfs(30);
  font-weight: 600;
}
.indexModuleContentTitle{
  .rfs(20);
  font-weight: 600;
  background-color: red;
  width: 100%;
  color: black;
}
.whiteSpan{
  color: white;
}
.blackSpan{
  color: black;
}
.course1{
  width: 100%;
  padding-bottom: 12%;
  height: 0;
}
.course2{
  width: 100%;
  padding-bottom: 12%;
  height: 0;
  margin-top: 2rem;
}
.courseTitle{
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  background-color: rgb(229,229,229,0.9);
  height:0px;
  padding-bottom:85%;
  width: 100%;
  color: black;
  .rfs(22);
  position: absolute;
}
.courseTitleVal{
  position: absolute;
  transform:rotateY(180deg);
}
.flip-container:hover .flipper {
	transform:rotateY(180deg);
}
.indexTeacherRed{
  background-color: rgba(183, 23, 1, 1);
  text-align: left;
}
.flipper {
	transition:0.6s;
	transform-style:preserve-3d;
	position:relative;
}
.indexTeacherTitle{
  color: white;
  .rfs(18);
  font-weight: 500;
  text-align: center;
}
.indexTeacherVal{
  .rfs(12);
  font-weight: 400;
}
.indexNewsReturn{
  .rfs(24);
  text-align: right;
  color: black;
  margin-top: -3%;
}
.width120{
  width: 120%;
}
.whiteSpan08{
  color: rgba(255, 255, 255, 0.7)
}

.contentTitleVal{
  .rfs(20);
  font-weight: 600;
}
.indexModuleTitle{
  
}
.teacherValSpan{
  .rfs(12);
  font-weight: 400;
}
.backgroundRed{
  background-color: rgb(183, 23, 1);
}
.newValTitle{
  .rfs(20);
  font-weight: 600;
  color: rgba(141, 141, 141, 1);
}
.newValSubhead{
  .rfs(18);
  font-weight: 500;
  color: rgba(141, 141, 141, 1);
}
.newValContent{
  .rfs(16);
  font-weight: 400;
  color: rgba(141, 141, 141, 1);
}
.newVal{
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(141, 141, 141, 1);
}
</style>
