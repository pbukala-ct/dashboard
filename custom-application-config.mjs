import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Live Dashboard ',
  entryPointUriPath,
  cloudIdentifier: 'gcp-au',
  env: {
    development: {
      initialProjectKey: 'retail-anz',
    },
    production: {
      applicationId: 'cm8mqiepu000luu01sw4p4end',
      url: 'https://live-dashboard-kohl.vercel.app',
    },
  },
  headers: {
    csp: {
      'connect-src': [
        '${env:PREVIEW_HOST}',
      ],
      'frame-src': [
        '${env:PREVIEW_HOST}',
      ],
    }
  },
  additionalEnv: {
    previewHost: '${env:PREVIEW_HOST}',
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Welcome',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'dashboard',
      defaultLabel: 'Live Dashboard',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
