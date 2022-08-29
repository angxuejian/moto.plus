import router from './router';
import 'lib-flexible';
import './style/theme/index.scss';

import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

Nprogress.configure({ speed: 500 })
router.beforeEach((to, from, next) => { Nprogress.start(); next() })
router.afterEach(() => { Nprogress.done() })