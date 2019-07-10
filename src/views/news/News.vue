<template>
  <div>
    <b-container fluid  class="Content">
      <b-row class="newsBa">
        <b-col cols="12" class="Content whiteSpan backgroundRed">
          <img class="width100 " src="http://39.96.80.148:8085/newsba1.png" />
        </b-col>
        <b-col cols="12" class="height15 backgroundRed"></b-col>
        <b-col cols="12" class="backgroundRed" style="height: 5.2rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
          <b-img src="http://39.96.80.148:8085/indexTitle/newsTitle.png"></b-img>
        </b-col>
        <b-col cols="12" class="backgroundRed" style="height: 2.5rem;ext-align: center;line-height: 2.5rem;">
        </b-col>
        <b-col cols="12" >
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from '@/components/indexContent/Carousel.vue'
import Root from '@/components/Root.vue'
export default {
  name: 'News',
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
  width: 100%;
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
  background-color: rgba(98, 23, 28, 0.8);
}
.newsBa{
  background-color: rgba(98, 23, 28, 0.8);
}
.newValTitle{
  .rfs(20);
  font-weight: 600;
}
.newValSubhead{
  .rfs(18);
  font-weight: 500;
}
.newValContent{
  .rfs(16);
  font-weight: 400;
}
  
</style>
