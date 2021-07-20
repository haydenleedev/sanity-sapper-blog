export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60f6be61bc3adfd7d7397a51',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-7qkn5p46',
                  apiId: 'cac4677f-3d39-4433-9d9b-076c2db0febd'
                },
                {
                  buildHookId: '60f6be61bc3adfd8d13979a9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-pynyr9qp',
                  apiId: 'd7f03dba-3584-40f5-81e7-945b8c34814e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haydenleedev/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-pynyr9qp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
