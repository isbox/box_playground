import asyncComponent from '@/lib/asyncComponent';

const Index = asyncComponent(() => import('./index'));
const Demo01 = asyncComponent(() => import('./demo01'));

module.exports = [
    {
        path: '/test',
        name: 'test-index',
        exact: true,
        component: Index,
        routes: [
            {
                path: '/test/demo',
                name: 'test-demo01',
                component: Demo01
            }
        ]
    }
];