const { description } = require('../../package')

module.exports = {
    title: 'Lachlan Cox',
    description: description,
    base: '/',

    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [{
                text: 'Home',
                link: '/',
            },
            {
                text: 'Blog',
                link: '/blog/'
            }
        ]
    }
}