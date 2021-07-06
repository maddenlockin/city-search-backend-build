/* eslint-disable indent */
function mungeLocationInfo(locationData) {

    const requestedLocation = locationData[0];

    return {
        formatted_query: requestedLocation.display_name,
        latitude: requestedLocation.lat,
        longitude: requestedLocation.lon
    };
}

function mungeWeatherInfo(weatherData) {
    //here get info out of the array, change lat and lon keys and display_name to formatted data
    const forecasts = weatherData.data;

    const mungedForecasts = forecasts.map(forecast => {
        return {
            forecast: forecast.weather.description,
            time: new Date(forecast.ts * 1000)
                .toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
        };
    });
    return mungedForecasts;
}

function mungeReviewInfo(reviewData) {
    //const reviews = reviewData.businesses;
    
    const mungedReviews = reviewData.map(review => {
        return {
            name: review.name,
            image_url: review.image_url,
            price: review.price,
            rating: review.rating,
            url: review.url
        };
    });
    //console.log(mungedReviews);
    return mungedReviews;
}

module.exports = {
    mungeLocationInfo,
    mungeWeatherInfo,
    mungeReviewInfo
};