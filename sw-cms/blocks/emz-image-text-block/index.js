import './component';
import './preview';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);

Shopware.Service('cmsService').registerCmsBlock({
    name: 'emz-image-text-block',
    label: 'sw-cms.blocks.emz-image-text-block.label',
    category: 'text-image',
    component: 'sw-cms-block-emz-image-text-block',
    previewComponent: 'sw-cms-preview-emz-image-text-block',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        emzimagetextelement: 'emz-image-element',
        emzimagetextelement: 'emz-text-element'
    }
});
