/**
 * @name Router Base File
 * @author Fasal
 * @description Base config file for Vue Router 4
 */
import {
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

const HomePage = () => import("../components/HomePage.vue")
const About = () => import("../components/About.vue")
const Story = () => import("../components/Story.vue")
const Services = () => import("../components/Services.vue")
const Mission  = () => import("../components/Mission.vue")
const Trading = () => import("../components/Trading.vue")
const DecisionMaking = () => import("../components/DescisionMaking.vue")
const Platform = () => import("../components/Platform.vue")
const Factors = () => import("../components/Factors.vue")
const ChairmanMessage = () => import("../components/ChairmanMessage.vue")
const ProductImages = () => import("../components/ProductImages.vue")
export function createRouter() {
    const router =  _createRouter({
        history: createWebHistory('/Hello-pure-gold/'),
        // base: '/baba-gold-website/',
        routes: [
            { path: "/", name: 'HomePage', component: HomePage },
            { path: "/about", name: 'About', component: About },
            { path: "/our-vision", name: 'Our Vision', component: Story },
            { path: "/our-mission", name: 'Our Mission', component: Mission },
            { path: "/services/:id", name: 'Services', component: Services },
            { path: "/aml-policy", name: 'AML Policy', component: Trading },
            { path: "/decision-making", name: 'DecisionMaking', component: DecisionMaking },
            { path: "/platform", name: 'Platform', component: Platform },
            { path: "/why-us", name: 'Why us', component: Factors },
            { path: "/chairman-message", name: 'chairman message', component: ChairmanMessage },
            { path: "/products", name: 'products', component: ProductImages },
            // { path: '/:pathMatch(.*)*', redirect: "/" },
        ],
        // scrollBehavior() {
        //     let element = document.getElementById('app')
        //     element.scrollIntoView({
        //         behavior: 'smooth'
        //     })
        // }
    })
    return router;
}
