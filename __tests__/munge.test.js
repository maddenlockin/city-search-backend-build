/* eslint-disable indent */
const { mungeLocationInfo, mungeWeatherInfo, mungeReviewInfo } = require('../lib/munge');

require('dotenv').config();


describe('munge functions', () => {

    test('takes in  location data and turns it into a better object', async () => {

        const expectation = {
            'formatted_query': 'Seattle, King County, Washington, USA',
            'latitude': '47.6038321',
            'longitude': '-122.3300624'
        };

        const input = [
            //ALLLLL of the data from the api (from postman) [which actually comes as an array]
        ];

        const actual = mungeLocationInfo(input);

        expect(actual).toEqual(expectation);
    });

    test('takes in  location data and returns appropriate forecast info', async () => {

        const expectation = [
            //if not passing tests, console.log(data.body) in munge.js and assess if its good enough to match what we want. if so, just copy that from the (failing) test's console.log and put here
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
            {
                'forecast': expect.any(String),
                'time': expect.any(String)
            },
        ];

        const input = {
            //ALLLLL of the data from the api (from postman)
        };

        const actual = mungeWeatherInfo(input);

        expect(actual).toEqual(expectation);
    });

    test('takes in review data and returns approriate reviews', async () => {

        const expectation = [
            {
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
                'name': 'Pike Place Chowder',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg',
                'name': 'Piroshky Piroshky',
                'price': '$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg',
                'name': 'Ellenos Real Greek Yogurt',
                'price': '$',
                'rating': 5,
                'url': 'https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/SdnJM6TCUmlKlpN6bnP-Rg/o.jpg',
                'name': 'The Pink Door',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg',
                'name': 'Storyville Coffee Company',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg',
                'name': 'Japonessa Sushi Cocina',
                'price': '$$',
                'rating': 4,
                'url': 'https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Pxq-GrSvmQCjHxPoCLgsfw/o.jpg',
                'name': 'Starbucks Reserve Roastery Seattle',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/starbucks-reserve-roastery-seattle-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nA5msGED9d3Bn5ldV2UgHA/o.jpg',
                'name': 'The Crumpet Shop',
                'price': '$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/the-crumpet-shop-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hh5CwveJRABseaWt_UxtXA/o.jpg',
                'name': 'Beecher\'s Handmade Cheese',
                'price': '$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/beechers-handmade-cheese-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxGvVggINkZ_BI3u7OX4CA/o.jpg',
                'name': 'Biscuit Bitch',
                'price': '$',
                'rating': 4,
                'url': 'https://www.yelp.com/biz/biscuit-bitch-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5fmWSH9EoNSFLCRakj8tSw/o.jpg',
                'name': 'Le Panier French Bakery',
                'price': '$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/le-panier-french-bakery-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qX2VP_ovmhS6NNlO0zi4gA/o.jpg',
                'name': 'Salumi Artisan Cured Meats',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/salumi-artisan-cured-meats-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/y37Xvo70cY1kh6-d1vDdfQ/o.jpg',
                'name': 'Lola',
                'price': '$$',
                'rating': 4,
                'url': 'https://www.yelp.com/biz/lola-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mHyyfLAUge0LjN5t1hYfKw/o.jpg',
                'name': 'Serious Pie',
                'price': '$$',
                'rating': 4,
                'url': 'https://www.yelp.com/biz/serious-pie-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2Jk8ycCKf7XaSrHdpWxEdw/o.jpg',
                'name': 'Metropolitan Grill',
                'price': '$$$$',
                'rating': 4,
                'url': 'https://www.yelp.com/biz/metropolitan-grill-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/naJ4Nkphiis5M36tGrGHJA/o.jpg',
                'name': 'Elliott\'s Oyster House',
                'price': '$$$',
                'rating': 4,
                'url': 'https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg',
                'name': 'Von\'s 1000 Spirits',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lH44FL3TivTFgJCjDNWnJA/o.jpg',
                'name': 'Tat\'s Delicatessen',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/tats-delicatessen-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/21QxhWyYxnlHjOBKUysvYA/o.jpg',
                'name': 'Purple Café and Wine Bar',
                'price': '$$$',
                'rating': 4,
                'url': 'https://www.yelp.com/biz/purple-caf%C3%A9-and-wine-bar-seattle-3?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
            {
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/W9DnG_PyGHOtApxbAoFOqA/o.jpg',
                'name': 'Radiator Whiskey',
                'price': '$$',
                'rating': 4.5,
                'url': 'https://www.yelp.com/biz/radiator-whiskey-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
            },
        ];
        

        const input = [
            {
                'id': '6I28wDuMBR5WLMqfKxaoeg',
                'alias': 'pike-place-chowder-seattle',
                'name': 'Pike Place Chowder',
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 7575,
                'categories': [
                    {
                        'alias': 'seafood',
                        'title': 'Seafood'
                    },
                    {
                        'alias': 'soup',
                        'title': 'Soup'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.60939,
                    'longitude': -122.34112
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '1530 Post Aly',
                    'address2': 'Ste 11',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1530 Post Aly',
                        'Ste 11',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12062672537',
                'display_phone': '(206) 267-2537',
                'distance': 1033.824249573459
            },
            {
                'id': 'NxwrJPJLzTs0k0DQ-QCo1A',
                'alias': 'piroshky-piroshky-seattle',
                'name': 'Piroshky Piroshky',
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 6393,
                'categories': [
                    {
                        'alias': 'bakeries',
                        'title': 'Bakeries'
                    },
                    {
                        'alias': 'russian',
                        'title': 'Russian'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.60991,
                    'longitude': -122.34231
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$',
                'location': {
                    'address1': '1908 Pike Pl',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1908 Pike Pl',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12064416068',
                'display_phone': '(206) 441-6068',
                'distance': 1149.3174056850469
            },
            {
                'id': 'CKxp6p22ipCo94iLieXzbQ',
                'alias': 'ellenos-real-greek-yogurt-seattle',
                'name': 'Ellenos Real Greek Yogurt',
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 1960,
                'categories': [
                    {
                        'alias': 'desserts',
                        'title': 'Desserts'
                    }
                ],
                'rating': 5.0,
                'coordinates': {
                    'latitude': 47.608912,
                    'longitude': -122.34058
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$',
                'location': {
                    'address1': '1500 Pike Pl',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1500 Pike Pl',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12065357562',
                'display_phone': '(206) 535-7562',
                'distance': 969.948917408613
            },
            {
                'id': 'VOPdG8llLPaga9iJxXcMuQ',
                'alias': 'the-pink-door-seattle-4',
                'name': 'The Pink Door',
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/SdnJM6TCUmlKlpN6bnP-Rg/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 5350,
                'categories': [
                    {
                        'alias': 'italian',
                        'title': 'Italian'
                    },
                    {
                        'alias': 'wine_bars',
                        'title': 'Wine Bars'
                    },
                    {
                        'alias': 'seafood',
                        'title': 'Seafood'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.61028,
                    'longitude': -122.3425
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '1919 Post Alley',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1919 Post Alley',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12064433241',
                'display_phone': '(206) 443-3241',
                'distance': 1185.5875469313717
            },
            {
                'id': 'FVzl8rDPiTWEtrNEuCu-Xg',
                'alias': 'storyville-coffee-company-seattle-9',
                'name': 'Storyville Coffee Company',
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 1835,
                'categories': [
                    {
                        'alias': 'coffee',
                        'title': 'Coffee & Tea'
                    },
                    {
                        'alias': 'bakeries',
                        'title': 'Bakeries'
                    },
                    {
                        'alias': 'waffles',
                        'title': 'Waffles'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.60895949363687,
                    'longitude': -122.34043157053927
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '94 Pike St',
                    'address2': 'Ste 34',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '94 Pike St',
                        'Ste 34',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12067805777',
                'display_phone': '(206) 780-5777',
                'distance': 964.0382167170328
            },
            {
                'id': 'L8RRAd-JZ0Bd4MER0yyX-g',
                'alias': 'japonessa-sushi-cocina-seattle',
                'name': 'Japonessa Sushi Cocina',
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 4763,
                'categories': [
                    {
                        'alias': 'japanese',
                        'title': 'Japanese'
                    },
                    {
                        'alias': 'sushi',
                        'title': 'Sushi Bars'
                    },
                    {
                        'alias': 'cocktailbars',
                        'title': 'Cocktail Bars'
                    }
                ],
                'rating': 4.0,
                'coordinates': {
                    'latitude': 47.6079793649921,
                    'longitude': -122.339042355669
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '1400 1st Ave',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1400 1st Ave',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12069717979',
                'display_phone': '(206) 971-7979',
                'distance': 816.0292860649765
            },
            {
                'id': '6ZKNFPLWRIVWshUkMNlgng',
                'alias': 'starbucks-reserve-roastery-seattle-seattle',
                'name': 'Starbucks Reserve Roastery Seattle',
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Pxq-GrSvmQCjHxPoCLgsfw/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/starbucks-reserve-roastery-seattle-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 3106,
                'categories': [
                    {
                        'alias': 'coffee',
                        'title': 'Coffee & Tea'
                    },
                    {
                        'alias': 'coffeeroasteries',
                        'title': 'Coffee Roasteries'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.61401,
                    'longitude': -122.32811
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '1124 Pike St',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1124 Pike St',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12066240173',
                'display_phone': '(206) 624-0173',
                'distance': 1141.1547869791877
            },
            {
                'id': 'aX2ctpgS9uvFDfdzCXjecA',
                'alias': 'the-crumpet-shop-seattle',
                'name': 'The Crumpet Shop',
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nA5msGED9d3Bn5ldV2UgHA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/the-crumpet-shop-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 2364,
                'categories': [
                    {
                        'alias': 'bakeries',
                        'title': 'Bakeries'
                    },
                    {
                        'alias': 'coffee',
                        'title': 'Coffee & Tea'
                    },
                    {
                        'alias': 'breakfast_brunch',
                        'title': 'Breakfast & Brunch'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.60899,
                    'longitude': -122.34044
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$',
                'location': {
                    'address1': '1503 1st Ave',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1503 1st Ave',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12066821598',
                'display_phone': '(206) 682-1598',
                'distance': 972.842611401474
            },
            {
                'id': 'mNdz7zdezTkiuk8S-cIKxg',
                'alias': 'beechers-handmade-cheese-seattle',
                'name': 'Beecher\'s Handmade Cheese',
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hh5CwveJRABseaWt_UxtXA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/beechers-handmade-cheese-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 3044,
                'categories': [
                    {
                        'alias': 'cheese',
                        'title': 'Cheese Shops'
                    },
                    {
                        'alias': 'sandwiches',
                        'title': 'Sandwiches'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.60963,
                    'longitude': -122.34179
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$',
                'location': {
                    'address1': '1600 Pike Pl',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1600 Pike Pl',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12069561964',
                'display_phone': '(206) 956-1964',
                'distance': 1094.5690987855573
            },
            {
                'id': '09FLRYnePKcUwGDDPIOAkg',
                'alias': 'biscuit-bitch-seattle',
                'name': 'Biscuit Bitch',
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxGvVggINkZ_BI3u7OX4CA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/biscuit-bitch-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 3990,
                'categories': [
                    {
                        'alias': 'breakfast_brunch',
                        'title': 'Breakfast & Brunch'
                    },
                    {
                        'alias': 'coffee',
                        'title': 'Coffee & Tea'
                    },
                    {
                        'alias': 'southern',
                        'title': 'Southern'
                    }
                ],
                'rating': 4.0,
                'coordinates': {
                    'latitude': 47.61034,
                    'longitude': -122.34167
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$',
                'location': {
                    'address1': '1909 1st Ave',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1909 1st Ave',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12064417999',
                'display_phone': '(206) 441-7999',
                'distance': 1144.6740671250118
            },
            {
                'id': 'Eh-7d5coQltQfQWAtWnPyg',
                'alias': 'le-panier-french-bakery-seattle',
                'name': 'Le Panier French Bakery',
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5fmWSH9EoNSFLCRakj8tSw/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/le-panier-french-bakery-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 2456,
                'categories': [
                    {
                        'alias': 'bakeries',
                        'title': 'Bakeries'
                    },
                    {
                        'alias': 'sandwiches',
                        'title': 'Sandwiches'
                    },
                    {
                        'alias': 'cakeshop',
                        'title': 'Patisserie/Cake Shop'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.6098933070898,
                    'longitude': -122.342474609613
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$',
                'location': {
                    'address1': '1902 Pike Pl',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1902 Pike Pl',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12064413669',
                'display_phone': '(206) 441-3669',
                'distance': 1131.178799592818
            },
            {
                'id': 'T7XmistL2pQrW3hY3oTpng',
                'alias': 'salumi-artisan-cured-meats-seattle-2',
                'name': 'Salumi Artisan Cured Meats',
                'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qX2VP_ovmhS6NNlO0zi4gA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/salumi-artisan-cured-meats-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 1384,
                'categories': [
                    {
                        'alias': 'italian',
                        'title': 'Italian'
                    },
                    {
                        'alias': 'sandwiches',
                        'title': 'Sandwiches'
                    },
                    {
                        'alias': 'meats',
                        'title': 'Meat Shops'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.59898,
                    'longitude': -122.33269
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '404 Occidental Ave S',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98104',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '404 Occidental Ave S',
                        'Seattle, WA 98104'
                    ]
                },
                'phone': '+12066218772',
                'display_phone': '(206) 621-8772',
                'distance': 572.3979208787654
            },
            {
                'id': 'oq5KCmPFKV28BnB4hjpo_g',
                'alias': 'lola-seattle',
                'name': 'Lola',
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/y37Xvo70cY1kh6-d1vDdfQ/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/lola-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 3933,
                'categories': [
                    {
                        'alias': 'greek',
                        'title': 'Greek'
                    },
                    {
                        'alias': 'mediterranean',
                        'title': 'Mediterranean'
                    },
                    {
                        'alias': 'breakfast_brunch',
                        'title': 'Breakfast & Brunch'
                    }
                ],
                'rating': 4.0,
                'coordinates': {
                    'latitude': 47.6132519777742,
                    'longitude': -122.340060726984
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '2000 4th Ave',
                    'address2': null,
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98121',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '2000 4th Ave',
                        'Seattle, WA 98121'
                    ]
                },
                'phone': '+12064411430',
                'display_phone': '(206) 441-1430',
                'distance': 1288.0007211149011
            },
            {
                'id': '-FOAQv22SXtSBs7nptI3UA',
                'alias': 'serious-pie-seattle',
                'name': 'Serious Pie',
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mHyyfLAUge0LjN5t1hYfKw/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/serious-pie-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 4174,
                'categories': [
                    {
                        'alias': 'pizza',
                        'title': 'Pizza'
                    }
                ],
                'rating': 4.0,
                'coordinates': {
                    'latitude': 47.61296,
                    'longitude': -122.34047
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '316 Virginia St',
                    'address2': null,
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98121',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '316 Virginia St',
                        'Seattle, WA 98121'
                    ]
                },
                'phone': '+12068387388',
                'display_phone': '(206) 838-7388',
                'distance': 1279.7015541496398
            },
            {
                'id': 'lxvncNXJKThTmLmARv72pA',
                'alias': 'metropolitan-grill-seattle',
                'name': 'Metropolitan Grill',
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2Jk8ycCKf7XaSrHdpWxEdw/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/metropolitan-grill-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 1800,
                'categories': [
                    {
                        'alias': 'tradamerican',
                        'title': 'American (Traditional)'
                    },
                    {
                        'alias': 'steak',
                        'title': 'Steakhouses'
                    }
                ],
                'rating': 4.0,
                'coordinates': {
                    'latitude': 47.604438,
                    'longitude': -122.334126
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$$$$',
                'location': {
                    'address1': '820 2nd Ave',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98104',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '820 2nd Ave',
                        'Seattle, WA 98104'
                    ]
                },
                'phone': '+12066243287',
                'display_phone': '(206) 624-3287',
                'distance': 312.0208128156214
            },
            {
                'id': 'xqH038QcquJEMm5LIZHd5w',
                'alias': 'elliotts-oyster-house-seattle-2',
                'name': 'Elliott\'s Oyster House',
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/naJ4Nkphiis5M36tGrGHJA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 3589,
                'categories': [
                    {
                        'alias': 'seafood',
                        'title': 'Seafood'
                    }
                ],
                'rating': 4.0,
                'coordinates': {
                    'latitude': 47.6054699,
                    'longitude': -122.34092
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$$$',
                'location': {
                    'address1': '1201 Alaskan Way',
                    'address2': '',
                    'address3': 'Pier 56',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1201 Alaskan Way',
                        'Pier 56',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12066234340',
                'display_phone': '(206) 623-4340',
                'distance': 836.0363533530226
            },
            {
                'id': 'Lw7NmZ3j-WEye97ywEmkXQ',
                'alias': 'vons-1000-spirits-seattle-4',
                'name': 'Von\'s 1000 Spirits',
                'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 1802,
                'categories': [
                    {
                        'alias': 'newamerican',
                        'title': 'American (New)'
                    },
                    {
                        'alias': 'burgers',
                        'title': 'Burgers'
                    },
                    {
                        'alias': 'pubs',
                        'title': 'Pubs'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.606565,
                    'longitude': -122.338337
                },
                'transactions': [
                    'restaurant_reservation',
                    'pickup',
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '1225 1st Ave',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1225 1st Ave',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12066218667',
                'display_phone': '(206) 621-8667',
                'distance': 690.7900253149166
            },
            {
                'id': 'lqxaHsByP4IDsWlrqXhCDQ',
                'alias': 'tats-delicatessen-seattle',
                'name': 'Tat\'s Delicatessen',
                'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lH44FL3TivTFgJCjDNWnJA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/tats-delicatessen-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 1150,
                'categories': [
                    {
                        'alias': 'delis',
                        'title': 'Delis'
                    },
                    {
                        'alias': 'cheesesteaks',
                        'title': 'Cheesesteaks'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.6015989850198,
                    'longitude': -122.332317061304
                },
                'transactions': [
                    'pickup',
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '159 Yesler Way',
                    'address2': '',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98104',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '159 Yesler Way',
                        'Seattle, WA 98104'
                    ]
                },
                'phone': '+12062648287',
                'display_phone': '(206) 264-8287',
                'distance': 300.3895479378003
            },
            {
                'id': 'Mh5o8RtQNNUxhoJe6BxVkg',
                'alias': 'purple-café-and-wine-bar-seattle-3',
                'name': 'Purple Café and Wine Bar',
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/21QxhWyYxnlHjOBKUysvYA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/purple-caf%C3%A9-and-wine-bar-seattle-3?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 2479,
                'categories': [
                    {
                        'alias': 'newamerican',
                        'title': 'American (New)'
                    },
                    {
                        'alias': 'wine_bars',
                        'title': 'Wine Bars'
                    },
                    {
                        'alias': 'desserts',
                        'title': 'Desserts'
                    }
                ],
                'rating': 4.0,
                'coordinates': {
                    'latitude': 47.60795,
                    'longitude': -122.33508
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$$$',
                'location': {
                    'address1': '1225 4th Ave',
                    'address2': null,
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '1225 4th Ave',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12068292280',
                'display_phone': '(206) 829-2280',
                'distance': 593.8105510194106
            },
            {
                'id': 'ps9ZlLoLYTfK87IjW9REfg',
                'alias': 'radiator-whiskey-seattle',
                'name': 'Radiator Whiskey',
                'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/W9DnG_PyGHOtApxbAoFOqA/o.jpg',
                'is_closed': false,
                'url': 'https://www.yelp.com/biz/radiator-whiskey-seattle?adjust_creative=p2XCNU0_0rZvzwlZnzzzrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=p2XCNU0_0rZvzwlZnzzzrQ',
                'review_count': 1261,
                'categories': [
                    {
                        'alias': 'newamerican',
                        'title': 'American (New)'
                    },
                    {
                        'alias': 'cocktailbars',
                        'title': 'Cocktail Bars'
                    },
                    {
                        'alias': 'comfortfood',
                        'title': 'Comfort Food'
                    }
                ],
                'rating': 4.5,
                'coordinates': {
                    'latitude': 47.608949,
                    'longitude': -122.340599
                },
                'transactions': [
                    'delivery'
                ],
                'price': '$$',
                'location': {
                    'address1': '94 Pike St',
                    'address2': 'Ste 30',
                    'address3': '',
                    'city': 'Seattle',
                    'zip_code': '98101',
                    'country': 'US',
                    'state': 'WA',
                    'display_address': [
                        '94 Pike St',
                        'Ste 30',
                        'Seattle, WA 98101'
                    ]
                },
                'phone': '+12064674268',
                'display_phone': '(206) 467-4268',
                'distance': 973.5058464656514
            }
        ];

        const actual = mungeReviewInfo(input);
        
        expect(actual).toEqual(expectation);
    });
});