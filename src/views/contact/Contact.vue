<template>
  <div>
    <b-container fluid  class="Content">
      <b-row>
        <b-col cols="12" class="Content">
          <img class="width100 " src="../../img/concactba.png" />
        </b-col>
        <b-col cols="12" class="height15"></b-col>
        <b-col cols="2" class="height15"></b-col>
        <b-col cols="12" style="height: 5rem;min-height: 2.5rem;text-align: center;line-height: 5rem;">
          <b-img src="http://39.96.80.148:8085/indexTitle/contactTitle.png"></b-img>
        </b-col>
        <b-col cols="12"  style="background-image: url('http://39.96.80.148:8085/img/introductionBg.png');">
          <b-row>
            <b-col cols="12" class="height20"></b-col>
            <b-col cols="12" class="height20"></b-col>
            <b-col cols="12" style="text-align: left;font-size: 18px;">
              <b-row>
                <b-col cols="5"></b-col>
                
                <b-col cols="6" class="height100 course1 pm" >
                  <span>电话:400-088-1588</span><br />
                  <span>地址:北京市丰台区园博园二号门欧洲园</span><br />
                  <br /><br /><br />
                  <span>乘车路线：</span><br />
                  <span>北京地铁园博园站B2口下（东北口）</span><br />
                  <span>步行1000米</span><br />
                </b-col>
                <b-col cols="2"></b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="height20"></b-col>
            <b-col cols="12" class="height20"></b-col>
            <b-col cols="12" class="height65">
              <b-row>
                <b-col cols="3"></b-col>
                <b-col cols="8" class="height65 course1 pm" >
                  <iframe   frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"
                    style="width: 100%;height: 100%;border: none;" src="http://www.syyxsj.com/mapPanel.jsp?id=310&w=811&ran=0.1800266195170046">
                  </iframe>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="height20"></b-col>
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
  name: 'Contact',
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

.Content{
  background-color: white;
  margin: 0;
  padding: 0;
  padding-left: 0;
  padding-right: 0;
}
.height65{
  height: 35rem;
}
</style>
