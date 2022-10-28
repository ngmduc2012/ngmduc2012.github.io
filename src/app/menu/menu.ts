import {CoreMenu} from '@core/types'

export const menu: CoreMenu[] = [
    {
        id: 'info',
        title: 'Info',
        translate: 'MENU.PERSONAL.TITLE',
        type: 'collapsible',
        icon: 'user',
        children: [
            {
                id: 'personal',
                title: 'Personal',
                translate: 'MENU.PERSONAL.INFO',
                type: 'item',
                icon: 'user-check',
                url: 'info'
            },
            {
                id: 'personal',
                title: 'Personal',
                translate: 'MENU.PERSONAL.CV',
                type: 'item',
                icon: 'inbox',
                url: 'cv'
            },
        ]
    },
    {
        id: 'community',
        title: 'Sample',
        translate: 'MENU.COMMUNITY.TITLE',
        type: 'collapsible',
        icon: 'dribbble',
        children: [
            {
                id: 'share',
                title: 'Share',
                translate: 'MENU.COMMUNITY.SHARE',
                type: 'item',
                icon: 'share-2',
                url: 'share'
            },
            {
                id: 'share',
                title: 'Donate',
                translate: 'MENU.COMMUNITY.DONATE',
                type: 'item',
                icon: 'github',
                url: 'donate'
            },
        ]
    }
]
