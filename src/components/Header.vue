<template>
    <div class="doc-banner-container" id="doc-banner">
            <!-- <img src="../Assets/WhatsApp Image 2023-06-06 at 14.10.30.jpg" alt=""> -->
        <div class="docdet-mob doc-padding" @click="openMenu">
            <img src="../Assets/bars-staggered.png" alt="menu" class="navbar_menu" id="burger">
        </div>
        <img src="../Assets/HPGTrans.png" alt="" class="logo pointer" @click="handleRoute('/')">
        <div class="doc-flex nav-container">
            <div class="nav-itm-container">
                <p class="pointer underline-anim"
                    @click="hndlDrpDwn('isHome')">Our Company</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                <div class="drp-dwn-container" v-if="isHome">
                    <ul>
                        <li @click.self="handleRoute('/about')" 
                            class="pointer" :style="$route.name && $route.name.includes('About') ? 'background-color: #c9a046;' : ''">About us</li>
                        <li @click.self="handleRoute('/aml-policy')" 
                            class="pointer" :style="$route.name && $route.name.includes('AML') ? 'background-color: #c9a046;' : ''">AML Policy</li>
                        <li class="pointer">Chairman's Message</li>
                    </ul>
                </div>
            </div>
            <div class="nav-itm-container">
                <p class="pointer underline-anim" @click="hndlDrpDwn('srvcFlg')"
                    >Services</p>
                <img src="../Assets/down-arrow-wh.png" alt="">
                <div class="drp-dwn-container" v-if="srvcFlg">
                    <ul>
                        <li @click.self="handleRoute('/services')"  class="pointer">Protected Deliveries Worldwide</li>
                        <li @click.self="handleRoute('/services')"  class="pointer">Metals Trading & Risk Management</li>
                        <li @click.self="handleRoute('/services')" class="pointer">Precious Metal Financing</li>
                        <li @click.self="handleRoute('/services')" class="pointer">Assaying</li>
                        <li @click.self="handleRoute('/services')" class="pointer">Refining</li>
                        <li @click.self="handleRoute('/services')" class="pointer">Location Swaps</li>
                        <li @click.self="handleRoute('/services')" class="pointer">Secure Storage and Warehousing</li>
                    </ul>
                </div>
            </div>
            <p class="pointer underline-anim" @click="scrollInto('footer')" 
                >E-services</p>
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('why us') ? 'route-active' : ''" @click="handleRoute('/why-us')" 
                >Why Us</p>
            <p class="pointer underline-anim" @click="scrollInto('footer')" 
                >Contact Us</p>
        </div>
    </div>
    <MobileNavbar/>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from "vue"
import MobileNavbar from './MobileNavbar.vue';
const route = useRoute()
const router = useRouter()

let isMounted = ref(false)
let isHome = ref(false)
let srvcFlg = ref(false)
onMounted(() => {
    // isMounted.value = true
})

function openMenu(evt){
    let displayFlg = document.getElementById('dlg')
    let menu = document.getElementById('burger')
    if(evt.target == menu){
        displayFlg.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
}
// function getColor(){
//     if(route.path != '/'){
//         return 'color:initial;'
//     }else{
//         'color:var(--color-bg);'
//     }
// }
function handleRoute(path, flg){
    isHome.value = false
    srvcFlg.value = false
    router.push(path)
}
function hndlDrpDwn(flg){
    // isHome.value = false
    // srvcFlg.value = false
    if(flg == 'isHome'){
        isHome.value = !isHome.value
        srvcFlg.value = false
    }
    if(flg == 'srvcFlg'){
        srvcFlg.value = !srvcFlg.value 
        isHome.value = false
    }
}
function scrollInto(id){
    let displayFlg = document.getElementById('dlg')
    if(id){
        if(displayFlg) displayFlg.style.display = 'none'
        document.body.style.overflow = 'auto'
        let element = document.getElementById(id)
        if(element)
            element.scrollIntoView({
                behavior: 'smooth'
            })
    }
}
</script>

<style scoped>
.route-active:after{
    width: 100%;
}
</style>