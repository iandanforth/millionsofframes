// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  MillionsOfFrames,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'millions-of-frames', name: 'Millions of frames', component: MillionsOfFrames, isIndex: true, },
    { path: 'default-page', name: 'Default page', component: DefaultPage },
  ],
};
