<template>
  <div class="hello">
   HelloWorldaa
  </div>
</template>

<script>
const cityObj  = require('../../static/cityDataObj.json')

export default {
  name: 'User',
  data () {
    return {
    }
  }
  ,
   mounted() {
        this.ditu();

   }
  ,methods:{
getCityCode(province,city,district) {
  // [province,city,district] = ['河北省','保定市','新市区']
  let code = '';
  if(!district){
    if(province == city){
      code = cityObj[city].code
    }else{
      code = cityObj[province].city[city].code
    }
  }else{
    if(province == city){
      code = cityObj[city].quxian[district]
    }else{
      code = cityObj[province].city[city].quxian[district]
    }
  }
  return code
},
    ditu(){
      var that=this;
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
              if(this.getStatus() == BMAP_STATUS_SUCCESS){
                // var mk = new BMap.Marker(r.point);
                // map.addOverlay(mk);
                // map.panTo(r.point);
                const positionData = {
                    txnBodyCom: {
                      txnInstAdmnRgonCd: that.getCityCode(
                        r.address.province,
                        r.address.city,
                      ), // 获取城市编码
                      clientLgt: r.longitude,
                      clientLtt: r.latitude,
                      aDivNm: r.address.city,
                      province: r.address.province,
                      district: r.address.district,
                      cityCode: that.getCityCode(
                        r.address.province,
                        r.address.city,
                        r.address.district
                      ), // 获取城市编码
                    }
              };
              console.log(positionData)
              }
              else {
                alert('failed'+this.getStatus());
              }        
            });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  font-size: 50px;
}
</style>
