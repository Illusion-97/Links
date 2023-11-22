import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllComponent} from "./components/all/all.component";
import {DetailComponent} from "./components/detail/detail.component";
import {EditorComponent} from "./components/editor/editor.component";
import {MachinesComponent} from "./pages/machines/machines.component";
import {NotFoundComponent} from "../shared/not-found/not-found.component";

const routes: Routes = [
  { path: 'machines', component:MachinesComponent, children: [
      { path: '', component: AllComponent },
      { path: 'details/:id', component: DetailComponent },
      { path: 'editor/:id', component: EditorComponent }
    ]
  },
  {path: 'rooms', component:MachinesComponent, children: [
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MachineRoutingModule { }
