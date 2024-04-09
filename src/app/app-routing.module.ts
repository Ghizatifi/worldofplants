import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },
  { path: 'edit-address', loadChildren: './pages/edit-address/edit-address.module#EditAddressPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'order/:id', loadChildren: './pages/order/order.module#OrderPageModule' },
  { path: 'active-phone', loadChildren: './pages/active-phone/active-phone.module#ActivePhonePageModule' },
  { path: 'forget', loadChildren: './pages/forget/forget.module#ForgetPageModule' },
  { path: 'page', loadChildren: './pages/page/page.module#PagePageModule' },
  { path: 'products', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'product', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'detect', loadChildren: './pages/detect/detect.module#DetectPageModule' },
  { path: 'result', loadChildren: './pages/result/result.module#ResultPageModule' },
  { path: 'tips', loadChildren: './pages/tips/tips.module#TipsPageModule' },
  { path: 'chatroom', loadChildren: './pages/chatroom/chatroom.module#ChatroomPageModule' },
  { path: 'chats', loadChildren: './pages/chats/chats.module#ChatsPageModule' },
  { path: 'subscribe', loadChildren: './pages/subscribe/subscribe.module#SubscribePageModule' },
  { path: 'detecting', loadChildren: './pages/detecting/detecting.module#DetectingPageModule' },
  { path: 'favourites', loadChildren: './pages/favourites/favourites.module#FavouritesPageModule' },
  { path: 'privacy-policy', loadChildren: './pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'on-boarding', loadChildren: './pages/splash/on-boarding/on-boarding.module#OnBoardingPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'stores', loadChildren: './pages/stores/stores.module#StoresPageModule' },
  { path: 'select-plant', loadChildren: './pages/select-plant/select-plant.module#SelectPlantPageModule' },
  { path: 'order-success', loadChildren: './pages/checkout/order-success/order-success.module#OrderSuccessPageModule' },
  { path: 'more', loadChildren: './pages/more/more.module#MorePageModule' },
  { path: 'offers', loadChildren: './pages/offers/offers.module#OffersPageModule' },
  { path: 'instructions', loadChildren: './pages/instructions/instructions.module#InstructionsPageModule' },
  { path: 'instruction-details', loadChildren: './pages/instructions/instruction-details/instruction-details.module#InstructionDetailsPageModule' },
  { path: 'instruction-list', loadChildren: './pages/instructions/instruction-list/instruction-list.module#InstructionListPageModule' },
  { path: 'select-plants', loadChildren: './pages/login/select-plants/select-plants.module#SelectPlantsPageModule' },
  { path: 'image-viewer', loadChildren: './pages/image-viewer/image-viewer.module#ImageViewerPageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: 'cancel', loadChildren: './pages/order/cancel/cancel.module#CancelPageModule' },
  { path: 'settings', loadChildren: './pages/more/settings/settings.module#SettingsPageModule' },
  { path: 'policies', loadChildren: './pages/more/policies/policies.module#PoliciesPageModule' },
  { path: 'chat-instructions', loadChildren: './pages/chatroom/chat-instructions/chat-instructions.module#ChatInstructionsPageModule' },
  { path: 'results-history', loadChildren: './pages/results-history/results-history.module#ResultsHistoryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
