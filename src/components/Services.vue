<template>
    <div class="baba-flex-col doc-padding baba-svc-container" id="services">
      <h2 class="baba-flex">Services</h2>
      <div class="baba-flex-col cards-container">
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <p>
                    <strong> Protected Deliveries Worldwide: </strong>Hello Pure Gold offers protected deliveries of bullion and precious
                        metals to customers worldwide. We understand the importance of secure and reliable transportation
                        when it comes to high-value assets. Our shipping methods prioritize the safety and confidentiality of
                        your precious metal investments, ensuring they reach you in pristine condition
                  </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
              <div class="svc-cntnt">
                  <p>
                    <strong> Metals Trading & Risk Management: </strong>With our extensive experience in the bullion and precious metal
                        markets, Hello Pure Gold provides a comprehensive range of trading services. Whether you are an
                        individual investor, a financial institution, or a corporate entity, our team of experts can assist you in
                        executing trades and managing the associated risks. We offer competitive pricing and access to global
                        markets, helping you make informed decisions and optimize your investment strategies.
                  </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
              <div class="svc-cntnt">
                  <p>
                    <strong> Precious Metal Financing: </strong>Hello Pure Gold understands that accessing capital can be a crucial
                        requirement for businesses in the bullion and precious metals industry. To support your financial needs, we offer precious metal financing solutions tailored to your specific requirements. Our financing
                        options provide flexibility and liquidity, allowing you to unlock the value of your precious metal
                        holdings while maintaining ownership.
                  </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
              <div class="svc-cntnt">
                  <p>
                    <strong> Assaying: </strong>Accurate assessment of the purity and quality of your precious metal assets is essential. Hello
                        Pure Gold offers professional assaying services, utilizing state-of-the-art techniques and equipment to
                        determine the precise composition of your bullion and precious metals. Our certified assayers employ
                        rigorous testing methods to provide you with reliable and precise results.
                  </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
              <div class="svc-cntnt">
                  <p>
                    <strong> Refining: </strong>If you have scrap, old jewelry, or other precious metal items that you wish to convert into
                        pure bullion, Hello Pure Gold offers refining services. We work with trusted refineries to ensure the
                        highest standards of refining, extracting the maximum value from your materials. Our refining process
                        adheres to strict environmental and ethical standards, providing you with peace of mind. 
                  </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
              <div class="svc-cntnt">
                  <p>
                    <strong> Location Swaps: </strong> Hello Pure Gold facilitates location swaps, allowing you to optimize the storage and
                        logistics of your precious metal holdings. With our extensive network of storage partners, you can
                        seamlessly and securely transfer your assets between different locations based on your needs. This
                        flexibility helps you manage your inventory efficiently and respond to changing market dynamics.
                  </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
              <div class="svc-cntnt">
                  <p>
                    <strong> Secure Storage and Warehousing: </strong> The safety and security of your precious metal investments are of
                        utmost importance. Hello Pure Gold provides secure storage and warehousing solutions through our
                        trusted network of partner facilities. Our storage options are designed to meet the highest industry
                        standards, offering enhanced security measures, advanced monitoring systems, and comprehensive
                        insurance coverage. You can have peace of mind knowing that your assets are stored in secure and
                        regulated facilities.
                  </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { servcArr } from "../composables/services.js"
import { useRoute } from "vue-router";

const route = useRoute()

let selectSer = ref({})
const slctSrvc = servcArr.value.find(_ => _.id == route.params.id)
if(slctSrvc) selectSer.value = slctSrvc
</script>

<style scoped>
.card{
    max-width: initial;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.svc-cntnt{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.svc-cntnt > p{
    padding-bottom: 20px;
}

.baba-svc-container{
    padding-top: 100px;
}
</style>