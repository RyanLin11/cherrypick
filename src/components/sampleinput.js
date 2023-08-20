const sampleInput = [
  {
    business_status: 'OPERATIONAL',
    formatted_address: '10 Dundas St E, Toronto, ON M5B 2G9, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet',
    name: "Jack Astor's Bar & Grill Dundas Square",
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJk3f-0co0K4gRLptE9VtASRo',
    plus_code: {
      compound_code: 'MJ49+MR Toronto, Ontario',
      global_code: '87M2MJ49+MR'
    },
    price_level: 2,
    rating: 4,
    reference: 'ChIJk3f-0co0K4gRLptE9VtASRo',
    types: [
      'bar',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 4090
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '10 Dundas St E #500, Toronto, ON M5B 2G9, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Spring Sushi Toronto (4th Floor)',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJ028Nzco0K4gRR2rUdyHwc28',
    plus_code: {
      compound_code: 'MJ49+MP Toronto, Ontario',
      global_code: '87M2MJ49+MP'
    },
    price_level: 2,
    rating: 4.1,
    reference: 'ChIJ028Nzco0K4gRR2rUdyHwc28',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 3514
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '10 Dundas St E Level 3, Toronto, ON M5B 2L6, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Asian Gourmet Wok & Grill',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJeVKEY9s1K4gRASca1ndaMmE',
    plus_code: {
      compound_code: 'MJ49+QR Toronto, Ontario',
      global_code: '87M2MJ49+QR'
    },
    rating: 3.8,
    reference: 'ChIJeVKEY9s1K4gRASca1ndaMmE',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 82
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '10 Dundas St E unit-#342, Toronto, ON M5B 2G9, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'California Thai',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJob19IMs0K4gRKbBaTxP3DEs',
    plus_code: {
      compound_code: 'MJ49+RR Toronto, Ontario',
      global_code: '87M2MJ49+RR'
    },
    rating: 3.5,
    reference: 'ChIJob19IMs0K4gRKbBaTxP3DEs',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 77
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '1 Dundas St W, Toronto, ON M5G 1Z3, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'JOEY Eaton Centre',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJtY7dIMs0K4gREEfQx6rkc-A',
    plus_code: {
      compound_code: 'MJ49+86 Toronto, Ontario',
      global_code: '87M2MJ49+86'
    },
    price_level: 2,
    rating: 4.3,
    reference: 'ChIJtY7dIMs0K4gREEfQx6rkc-A',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 3759
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '249 Victoria St, Toronto, ON M5B 1V8, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'The Senator',
    opening_hours: { open_now: false },
    photos: [ [Object] ],
    place_id: 'ChIJWcH-2zTL1IkRqB8N3YUw6-I',
    plus_code: {
      compound_code: 'MJ4C+78 Toronto, Ontario',
      global_code: '87M2MJ4C+78'
    },
    price_level: 2,
    rating: 4.3,
    reference: 'ChIJWcH-2zTL1IkRqB8N3YUw6-I',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 1416
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '323 Yonge St, Toronto, ON M5B 1R7, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Chipotle Mexican Grill',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJcfbYz8o0K4gRUY0e-6eIcLs',
    plus_code: {
      compound_code: 'MJ49+PM Toronto, Ontario',
      global_code: '87M2MJ49+PM'
    },
    price_level: 1,
    rating: 4.1,
    reference: 'ChIJcfbYz8o0K4gRUY0e-6eIcLs',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 1418
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '329 Yonge St, Toronto, ON M5B 1R7, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Five Guys',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJ34QZxso0K4gRjxnB_LkcDMI',
    plus_code: {
      compound_code: 'MJ49+RM Toronto, Ontario',
      global_code: '87M2MJ49+RM'
    },
    price_level: 2,
    rating: 4.3,
    reference: 'ChIJ34QZxso0K4gRjxnB_LkcDMI',
    types: [
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 2282
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '321 Yonge St #112, Toronto, ON M5B 1R7, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Rolltation Sushi Burrito',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJY2s6wV01K4gRaUeBX7JoS6M',
    plus_code: {
      compound_code: 'MJ49+PJ Toronto, Ontario',
      global_code: '87M2MJ49+PJ'
    },
    rating: 4.3,
    reference: 'ChIJY2s6wV01K4gRaUeBX7JoS6M',
    types: [
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 355
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '351 Yonge St, Toronto, ON M5B 1S1, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Basil Box',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJo0hXvMo0K4gRnLuaJcnMs2c',
    plus_code: {
      compound_code: 'MJ59+4F Toronto, Ontario',
      global_code: '87M2MJ59+4F'
    },
    price_level: 1,
    rating: 4.3,
    reference: 'ChIJo0hXvMo0K4gRnLuaJcnMs2c',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 921
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '20 Dundas St W, Toronto, ON M5G 2C2, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Red Lobster',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJYcRg38o0K4gR2tMNd0Xk_yg',
    plus_code: {
      compound_code: 'MJ48+GH Toronto, Ontario',
      global_code: '87M2MJ48+GH'
    },
    price_level: 2,
    rating: 4.1,
    reference: 'ChIJYcRg38o0K4gR2tMNd0Xk_yg',
    types: [
      'bar',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 2756
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '340 Yonge St, Toronto, ON M5B 1R8, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Salad King',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJ2Uabx8o0K4gR0prH0ZEi390',
    plus_code: {
      compound_code: 'MJ59+38 Toronto, Ontario',
      global_code: '87M2MJ59+38'
    },
    price_level: 1,
    rating: 4.2,
    reference: 'ChIJ2Uabx8o0K4gR0prH0ZEi390',
    types: [
      'meal_takeaway',
      'meal_delivery',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 4299
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '335 Yonge St, Toronto, ON M5B 2L3, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Spice66',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJzTd6CHM1K4gRgkBQVOHDMNo',
    plus_code: {
      compound_code: 'MJ49+WG Toronto, Ontario',
      global_code: '87M2MJ49+WG'
    },
    rating: 4.3,
    reference: 'ChIJzTd6CHM1K4gRgkBQVOHDMNo',
    types: [
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 149
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '335 Yonge St, Toronto, ON M5B 2L3, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Vietlicious',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJqyrEUwo1K4gR70e-dXnlrrs',
    plus_code: {
      compound_code: 'MJ49+WH Toronto, Ontario',
      global_code: '87M2MJ49+WH'
    },
    rating: 4.6,
    reference: 'ChIJqyrEUwo1K4gR70e-dXnlrrs',
    types: [
      'bakery',
      'restaurant',
      'food',
      'store',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 65
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '7 Elm St, Toronto, ON M5G 1H1, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: "Barberian's Steak House",
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJmx6Xk8o0K4gR_jkDCsG80SY',
    plus_code: {
      compound_code: 'MJ59+34 Toronto, Ontario',
      global_code: '87M2MJ59+34'
    },
    price_level: 4,
    rating: 4.5,
    reference: 'ChIJmx6Xk8o0K4gR_jkDCsG80SY',
    types: [
      'bar',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 1821
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '10 Dundas St E, Toronto, ON M5B, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Takimi Sushi',
    place_id: 'ChIJVQK9zso0K4gRDpjM_bENv5o',
    plus_code: {
      compound_code: 'MJ49+QP Toronto, Ontario',
      global_code: '87M2MJ49+QP'
    },
    rating: 0,
    reference: 'ChIJVQK9zso0K4gRDpjM_bENv5o',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 0
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '10 Dundas St E #334, Toronto, ON M5B 2G9, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Marble Slab Creamery Yonge and Dundas',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJueCSnUo1K4gRSq5GIrfxZus',
    plus_code: {
      compound_code: 'MJ49+MR Toronto, Ontario',
      global_code: '87M2MJ49+MR'
    },
    price_level: 2,
    rating: 3.9,
    reference: 'ChIJueCSnUo1K4gRSq5GIrfxZus',
    types: [
      'restaurant',
      'food',
      'store',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 87
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '335 Yonge St, Toronto, ON M5B 1R7, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: '6ix Fried Chicken',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJLX8qsyAzK4gRqIbtw81uTaY',
    plus_code: {
      compound_code: 'MJ49+XJ Toronto, Ontario',
      global_code: '87M2MJ49+XJ'
    },
    rating: 4,
    reference: 'ChIJLX8qsyAzK4gRqIbtw81uTaY',
    types: [
      'meal_takeaway',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 57
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: 'Eaton Centre, 260 Yonge St, Toronto, ON M5B 2L9, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'A&W Canada',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJHXUGTss0K4gRWWk-yayPs70',
    plus_code: {
      compound_code: 'MJ49+6F Toronto, Ontario',
      global_code: '87M2MJ49+6F'
    },
    price_level: 1,
    rating: 3.9,
    reference: 'ChIJHXUGTss0K4gRWWk-yayPs70',
    types: [ 'restaurant', 'food', 'point_of_interest', 'establishment' ],
    user_ratings_total: 335
  },
  {
    business_status: 'OPERATIONAL',
    formatted_address: '10 Edward St 2nd Floor, Toronto, ON M5G 1C9, Canada',
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    icon_background_color: '#FF9E67',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
    name: 'Almadina Bistro',
    opening_hours: { open_now: true },
    photos: [ [Object] ],
    place_id: 'ChIJFwfI-0g1K4gRLkLst-6Q21Y',
    plus_code: {
      compound_code: 'MJ49+R8 Toronto, Ontario',
      global_code: '87M2MJ49+R8'
    },
    rating: 4.1,
    reference: 'ChIJFwfI-0g1K4gRLkLst-6Q21Y',
    types: [
      'meal_takeaway',
      'meal_delivery',
      'restaurant',
      'food',
      'point_of_interest',
      'establishment'
    ],
    user_ratings_total: 333
  }
]

export default sampleInput;