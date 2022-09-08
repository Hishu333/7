import './component';
import './config';
import './preview';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);

Shopware.Service('cmsService').registerCmsElement({
    name: 'emz-image-element',
    label: 'sw-cms.elements.emz-image-element.label',
    component: 'sw-cms-el-emz-image-element',
    configComponent: 'sw-cms-el-config-emz-image-element',
    previewComponent: 'sw-cms-el-preview-emz-image-element',
    defaultConfig: {
        media: {
            source: 'absolute',
            value: null,
            entity: {
                name: 'media'
            }
        }
    }
});
