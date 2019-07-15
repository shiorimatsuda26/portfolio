<template>
  <div class="portfolio-container">
    <div class="wrapper">
      <div class="content-title">About</div>
      <div class="bar">
        <span class="bar-title">Profile</span>
      </div>

      <div class="row">


      <!-- <div class="col-sm-3">   -->
        <div class="row-img-container"><img class="content-ahiru-icon" src="../assets/ahiru.png"></div>
        <!-- </div>
      <div class="col-sm-9">  -->
       <div class="content-description">
         <div class="sub-title">Name</div>
           kosy (こーじー)<br/>
           駆け出しフロントエンドエンジニア
         <div class="sub-title">Background</div>
               移動体通信事業者にて3年間の通信品質改善業務と1年間の開発業務経験後、 一念発起して2019年4月からフロントエンドエンジニアに転身。
         <div class="sub-title">Favorite</div>
         ヨガ / ハワイ    
       </div>
      <!-- </div> -->

    </div>

     <div class="bar">
        <span class="bar-title">Skill</span>
    </div>
    <div class="icon-container">
      <img class="skill-icon" src="../assets/HTML5.png">
      <img class="skill-icon" src="../assets/css3.png">
      <img class="skill-icon" src="../assets/JavaScript.png">
      <img class="skill-icon" src="../assets/vue.png">
      <img class="skill-icon" src="../assets/octocat.png">
    </div>


    </div>
  </div>
  
</template>

<script>
export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.row
  display: flex
  max-width: 812px
  margin-bottom: 56px

@media(max-width: 500px){
  .row {
    display: block
  }
  .content-description{
    margin: 0 16px
  }
}

.content-description
  color: #333333
  text-align: left
  margin-right: 16px

.content-ahiru-icon
  max-width: 173px
  height: 173px
  object-fit: contain
  margin: 20px 20px 0px 0px

.icon-container
  display: flex
  justify-content: space-between  
  max-width: 500px
  height: 72px
  margin: 24px 16px 92px 0px

.skill-icon
  max-width: 72px
  height: auto

@media(max-width: 360px){
  .icon-container{
    display: block
  }
}

  
</style>
