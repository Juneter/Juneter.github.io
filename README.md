Vue全家桶编写的一个简易音乐webapp,部分采用了Mint的UI框架.


实现了基本的播放\上一曲\下一曲,以及点击列表项播放.

采用第三方的Api,歌单数据是固定获取本人选取的某一歌单,由于api资源来自于网易云的原因有时会出现歌曲请求失败的现象,可尝试切换其他歌曲播放.

目前"聆听"版块暂无实际功能性作用,仅使用了一个获取各种句子的接口作为展示使用.

运行:
  npm i;
  npm run start;

API 来源于 https://github.com/messoer.
预览地址: juneter.github.io/dist