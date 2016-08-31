'use strict';

import 'babel-polyfill';
import { render } from 'react-dom';
import StripVideo from './components/StripVideo';
import {} from 'react-intl';

function reactBootstrap() {
  var tags = document.getElementsByTagName('*');

  for (var i = 0; i < tags.length; i++) {
    switch (String.prototype.toLowerCase.apply(tags[i].tagName)) {
      case 'react-kenteken':
        render(<Kenteken/>, tags[i]);
        break;
      case 'react-striphero':
        render(<StripHero/>, tags[i]);
        break;
      case 'react-stripvideo':
        debugger;
        break;
    }
  }
}

//reactBootstrap();
//
        render( <StripVideo/>, document.getElementById('react-stripvideo'));
