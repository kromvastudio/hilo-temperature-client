import React from 'react';
import { Link } from 'react-router-dom';

export default class WrongZip extends React.Component {
  render() {
    return (
      <div className='text-center row-middle'>
        <div className='temp-error'>❌ The zipcode entered is not right, please verify</div>
        <Link to='/'><button class='btn btn-orange'>Enter new zipcode</button></Link>
      </div>
    );
  }
}