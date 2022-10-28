import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { DonateComponent } from './donate.component';

const routes = [
  {
    path: 'donate',
    component: DonateComponent,
    data: { animation: 'donate' }
  }
];

@NgModule({
  declarations: [DonateComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [DonateComponent]
})
export class DonateModule {}
