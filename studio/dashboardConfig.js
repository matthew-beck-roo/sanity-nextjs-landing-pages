export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d2495ca34ca0bd40dbdfc04',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ck1he47x',
                  apiId: '98804f5b-9967-44f6-90ba-0e19da0e02ee'
                },
                {
                  buildHookId: '5d2495ca737d005359c6783f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-836mgzom',
                  apiId: '7cd4c9ce-5815-4557-8741-7d5b0ab5f68b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matthew-beck-roo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-836mgzom.netlify.com', category: 'apps'}
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
