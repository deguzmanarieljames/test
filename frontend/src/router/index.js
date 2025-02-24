import { createRouter, createWebHistory } from 'vue-router'

//ADMIN
import AdDashboard from '../views/AdminView/AdDashboard.vue'
import AdAckReceipt from '../views/AdminView/AdAckReceipt.vue'
import AdDatabasePPE from '../views/AdminView/AdDatabasePPE.vue'
import AdDatabasePPEDocs from '../views/AdminView/AdDatabasePPEDocs.vue'
import AdLedgerCard from '../views/AdminView/AdLedgerCard.vue'
import AdPropertyCard from '../views/AdminView/AdPropertyCard.vue'
import AdPropertySticker from '../views/AdminView/AdPropertySticker.vue'
import AdEditSPS from '../views/AdminView/AdEditSPS.vue'
import AdRLSDDP from '../views/AdminView/AdRLSDDP.vue'
import AdServiceable from '../views/AdminView/AdServiceable.vue'
import AdServiceableReturn from '../views/AdminView/AdServiceableReturn.vue'
import AdReturnedPPE from '../views/AdminView/AdReturnedPPE.vue'
import AdTransferPPE from '../views/AdminView/AdTransferPPE.vue'
import AdTransferedPPE from '../views/AdminView/AdTransferedPPE.vue'
import AdDisposedPPE from '../views/AdminView/AdDisposedPPE.vue'
import AdDisposePPE from '../views/AdminView/AdDisposePPE.vue'
import AdTransferReport from '../views/AdminView/AdTransferReport.vue'
import AdUnserviceable from '../views/AdminView/AdUnserviceable.vue'
import AdWorkspace from '../views/AdminView/AdWorkspace.vue'
import AdLogbook from '../views/AdminView/AdLogbook.vue'
import AdUserverify from '../views/AdminView/AdUserverify.vue'
import AdInventory from '../views/AdminView/AdInventory.vue'
import AdSupplies from '../views/AdminView/AdSupplies.vue'
import AdOrdering from '../views/AdminView/AdOrdering.vue'
import AdOrderPending from '../views/AdminView/AdOrderPending.vue'
import AdOrderIncoming from '../views/AdminView/AdOrderIncoming.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import LandingPage from '../views/LandingPage.vue'


//EMPLOYEE
import EmpDashboard from '../views/EmpView/EmpDashboard.vue'
import EmpDatabasePPEDocs from '../views/EmpView/EmpDatabasePPEDocs.vue'
import EmpRequest from '../views/EmpView/EmpRequest.vue'
import EmpQRcode from '../views/EmpView/EmpQRcode.vue'
import EmpServiceable from '../views/EmpView/EmpServiceable.vue'
import EmpUnserviceable from '../views/EmpView/EmpUnserviceable.vue'
import EmpProfile from '../views/EmpView/EmpProfile.vue'

const routes = [
  //ADMIN ROUTES
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  // {
  //   path: '/',
  //   name: 'SigninView',
  //   component: SigninView
  // },
  {
    path: '/signin',
    name: 'SigninView',
    component: SigninView
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView
  },
  {
    path: '/dashboard',
    name: 'AdDashboard',
    component: AdDashboard,
    meta: {requireAuth: true}
  },
  {
    path: '/databaseppe',
    name: 'AdDatabasePPE',
    component: AdDatabasePPE,
    meta: {requireAuth: true}
  },
  {
    path: '/databaseppedocs',
    name: 'AdDatabasePPEDocs',
    component: AdDatabasePPEDocs,
    meta: {requireAuth: true}
  },
  {
    path: '/serviceable',
    name: 'AdServiceable',
    component: AdServiceable,
    meta: {requireAuth: true}
  },
  {
    path: '/serviceablereturn',
    name: 'AdServiceableReturn',
    component: AdServiceableReturn,
    meta: {requireAuth: true}
  },
  {
    path: '/transferppe',
    name: 'AdTransferPPE',
    component: AdTransferPPE,
    meta: {requireAuth: true}
  },
  {
    path: '/transferedppe',
    name: 'AdTransferedPPE',
    component: AdTransferedPPE,
    meta: {requireAuth: true}
  },
  {
    path: '/disposedppe',
    name: 'AdDisposedPPE',
    component: AdDisposedPPE,
    meta: {requireAuth: true}
  },
  {
    path: '/disposeppe',
    name: 'AdDisposePPE',
    component: AdDisposePPE,
    meta: {requireAuth: true}
  },
  {
    path: '/unserviceable',
    name: 'AdUnserviceable',
    component: AdUnserviceable,
    meta: {requireAuth: true}
  },
  {
    path: '/returnedppe',
    name: 'AdReturnedPPE',
    component: AdReturnedPPE,
    meta: {requireAuth: true}
  },
  {
    path: '/propertysticker',
    name: 'AdPropertySticker',
    component: AdPropertySticker,
    meta: {requireAuth: true}
  },
  {
    path: '/editsps',
    name: 'AdEditSPS',
    component: AdEditSPS,
    meta: {requireAuth: true}
  },
  {
    path: '/ledgercard',
    name: 'AdLedgerCard',
    component: AdLedgerCard,
    meta: {requireAuth: true}
  },
  {
    path: '/propertycard',
    name: 'AdPropertyCard',
    component: AdPropertyCard,
    meta: {requireAuth: true}
  },
  {
    path: '/ackreceipt',
    name: 'AdAckReceipt',
    component: AdAckReceipt,
    meta: {requireAuth: true}
  },
  {
    path: '/transferreport',
    name: 'AdTransferReport',
    component: AdTransferReport,
    meta: {requireAuth: true}
  },
  {
    path: '/rlsddp',
    name: 'AdRLSDDP',
    component: AdRLSDDP,
    meta: {requireAuth: true}
  },
  {
    path: '/workspace',
    name: 'AdWorkspace',
    component: AdWorkspace,
    meta: {requireAuth: true}
  },
  {
    path: '/logbook',
    name: 'AdLogbook',
    component: AdLogbook,
    meta: {requireAuth: true}
  },
  {
    path: '/inventory',
    name: 'AdInventory',
    component: AdInventory,
    meta: {requireAuth: true}
  },
  {
    path: '/supplies',
    name: 'AdSupplies',
    component: AdSupplies,
    meta: {requireAuth: true}
  },
  {
    path: '/ordering',
    name: 'AdOrdering',
    component: AdOrdering,
    meta: {requireAuth: true}
  },
  {
    path: '/orderpending',
    name: 'AdOrderPending',
    component: AdOrderPending,
    meta: {requireAuth: true}
  },
  {
    path: '/orderincoming',
    name: 'AdOrderIncoming',
    component: AdOrderIncoming,
    meta: {requireAuth: true}
  },
  {
    path: '/userverify',
    name: 'AdUserverify',
    component: AdUserverify,
    meta: {requireAuth: true}
  },



  //EMPLOYEE ROUTES
  {
    path: '/empdashboard',
    name: 'Empdashboard',
    component: EmpDashboard,
    meta: {requireAuth: true}
  },
  {
    path: '/empdatabaseppedocs',
    name: 'EmpDatabasePPEDocs',
    component: EmpDatabasePPEDocs,
    meta: {requireAuth: true}
  },
  {
    path: '/emprequest',
    name: 'EmpRequest',
    component: EmpRequest,
    meta: {requireAuth: true}
  },
  {
    path: '/empqrcode',
    name: 'EmpQRcode',
    component: EmpQRcode,
    meta: {requireAuth: true}
  },
  {
    path: '/empserviceable',
    name: 'EmpServiceable',
    component: EmpServiceable,
    meta: {requireAuth: true}
  },
  {
    path: '/empunserviceable',
    name: 'EmpUnserviceable',
    component: EmpUnserviceable,
    meta: {requireAuth: true}
  },
  {
    path: '/empprofile',
    name: 'EmpProfile',
    component: EmpProfile,
    meta: {requireAuth: true}
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  const isLoggedin = checkUserLogin();
  if(to.matched.some((record) => record.meta.requireAuth)){
    if(!isLoggedin){
      next("/");
    }else{
      next();
    }
  }else{
    next();
  }
});


function checkUserLogin() {
  const userToken = sessionStorage.getItem("token");
  return !!userToken;
}
export default router
