export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'yvoalen/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619e3ed49496af43a67db80c',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-sb4fu19v',
                  apiId: '2de5ccc2-1538-4717-b47b-85e89d5d378a'
                },
                {
                  buildHookId: '619e3ed4d2d91f4de8335b1f',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-sxsouma1',
                  apiId: '469f345b-e1cf-4e36-bf82-e3a6fc7d2320'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yvoalen/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-sxsouma1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
