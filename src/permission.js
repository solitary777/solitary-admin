import router from './router'
// 顶部读条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

router.beforeEach(async(to, form, next) => {
  // 顶部读条开始
  NProgress.start()
  console.log(to)
  // 放行
  next()
  NProgress.done()
})
router.afterEach(() => {
  // 顶部读条结束
  NProgress.done()
})
