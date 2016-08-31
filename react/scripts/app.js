var Kenteken = React.createClass({
  getInitialState: function() {
    return {
      step: 1,
      kenteken: null
    }
  },

  render: function() {
    switch (this.state.step) {
      case 1:
        return <KentekenFields 
                    onCompleted={ this.nextStep } />;
      case 2:
        return <span>Result state: { this.state.kenteken } </span>;
    }
  },

  nextStep: function(data) {
    this.setState({
      kenteken: data, 
      step: this.state.step += 1
    });
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
    var kenteken = this.formatKenteken(this.refs.kenteken.value);
    this.props.onCompleted(kenteken);
  },

  formatKenteken: function(kenteken) {
    kenteken = kenteken.replace(/ /g, '');
    kenteken = kenteken.replace(/-/g, '');

    var formattedKenteken = '';
    var prevType = '';
    for (var i = kenteken.length; i > 0; i--) {
      var currentChar = kenteken[(i-1)];
      var currentType = (parseInt(currentChar)) ? 'numeric' : 'string';
      if (currentType != prevType && i != kenteken.length) {
        formattedKenteken += '-';
      }
      formattedKenteken += currentChar;
      prevType = currentType;
    }
    
    return formattedKenteken;
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




