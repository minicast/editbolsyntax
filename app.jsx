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
      .map((task) => {
        return <Task key={task._id} task={task}/>;
      });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Formula Editor</h1>
        </header>
        <ul>
          {this.renderFormulas()}
        </ul>
      </div>
    );
  }

});
