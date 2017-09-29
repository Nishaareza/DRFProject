retail
  .factory('Employee', function($resource) {
    return $resource(
      'http://localhost:8000/employees/:id',
      {},
      {
        'query': {
            method: 'GET',
            isArray: true,
            headers: {              
              'content-Type': 'application/json'
            }
        }
      },
      {
        stripTrailingSlashes:false
      }
    );
  });
