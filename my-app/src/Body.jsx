import React from 'react';

var Body = React.createClass({
    render: function() {
      return (
  
        <div id="fullpage">
          <section className="vertical-scrolling">
            <h2>#1</h2>
            <h3>This is the first section</h3>
          </section>
          <section className="vertical-scrolling">
            <h2>#2</h2>
            <h3>This is the second section</h3>
          </section>
          <section className="vertical-scrolling">
            <h2>#3</h2>
            <h3>This is the third section</h3>
          </section>
          <section className="vertical-scrolling">
            <h2>#4</h2> 
            <h3>This is the fourth section</h3>
          </section>
          <section className="vertical-scrolling">
            <h2>#5</h2> 
            <h3>This is the fourth section</h3>
          </section>
        </div>
      );
    }
  });