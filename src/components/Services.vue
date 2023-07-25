<template>
    <div class="sub-head">
        <h1>{{ $route.name }}</h1>
        <span class="overlay-el"></span>
    </div>
    <div class="baba-flex-col baba-svc-container" id="services">
      <div class="svc-gllry-container">
        <div class="svc-img" id="ser1">
            <figure>
                <img src="../Assets/Refinary.jpg" alt="">
            </figure>
            <div class="svc-ctnt">
                <h3>Refining</h3>
                <p>  
                    If you have scrap, old jewelry, or other precious metal items that you wish to convert into
                    pure bullion, Hello Pure Gold offers refining services. We work with trusted refineries to ensure the
                    highest standards of refining, extracting the maximum value from your materials. Our refining process
                    adheres to strict environmental and ethical standards, providing you with peace of mind.
                </p>
            </div>
        </div>
        <div class="svc-img" id="ser2">
            <figure>
                <img src="../Assets/location.jpg" alt="">
            </figure>
            <div class="svc-ctnt">
                <h3>Location Swaps</h3>
                <p>  
                    Hello Pure Gold facilitates location swaps, allowing you to optimize the storage and
                    logistics of your precious metal holdings. With our extensive network of storage partners, you can
                    seamlessly and securely transfer your assets between different locations based on your needs. This
                    flexibility helps you manage your inventory efficiently and respond to changing market dynamics.
                </p>
            </div>
        </div>
        <div class="svc-img" id="ser3">
            <figure>
                <img src="../Assets/Shopingcart.jpg" alt="">
            </figure>
            <div class="svc-ctnt">
                <h3>Protected Deliveries Worldwide</h3>
                <p> 
                    Hello Pure Gold offers protected deliveries of bullion and precious
                    metals to customers worldwide. We understand the importance of secure and reliable transportation
                    when it comes to high-value assets. Our shipping methods prioritize the safety and confidentiality of
                    your precious metal investments, ensuring they reach you in pristine condition.
                </p>
            </div>
        </div>
        <div class="svc-img" id="ser4">
            <figure>
                <img src="../Assets/METALSTRADINGRISKMANAGEMENT.jpg" alt="">
            </figure>
            <div class="svc-ctnt">
                <h3> Metals Trading & Risk Management</h3>
                <p>  
                    With our extensive experience in the bullion and precious metal
                    markets, Hello Pure Gold provides a comprehensive range of trading services. Whether you are an
                    individual investor, a financial institution, or a corporate entity, our team of experts can assist you in
                    executing trades and managing the associated risks. We offer competitive pricing and access to global
                    markets, helping you make informed decisions and optimize your investment 
                </p>
            </div>
        </div>
        <div class="svc-img" id="ser5">
            <figure>
                <img src="../Assets/PRECIOUSMETALFINANCING.jpg" alt="">
            </figure>
            <div class="svc-ctnt">
                <h3>Precious Metal Financing</h3>
                <p>  
                    Hello Pure Gold understands that accessing capital can be a crucial
                    requirement for businesses in the bullion and precious metals industry. To support your financial needs, we offer precious metal financing solutions tailored to your specific requirements. Our financing
                    options provide flexibility and liquidity, allowing you to unlock the value of your precious metal
                    holdings while maintaining ownership.
                </p>
            </div>
        </div>
        <div class="svc-img" id="ser6">
            <figure>
                <img src="../Assets/Assaying.jpg" alt="">
            </figure>
            <div class="svc-ctnt">
                <h3>Assaying</h3>
                <p>  
                    Accurate assessment of the purity and quality of your precious metal assets is essential. Hello
                    Pure Gold offers professional assaying services, utilizing state-of-the-art techniques and equipment to
                    determine the precise composition of your bullion and precious metals. Our certified assayers employ
                    rigorous testing methods to provide you with reliable 
                </p>
            </div>
        </div>
        <div class="svc-img" id="ser7">
            <figure>
                <img src="../Assets/storageandwarehouse.jpg" alt="">
            </figure>
            <div class="svc-ctnt">
                <h3> Secure Storage and Warehousing</h3>
                <p>  
                    The safety and security of your precious metal investments are of
                    utmost importance. Hello Pure Gold provides secure storage and warehousing solutions through our
                    trusted network of partner facilities. Our storage options are designed to meet the highest industry
                    standards, offering enhanced security measures, advanced monitoring systems, and comprehensive
                    insurance coverage. You can have peace of mind knowing that your assets are stored in secure and
                    regulated facilities.
                </p>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { servcArr } from "../composables/services.js"
import { useRoute } from "vue-router";

const route = useRoute()

// let selectSer = ref({})
// const slctSrvc = servcArr.value.find(_ => _.id == route.params.id)
// if(slctSrvc) selectSer.value = slctSrvc
onMounted(() => {
    let id = route.params.id
    if(id != 'ser1' && id != 'ser2')
        scrollInto(id)
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