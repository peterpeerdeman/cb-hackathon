var Kenteken = React.createClass({
  getInitialState: function() {
    return {
      step: 1,
      data: {
        kenteken: ''
      }
    }
  },

  render: function() {
    switch (this.state.step) {
      case 1:
        return <KentekenFields 
                    onCompleted={ this.nextStep } />;
      case 2:
        return <span>Result state</span>;
    }
  },

  nextStep: function(data) {
    console.log(data);
    console.log(this.state.step);
    this.setState({step: this.state.step += 1});
    console.log(this.state.step);
  }

});

var KentekenFields = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" ref="kenteken" />
        <button onClick={ this.validateKenteken }>Verder</button>
      </div>
    );    
  },

  validateKenteken: function(e) {
    e.preventDefault();
    var kenteken = this.refs.kenteken.value;
    this.props.onCompleted(kenteken);
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
