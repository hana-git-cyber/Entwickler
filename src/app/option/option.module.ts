import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';
import {OptionRoutingModule} from './option-routing.module';
import {FileUploadModule} from 'primeng/fileupload';
import {FieldsetModule, InputTextModule, RadioButtonModule} from 'primeng/primeng';
import {PersonListComponent} from './component/person-list/person-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    AccordionModule,
    FormsModule,
    DialogModule,
    SelectButtonModule,
    OptionRoutingModule,
    FileUploadModule,
    RadioButtonModule,
    InputTextModule,
    FieldsetModule
  ],
  declarations: [
    PersonListComponent]
})
export class OptionModule {
}
