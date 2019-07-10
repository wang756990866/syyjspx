<template>
  <div>
    <b-container fluid  class="Content">
      <b-row>
        <b-col cols="12" class="Content">
          <img class="width100 " src="../../img/cadetba.png" />
        </b-col>
        <b-col cols="12" class="height15"></b-col>
        <b-col cols="2" class="height15"></b-col>
        <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
          <b-img src="http://39.96.80.148:8085/indexTitle/cadetTitle.png"></b-img>
        </b-col>
        <b-col cols="12" style="background-image: url('http://39.96.80.148:8085/img/introductionBg.png');">
          <b-row>
            <b-col cols="12" class="height20"></b-col>
            <b-col cols="12" class="height20"></b-col>
            
            <b-col cols="2"></b-col>
            <b-col cols="8" style="margin-left: 2%;">
              <b-row >
                <b-col cols="6" v-for="(items,index) in dataVal" :key="index" style="padding: 1rem;margin-top: 1rem;padding-left: 2rem;">
                  <b-row >
                    <b-col cols="5">
                      <b-img-lazy :src="items.urlVal" style="width: 100%;">
                      </b-img-lazy>
                    </b-col>
                    <b-col cols="5">
                      <b-col cols="12" class='cadetValTitle' style="">
                        {{items.nameVal}}
                      </b-col>
                      <b-col cols="12">
                        &nbsp;
                      </b-col>
                      <b-col cols="12" style="text-align: left;">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {{items.valVal | ellipsis}}
                      </b-col>
                      
                    </b-col>
                    <b-col cols="1" style="margin-left: 2rem;" v-if="index%2 ==0">
                      |<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>|<br>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="height20"></b-col>
            <b-col cols="12" class="height35"></b-col>
          </b-row>
        </b-col>
        
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from '@/components/indexContent/Carousel.vue'
import Root from '@/components/Root.vue'
export default {
  name: 'Cadet',
  data : function(){
    return {
      dataVal : [{
        urlVal : 'http://39.96.80.148:8085/cadet/殷墟管理处巧利.jpg',
        nameVal : '巧利',
        valVal : '0多年的讲解经历，担任过许多重要接待任务，让我也积累了一些经验，但是参加了培训之后发现自己需要努力的地方还很多。尽管我不能改变世界，但我可以掌控自己。尽管我不能样样完善，但是我可以事事尽心，只要开始，永远不晚，回到本单位以后我将学以致用，用心做事。'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/杜濮.jpg',
        nameVal : '杜濮',
        valVal : '我从业一年多 ，属于讲解行业的一名 有点经验的新手，起初对于讲解的 认识，就是将词牢记，然后按照自己的理解传述给游客受众。于老师课后，明白了讲解时以讲解目标位依据，并有自己进一步提炼、选择、运用语言艺术以及讲解技巧等来向受众传播知识和信息的过程。'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/颐和园-- 连琳.jpg',
        nameVal : '连琳',
        valVal : '曾经我一度以为讲解靠的是天赋，没有亮丽的外形，没有圆润的嗓音就不是干这个的料，但在这次培训班上于老师向我们讲述了像张鹏、杨宇、管雅丽等等全国优秀讲解员一路走来的艰辛，我终于明白了能不能成长为一名优秀的讲解员取决于你是否足够热爱这份工作，有没有勇于拼搏，迎难而上的决心与毅力，以及个人的努力和高人的指点，这才是我今后需要努力的方向。'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/河南公安局路青莎.jpg',
        nameVal : '路青莎',
        valVal : '很感谢于馆长和老师们精心的安排，使我对解说产生了浓厚的兴趣，不再是额外的工作，回去后，努力的钻研解说的内容，功夫在稿件外，在知识的积累中。'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/黄山城投集团有限公司 郑俊艺.jpg',
        nameVal : '郑俊艺',
        valVal : '可能一开始，你会觉得她有些严厉，有些不近人情，更或许，你会在心里悄悄地想，何必呢？一次普通的培训而已。怀揣这种念头的你，在结束了四天的培训后，你会惊讶的发现这种念头已经彻底从你心底销声匿迹了，因为，你收获了一个完全不一样的自己，因为，你完成了蜕变。'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/西宁铁路运输检察院 杨娜.jpg',
        nameVal : '杨娜',
        valVal : '起初，我以为讲解员知识站在展厅将稿子背出来就可以了，但是我想就单单是背词对我来说就已经很难了。可当我坐在第十三期讲解员培训班的座位上时，才感觉到讲解不是那么简单的一件事。讲解可以上升到艺术层面，讲解不是简简单单地站在展厅背词，而是将文字语言转化为表达语言的过程，这过程需要有扎实的基本功，大量的阅读经历，迎难而上的吃苦耐力，文字稿件撰写能力，展厅坏境与语言表达和谐地融为一体的专业水平。'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/乌兰夫纪念馆 史静.jpg',
        nameVal : '史静',
        valVal : ' 美好的时光总是短暂的，为期四天的紧张而又充实的学习生活即将结束，感谢主办对我们无微不至的照顾，感谢老师们形象生动的授课，让我短短几天受益匪浅，深刻领会到自己与一个合格讲解员的差距。'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/川陕革命根据地博物馆 陈娇娇.jpg',
        nameVal : '陈娇娇',
        valVal : '十年的讲解工作，大小接待达2000余场，自认为在讲解方面积累了一定的工作经验，来到三月雨学习，与大家交流后才知道自己是井底之蛙，离一名优秀的讲解员还有一段距离。本次学习后让我对演讲有了更深的认识，特别是在此次专家们为学员量身打造的精品课堂上的精心指导下，不仅给与了我信心，也为我今后的演讲道路指明了方向！'
      },{
        urlVal : 'http://39.96.80.148:8085/cadet/乌兰夫纪念馆 张慧敏.jpg',
        nameVal : '张慧敏',
        valVal : '我们作为新时代的讲解员，一定要秉承于老师的职业追求，把讲解员的责任和担当融进自己的血液，提高自身素质，刻苦努力，爱岗敬业，争做一名政治思想好，知识储备好，讲解服务好，示范带头好，社会影响好的新时代红色讲解员。'
      }]
    }
  },
  filters:{
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 68) {
        return value.slice(0,68) + '...'
      }
      return value
    }
  },
  props: {
  msg: String
  },
  components: {
    Carousel,
    Root
  },
  
}
</script>

<style scoped lang="less">
@import "~rfs/less";

.Content{
  background-color: white;
  margin: 0;
  padding: 0;
  padding-left: 0;
  padding-right: 0;
}
.cadetValTitle{
  .rfs(18);
  background-color: rgba(98,28,23,0.9);
  line-height: 2.8rem;
  color: rgb(255,255,255);
}
</style>
