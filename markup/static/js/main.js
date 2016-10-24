'use strict';

import $ from 'jquery';
import polyfills from './libraries/polyfills';
import slick from 'slick-carousel';

require('fancybox')($);

import topMenu from 'components/top-menu/top-menu';
import login from 'components/login/login';
import tabs from 'components/tabs/tabs';
import slider from 'components/slider/slider';

$(() => {
		polyfills.init();
		// ================ Здесь инициализируем модули =====================
});
