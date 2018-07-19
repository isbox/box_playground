import asyncComponent from '@/lib/asyncComponent';

const Index = asyncComponent(() => import('./index'));

module.exports = [
    {
        path: '/',
        name: 'home-index',
        exact: true,
        component: Index
    }
];