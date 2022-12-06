import React from 'react';
import { Link } from 'react-router-dom';

const RouteError = () => {
  return (
    <div>
      Sorry this page does not exist
      <Link to="/">Go Back To Home</Link>
    </div>
  )
}

export default RouteError;