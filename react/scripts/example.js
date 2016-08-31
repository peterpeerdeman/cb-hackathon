// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// );

//example12
// var h1 = React.createElement('h1', null, 'Hallo CB');
// var div = React.createElement('div', {className: 'cb-container'}, h1);
// ReactDOM.render(div, document.getElementById('content'));

//example 2
// var PremieTool = React.createClass({
//   render: function() {
//     return (
//       <div className="cb-container">
//         <h1>Hallo CB</h1>
//       </div>
//     );
//   }
// });
// ReactDOM.render(
//   <PremieTool />,
//   document.getElementById('content')
// );

//example 3 
// var PremieTool = React.createClass({
//   render: function() {
//     return (
//       <div className="cb-container text-center">
//         <h1>PremieTool</h1>
//         <PremieFormulier />
//         <PremieBonnetje />
//       </div>
//     );
//   }
// });

var PremieFormulier = React.createClass({
  render: function() {
    return (
      <form>
      <label>
        aantal
        <input name="aantal" value={this.props.amount} onChange={this.props.onAmountChange}/>
        </label>
      </form>
    );
  }
});

var PremieBonnetje = React.createClass({
  render: function() {
    return (
    <div className="cb-receipt cb-receipt-alt">
        <div className="in-line">
            <div className="outcome">
                <h3>
                    Uw eenmalige premie: €{this.props.premie}
                </h3>
                <p className="subtext">Deze premie geldt per 01-01-2016 en is incl. 21% belasting.</p>
                <button onClick={this.props.onRequest} className="btn btn-primary">aanvragen</button>
            </div>
        </div>
    </div>
    );
  }
});

var PremieTool = React.createClass({
  getInitialState: function() {
     return {amount: 5, premie: 50};
  },
  handleAmountChange: function(e) {
     this.setState({
         amount: e.target.value,
         premie: e.target.value * 10
     });
  },
  sendRequest: function() {
      alert(`premie is ${this.state.premie}`);
  },
  render: function() {
    return (
      <div className="cb-container text-center">
        <h1>PremieTool</h1>
        <PremieFormulier amount={this.state.amount} onAmountChange={this.handleAmountChange}/>
        <PremieBonnetje premie={this.state.premie} onRequest={this.sendRequest} />
      </div>
    );
  }
});
ReactDOM.render(
  <PremieTool />,
  document.getElementById('content')
);
