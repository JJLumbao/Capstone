import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page'

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
    {
        path: 'Summary',
        loadChildren: () => import('../Summary/Summary.module').then( m => m.SummaryPageModule)
      },
      {
        path: 'Diary',
        loadChildren: () => import('../Diary/Diary.module').then( m => m.DiaryPageModule)
      },
      {
        path: 'Stats',
        loadChildren: () => import('../Stats/Stats.module').then( m => m.StatsPageModule)
      },
      {
        path: 'Chat',
        loadChildren: () => import('../Chat/Chat.module').then( m => m.ChatPageModule)
      }, 
      {
        path: 'Account',
        loadChildren: () => import('../Account/Account.module').then( m => m.AccountPageModule)
      },
    ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
      exports: [RouterModule]
    })
  export class TabsRoutingModule { }
  