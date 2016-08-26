var React = require('react');
var ReactRouter = require('react-router');
var MainWrapper = require('./MainWrapper');

var Home = React.createClass({
  render: function () {
    return (
      <MainWrapper>
        <h1>Home</h1>
        <p className='lead'>This is the beginning of your application!</p>
      </MainWrapper>
    )
  }
});

module.exports = Home;
