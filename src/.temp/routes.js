const c1 = () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "F:\\ccccccc\\my-VBlog\\src\\pages\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-social-vue" */ "F:\\ccccccc\\my-VBlog\\src\\pages\\Social.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "F:\\ccccccc\\my-VBlog\\src\\pages\\Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "F:\\ccccccc\\my-VBlog\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-0-7-23-gridsome-app-pages-404-vue" */ "F:\\ccccccc\\my-VBlog\\node_modules\\_gridsome@0.7.23@gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "F:\\ccccccc\\my-VBlog\\src\\pages\\Index.vue")

export default [
  {
    path: "/project/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/social/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
