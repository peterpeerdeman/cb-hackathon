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

ReactDOM.render(
  <Kenteken />,
  document.getElementById('react-kenteken')
);

ReactDOM.render(
  <StripHero />,
  document.getElementById('react-striphero')
);

ReactDOM.render(
  <StripVideo />,
  document.getElementById('react-stripvideo')
);
