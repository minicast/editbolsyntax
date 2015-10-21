// App component - represents the whole app
App = React.createClass({
  getFormulas() {
    return [
      {
        _id: 1,
        text: "((p&q)>(r|~s))"
      }, {
        _id: 2,
        text: "((r|s)^(p1&p2))"
      }
    ];
  },

  renderFormulas() {
    return this.getFormulas()
      .map((formula) => {
        return <Formula key={formula._id} formula={formula}/>;
      });
  },

  render() {
    return (
      <div className="container">
        <ul>
          {this.renderFormulas()}
        </ul>
        <header>
          <h1>Formula Editor</h1>
        </header>
      </div>
    );
  }

});
