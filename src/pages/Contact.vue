<template>
  <div class="contact-container">
      <div class="content-title contact-title-color">Contact</div>
      <div class="contact-icon-container">
        <img class="mail-icon" src="../assets/mail.svg">
      　<img class="twitter-icon" src="../assets/twitter.svg">
     　 <img class="git-icon" src="../assets/mark-github.svg">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.contact-container
  display: block
  justify-content: center 
  align-items: center
  position: relative
  top: 65px
  width: 100vw
  height: auto
  background-color: #98DDDE

.contact-title-color
  color: #ffffff

.contact-icon-container
  display: flex
  max-width: 360px
  margin: auto
  justify-content: space-between
  height: 72px

.mail-icon
  max-width: 60px
  height: auto
  cursor: pointer
  margin-left: 8px

.twitter-icon
  width: 72px
  cursor: pointer

.git-icon
  width: 55px
  min-width: 55px
  cursor: pointer
  margin-right: 8px

  
</style>
