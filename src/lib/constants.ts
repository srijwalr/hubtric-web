export const routes = {
  home: () => '/',
  aboutUs: () => '/about',
  capabilities: () => '/capabilities',
  industries: () => '/industries',
  contactUs: () => '/contact',
  error: () => '*',
};

export const links = [
  {
    path: routes.home(),
    title: 'Home',
  },
  {
    path: routes.aboutUs(),
    title: 'About Us',
  },
  {
    path: routes.capabilities(),
    title: 'Capabilities',
  },
  {
    path: routes.industries(),
    title: 'Industries',
  },
  {
    path: routes.contactUs(),
    title: 'Contact Us',
  },
];
