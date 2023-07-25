<template>
    <div class="sa-dialog" id="dlg">
        <div class="sa-dialog-body sa-fixed-right">
            <p>Hello Pure Gold</p>
            <div class="dialog-items-container" ref="target">
                <div class="dialog-items doc-flex" @click="hndlDrpDwn('isHome')">
                    <!-- <img src="../Assets/home.svg" alt=""> -->
                    <p>Our Company</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                </div>
                <div class="drp-dwn-container" v-if="isHome">
                    <ul>
                        <li @click.self="handleRoute('/about')" 
                            class="pointer" :style="$route.name && $route.name.includes('About') ? 'background-color: #c9a046;' : ''">About us</li>
                        <li @click.self="handleRoute('/aml-policy')" 
                            class="pointer" :style="$route.name && $route.name.includes('AML') ? 'background-color: #c9a046;' : ''">AML Policy</li>
                        <li @click.self="handleRoute('/chairman-message')" 
                            class="pointer" :style="$route.name && $route.name.includes('chairman') ? 'background-color: #c9a046;' : ''">Chairman's Message</li>
                    </ul>
                </div>
                <div class="dialog-items doc-flex" @click="hndlDrpDwn('srvcFlg')">
                    <!-- <img src="../Assets/about.svg" alt=""> -->
                    <p>Services</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                </div>
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
                <div class="dialog-items doc-flex" @click="hndlDrpDwn('EsrvcFlg')">
                    <!-- <img src="../Assets/about.svg" alt=""> -->
                    <p>E-services</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                </div>
                <div class="drp-dwn-container" v-if="EsrvcFlg">
                    <ul>
                        <li @click.self="handleWindow('https://www.forexfactory.com/calendar')" class="pointer">Economic Calendar</li>
                        <li @click.self="handleWindow('https://www.forexfactory.com/news')" class="pointer">News</li>
                    </ul>
                </div>
                <div class="dialog-items doc-flex" @click="handleRoute('/products')">
                    <!-- <img src="../Assets/blog.svg" alt=""> -->
                    <p>Products</p>
                    <!-- <img src="../Assets/down-arrow.png" alt="" style="width: 30px;height: 30px;position: relative;bottom: 3px;"> -->
                </div>
                <div class="dialog-items doc-flex" @click="hndlDrpDwn('whyUsFlg')">
                    <!-- <img src="../Assets/blog.svg" alt=""> -->
                    <p>Why Us</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                </div>
                <div class="drp-dwn-container" v-if="whyUsFlg">
                    <ul>
                        <li @click.self="handleRoute('why-us')" 
                            :style="$route.name && $route.name.includes('Why') ? 'background-color: #c9a046;' : ''"
                            class="pointer">Why choose Hello Pure Gold</li>
                    </ul>
                </div>
                <div class="dialog-items doc-flex" @click="scrollInto('footer')">
                    <!-- <img src="../Assets/contact-mail.svg" alt=""> -->
                    <p>Login</p>
                    <!-- <img src="../Assets/down-arrow.png" alt="" style="width: 30px;height: 30px;position: relative;bottom: 3px;"> -->
                </div>
                <div class="dialog-items doc-flex" @click="scrollInto('footer')">
                    <!-- <img src="../Assets/contact-mail.svg" alt=""> -->
                    <p>Contact Us</p>
                    <!-- <img src="../Assets/down-arrow.png" alt="" style="width: 30px;height: 30px;position: relative;bottom: 3px;"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { onClickOutside } from '@vueuse/core'
const router = useRouter()

const target = ref(null)
onClickOutside(target, (event) => {
    let displayFlg = document.getElementById('dlg')
    displayFlg.style.display = 'none'
    document.body.style.overflow = 'auto'
})

// function closeNav(evt){
//     console.log(evt,'evt');
//     let displayFlg = document.getElementById('dlg')
//     if(evt.target.classList.contains('sa-dialog')){
//         displayFlg.style.display = 'none'
//         document.body.style.overflow = 'auto'
//     }
// }
let isHome = ref(false)
let srvcFlg = ref(false)
let EsrvcFlg = ref(false)
let whyUsFlg = ref(false)
function hndlDrpDwn(flg){
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
    if(flg == 'whyUsFlg'){
        whyUsFlg.value = !whyUsFlg.value 
        isHome.value = false
        srvcFlg.value = false
        EsrvcFlg.value = false
    }
}
function handleRoute(path){
    console.log(path,'path');
    router.push(path)
    let displayFlg = document.getElementById('dlg')
        displayFlg.style.display = 'none'
        document.body.style.overflow = 'auto'
}
function handleWindow(path){
    isHome.value = false
    srvcFlg.value = false
    EsrvcFlg.value = false
    whyUsFlg.value = false
    window.open(path)
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