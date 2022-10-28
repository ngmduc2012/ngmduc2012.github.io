import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import {CvComponent} from "./cv.component";


const routes = [

  {
    path: 'cv',
    component: CvComponent,
    data: { animation: 'cv' }
  }
];

@NgModule({
  declarations: [CvComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [ CvComponent]
})
export class CvModule {}
