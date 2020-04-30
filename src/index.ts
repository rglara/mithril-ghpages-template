import * as m from 'mithril';
m.render(document.body, [
    m('h1', 'Mithril Template'),
    m('div', [
        m('span', 'Created with '),
        m('a', {href: 'https://github.com/rglara/mithril-ghpages-template'}, 'Mithril GitHub Pages Template'),
    ]),
]);