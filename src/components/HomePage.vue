<template>
  <div class="banner-container">
    <!-- <h1>Unlock the Power of Gold with <strong>Hello Pure Gold</strong></h1> -->
    <video
      src="../Assets/HELLOPUREGOLD.mp4"
      width="100%"
      height="550px"
      autoplay
      loop
      muted
      playsinline
      style="object-fit: fill; width: 100%; height: 600px"
    ></video>
  </div>
  <div class="baba-abtus-conatiner">
    <div class="baba-flex baba-abtus">
      <img src="../Assets/Aboutus.jpg" alt="" />
      <div class="baba-flex-col abt-cntnt">
        <h2>About Us</h2>
        <p>
          Welcome to Hello Pure Gold, your trusted destination for bullion and precious
          metal trading. With a firm commitment to excellence and a passion for serving
          our clients
        </p>
        <p>
          Hello Pure Gold recognizes the importance of precious metals in today's dynamic
          financial landscape. Whether you're an astute investor seeking to diversify your
          portfolio or a discerning collector with an appreciation for bullion's beauty
          and historical significance.
        </p>
        <span class="pointer read-more" @click="handleRoute('/about')">read more</span>
      </div>
    </div>
  </div>
  <div class="baba-flex-col baba-svc-container" id="services">
    <h2 class="baba-flex">Services</h2>
    <div class="baba-flex cards-container">
      <div class="baba-flex card">
        <!-- <img src="../Assets/gold.png" alt=""> -->
        <div class="svc-cntnt">
          <h4>Protected Deliveries Worldwide</h4>
          <p>
            Hello Pure Gold offers protected deliveries of bullion & precious metals to
            customers worldwide. We understand the importance of secure and reliable
            transportation when it comes to high-value assets. Our shipping methods prioritize the safety and confidentiality
          </p>
            <span
                class="pointer read-more"
                @click="handleServices('ser1')"
                >read more</span
            >
        </div>
      </div>
      <div class="baba-flex card">
        <!-- <img src="../Assets/gold.png" alt=""> -->
        <div class="svc-cntnt">
          <h4>Metals Trading & Risk Management</h4>
          <p>
            With our extensive experience in the bullion and precious metal markets, Hello
            Pure Gold provides a comprehensive range of trading services.Whether you are an
            individual investor,financial institution, or a corporate entity, our team of experts can assist you in
            executing trades
          </p>
            <span
              class="pointer read-more"
              @click="handleServices('ser2')"
              >read more</span
            >
        </div>
      </div>
      <div class="baba-flex card">
        <!-- <img src="../Assets/gold.png" alt=""> -->
        <div class="svc-cntnt">
          <h4>Precious Metal Financing</h4>
          <p>
            Hello Pure Gold understands that accessing capital can be a crucial
            requirement for businesses in the bullion and precious metals industry. To
            support your financial needs, we offer precious metal financing solutions
            tailored to your specific requirements.
          </p>
            <span
              class="pointer read-more"
              @click="handleServices('ser3')"
              >read more</span
            >
        </div>
      </div>
      <div class="baba-flex card">
        <!-- <img src="../Assets/gold.png" alt=""> -->
        <div class="svc-cntnt">
          <h4>Assaying</h4>
          <p>
            Accurate assessment of the purity and quality of your precious metal assets is
            essential. Hello Pure Gold offers professional assaying services, utilizing
            state-of-the-art techniques and equipment to determine the precise composition
            of your bullion and precious metals.
          </p>
            <span
              class="pointer read-more"
              @click="handleServices('ser3')"
              >read more</span
            >
        </div>
      </div>
      <div class="baba-flex card">
        <!-- <img src="../Assets/gold.png" alt=""> -->
        <div class="svc-cntnt">
          <h4>Refining</h4>
          <p>
            If you have scrap, old jewelry, or other precious metal items that you wish to
            convert into pure bullion, Hello Pure Gold offers refining services. We work
            with trusted refineries to ensure the highest standards of refining,
            extracting the maximum value from your materials.
          </p>
            <span
                class="pointer read-more"
                @click="handleServices('ser3')"
                >read more</span
            >
        </div>
      </div>
      <div class="baba-flex card">
        <!-- <img src="../Assets/gold.png" alt=""> -->
        <div class="svc-cntnt">
          <h4>Location Swaps</h4>
          <p>
            Hello Pure Gold facilitates location swaps, allowing you to optimize the
            storage and logistics of your precious metal holdings. With our extensive
            network of storage partners, you can seamlessly and securely transfer your
            assets between different locations based on your needs.
          </p>
            <span
                class="pointer read-more"
                @click="handleServices('ser3')"
                >read more</span
            >
        </div>
      </div>
      <!-- <div class="baba-flex card">
              <img src="../Assets/gold.png" alt="">
              <div class="svc-cntnt">
                  <h4> Secure Storage and Warehousing</h4>
                  <p>  The safety and security of your precious metal investments are of
                        utmost importance. Hello Pure Gold provides secure storage and warehousing solutions through our
                        trusted network of partner facilities. Our storage options are designed to meet the highest industry
                        standards, offering enhanced security measures, advanced monitoring systems, and comprehensive
                        insurance coverage. You can have peace of mind knowing that your assets are stored in secure and
                        regulated facilities</p>
              </div>
          </div> -->
    </div>
  </div>
  <LiveMarket />
  <div class="baba-ourvision-conatiner">
    <div class="baba-flex baba-vision">
      <!-- <img src="../Assets/scottsdale-mint2.jpg" alt=""> -->
      <div class="baba-flex-col abt-cntnt">
        <h2>Our Vision</h2>
        <p>
          At Hello Pure Gold, our vision is to transform the bullion industry by providing
          accessible, transparent, and innovative solutions for investors worldwide
        </p>
        <p>
          We are committed to offering high-quality bullion products that meet the highest
          standards of authenticity and purity. Our goal is to revolutionize the way
          people perceive and engage with gold investments, making them more accessible
          and convenient for everyone.
        </p>
        <span class="pointer read-more" @click="handleRoute('/about')">read more</span>
      </div>
      <div class="baba-flex-col abt-cntnt">
        <h2>Our Mission</h2>
        <p>
          At Hello Pure Gold, our mission is to provide a seamless and rewarding
          experience for individuals looking to invest in precious metals
        </p>
        <p>
          We are dedicated to offering a wide range of authentic bullion products and
          comprehensive services that cater to the unique needs of our customers. Through
          our commitment to integrity, transparency, and exceptional customer service, we
          aim to build lasting relationships based on trust and mutual success.
        </p>
        <span class="pointer read-more" @click="handleRoute('/about')">read more</span>
      </div>
    </div>
  </div>
  <div class="baba-flex-col desc-container">
    <h2 class="baba-flex">Top reasons to do business with us</h2>
    <div class="top-rsn">
      <ul class="baba-flex">
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Risk Management
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Wholesale Trading
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Margin Trading
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Global Deliveries
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Reliable Refining
          Services
        </li>
      </ul>
      <ul class="baba-flex">
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Assaying Expertise
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Purity Testing
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Gold Location Swaps
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Foreign Currency
          Pricing
        </li>
        <li class="baba-flex">
          <img src="../Assets/001-correct.png" alt="" id="correct" />Trusted Gold
          Wholesalers
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import LiveMarket from "./LiveMarket.vue";
import Platform from "./Platform.vue";
import Factors from "./Factors.vue";
import Trading from "./Trading.vue";
import DescisionMaking from "./DescisionMaking.vue";
const router = useRouter();

onMounted(() => {
  carousel("prd-img-id");
});

function handleRoute(path) {
  router.push(path);
}
const carousel = (id) => {
  const slider = document.getElementById(id);
  if (id && slider) {
    let isdown;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      isdown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    document.addEventListener("mouseup", (e) => {
      isdown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      document.getElementById(id).style.scrollBehavior = "auto";
      e.preventDefault();
      if (!isdown) return;
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
};
function handleSlide(id) {
  const slider = document.getElementById(id);
  slider.style.scrollBehavior = "smooth";
  slider.scrollLeft = slider.scrollLeft + 200;
}
function handleServices(id) {
  router.push(`/services/${id}`);
}
</script>
