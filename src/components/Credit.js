import React from 'react';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 0px 10px 2px lightgrey',
  padding: '30px',
  fontFamily: 'sans-serif',
};

const Credit = () => (
  <div style={styles}>
    <div>
      <h2>Instructions to get started:</h2>
      <p>Delete <code style={{ backgroundColor: 'lightgrey', padding: '3px' }}>Credit.js</code> file</p>
      <p>Edit <code style={{ backgroundColor: 'lightgrey', padding: '3px' }}>App.js</code> file</p>
      <p>Edit <code style={{ backgroundColor: 'lightgrey', padding: '3px' }}>_app.scss</code> file</p>
    </div>
    <div>
      <h3>Follows and stars are much appreciated!</h3>
      <iframe src="https://ghbtns.com/github-btn.html?user=ziggysauce&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="220px" height="30px"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=ziggysauce&repo=ziggy-react-app&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
    </div>
  </div>
);

export default Credit;
