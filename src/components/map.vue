<template>
  <div class="map">
          <router-view></router-view>
<button @click="click">cccccc</button>
      <div class="mapWrapper">
        <span
          class="position_flag_icon"
          :style="{display:showFlag ? 'block':'none'}"
          :class="{position_icon_animate:isDrop}"
        ></span>
        <div
          id="bdmapContainer"
          class="mapBox"
          :style="{height: screenHeight - herderHeight - moveBtnHeight+'px'}">
        </div>
      </div>
      <div id="results"></div>
  </div>
</template>

<script>
 const fakeListData = [
      {
          mchtLongitude:'108.461292', // 经度
          mchtLatitude:'37.012608', // 纬度
          mrchNm:'北京水电费' , // 名称
          storeAdr:'阿尔山豆腐' , // 地址
          dstnLenReal:20000,
          mchtypFlg:'02',
          lableList:[
              {lableName:'不要钱'},
              {lableName:'白送'},
              {lableName:'优惠'},
          ]
      },
      {
          mchtLongitude:'116', // 经度
          mchtLatitude:'39', // 纬度
          mrchNm:'上海水电费' , // 名称
          storeAdr:'阿尔山豆腐' , // 地址
          dstnLenReal:20000,
          mchtypFlg:'02',
          lableList:[
              {lableName:'不要钱'},
              {lableName:'白送'},
              {lableName:'优惠'},
          ]
      },
      {
          mchtLongitude:'116.47554', // 经度
          mchtLatitude:'39.933655', // 纬度
          mrchNm:'发斯蒂芬' , // 名称
          storeAdr:'阿尔山豆腐' , // 地址
          dstnLenReal:20000,
          mchtypFlg:'01',
          lableList:[
              {lableName:'不要钱'},
              {lableName:'白送'},
              {lableName:'优惠'},
          ]
      }
  ];

export default {
  name: 'mapmm',
  //路由进入时调用
 beforeRouteEnter (to, from, next) {
      window.document.title  = "欢迎";
      next();
      alert('进入')
  },
    //路由修改时调用
  beforeRouteUpdate(to,from,next){
      alert('修改')

  },
   //路由离开时调用
  beforeRouteLeave(to,from,next){
      alert('离开')

  },
  data () {
    return {
      bdMap:null,
      showFlag:false,
      isDrop: false,
      screenHeight: document.documentElement.clientHeight,
      herderHeight: 0,
      moveBtnHeight: 40,
      storeItemData:[],
    }
  },
     mounted() {
            this.initMap();
            // this.getDetailInfor()      
        },
  methods:{
    click(){
               this.$router.push('/mapmm/test');
    },
    mksfunc(i){
      this.$set(this.storeItemData, 0, i);
      console.log(this.storeItemData)
    },
    clickCenter(){
        // alert('点击地图中心')
    },
    getCenterPoint(){//拖拽地图后获取地图中心点
              console.log('拖拽地图');
              var cp = this.bdMap.getCenter();
              console.log(cp.lng + "," + cp.lat)      //地图中心点    
    },
    getDetailInfor() {//打点
               var mks=this;
                fakeListData.map(function(item){
                    const point = new BMap.Point(item.mchtLongitude, item.mchtLatitude);
                    var pp= new BMap.Marker(point, {enableMassClear: false,});
                        pp.addEventListener('click', function ({type, target}) {
                        mks.mksfunc(item)
                    })
                    mks.bdMap.addOverlay(pp);        
               })
    },
    initMap() {
                const that = this;
                var map = new BMap.Map("bdmapContainer");
                var point = new BMap.Point(116.308,40); 
                var mark=new BMap.Marker(point);
                // map.addOverlay(mark);   
                mark.enableDragging();    //dragend拖拽
  
                mark.addEventListener("click", function(e){    //dragend
                    // alert("当前位置：" + e.point.lng + ", " + e.point.lat);    

                    // var local = new BMap.LocalSearch(map, {      
                    //    // renderOptions:{map: map,panel: "results"}    // id：results，显示查询列表
                    //    renderOptions: {map: map,autoViewport: true},//pageCapacity：一页显示几条
                    //    onSearchComplete: function(results){      
                    //             if (local.getStatus() == BMAP_STATUS_SUCCESS){      
                    //                 // 判断状态是否正确      
                    //                 var s = [];      
                    //                 for (var i = 0; i < results.getCurrentNumPois(); i ++){      
                    //                     s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);      
                    //                 }      
                    //                console.log(s,results)    
                    //             }      
                    //         }   
                    // });      
                    //  local.search("中关村");
                    // //  local.searchNearby("小吃", point,10000);   // 关键词，中心点  半径
                    // // local.searchInBounds("银行", map.getBounds());   




                    // //地址解析服务
                    // var myGeo = new BMap.Geocoder();      
                    // // 将地址解析结果显示在地图上，并调整地图视野    
                    // myGeo.getPoint("北京市海淀区上地10街10号", function(point){      
                    //     console.log('point',point)
                    //     if (point) {      
                    //         map.centerAndZoom(point, 15);    //转换中心  
                    //         map.addOverlay(new BMap.Marker(point));      
                    //     }      
                    // }, 
                    // "北京市");
                    

                    //逆地址解析服务
                    // var myGeo = new BMap.Geocoder();      
                    // // 根据坐标得到地址描述    
                    // myGeo.getLocation(new BMap.Point(116.364, 39.993), function(result){      
                    //     if (result){      
                    //     alert(result.address);      
                    //     }      
                    // });


                    // var driving = new BMap.DrivingRoute(map, { 
                    //     renderOptions: { 
                    //         map: map, 
                    //         // autoViewport: true
                    //         panel: "results"
                    //     },
                    //     onSearchComplete: function(results){ 
                    //         if (driving.getStatus() == BMAP_STATUS_SUCCESS){ 
                    //             // 获取第一条方案 
                    //             var plan = results.getPlan(0); 
                    //             // 获取方案的驾车线路 
                    //             var route = plan.getRoute(0); 
                    //             // 获取每个关键步骤，并输出到页面 
                    //             var s = []; 
                    //             for (var i = 0; i < route.getNumSteps(); i ++) { 
                    //                 var step = route.getStep(i); 
                    //                 console.log(step); 
                    //             } 
                    //         } 
                    //     }  
                    // });



                    var start = new BMap.Point(116.310791, 40.003419);
                    var end = new BMap.Point(116.486419, 39.877282);
                    driving.search(start, end);

                }) 
                var polyline = new BMap.Polyline([
                new BMap.Point(115.008799,38.998218),
                new BMap.Point(115.027,38.9990)
                ],
                {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
                );
                map.addOverlay(polyline);    
                map.centerAndZoom(point, 15);
                const navigationControl = new BMap.NavigationControl({
                        // 靠左上角位置
                        type: BMAP_NAVIGATION_CONTROL_LARGE,
                        anchor: BMAP_ANCHOR_TOP_LEFT,
                        enableAutoLocation:true // 立即定位
                });
                map.addControl(navigationControl);
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                  var geolocationControl = new BMap.GeolocationControl(
                      {
                          enableAutoLocation: true, // 立即定位
                          anchor: BMAP_ANCHOR_TOP_RIGHT,
                          offset: new BMap.Size(10, 90),
                          showAddressBar: true,
                      }
                  );
                  map.addControl(geolocationControl);
                  geolocationControl.addEventListener('locationSuccess', function (e) {
                      // 定位成功事件
                      // 更新经纬度
                      const  txnBodyCom={
                              'clientLgt': e.point.lng,
                              'clientLtt': e.point.lat,
                              'aDivNm': e.addressComponent.city,
                      }
                  console.log(txnBodyCom)
                  });
                  geolocationControl.addEventListener('locationError', function (e) {
                      // 定位失败事件
                      console.log(e)
                  });
                  // 拖拽结束事件
                  map.addEventListener("dragend", that.getCenterPoint);
                  // 定位
                  var geolocation = new BMap.Geolocation();
                 
                  geolocation.getCurrentPosition(function (r) {
                    //  alert(0)
                        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                          //  alert(r.point)
                                var mk = new BMap.Marker(r.point, {enableMassClear: false,});
                                mk.addEventListener('click', function ({type, target}) {
                                    that.clickCenter()
                                })
                                map.addOverlay(mk);
                                map.panTo(r.point);
                        } else {
                            console.log('failed' + this.getStatus());
                        }
                  }, {enableHighAccuracy: true})
                  that.bdMap = map;
            },
            
  }
}
</script>

<style scoped>
.position_icon_animate {
      transform: translate(-50%, -300%);
}
  .position_flag_icon {
      position: absolute;
      color: red;
      font-size: 20px;
      transform: translate(-50%, -80%);
      background: url("../assets/position.png") center center;
      background-size: cover;
      width: 30px;
      height: 30px;
      left: 50%;
      top: 50%;
      z-index: 2;
      transition: all .6s;
    }
  .mapBox {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
    }

</style>
5