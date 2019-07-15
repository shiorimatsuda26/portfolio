<template>
  <div class="portfolio-container">
    <div class="wrapper work-wrapper">
      <div class="content-title">Work</div>
      <div class="bar">
        <span class="bar-title">2019/07</span>
      </div>

      <div class="row">
       <div class="row-img-container"><img class="work-img" src="../assets/ahiru.png"></div>
       <div class="content-description">
         <div class="work-sub-title">Portfolio Site<img class="git-icon" src="../assets/mark-github.svg"></div>
           このサイトです。初めて１から自分で作った作品。

         <div class="work-sub-sub-title">使用技術
               <div class="icon-container">
      　　　　　　　　<img class="skill-icon" src="../assets/HTML5.png">
                    <img class="skill-icon" src="../assets/css3.png">
     　　　　　　　　　 <img class="skill-icon" src="../assets/JavaScript.png">
      　　　　　　　　　　　<img class="skill-icon" src="../assets/vue.png">
      　　　　　　　　　　<img class="skill-icon" src="../assets/octocat.png">
    　　　　　　　</div>
         </div>
       </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.work-wrapper
  width: 812px
  margin-bottom: 120px

.row
  display: flex
  max-width: 812px
  margin-bottom: 32px

.content-description
  color: #333333
  text-align: left

.work-img
  width: 200px
  height: 150px
  border: 1px solid #333333
  margin: 20px 20px 0px 8px

.work-sub-title
  display: flex
  font-weight: bold
  font-size: 22px
  margin-top: 14px
  text-decoration: underline

.work-sub-sub-title
  font-weight: bold
  font-size: 16px
  margin-top: 20px

.git-icon
  width: 24px
  margin-left: 8px
  cursor: pointer

.icon-container
  display: flex
  height: 44px
  margin: 4px 16px 0px 0px

.skill-icon
  max-width: 44px
  height: auto

@media(max-width: 500px){
  .row {
    display: block
  }
  .content-description{
    margin: 0 16px
  }
  .work-img{
    margin: auto
    margin-top: 20px
  }
}

@media(max-width: 300px){
  .icon-container {
    display: block
  }
}

</style>
