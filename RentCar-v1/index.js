module.exports = (context, req, rentableCar) => {

  const error = null;
  let response = {};
  
  // If request is valid
  if(req.body.plate && req.body.driver_id) {
          
    // If rentableCar is available
    if(rentableCar.length === 1) {
      context.log(rentableCar);
  
      context.bindings.rentCar = {
        carId: rentableCar.id,
        driver_id: req.body.driver_id
      };
              
      response = { body: 'done'};
    } else {
      response = { body: 'car not rentable'};
    }
  
  } else {
    context.log.warn('Missing parameter');
    response = { status: 401, body: 'plate and driver are required'};
  }
  
  context.done(error, response);
};