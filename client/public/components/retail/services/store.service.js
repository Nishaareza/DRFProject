retail
  .factory('Store', function($resource) {
    return $resource(
      'http://localhost:8000/stores/:id',
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
        stripTrailingSlashes: false
      }
    );
  });
