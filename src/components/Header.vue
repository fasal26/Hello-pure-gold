<template>
    <div class="doc-banner-container" id="doc-banner">
            <!-- <img src="../Assets/WhatsApp Image 2023-06-06 at 14.10.30.jpg" alt=""> -->
        <div class="docdet-mob doc-padding" @click="openMenu">
            <img src="../Assets/menublack.png" alt="menu" class="navbar_menu" id="burger">
        </div>
        <img src="../Assets/Hellopure.png" alt="" class="logo pointer" @click="handleRoute('/')">
        <div class="doc-flex nav-container">
            <div class="nav-itm-container" @mouseover="handleMouse('mouseover','company')" @mouseleave="handleMouse('mouseleave','company')">
                <p class="pointer underline-anim"
                    :class="$route.name && ($route.name.includes('About') ||
                            $route.name.includes('AML') || 
                            $route.name.includes('chairman')) ?
                            'route-active' : ''"
                    @click="hndlDrpDwn('isHome')">Our Company</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                <div class="drp-dwn-container" v-if="isHome">
                    <ul>
                        <li @click.self="handleRoute('/about')" 
                            class="pointer" :style="$route.name && $route.name.includes('About') ? 'background-color: #c9a046;' : ''">About us</li>
                        <li @click.self="handleRoute('/aml-policy')" 
                            class="pointer" :style="$route.name && $route.name.includes('AML') ? 'background-color: #c9a046;' : ''">AML Policy</li>
                        <li  @click.self="handleRoute('/chairman-message')" 
                            class="pointer" :style="$route.name && $route.name.includes('chairman') ? 'background-color: #c9a046;' : ''">Chairman's Message</li>
                    </ul>
                </div>
            </div>
            <div class="nav-itm-container" @mouseover="handleMouse('mouseover','service')" @mouseleave="handleMouse('mouseleave','service')">
                <p class="pointer underline-anim" 
                    :class="$route.name && $route.name.includes('Services') ? 'route-active' : ''"
                    @click="hndlDrpDwn('srvcFlg')"
                    >Services</p>
                <img src="../Assets/down-arrow-wh.png" alt="">
                <div class="drp-dwn-container" v-if="srvcFlg">
                    <ul>
                        <li @click.self="handleRoute('/services/ser1')"  class="pointer">Protected Deliveries Worldwide</li>
                        <li @click.self="handleRoute('/services/ser2')"  class="pointer">Metals Trading & Risk Management</li>
                        <li @click.self="handleRoute('/services/ser3')" class="pointer">Precious Metal Financing</li>
                        <li @click.self="handleRoute('/services/ser4')" class="pointer">Assaying</li>
                        <li @click.self="handleRoute('/services/ser5')" class="pointer">Refining</li>
                        <li @click.self="handleRoute('/services/ser6')" class="pointer">Location Swaps</li>
                        <li @click.self="handleRoute('/services/ser7')" class="pointer">Secure Storage and Warehousing</li>
                    </ul>
                </div>
            </div>
            <div class="nav-itm-container" @mouseover="handleMouse('mouseover','eservice')" @mouseleave="handleMouse('mouseleave','eservice')">
                <p class="pointer underline-anim" @click="hndlDrpDwn('EsrvcFlg')"
                    >E-services</p>
                <img src="../Assets/down-arrow-wh.png" alt="">
                <div class="drp-dwn-container" v-if="EsrvcFlg">
                    <ul>
                        <li @click.self="handleWindow('https://www.forexfactory.com/calendar')" class="pointer">Economic Calendar</li>
                        <li @click.self="handleWindow('https://www.forexfactory.com/news')" class="pointer">News</li>
                    </ul>
                </div>
            </div>
            <p class="pointer underline-anim" 
                :class="$route.name && $route.name.includes('products') ? 'route-active' : ''"
                @click.self="handleRoute('/products')"
                >Products</p>
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('Why us') ? 'route-active' : ''" @click="handleRoute('/why-us')" 
                >Why Us</p>
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('authentication') ? 'route-active' : ''" @click="handleRoute('/auth')" 
                >Login</p>
            <p class="pointer underline-anim" @click="handleWindow('https://hellopuregold.bullionview.com/web')" 
                >Live rate</p>
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
let EsrvcFlg = ref(false)
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
function handleMouse(type,val){
    switch (val) {
        case 'company':
            isHome.value = type == 'mouseover' ? true : false
            break;
        case 'service':
            srvcFlg.value = type == 'mouseover' ? true : false
            break;
        case 'eservice':
            EsrvcFlg.value = type == 'mouseover' ? true : false
            break;
    
        default:
            break;
    }
}
function handleRoute(path, flg){
    isHome.value = false
    srvcFlg.value = false
    router.push(path)
}
function handleWindow(path){
    isHome.value = false
    srvcFlg.value = false
    EsrvcFlg.value = false
    window.open(path)
}
function hndlDrpDwn(flg){
    // isHome.value = false
    // srvcFlg.value = false
    if(flg == 'isHome'){
        isHome.value = !isHome.value
        srvcFlg.value = false
        EsrvcFlg.value = false
    }
    if(flg == 'srvcFlg'){
        srvcFlg.value = !srvcFlg.value 
        isHome.value = false
        EsrvcFlg.value = false
    }
    if(flg == 'EsrvcFlg'){
        EsrvcFlg.value = !EsrvcFlg.value 
        isHome.value = false
        srvcFlg.value = false
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