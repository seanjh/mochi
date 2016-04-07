'use strict';

import React, { PropTypes } from 'react';

export class Event extends React.Component {
  getColor(category) {
    switch (category) {
      case 'donation': return '#f61b7d';
      case 'event': return '#057bdf';
      case 'meeting': return '#5cc32d';
      case 'correspondence': return '#f8d21b';
      default: return '#f61b7d';
    }
  }
  render() {
    const { title, date, category, children } = this.props;
    return (
      <div className="timeline-event">
        <div className="event-title">
          <svg className="event-circle" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill={this.getColor(category)} />
          </svg>
          <h4>{title}</h4>
        </div>
        <div className="event-details">
          <h5>{date}</h5>
          <p>{children}</p>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  children: PropTypes.string,
};

export default Event;