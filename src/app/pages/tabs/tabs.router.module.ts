import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  
  {
    
    path: '',
    component: TabsPage,
    children: [
      
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: '../more/more.module#MorePageModule'          
          }
        ]
      },

      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: '../offers/offers.module#OffersPageModule'

          }
        ]
      },

      {
        path: 'favourites',
        children: [
          {
            path: '',
            loadChildren: '../favourites/favourites.module#FavouritesPageModule'

          }
        ]
      },
      {
        path: 'home',
        children: [ 
          {
            path: '', 
            loadChildren:  '../home/home.module#HomePageModule'
          } ,
          { path: 'stores', loadChildren: '../stores/stores.module#StoresPageModule' },
          { path: 'select-plant', loadChildren: '../select-plant/select-plant.module#SelectPlantPageModule'},


        ]
      },
      {
        path: 'orders',
        children: [ 
          {
            path: '',
            loadChildren:  '../orders/orders.module#OrdersPageModule'
          } ,
          { path: 'stores', loadChildren: '../stores/stores.module#StoresPageModule' },

        ]
      },
      {
        path: 'results-history',
        children: [ 
          {
            path: '',
            loadChildren:  '../results-history/results-history.module#ResultsHistoryPageModule'
          } 

        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
