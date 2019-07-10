<template>
  <div>
    <b-container fluid style="margin: 0;padding: 0;">
      <b-row>
        <b-col cols="12" style="background-color: rgba(98, 23, 28, 0.9);margin: 0;padding: 0;">
          <img class="width100 " src="http://39.96.80.148:8085/indexTitle/indexCourseBg.png" />
          <div>
            <br /><br />
            <img src="http://39.96.80.148:8085/indexTitle/indexCourse.png" />
            <br />
            <br />
          </div>
          
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
import Carousel from '@/components/indexContent/Carousel.vue'
import Root from '@/components/Root.vue'
export default {
  name: 'Course',
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
  background-color: rgba(98, 23, 28, 0.9);
  margin: 0;
  padding: 0;
  padding-left: 0;
  padding-right: 0;
}


.contentTitleVal{
  .rfs(20);
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
