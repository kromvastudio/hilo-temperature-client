import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className='text-center row-middle'>
        <div className='temp-error'>❌ The city was not found, please verify</div>
        <Link to='/'><button className='btn btn-orange'>Enter new zipcode</button></Link>
      </div>
    );
  }
}