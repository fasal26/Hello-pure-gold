<template>
    <div class="footer-container" id="footer">
        <div class="footer-items-container">
            <p>At <strong>Hello Pure Gold</strong>, we specialize in providing unparalleled expertise and guidance in the exciting world of bullion and gold trading</p>
            <div class="cntnt-items-container">
                <strong>Company</strong>
                <ul class="baba-flex-col">
                    <li class="pointer" @click="$router.push('/about')">About Us</li>
                    <li class="pointer" @click="$router.push('/why-us')">Why us</li>
                    <li class="pointer" @click="$router.push('/services')">Services</li>
                    <li class="pointer" @click="$router.push('/aml-policy')">AML Policy</li>
                </ul>
            </div>
            <div class="news-letter baba-flex-col">
                <!-- <strong>newsletter</strong> -->
                <p>Contact details</p>
                <div class="news-letter-items baba-flex-col">
                    <p>+971  43490037</p>
                    <p>+971 501341604</p>
                    <p>hellopuregoldllc@gmail.com</p>
                </div>
                <p>Address</p>
                <div class="news-letter-items baba-flex">
                    <p>Office # 168, Level # 6, Gold Center Building, Deira, Gold Souk - Dubai, United Arab Emirates,</p>
                </div>
                <!-- <div class="email">
                    <input type="text" class="mail-input">
                    <button class="pointer">Submit</button>
                </div> -->
            </div>
        </div>
        <div class="footer-items2-container">
            <div class="social-media">
                <a href="https://api.whatsapp.com/send?phone=97143490037" target="_blank">
                    <img class="pointer" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/whatsapp--v1.png" alt="whatsapp--v1"/>
                </a>
                <a href="https://www.instagram.com/hellopuregold/" target="_blank">
                    <img class="pointer" width="30" height="30" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-Instagram-social-media-tanah-basah-basic-outline-tanah-basah.png" alt="external-Instagram-social-media-tanah-basah-basic-outline-tanah-basah"/>
                </a>
                <a href="https://t.me/HELLOPUREGOLD" target="_blank">
                    <img class="pointer" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/telegram.png" alt="telegram"/>
                </a>
                <!-- <img class="pointer" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin-circled--v1.png" alt="linkedin-circled--v1"/> -->
                <a href="https://www.facebook.com/profile.php?id=100091422304102" target="_blank">
                    <img class="pointer" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-circled--v1.png" alt="facebook-circled--v1"/>
                </a>
                <a href="https://twitter.com/HelloPureGold" target="_blank">
                    <img class="pointer" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter"/>
                </a>
                <a href="https://www.youtube.com/channel/UCdfq1UwRc4dBlEv-7A2OY1g" target="_blank">
                    <img class="pointer" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/youtube-play.png" alt="youtube-play"/>
                </a>
            </div>
            <div class="store">
                <a href="https://play.google.com/store/apps/details?id=com.artifitia.hello_gold_app" rel="noopener" target="_blank">
                    <img class="pointer" src="https://img.litedev.com/images/static/play-store.svg" alt="youtube-play"/>
                </a> 
                <a href="https://apps.apple.com/in/app/hello-pure-gold-bullion/id6449835558" rel="noopener" target="_blank">
                    <img class="pointer" src="https://img.litedev.com/images/static/app-store.svg" alt="youtube-play"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>