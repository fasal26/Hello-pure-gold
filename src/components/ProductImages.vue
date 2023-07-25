<template>
    <div class="sub-head">
        <h1>{{ $route.name }}</h1>
        <span class="overlay-el"></span>
    </div>
    <div class="baba-flex-col baba-svc-container" id="services">
      <div class="baba-prd-wrap">
        <div class="gold-wrap">
          <h1 style="color: var(--sa-custom-v1);">Gold</h1>
          <div class="baba-prd-cntnr">
            <div class="product-img">
              <img src="../Assets/KILOBAR99.9.jpg" alt="">
              <h4>Kilobar</h4>
              <p>Purity: 999.9</p>
            </div>
            <div class="product-img">
              <img src="../Assets/KILOBAR99.9.jpg" alt="">
              <h4>Kilobar</h4>
              <p>Purity: 995</p>
            </div>
            <div class="product-img">
              <img src="../Assets/TT-gold-bar-999-emirates.png" alt="">
              <h4>Ten tola bar</h4>
              <p>Purity: 999</p>
            </div>
            <div class="product-img">
              <img src="../Assets/250-gram-gold-bar.jpg" alt="">
              <h4>250 gm</h4>
              <p>Purity: 999.9</p>
            </div>
            <div class="product-img">
              <img src="../Assets/100GM.jpg" alt="">
              <h4>100 gm</h4>
              <p>Purity: 999.9</p>
            </div>
            <div class="product-img">
              <img src="../Assets/10GM.jpg" alt="">
              <h4>10 gm</h4>
              <p>Purity: 999.9</p>
            </div>
            <div class="product-img">
              <img src="../Assets/1-gram-gold.jpg" alt="">
              <h4>1 gm</h4>
              <p>Purity: 999.9</p>
            </div>
          </div>
        </div>
        <div class="gold-wrap" id="silver">
          <h1 style="color: var(--sa-custom-v1);">Silver</h1>
          <div class="baba-prd-cntnr">
            <div class="product-img">
              <img src="../Assets/silverimage.jpg" alt="">
              <h4>Silverbar</h4>
            </div>
          </div>
        </div>
        <div class="gold-wrap" id="platinum">
          <h1 style="color: var(--sa-custom-v1);">Platinum</h1>
          <div class="baba-prd-cntnr">
            <div class="product-img">
              <img src="../Assets/platinum.jpg" alt="">
              <h4>Platinumbar</h4>
            </div>
          </div>
        </div>
        <div class="gold-wrap" id="palladium">
          <h1 style="color: var(--sa-custom-v1);">Palladium</h1>
          <div class="baba-prd-cntnr">
            <div class="product-img">
              <img src="../Assets/palladium.jpg" alt="">
              <h4>Palladiumbar</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="silver-prd baba-flex-col">
        <h2>Silver</h2>
        <div class="silver-img">
          <img src="../Assets/silverimage.jpg" alt="">
        </div>
      </div> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

onMounted(() => {
    let type = route.params.type
    if(type != 'gold')
        scrollInto(type)
})

function scrollInto(id){
    if(id){
        let element = document.getElementById(id)
        console.log(element,'element');
        if(element)
            element.scrollIntoView({
                behavior: 'smooth'
            })
    }
}
</script>

<style scoped>
.baba-svc-container{
    padding-top: 100px;
}
</style>