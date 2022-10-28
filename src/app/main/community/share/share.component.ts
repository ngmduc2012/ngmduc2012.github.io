import { Component, OnInit } from '@angular/core'

import { locale as en } from './i18n/en'
import { locale as vi } from './i18n/vi'

import { CoreTranslationService } from '@core/services/translation.service'

@Component({
  selector: 'app-sample',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  public contentHeader: object

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(en, vi)
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }
  }
}
