import React from 'react';

var Header = React.createClass({
    render: function() {
      return (
  
        <header>
          <div className="header-top clearfix">
            <h1 className="l-left"><a href="#firstSection">LOGO</a></h1>
            <a className="l-right toggle-menu" href="#">
              <i />
              <i />
              <i />
            </a>
          </div>
          <nav className="hide">
            <ul id="menu">
              <li data-menuanchor="firstSection">
                <a href="#firstSection" title="First Section">First Section</a>
              </li>
              <li data-menuanchor="secondSection">
                <a href="#secondSection" title="Second Section">Second Section</a>
              </li>
              <li data-menuanchor="thirdSection">
                <a href="#thirdSection" title="Second Section">Third Section</a>
              </li>
              <li data-menuanchor="fourthSection">
                <a href="#fourthSection" title="Fourth Section">Fourth Section</a>
              </li>
              <li data-menuanchor="fifthSection">
                <a href="#fifthSection" title="First Slide">Fifth Section</a>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
  });