module.exports = (context, req, rentableCars) => {

  const error = null;
  let response = {};
  
  // If request is valid
  if(req.body.plate && req.body.driver_id) {
          
    // If rentableCar is available
    if(rentableCars.length === 1) {
      
      // Notify the domain
      context.bindings.rentCar = {
        carId: rentableCars[0].id,
        driverId: req.body.driver_id
      };

      context.log.info(context.bindings.rentCar);
              
      response = { status: 201, body: 'requested for rent'};
      
    } else {
      response = { status: 401, body: 'car is not rentable'};
    }
  
  } else {
    context.log.warn('Missing parameter');
    response = { status: 401, body: 'plate and driver are required'};
  }
  
  context.done(error, response);
};