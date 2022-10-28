import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import {InfoComponent} from "./info.component";


const routes = [

  {
    path: 'info',
    component: InfoComponent,
    data: { animation: 'info' }
  }
];

@NgModule({
  declarations: [InfoComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [ InfoComponent]
})
export class InfoModule {}
