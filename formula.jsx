// Task component - represents a single todo item
Formula = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    formula: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.formula.text}</li>
    );
  }

});
