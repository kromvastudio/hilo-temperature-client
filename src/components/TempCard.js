import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

export default class TempCard extends React.Component {

  constructor(props) {
    super(props);
	this.state = ({
      tempMin: '',
      tempMax: '',
      description: '',
      city: '',
      cityNotFound: ''
	})
  }

  componentDidMount() {
	fetch('/hilo-temps')
	  .then(res => res.json())
	  .then(data => {
		console.log("My Data", data);
		if(data.data.cod === '404') {
		  this.setState({
		    cityNotFound: '404'
		  })
		} else {
		  this.setState({
		    tempMin: Math.round(data.data.main.temp_min) + '°F',
		    tempMax: Math.round(data.data.main.temp_max) + '°F',
			description: data.data.weather[0].description,
			city: data.data.name
		  });
		}
	  })
	  .catch(err => {
	    console.log(err);
	  })	
  }
  
  render(){
    const TemperatureCard = (
	  this.state.cityNotFound == '404' ? 
        <div className='text-center row-middle'>
			<NotFound/>
		</div> :
		<div className='text-center row-middle'>
          <div className='hilo-wrapper'>
            <div className='temp-min'>{ this.state.tempMin }</div>
            <div className='temp-max'>{ this.state.tempMax }</div>
          </div>
          <div className='temp-details'>Current conditions: { this.state.description }</div>
          <div className='temp-details'>{ this.state.city }</div>
          <Link to='/'><button className='btn btn-orange'>Enter new zipcode</button></Link>
		</div>
	)
    
    return (
    <div className='tempResultsContainer'>
      <div className='tempCard'>
        {TemperatureCard}
      </div>
    </div>
    );
  }

}