import Vue from 'vue'
import Router from 'vue-router'
// import { AclRule } from 'vue-acl'
import dashboard from '@/pages/Dashboard'
import servis from '@/pages/servis/Servis'
import karyawan from '@/pages/karyawan/List'
import formKaryawan from '@/pages/karyawan/Form'
import barang from '@/pages/barang/List'
import formBarang from '@/pages/barang/Form'
import notfound from '@/components/default/NotFound'
import register from '@/pages/Register'
import login from '@/pages/Login'
import deny from '@/components/default/Deny'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      meta: {
        rule: 'isGuest',
        private: false
      },
      redirect: {
        path: '/404'
      }
    },
    {
      path: '/',
      name: 'root',
      meta: {
        rule: 'isGuest',
        private: false
      },
      redirect: {
        path: '/login'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta: {
        rule: 'isGuest',
        private: true
      }
    },
    {
      path: '/servis',
      name: 'servis',
      component: servis,
      meta: {
        rule: 'isGuest',
        private: true
      }
    },
    {
      path: '/karyawan',
      name: 'karyawan',
      component: karyawan,
      meta: {
        rule: 'isGuest',
        private: true,
        title: "karyawan"
      }
    },
    {
      path: '/form-karyawan',
      name: 'formKaryawan',
      component: formKaryawan,
      meta: {
        rule: 'isGuest',
        private: true
      }
    },
    {
      path: '/barang',
      name: 'barang',
      component: barang,
      meta: {
        rule: 'isGuest',
        private: true,
        title: "barang"
      }
    },
    {
      path: '/form-barang',
      name: 'formBarang',
      component: formBarang,
      meta: {
        rule: 'isGuest',
        private: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        rule: 'isGuest',
        private: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        rule: 'isGuest',
        private: false
      }
    },
    {
      path: '/404',
      name: 'notfound',
      component: notfound,
      meta: {
        rule: 'isGuest',
        private: false
      }
    },
    {
      path: '/deny',
      name: 'deny',
      component: deny,
      meta: {
        rule: 'isGuest',
        private: false
      }
    }
  ]
})
