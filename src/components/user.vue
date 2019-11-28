<template>
  <div class="hello">
    <div @click="handleClickUpload('fornt')">
      <button>图片</button>
    </div>
        <input type="file" ref="fileFront" accept="image/*" id="uploaderInputFront"
              captrue="camera" @change="cameraimgs" style="display:none;" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  ,methods:{
    handleClickUpload(){
        this.$refs.fileFront.dispatchEvent(new MouseEvent("click"));
    },
    cameraimgs(e){
      console.log('cameraimgs',e);
        var file = e.srcElement.files[0];
        var url = window.webkitURL.createObjectURL(file);
        console.log(url)

    var img = new Image();
        img.src = path.src;
        img.onload = function () {
          console.log("图片压缩执行后");
          var that = this; //这里的this 是把img的对象指向改变为that
          // 默认按比例压缩
          var w = that.width,
            h = that.height,
            scale = w / h;
          w = obj.width || w;
          h = obj.height || w / scale;
          var quality = _this.quality; // 默认图片质量为0.7
          //生成canvas
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          // 创建属性节点
          var anw = document.createAttribute("width");
          anw.nodeValue = w;
          var anh = document.createAttribute("height");
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);
          ctx.drawImage(that, 0, 0, w, h);
          // 图像质量
          if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality;
          }
          // quality值越小，所绘制出的图像越模糊
          var base64 = canvas.toDataURL("image/jpeg", quality);
          // 回调函数返回base64的值
          var urlFile = _this.convertBase64UrlToBlob(
            base64); //这个地方的处理是为了把压缩的base64转化为对象，获得压缩后图片的大小size，方便对压缩后的图片再次进行判断；
          console.log(urlFile.size);
          // if (type == "fornt") {
          //   //图片压缩同年
          //   console.log("测试测试测试");
          //   console.log(_this.$refs.bgFront.offsetHeight);

          //   _this.fornt_img = "data:image/jpg;base64," + base64.split(",")[1];
          //   _this.imgHeight = _this.$refs.bgFront.offsetHeight;
          //   _this.imgWidth = _this.$refs.bgFront.offsetWidth;
          //   _this.frontBase64 = base64.split(",")[1];
          // } else {
          //   _this.back_img = "data:image/jpg;base64," + base64.split(",")[1];
          //   _this.backBase64 = base64.split(",")[1];
          // }
          // if (_this.frontBase64 && _this.backBase64) {
          //   // 图片识别
          //   // _this.ocrPicture();
          // }
        };
    }
  }
}
</script>

<style scoped>
div{
  font-size: 50px;
}
</style>
