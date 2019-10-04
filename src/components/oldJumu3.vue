<template>
    <div>
        <!--轮播图  -->
        <el-carousel :interval="4000" type="card" height="700px">
            <el-carousel-item v-for="item,index in oldList1" :key="index">
                <h3 class="medium"><img :src="item.pic" /></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
// import oldList1 from "../datas/goodsdata.js"
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["oldList1"])
    }
}
</script>

<style>
/*轮播图样式  */

 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
