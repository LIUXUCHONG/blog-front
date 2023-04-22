import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import Dashboard from "../views/dashboard/Dashboard.vue";
import Category from "../views/dashboard/Category.vue";
import Article from "../views/dashboard/Article.vue"
import HomePage from "../views/HomePage.vue"
import Test from "../views/Test.vue"
import Detail from "../views/Detail.vue"
import Login from "../views/Login.vue"
let routes = [
    { 
        path: "/test", 
        component: Test
     },
    { 
        path: "/", 
        component: HomePage
    },
    { 
        path: "/detail", 
        component: Detail
    },
    { 
        path: "/login", 
        component: Login
    },
    {
        path: "/dashboard", 
        component: Dashboard,
        beforeEnter: [auth],
        children: [
            {
            path: "/dashboard/category", 
            component: Category,
            beforeEnter: [auth],
         },
            { 
            path: "/dashboard/article", 
            component: Article,
            beforeEnter: [auth],
         },
        ]
    },
]

let routes2 = [
    {
        path: "/dashboard", 
        component: Dashboard,
        beforeEnter: [auth],
        children: [
            {
            path: "/dashboard/category", 
            component: Category,
            beforeEnter: [auth],
         },
            { 
            path: "/dashboard/article", 
            component: Article,
            beforeEnter: [auth],
         },
        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
//为管理员界面添加中间件
//可以被beforeEnter调，无论是auth 还是[auth]
async function auth(to, from, next) {
        // canUserAccess() 返回 `true` 或 `false`
        // console.log(to,from)
        // console.log("axios")
        
        let canAccess = await canUserAccess()
    //    console.log("我是!canAccess",!canAccess)
        if (!canAccess) {
            // console.log("重定向到登陆界面")
            next({path:"/login"})  
        }else{
            // console.log("放行")
            next()
        }
    }
//不可以被beforeEnter调,无论是auth 还是[auth]
// var auth = async (to, from, next) => {
//         // canUserAccess() 返回 `true` 或 `false`
//         console.log(to,from)
//         console.log("axios")
        
//         let canAccess = await canUserAccess()
//        console.log("我是!canAccess",!canAccess)
//         if (!canAccess) {
//             next({path:"/login"})  
//         }else{
//             console.log("返回的是true")
//             next()
//         }
//     }
//可以被beforeEnter调，但是由于函数体里调用了canUserAccess()，所以返回的结果不一定正确需要异步
// function auth(to, from, next) {
//         // canUserAccess() 返回 `true` 或 `false`
//         console.log(to,from)
//         console.log("axios")
        
//         let canAccess = canUserAccess()
//        console.log("我是!canAccess",!canAccess)
//         if (!canAccess) {
//             next({path:"/login"})  
//         }else{
//             console.log("返回的是true")
//             next()
//         }
//     }
//检查是否登录
const canUserAccess = async () => {
    let isLogin = false
    // console.log("here")
    // console.log(axios)
    let result = await axios.get("/api/admin/auth")
    // console.log("result",result)
    if (result.data.code === 200) {
        // console.log("返回200了")
        isLogin = true
    }
    // console.log("我是isLogin",isLogin)
    return isLogin
}
export { router,routes };
