<template>
  <div class="banner-container">
    <h1>Unlock the Power of Gold with <strong>Hello Pure Gold</strong></h1>
        <video src="../Assets/pexels-crazy-motions-8733007-3840x2160-30fps.mp4" width="100%" height="550px" autoplay loop muted playsinline style="object-fit: cover;width: 100%;height: 550px;">
        </video>
  </div>
  <div class="baba-abtus-conatiner">
      <div class="baba-flex baba-abtus">
          <img src="../Assets/scottsdale-mint2.jpg" alt="">
          <div class="baba-flex-col abt-cntnt">
              <h2>About Us</h2>
              <p>
                Welcome to Hello Pure Gold, your trusted destination for bullion and precious metal trading. With a firm
                commitment to excellence and a passion for serving our clients
              </p>
              <p>
                Hello Pure Gold recognizes the importance of precious metals in today's dynamic financial landscape. Whether
                you're an astute investor seeking to diversify your portfolio or a discerning collector with an appreciation for
                bullion's beauty and historical significance.
              </p>
              <span class="pointer read-more" @click="handleRoute('/about')">read more</span>
          </div>
      </div>
  </div>
  <div class="baba-flex-col doc-padding baba-svc-container" id="services">
      <h2 class="baba-flex">Services</h2>
      <div class="baba-flex cards-container">
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <h4>Protected Deliveries Worldwide</h4>
                  <p> Hello Pure Gold offers protected deliveries of bullion and precious
                        metals to customers worldwide. We understand the importance of secure and reliable transportation
                        when it comes to high-value assets. Our shipping methods prioritize the safety and confidentiality of
                        your precious metal investments, ensuring they reach you in pristine condition
                  <!-- <span class="pointer read-more" @click="handleServices('ser1')" style="margin-left: 10px">read more</span> -->
                  </p>
              </div>
          </div>
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <h4> Metals Trading & Risk Management</h4>
                  <p> With our extensive experience in the bullion and precious metal
                        markets, Hello Pure Gold provides a comprehensive range of trading services. Whether you are an
                        individual investor, a financial institution, or a corporate entity, our team of experts can assist you in
                        executing trades and managing the associated risks. We offer competitive pricing and access to global
                        markets, helping you make informed decisions and optimize your investment strategies.
                  <!-- <span class="pointer read-more" @click="handleServices('ser2')" style="margin-left: 10px">read more</span> -->
                  </p>
              </div>
          </div>
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <h4>Precious Metal Financing</h4>
                  <p> Hello Pure Gold understands that accessing capital can be a crucial
                        requirement for businesses in the bullion and precious metals industry. To support your financial needs, we offer precious metal financing solutions tailored to your specific requirements. Our financing
                        options provide flexibility and liquidity, allowing you to unlock the value of your precious metal
                        holdings while maintaining ownership.
                  <!-- <span class="pointer read-more" @click="handleServices('ser3')" style="margin-left: 10px">read more</span> -->
                  </p>
              </div>
          </div>
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <h4>Assaying</h4>
                  <p> Accurate assessment of the purity and quality of your precious metal assets is essential. Hello
                        Pure Gold offers professional assaying services, utilizing state-of-the-art techniques and equipment to
                        determine the precise composition of your bullion and precious metals. Our certified assayers employ
                        rigorous testing methods to provide you with reliable and precise results.</p>
              </div>
          </div>
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <h4>Refining</h4>
                  <p>  If you have scrap, old jewelry, or other precious metal items that you wish to convert into
                        pure bullion, Hello Pure Gold offers refining services. We work with trusted refineries to ensure the
                        highest standards of refining, extracting the maximum value from your materials. Our refining process
                        adheres to strict environmental and ethical standards, providing you with peace of mind. </p>
              </div>
          </div>
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <h4>Location Swaps</h4>
                  <p> Hello Pure Gold facilitates location swaps, allowing you to optimize the storage and
                        logistics of your precious metal holdings. With our extensive network of storage partners, you can
                        seamlessly and securely transfer your assets between different locations based on your needs. This
                        flexibility helps you manage your inventory efficiently and respond to changing market dynamics.</p>
              </div>
          </div>
          <div class="baba-flex card">
              <!-- <img src="../Assets/gold.png" alt=""> -->
              <div class="svc-cntnt">
                  <h4> Secure Storage and Warehousing</h4>
                  <p>  The safety and security of your precious metal investments are of
                        utmost importance. Hello Pure Gold provides secure storage and warehousing solutions through our
                        trusted network of partner facilities. Our storage options are designed to meet the highest industry
                        standards, offering enhanced security measures, advanced monitoring systems, and comprehensive
                        insurance coverage. You can have peace of mind knowing that your assets are stored in secure and
                        regulated facilities</p>
              </div>
          </div>
      </div>
  </div>
  <!-- <div class="baba-flex-col doc-padding desc-container">
    <h2 class="baba-flex">Why Choose Baba Gold?</h2>
    <p>Experience the power of gold: Discover the timeless allure and wealth-building potential of gold, a precious metal that has stood the test of time as a reliable investment.
        Expertise you can trust: Our team of seasoned professionals brings years of industry experience and knowledge to help you make informed trading decisions.
        Tailored solutions for you: We understand that every investor is unique, which is why we offer personalized services tailored to your specific needs, risk tolerance, and financial goals.
        Transparent and ethical: At Baba Gold, we uphold the highest ethical standards, ensuring transparency in our pricing, information, and reporting.
        Education and empowerment: We believe in equipping our clients with the knowledge and tools they need to succeed. Benefit from our educational resources, market insights, and expert guidance.
        Discover the World of Bullion and Forex Trading</p>
    <ul class="baba-flex">
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Store of Value</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Diversification</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Hedge against Inflation</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Jewelry and Ornamental Use</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Industrial Applications</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Historical Significance</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Limited Supply</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Investment Asset</li>
    </ul>
  </div> -->
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Platform from './Platform.vue';
import Factors from './Factors.vue'
import Trading from './Trading.vue'
import DescisionMaking from './DescisionMaking.vue';
const router = useRouter()

onMounted(() => {
    carousel('prd-img-id')
})

function handleRoute(path){
    router.push(path)
}
const carousel = (id) => {
    const slider = document.getElementById(id);
    if(id && slider){
        let isdown
        let startX
        let scrollLeft
        slider.addEventListener('mousedown', e => {
            isdown = true
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })
        document.addEventListener('mouseup', e => {
            isdown = false
        })
        slider.addEventListener('mousemove', e => {
            document.getElementById(id).style.scrollBehavior = "auto"
            e.preventDefault()
            if(!isdown) return
            const x = e.pageX - slider.offsetLeft
            const walk = x - startX
            slider.scrollLeft = scrollLeft - walk
        })
    }
}
function handleSlide(id){
    const slider = document.getElementById(id);
    slider.style.scrollBehavior = "smooth"
    slider.scrollLeft = slider.scrollLeft + 200
}
function handleServices(id){
    router.push(`/services/${id}`)
}

</script>