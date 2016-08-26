var React = require('react');
var ReactRouter = require('react-router');
var MainWrapper = require('./MainWrapper');

var Home = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        <h1>Github Battle</h1>
        <p className='lead'>May the Battle of the Hubs COMMENCE!</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainWrapper>
    )
  }
});

module.exports = Home;
