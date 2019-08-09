import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="text-white bg-primary text-center row-first title-text">
          <h1>Welcome to High&Low Temperature Getter App!</h1>
        </div>
      </header>
    );
  }
}