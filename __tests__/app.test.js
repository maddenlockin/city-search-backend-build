require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  describe('routes', () => {
  
    test('returns location data', async() => {

      const expectation = {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624'
      };

      const data = await fakeRequest(app)
        .get('/location?search=seattle')
        .expect('Content-Type', /json/)
        .expect(200);
      //console.log(data.body);
      expect(data.body).toEqual(expectation);
    });

    test('returns weather data', async() => {

      const expectation = [
        // use the below .any to make this dynamic
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) }
      ];

      const data = await fakeRequest(app)
        .get('/weather?latitude=47.6038321&longitude=122.3300624')
        .expect('Content-Type', /json/)
        .expect(200);
      //(if the test is failing) console.log(data.body) to see what we are actually getting and assess if it is appropriate. if so, copy and paste it as the new expectation
      // the issue here is that it is stateFUL, and changes over time. 
      expect(data.body).toEqual(expectation);
    });

    test.skip('returns review data', async() => {

      // const expectation = {
      //   //hardcode expectations from lab
      // };

      const expectation = [
      ];

      const data = await fakeRequest(app)
        .get('/reviews?...')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});
