<template>
  <div class="portfolio-container top">
    <div>
      <div><img class="top-ahiru-icon" src="../assets/ahiru.png"></div>
      <div class="top-title">Kosy’s Portfolio</div>
      <div><img class="arrow-icon" src="../assets/arrow.svg"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.top
  height: calc(100vh - 65px)
  background-color: #98DDDE

.top-title
  text-align: center
  font-weight: bold
  font-size: 50px
  letter-spacing: 0.5px
  color: #FFFFFF
  margin: 12px 4px 36px

.top-ahiru-icon
  width: 250px
  height: 250px
  object-fit: contain
  display: flex
  justify-content: center
  margin: auto

.arrow-icon
  width: 50px
  color: #FFFFFF
  animation: vertical 0.8s ease-in-out infinite alternate
  display: flex
  justify-content: center
  margin: auto

@keyframes vertical {
    0% { transform:translateY(-10px); }
  100% { transform:translateY(  0px); }
}
</style>
