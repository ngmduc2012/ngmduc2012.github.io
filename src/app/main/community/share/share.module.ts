import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ShareComponent } from './share.component';

const routes = [
  {
    path: 'share',
    component: ShareComponent,
    data: { animation: 'share' }
  }
];

@NgModule({
  declarations: [ShareComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [ShareComponent]
})
export class ShareModule {}
