import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './components/all/all.component';
import { EditorComponent } from './components/editor/editor.component';
import { DetailComponent } from './components/detail/detail.component';
import {MachineRoutingModule} from "./machine-routing.module";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import { MachinesComponent } from './pages/machines/machines.component';
import { LinkComponent } from './components/link/link.component';
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AllComponent,
    EditorComponent,
    SideBarComponent,
    DetailComponent,
    MachinesComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    SharedModule,
    MachineRoutingModule
  ]
})
export class MachineModule { }
