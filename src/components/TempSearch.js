import React from 'react';

export default function TempSearch(props) {
  return (
    <div class="text-center row-middle">
      <h3>Search for temperature in the US</h3>
      <form method='POST' action='/validate-zipcode'>
        <div class="form-group d-flex justify-content-center">
          <label for="zipcodeInput"></label>
          <input type="text" class="form-control col-sm-4" id="zipcode" 
            placeholder="Enter a zipcode" name="zipcode"/>
        </div>
        <button type="submit" class="btn btn-orange">Search</button>
      </form>
    </div>
  );
}
