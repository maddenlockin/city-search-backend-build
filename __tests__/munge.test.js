/* eslint-disable indent */
const { mungeLocationInfo, mungeWeatherInfo, mungeReviewInfo } = require('../lib/munge');

require('dotenv').config();


describe('munge functions', () => {

    test('takes in  location data and turns it into a better object', async() => {

        const expectation = {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624'
        };

        const input = {
          //ALLLLL of the data from the api (from postman) [which actually comes as an array]
        }

        const actual = mungeLocationInfo(input)

        expect(actual).toEqual(expectation);
    });

    test('takes in  location data and returns appropriate forecast info', async() => {

        const expectation = [
            //if not passing tests, console.log(data.body) in munge.js and assess if its good enough to match what we want. if so, just copy that from the (failing) test's console.log and put here
            {
                'forecast': '...',
                'time': '...'
            },
            {
                'forecast': '...',
                'time': '...'
            }
        ];

        const input = {
          //ALLLLL of the data from the api (from postman)
        };

        const actual = mungeWeatherInfo(input);

        expect(actual).toEqual(expectation);
    });

    test('takes in review data and returns approriate reviews', async() => {

        const expectation = [
        ];

        const input = {
          //ALLLLL of the data from the api (from postman)
        };

        const actual = mungeReviewInfo(input);

        expect(actual).toEqual(expectation);
    });
});