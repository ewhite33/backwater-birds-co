import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountComponent } from './account/account.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BagsComponent } from './bags/bags.component';
import { BlindsComponent } from './blinds/blinds.component';
import { DecoysComponent } from './decoys/decoys.component';
import { HuntDogComponent } from './hunt-dog/hunt-dog.component';
import { LogoGearComponent } from './logo-gear/logo-gear.component';

const routes: Routes = [
    { path: '', redirectTo: '/main/home', pathMatch: 'full' },
    { 
        path: 'main', 
        component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent,
            },
            {
                path: 'account',
                component: AccountComponent,
            },
            {
                path: 'accessories',
                component: AccessoriesComponent,
            },
            {
                path: 'bags',
                component: BagsComponent,
            },
            {
                path: 'blinds',
                component: BlindsComponent,
            },
            {
                path: 'decoys',
                component: DecoysComponent,
            },
            {
                path: 'hunt-dog',
                component: HuntDogComponent,
            },
            {
                path: 'logo-gear',
                component: LogoGearComponent,
            },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
