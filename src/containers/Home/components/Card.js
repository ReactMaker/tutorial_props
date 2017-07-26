import React from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import './Card.less';

// install some dependencies
// npm install react-fontawesome font-awesome

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="cardHeader">
          <img className="avatar" src="https://unsplash.it/50/50?image=1011" alt="hyman" />
          <div className="userInfo">
            <div className="name">
              Hyman
              <span> shared</span>
            </div>
            <div className="time">
              100 minutes ago
            </div>
          </div>
          <button>Click me</button>
        </div>
        <h2>Home to unique ideas from the world’s smart minds.</h2>
        <img className="cardImg" src="https://unsplash.it/400/300?image=1060" alt="titleimagte" />
        <div className="footer">
          <FontAwesome name="commenting-o" />
          <FontAwesome name="thumbs-o-up" />
          <FontAwesome name="thumbs-o-down" />
          <FontAwesome name="star-o" />
        </div>
      </div>
    );
  }
}
