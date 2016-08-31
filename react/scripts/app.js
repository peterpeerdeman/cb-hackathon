var Kenteken = React.createClass({
  render: function() {
    return (
      <div className="cb-kenteken">
        Hello, world! I am a kenteken.
      </div>
    );
  }
});

var StripHero = React.createClass({
  render: function() {
    return (
      <div className="cb-strip">
        Hello, world! I am a herostrip.
      </div>
    );
  }
});

var StripVideo = React.createClass({
  render: function() {
    return (
      <div className="cb-strip">
        Hello, world! I am a videostrip.
      </div>
    );
  }
});




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
