export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-2-studio-8bbvtp57',
                  apiId: 'e6f39588-2b4a-49c4-a595-a46e5e90f465'
                },
                {
                  buildHookId: '5cddcbf0af14419cca993a4e',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-2-web-a5xkgsd4',
                  apiId: 'fb208d7b-9a98-4baa-a464-8a77d28b5577'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-nuxt-events-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-2-web-a5xkgsd4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
