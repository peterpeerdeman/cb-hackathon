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









//
// react-striphero
//

var HeroBanner = React.createClass({
  render: function() {
    return (
      <div className="hero-banner">
        <div className="banner" style={{backgroundImage: `url(${this.backgroundImageUrl})`}}></div>
      </div>
    )
  },
  backgroundImageUrl: 'https://cba.imgix.net/verzekeringen/overlijdensrisicoverzekering/PublishingImages/ORV_verzekering.jpg?'
});

var Breadcrumb = React.createClass({
  render: function() {
    return (
      <div className="container-breadcrumb">
        <div className="gradient"></div>
        <ol className="breadcrumb">
          <li><a href="">Dynamic</a></li>
          <li><a href="">Load</a></li>
          <li><span>Breadcrumb</span></li>
        </ol>
      </div>
    );
  }
});

var StripHero = React.createClass({
  render: function() {
    return (
      <article className="cb-strip cb-strip-hero-product">
        <HeroBanner />
        <div className="page container">
          <Breadcrumb/>
        </div>
        Hello, world! I am a herostrip.
      </article>
    );
  }
});



//
// react-stripherocontent
//

var StripHeroContent = React.createClass({
  render: function() {
    return (
      <article className="cb-strip cb-strip-hero-product">
        <div className="page container" style={{marginTop: '-22px'}}>
          <section className="content">
            <h1>Product titel</h1>
            <h2 className="highlight margin-bottom-lg">Tagline tekst</h2>
          </section>
        </div>
      </article>
    );
  }
});



//
// react-stripcontent
//

var StripContent = React.createClass({
  render: function() {
    return (
        <div className="cb-strip">
          Hello, world! I am a content strip.
        </div>
    );
  }
});



//
// react-stripvideo
//

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
      case 'react-stripherocontent':
        ReactDOM.render(<StripHeroContent/>, tags[i]);
        break;
      case 'react-stripcontent':
        ReactDOM.render(<StripContent/>, tags[i]);
        break;
      case 'react-stripvideo':
        ReactDOM.render(<StripVideo/>, tags[i]);
        break;
    }
  }
}

reactBootstrap();
