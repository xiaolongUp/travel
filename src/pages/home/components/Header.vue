<template>
    <div class="header">
        <div class="header-left"><span class="iconfont back-icon">&#xe603;</span></div>
        <div class="header-input"><span class="iconfont">&#xe601;</span>输入城市/景点/游玩主题</div>
        <div class="header-right">城市<span class="iconfont arrow-icon">&#xe602;</span></div>
    </div>
</template>
<script>
export default {
    name: 'HomeHeader'
}
</script>
<!--scoped关键字表示样式只对本组件生效-->
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .48rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
