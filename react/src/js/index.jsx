'use strict';

import 'babel-polyfill';
import { render } from 'react-dom';
import Kenteken from './components/Kenteken';

function reactBootstrap() {
  var tags = document.getElementsByTagName('*');

  for (var i = 0; i < tags.length; i++) {
    switch (String.prototype.toLowerCase.apply(tags[i].tagName)) {
      case 'react-kenteken':
        ReactDOM.render(<Kenteken/>, tags[i]);
        break;
      case 'react-striphero':
        ReactDOM.render(<StripHero/>, tags[i]);
        break;
      case 'react-stripvideo':
        ReactDOM.render(<StripVideo/>, tags[i]);
        break;
    }
  }
}

reactBootstrap();
render(<Kenteken />, document.getElementById('react-kenteken'));
