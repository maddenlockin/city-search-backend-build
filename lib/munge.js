/* eslint-disable indent */
function mungeLocationInfo(locationData) {
    //here get info out of the array, change lat and lon keys and display_name to formatted data
    const locationItem = locationData[0];

    return {
        formatted_query: locationItem.display_name,
        latitude: locationItem.lat,
        longitude: locationItem.lon
    };
}
function mungeWeatherInfo(weatherData) {
    //here get info out of the array, change lat and lon keys and display_name to formatted data
    const forecasts = weatherData.data;

    const mungedForecasts = forecasts.map(forecast => {
        return {
            forecast: forecast.weather.description,
            time: new Date(forecast.ts * 1000)
            // and use .toLocaleString('en-US') --> use google to figure out syntax for desired output
        };
    });

    return mungedForecasts;
}

function mungeReviewInfo(reviewData) {
    const reviews = reviewData.data; //(if an array)
    // const reviewItem = reviewData[0]; if an object?
    // figure out what the front end is wanting to take in and how to get exactly that data from the api
}

module.exports = {
    mungeLocationInfo,
    mungeWeatherInfo,
    mungeReviewInfo
};