<template>
  <div class="baba-flex baba-abtus" :class="$route.path == '/about' ? 'pt-150' : ''">
    <img src="../Assets/scottsdale-mint2.jpg" alt="" class="abtus-rt" />
    <div class="baba-flex-col abt-cntnt">
      <h2>About Us</h2>
      <p>
        Welcome to Hello Pure Gold, your trusted destination for bullion and precious metal trading. With a firm
        commitment to excellence and a passion for serving our clients, we have established ourselves as a leading
        provider of high-quality bullion products and exceptional customer service
      </p>
    </div>
  </div>
  <div class="baba-abtus-desc">
    <p>
      Hello Pure Gold recognizes the importance of precious metals in today's dynamic financial landscape. Whether
      you're an astute investor seeking to diversify your portfolio or a discerning collector with an appreciation for
      bullion's beauty and historical significance, we are dedicated to fulfilling your unique needs and aspirations
    </p>
    <p>
      Our company is built on core values that guide our every action. Integrity, transparency, and reliability define
      our operations. We prioritize building long-term relationships with our clients, based on trust and mutual
      respect. When you choose Hello Pure Gold, you can rest assured that you are partnering with a company that
      places your long-term interests 
    </p>
    <p>
      What truly sets us apart is our unwavering commitment to product excellence. We work closely with
      prestigious mints and refineries across the globe to source only the finest bullion and precious metal products. Each item in our collection undergoes rigorous inspection to ensure authenticity, purity, and impeccable
      craftsmanship. Your satisfaction is our 
    </p>
    <p>
      Beyond our exceptional product offerings, we take pride in our team of experienced professionals. Our
      dedicated staff possesses deep expertise in the bullion market, economic trends, and investment strategies. We are here to provide you with expert guidance, enabling you to make informed decisions and navigate the
      precious metals market.
    </p>
    <p>
      As a socially responsible company, we are committed to ethical and sustainable practices. We actively
      promote responsible sourcing and environmental stewardship. We strive to make a positive impact not only
      within the bullion industry but also in the communities we serve.
    </p>
    <p>
      We invite you to explore the Hello Pure Gold website and discover our wide range of bullion and precious
      metal products. Whether you're interested in gold, silver, platinum, or palladium, our extensive selection
      caters to your preferences and investment goals. Our user-friendly platform ensures a seamless and secure
      shopping experience, with prompt shipping and discreet packaging.
    </p>
    <p>
      Thank you for choosing Hello Pure Gold. We eagerly anticipate the opportunity to serve you and become your
      trusted partner in bullion and precious metal 
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let element = document.getElementById("app");
  element.scrollIntoView({
    behavior: "smooth"
  })
})
</script>
