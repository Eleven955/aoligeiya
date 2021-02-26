import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import HomePage from './components/asidecpns/HomePage.vue'
import DutyHome from './components/asidecpns/DutyManage/DutyHome.vue'
import DutyManagement from './components/asidecpns/DutyManage/DutyManagement.vue'
import DutyRelease from './components/asidecpns/DutyManage/DutyRelease.vue'
import DutyCommand from './components/asidecpns/DutyCommand.vue'
import MateBrowse from './components/asidecpns/MateCommand/MateBrowse.vue'
import MateAudit from './components/asidecpns/MateCommand/MateAudit.vue'
import TeamCenter from './components/asidecpns/TeamCenter.vue'

Vue.use(VueRouter)

export default new VueRouter({
        routes: [
            {
                path: '/',
                redirect: '/login'
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/home',
                component: Home,
                children:[
                    {
                        path:'/HomePage',
                        component:HomePage,
                    },
                    {
                        path:'/DutyHome',
                        component:DutyHome,
                    },
                    {
                        path:'/DutyManagement',
                        component:DutyManagement,
                    },
                    {
                        path:'/DutyRelease',
                        component:DutyRelease,
                    },
                    {
                        path:'/DutyCommand',
                        component:DutyCommand,
                    },
                    {
                        path:'/MateBrowse',
                        component:MateBrowse,
                    },
                    {
                        path:'/MateAudit',
                        component:MateAudit,
                    },
                    {
                        path:'/TeamCenter',
                        component:TeamCenter,
                    }
                ]
            }
        ]
    }
)
