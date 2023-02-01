import React from 'react';
import '../stylesheets/ClientView.scss';

export function ClientView(props) {
  const viewBtnClickHandler = () => {
    props.changeViewHandler(true);
  };

  const allSessions = [];
  for (let i = 0; i < 5; i++) {
    allSessions.push(
      <li className="session-list-item" key={i}>
        <p>
          Session {i} - {i}/01/2022
        </p>
        <button className="session-list-item-btn" onClick={viewBtnClickHandler}>
          View
        </button>
      </li>
    );
  }

  return (
    <div className="client-view">
      <div className="client-info-section">
        <div className="client-info-header">
          <h1>Client Info</h1>
        </div>
        <ul className="client-info-list">
          <li className="client-info-list-item">Client Name: Bob Turner</li>
          <li className="client-info-list-item">
            Client Email: bobturner99@gmail.com
          </li>
          <li className="client-info-list-item">Client Phone: 000-000-0000</li>
          <li className="client-info-list-item">Date of Birth: 01/01/1990</li>
        </ul>
      </div>
      <div className="client-session-section">
        <div className="client-session-header">
          <h1>Session History</h1>
        </div>
        <ul className="sessions-list">{allSessions}</ul>
        <button className="session-button" onClick={viewBtnClickHandler}>Add Session</button>
      </div>
    </div>
  );
}
