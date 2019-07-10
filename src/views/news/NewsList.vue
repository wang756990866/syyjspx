<template>
  <div>
    <b-container fluid  class="Content">
      <b-col cols="12" class="height20 "></b-col>
      <b-row :key="tab.id" class="newsBa" style="background-color: white;" v-for="tab in newsData">
        <b-col cols="12" >
          <b-row class="contentTitle textLeft">
            <b-col cols="3" class="bd5 whiteSpan">
              <router-link class="aColor" :to="{path:'/newsVal/'+ tab.id,params:{ num : tab.id}}">
                <img class="width120" :src="tab.imgurl" />
              </router-link>
            </b-col>
            <b-col cols="7" class="bd5 whiteSpan newVal">
              <router-link class="aColor" :to="{path:'/newsVal/'+ tab.id,params:{ num : tab.id}}">
                <span class="newValTitle">{{tab.title}}</span><br />
                <span class="newValSubhead whiteSpan08">{{tab.subhead}}</span><br /><br />
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
      <b-row class="newsBa">
        <b-col cols="12" class="height20"></b-col>
        <b-col cols="12" class="height20"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from '@/components/indexContent/Carousel.vue'
import Root from '@/components/Root.vue'
export default {
  name: 'NewsList',
  data: function(){
    return {
      newsData : [
        {
          id : 5,
          title : "三月雨第14期讲解员培训班圆满落幕",
          subhead : "",
          val : "019年6月25日，为期四天的讲解员培训班在三月雨四知堂报告厅圆满落幕。来自上海、河南、山东、青岛等全国各地的文化传...",
          imgurl : 'http://39.96.80.148:8085/news/list04.jpg'
        },
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
        },
        {
          id : 1,
          title : "三月雨第十期讲解员培训圆满收官",
          subhead : "花开淡墨痕，清气满乾坤———第十期讲解员培训班完美收官",
          val : "腊梅月，良客聚。北京三月雨文化传播有限责任公司随着年关的将近，也如期迎来了我们第十期公益讲解员培训。...",
          imgurl : 'http://39.96.80.148:8085/news/news1.jpg'
        },
      ]
    };
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
.width120{
  width: 80%;
}
.whiteSpan08{
  color: rgba(189, 189, 189, 0.7)
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
  background-color: rgba(98, 23, 28, 0.9);
}
.newsBa{
  background-color: rgb(72, 60, 66);
}
.newValTitle{
  .rfs(20);
  font-weight: 600;
  color: black;
}
.newValSubhead{
  .rfs(18);
  font-weight: 500;
  color: black;
}
.newValContent{
  .rfs(16);
  font-weight: 400;
  color: black;
}
  
</style>
