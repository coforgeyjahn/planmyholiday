const LOCATIONS = [
  {
    id: "dubrovnik-croatia",
    country: "Croatia",
    city: "Dubrovnik",
    title: "Dubrovnik",
    date: "2025-08-25",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walking tour of Dubrovnik Old Town",
          "Swimming and cliff jumping at Buza Bar",
          "Night out at Revelin",
        ],
      },
      {
        day: 2,
        activities: [
          "Cable car to Mount Srđ",
          "Visit Lokrum Island",
          "Dinner at Panorama Restaurant",
        ],
      },
    ],
    photos: [
      require("./imgs/croatia/dubrovnik.jpeg"),
      require("./imgs/croatia/dubrovnik1.jpeg"),
      require("./imgs/croatia/dubrovnik2.jpeg"),
      require("./imgs/croatia/dubrovnik3.jpeg"),
    ],
  },
  {
    id: "split-croatia",
    country: "Croatia",
    city: "Split",
    title: "Split",
    date: "2025-08-28",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walking tour of Dubrovnik Old Town",
          "Swimming and cliff jumping at Buza Bar",
          "Night out at Revelin",
        ],
      },
      {
        day: 2,
        activities: [
          "Cable car to Mount Srđ",
          "Visit Lokrum Island",
          "Dinner at Panorama Restaurant",
        ],
      },
    ],
    photos: [
      require("./imgs/croatia/split0.jpeg"),
      require("./imgs/croatia/split1.jpeg"),
      require("./imgs/croatia/split2.jpeg"),
      require("./imgs/croatia/split3.jpeg"),
    ],
  },
  {
    id: "downtown-finland",
    country: "Finland",
    city: "Helsinki",
    title: "Helsinki",
    date: "2025-07-28",
    accomodation: "CheapSleep Hostel Helsinki",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/CheapSleep-Helsinki/Helsinki/59673",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore Senate Square & Helsinki Cathedral — iconic white landmark",
          "Walk to Market Square and try local treats at the Old Market Hall",
          "Ferry to Suomenlinna Sea Fortress — wander historic walls & sea viewpoints",
          "Relax at Löyly or Allas Sea Pool — Finnish sauna by the water",
          "Dinner in the Design District and an evening stroll through Punavuori"
        ]
      },
      {
        day: 2,
        activities: [
          "Visit Temppeliaukio (Rock Church) built directly into natural stone",
          "Walk Esplanadi Park → cafes, architecture, and boutique shops",
          "Explore Oodi Central Library — stunning modern architecture",
          "Kiasma Museum of Contemporary Art or Ateneum (classic works)",
          "End the day with sunset by the harbor or dinner in Kallio"
        ]
      }
    ],
    photos: [
      require("./imgs/finland/helsinki0.jpeg"),
      require("./imgs/finland/helsinki1.jpeg"),
      require("./imgs/finland/helsinki2.jpeg"),
      require("./imgs/finland/helsinki3.jpeg"),
    ],
  },
  {
    id: "tallinn-estonia",
    country: "Estonia",
    city: "Tallinn",
    title: "Tallinn",
    date: "2025-03-15",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore Tallinn Old Town — start at Town Hall Square and wander cobblestone streets",
          "Walk up Toompea Hill for views from Kohtuotsa and Patkuli viewing platforms",
          "Visit Alexander Nevsky Cathedral & Toompea Castle",
          "Lunch in the Old Town (try traditional Estonian food)",
          "Walk the City Walls near Hellemann Tower",
          "Visit Kalamaja district → cafes, wooden houses, and the Telliskivi Creative City",
          "Sunset at Lennusadam Seaplane Harbour waterfront"
        ]
      }
    ],
    photos: [
      require("./imgs/estonia/tallinn0.jpeg"),
      require("./imgs/estonia/tallinn1.jpeg"),
      require("./imgs/estonia/tallinn2.jpeg"),
      require("./imgs/estonia/tallinn3.jpeg"),
    ]
  },
  
  {
    id: "albania-tirana",
    country: "Albania",
    city: "Tirana",
    title: "Tirana",
    date: "2025-10-13",
    accomodation: "The Bearded Dad Hostel",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/The-Bearded-Dad-Hostel/Tirana/313345",
    itinerary: [
      {
        day: 1,
        activities: [
          "Exploring Tirana, run around Tirana Lake",
          "Irish Pub for Dinner and Drinks, Karaoke",
          "Staying in Bearded Dad Hostel",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit the House of Leaves Spy Museum",
          "Sightseeing at the mosque and pyramid",
          "Lunch and drinks at Lake View Bar.",
        ],
      },
    ],
    photos: [
      require("./imgs/albania/tirana0.jpeg"),
      require("./imgs/albania/tirana1.jpeg"),
      require("./imgs/albania/tirana2.jpeg"),
      require("./imgs/albania/tirana3.jpeg"),
    ],
  },
  {
    id: "albania-shkoder",
    country: "Albania",
    city: "Shkoder",
    title: "Shkoder",
    date: "2025-10-15",
    accomodation: "Galley Party Hostel",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/The-Galley-Party-Hostel-Social-Solo-Travellers-Day-Tours/Shkoder/315294",
    itinerary: [
      {
        day: 1,
        activities: [
          "Get city bus to Shkoder",
          "Check into Hostel - Galley party hostel",
          "Short hike to fortress on the hill",
        ],
      },
      {
        day: 2,
        activities: ["Rent bikes and spend the day swimming at Shkoder Lake"],
      },
    ],
    photos: [
      require("./imgs/albania/shkoder0.jpeg"),
      require("./imgs/albania/shkoder1.jpeg"),
      require("./imgs/albania/shkoder2.jpeg"),
      require("./imgs/albania/shkoder3.jpeg"),

    ],
  },
  {
    id: "albania-alps",
    country: "Albania",
    city: "Alps",
    title: "Theth & Valbone",
    date: "2025-10-17",
    accomodation: "CNTR Park Hotel",
    accomodationlink: "https://www.booking.com/hotel/al/cnt-park-valbona.en-gb.html",
    itinerary: [
      {
        day: 1,
        activities: [
          "Get bus to Theth Village in the Albanian Alps",
          "Leave on 7 hour/20k hike to Valbona",
          "Check into accomodation, we stayed in a hut at Centre Park",
        ],
      },
      {
        day: 2,
        activities: [
          "FULL travel day back to Tirana - bus, then beautiful ferry ride, then bus",
        ],
      },
    ],
    photos: [
      require("./imgs/albania/valbone0.jpeg"),
      require("./imgs/albania/valbone1.jpeg"),
      require("./imgs/albania/valbone2.jpeg"),
      require("./imgs/albania/valbone3.jpeg"),
      require("./imgs/albania/valbone4.jpeg"),
    ],
  },
  {
    id: "vietnam-hanoi",
    country: "Vietnam",
    city: "Hanoi",
    title: "Hanoi",
    date: "2023-04-23",
    accomodation: "Global Backpackers Hostel",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Global-Backpackers-Hostel/Hanoi/319717",
    itinerary: [
     {
        day: 1,
        activities: [
          "Explore the Old Quarter — narrow lanes, street food, cafés",
          "Get Breakfast Banh Mi at the Post-It Cafe",
          "Visit Hoan Kiem Lake & Ngoc Son Temple",
          "Egg coffee at Café Giang (famous origin spot!)",
          "St. Joseph’s Cathedral + nearby restaurants",
          "Evening: Train Street (timed visits) for a drink as the train passes"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Ho Chi Minh Mausoleum Complex & Presidential Palace",
          "Temple of Literature (Confucian history + beautiful courtyards)",
          "Lunch at Bun Cha Huong Lien (Obama Bun Cha)",
          "Walk the French Quarter — Opera House & boulevards",
          "Night: Water Puppet Show or craft beer near the Old Quarter"
        ],
    }],
    photos: [
      require("./imgs/vietnam/hanoi0.jpeg"),
      require("./imgs/vietnam/hanoi1.jpeg"),
      require("./imgs/vietnam/hanoi2.jpeg"),
    ],
  },
  {
    id: "vietnam-ha-giang",
    country: "Vietnam",
    city: "Ha Giang Loop",
    title: "Ha Giang",
    date: "2023-04-25",
    accomodation: "Jasmine tours",
    accomodationlink: "https://jasminehagiang.com/",
    itinerary: [
      {
        day: 1,
        activities: [
          "Start in Ha Giang → Quan Ba Heaven’s Gate (incredible mountain pass views)",
          "Visit the Twin Mountains viewpoint",
          "Ride through Tam Son & Yen Minh pine forests",
          "Arrive in Dong Van town — relax, explore market, dinner with your homestay"
        ],
      },
      {
        day: 2,
        activities: [
          "Ride the legendary Ma Pi Leng Pass — the most famous viewpoint on the loop",
          "Optional boat ride on the Nho Que River (turquoise canyon water)",
          "Continue to Meo Vac — winding cliff-edge roads & small villages",
          "Overnight in Meo Vac or Du Gia (depending on loop route)"
        ],
      },
      {
        day: 3,
        activities: [
          "Ride through green valleys and rice terraces toward Du Gia",
          "Stop at Du Gia Waterfall for a swim",
          "Local lunch in a Tay village",
          "Return to Ha Giang City by afternoon",
          "Evening bus back to Hanoi (common option)"
        ],
      },
    ],
    photos: [
      require("./imgs/vietnam/hagiang0.jpeg"),
      require("./imgs/vietnam/hagiang8.jpeg"),
      require("./imgs/vietnam/hagiang7.jpeg"),
      require("./imgs/vietnam/hagiang5.jpeg"),
    ],
  },
  {
    id: "australia-road-trip",
    country: "Australia",
    city: "Australia - Cairnes, Airlie Beach, Byron Bay, Batemans Bay, Sydney, Melbourne",
    title: "Australia",
    date: "2024-08-26",
    accomodation: ["Wake Up Bondi Beach", "Mad Monkday Cairns", "Wake Up Byron Bay"],
    accomodationlink: [
      "https://www.hostelworld.com/pwa/hosteldetails.php/Wake-Up-Bondi-Beach/Sydney/274311",
      "https://www.hostelworld.com/pwa/hosteldetails.php/Mad-Monkey-Jungle/Cairns/21389",
      "https://www.hostelworld.com/pwa/hosteldetails.php/Wake-Up-Byron-Bay/Byron-Bay/284218"
    ],
    itinerary: [
      {
        day: 1,
        activities: [
          "Stay in Mad Monkey hostel. fight off jet lag, trivia night. Gilligan’s day club.",
        ],
      },
      {
        day: 2,
        activities: [
          "Snorkel Great Barrier Reef near Whitsundays and whitsundays national park - all day boat tour",
          "Stay at Nomads hostel car camping, Kebab dinner",
          "Drinks/pool/karaoke at Magnums",
        ],
      },
      {
        day: 3,
        activities: ["Skydive Airlie beach", "Drive to Tannum Sands"],
      },
      {
        day: 4,
        activities: [
          "Drive to Noosa Heads",
          "Spend time at the beach",
          "Sunset drinks",
          "Dinner at Gi's",
          "Go out in Junction",
        ],
      },
      {
        day: 5,
        activities: [
          "Drive to Byron Bay",
          "Australia zoo on the way! See Robert Irwin's croc show",
          "Go to rails bar to listen to live music, have dinner, play cards",
          "Camp in beautiful beachfront campsite",
        ],
      },
      {
        day: 6,
        activities: [
          "Drive to coffs harbour",
          "Eat fresh seafood, swim in the sea, rest/read on really cool dog beach",
          "Drive to bondi beach. go to salty’s and play cards. sleep in Wake Up Bondi Beach Hostel",
        ],
      },
      {
        day: 7,
        activities: [
          "Morning cold plunge on bondi beach",
          "Bondi Beach to Bronte Beach Walk, breakfast",
          "Downtown Sydney shopping, see harbour bridge and opera house",
          "Have some drinks at Opera Bar",
          "El camino for taco tuesday and margs",
          "Soda bar for music bingo",
          "Caterpillar speakeasy",
        ],
      },
      {
        day: 8,
        activities: [
          "Leave sydney and drive to the Blue Mountains",
          "4-5 mile hike with scenic views of canyons",
          "Camp in Katoomba Falls Tourist Park",
          "Make s’mores and enjoy campfire",
        ],
      },
      {
        day: 9,
        activities: [
          "Nature reserve cafe for breakfast",
          "Drive to Jim’s Wild Oysters in Nuwra",
          "Stop in Murramarang national park to see tide pools and wild kangaroos",
          "Drivve to Batemans Bay for the night",
          "Dinner and sports games and darts at Sailors Club & Casino",
        ],
      },
      {
        day: 10,
        activities: [
          "Drive from Batemans Bay to and Bermagui, swim (cold plunged) in coastal blue pool. Picnic lunch",
          "Drive to Pambula Beach and walk along the beach",
          "Drive to Bairnsdale and stay there overnight",
        ],
      },
      {
        day: 11,
        activities: [
          "Breakfast in bairnsdale",
          "Drive to melbourne!",
          "Go out in Fitzroy and watch a footy game",
        ],
      },
      {
        day: 12,
        activities: ["Lazy lay in (much needed)"],
      },
      {
        day: 13,
        activities: [
          "Morning walk along Yarra River, grab brunch",
          "Visit Shrine of Remembrance and through the 2 main parks, see the lake in Albert Park",
          "Visit St. Kilda Beach Town",
          "Back to Fitzroy to Naked For Satan Rooftop for cocktails",
        ],
      },
    ],
    photos: [
      require("./imgs/aussie/aus0.jpeg"),
      require("./imgs/aussie/aus1.jpeg"),
      require("./imgs/aussie/aus2.jpeg"),
      require("./imgs/aussie/aus3.jpeg"),
      require("./imgs/aussie/aus4.jpeg"),
    ],
  },
  {
    id: "iceland",
    country: "Iceland",
    city: "Iceland",
    title: "Iceland",
    date: "2024-03-28",
    accomodation: "KEX Hostel",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/KEX-Hostel-and-Hotel/Reykjavik/48573",
    itinerary: [
      {
        day: 1,
        activities: [
          "Fly into Reykjavik",
          "Stay in Hostel",
          "Explore City Center/Shop",
          "Boat Tour to see Northern Lights!",
        ],
      },
      {
        day: 2,
        activities: [
          "Book Golden Circle Day Trip",
          "See sights such as Kerid Crater, Gullfoss Waterfall, Geysir, Thingvellir National Park",
          "Drinks & Darts at Bullseye Reykjavik",
        ],
      },
      {
        day: 3,
        activities: [
          "Blue Lagoon Day Tour - Facials & Spa Treatment included",
          "Dinner at Kol Restaurant",
        ],
      },
    ],
    photos: [
      require("./imgs/iceland/iceland0.jpeg"),
      require("./imgs/iceland/iceland1.jpeg"),
      require("./imgs/iceland/iceland2.jpeg"),
      require("./imgs/iceland/iceland3.jpeg"),
    ],
  },
  {
    id: "denmark",
    country: "Denmark",
    city: "Copenhagen",
    title: "Denmark",
    date: "2024-04-21",
    accomodation: "Next House Copenhagen",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Next-House-Copenhagen/Copenhagen/310761",
    itinerary: [
      {
        day: 1,
        activities: [
          "Bike around the city (very bike friendly) - stop for coffee & breakfast",
          "Visit Christiansborg Palace on Slotsholmen",
          "Spend time in harbour side neighbourhood of Christianshavn",
          "Go out in meatpacking district - Jolene Bar for dancing, Mikkeller Bar for craft beer, or Bak for chill cocktails",
        ],
      },
      {
        day: 2,
        activities: [
          "Historic Canal Tour",
          "Nyhavn for lunch (beautiful canals and plenty restaurant options)",
          "Visit Rosenborg Castle",
          "Explore Freetown Christiania - the famously independent, artistic community. Explore its murals, handmade houses, and creative vibe",
        ],
      },
      {
        day: 3,
        activities: [
          "Go to Tivoli Gardens - one of the world’s oldest amusement parks",
          "Picnic in Frederiksberg Gardens",
        ],
      },
    ],
    photos: [
      require("./imgs/denmark/copenhagen0.jpeg"),
      require("./imgs/denmark/copenhagen1.jpeg"),
      require("./imgs/denmark/copenhagen4.jpeg"),
      require("./imgs/denmark/copenhagen3.jpeg"),
    ],
  },
  {
    id: "france-marseille",
    country: "France",
    city: "Marseille",
    title: "Marseille",
    date: "2024-04-21",
    itinerary: [
      {
        day: 1,
        activities: [
          "Vieux-Port (Old Port) walk along the harbor",
          "Le Panier District - Marseille’s oldest neighborhood.",
          "Stop at La Vieille Charité, a historic 17th-century almshouse turned cultural center",
          "MuCEM - museum exploring Mediterranean history & Walk across bridge to Fort Saint-Jean for incredible harbor views",
          "Nightlife in Cours Julien: Head to this bohemian area packed with lively bars, music venues, and street art - I liked Le Chapiteau",
        ],
      },
      {
        day: 2,
        activities: [
          "Climb to Basilique Notre-Dame de la Garde, stunning viewpoint",
          "Take a boat trip (or hike) to see limestone cliffs at Calanques National Park & swim if warm!",
          "Eat seafood fishing cove near the Corniche",
          "Sunset Drinks at R2 Rooftop or Bar de la Marine",
        ],
      },
    ],
    photos: [
      require("./imgs/france/marseille0.jpeg"),
      require("./imgs/france/marseille1.jpeg"),
      require("./imgs/france/marseille2.jpeg"),
      require("./imgs/france/marseille3.jpeg"),
    ],
  },
  {
    id: "paris-france",
    country: "France",
    city: "Paris",
    title: "Paris",
    date: "2025-05-14",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walk along the Seine & visit Notre-Dame and Île de la Cité",
          "Explore the Louvre & Tuileries Garden",
          "Stroll through Le Marais district – cafés, galleries, vintage shops",
          "Dinner & drinks in Saint-Germain-des-Prés – try Café de Flore or Prescription Cocktail Club",
        ],
      },
      {
        day: 2,
        activities: [
          "Climb the Eiffel Tower or take photos from Trocadéro",
          "Walk the Champs-Élysées to the Arc de Triomphe",
          "Visit Montmartre & Sacré-Cœur for art and city views",
          "Nightlife in Pigalle or Canal Saint-Martin – rooftop bars, live music, and cocktails",
        ],
      },
    ],
    photos: [
      require("./imgs/france/paris1.jpeg"),
      require("./imgs/france/paris2.jpeg"),
      require("./imgs/france/paris0.jpeg"),
      require("./imgs/france/paris4.jpeg"),
    ],
  },
  {
    id: "strasbourg-france",
    country: "France",
    city: "Strasbourg",
    title: "Strasbourg",
    date: "2025-06-22",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore La Petite France – cobbled streets, canals, and half-timbered houses",
          "Visit Strasbourg Cathedral & climb the tower for city views",
          "Take a canal boat tour through the old town and European Quarter",
          "Dinner in the historic center – try Alsatian specialties like tarte flambée or baeckeoffe",
        ],
      },
      {
        day: 2,
        activities: [
          "Walk or bike through Parc de l’Orangerie near the European Parliament",
          "Visit Palais Rohan – fine arts, archaeology, and decorative arts museums",
          "Explore the European Parliament and Council of Europe buildings",
          "Evening drinks in Krutenau or Place du Marché Gayot – lively bars & terraces",
        ],
      },
    ],
    photos: [
      require("./imgs/france/strasbourg0.jpeg"),
      require("./imgs/france/strasbourg1.jpeg"),
      require("./imgs/france/strasbourg2.jpeg"),
      require("./imgs/france/strasbourg3.jpeg"),
    ],
  },
  {
    id: "chamonix-france",
    country: "France",
    city: "Chamonix",
    title: "Chamonix",
    date: "2025-07-10",
    itinerary: [
      {
        day: 1,
        activities: [
          "Take the Aiguille du Midi cable car for panoramic views of Mont Blanc",
          "Walk along the glacier at Mer de Glace via Montenvers Train",
          "Explore Chamonix town – cafés, boutiques, and Alpine atmosphere",
          "Dinner and drinks at Chambre Neuf or Elevation 1904 (lively après-ski spots even in summer)",
        ],
      },
      {
        day: 2,
        activities: [
          "Hike the Lac Blanc trail for stunning alpine scenery",
          "Ride the Brévent cable car for views over the Mont Blanc massif",
          "Relax at a spa or riverside bar in town",
          "Nightlife at Monkey Bar or Le Privilege Club for music and cocktails",
        ],
      },
      {
        day: 3,
        activities: [
          "Ski!! - if winter time",
          "Paragliding if weather is good - we had so much fun doing this, although it was a bit pricey",
        ],
      },
    ],
    photos: [
      require("./imgs/france/chamonix0.jpeg"),
      require("./imgs/france/chamonix1.jpeg"),
      require("./imgs/france/chamonix2.jpeg"),
      require("./imgs/france/chamonix3.jpeg"),
    ],
  },
  {
    id: "valletta-malta",
    country: "Malta",
    city: "Valletta",
    title: "Valletta",
    date: "2025-09-05",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walk through Valletta’s historic streets & see St. John’s Co-Cathedral",
          "Explore the Upper Barrakka Gardens for harbor views and cannons at noon",
          "Visit the Grand Master’s Palace or the Lascaris War Rooms for local history",
          "Dinner and drinks at Strait Street – live music and great bars like Yard 32 or Tico Tico",
        ],
      },
      {
        day: 2,
        activities: [
          "Take a harbor cruise around the Grand Harbour and Three Cities",
          "Ferry to Sliema or St. Julian’s for seaside walks and swimming spots",
          "Visit Fort St. Elmo & the National War Museum",
          "Evening at St. Julian’s Paceville district – bars, rooftop lounges, and late-night clubs",
        ],
      },
    ],
    photos: [
      require("./imgs/malta/valletta0.jpeg"),
      require("./imgs/malta/valletta1.jpeg"),
      require("./imgs/malta/valletta2.jpeg"),
      require("./imgs/malta/valletta3.jpeg"),
    ],
  },
  {
    id: "gozo-malta",
    country: "Malta",
    city: "Gozo",
    title: "Gozo",
    date: "2025-09-07",
    itinerary: [
      {
        day: 1,
        activities: [
          "Visit the Citadel in Victoria (Rabat) for panoramic island views",
          "Explore Ta’ Pinu Basilica – stunning architecture and peaceful setting",
          "Relax at Ramla Bay, known for its unique red-gold sand",
          "Dinner in Xlendi Bay – seaside restaurants and sunset drinks at The Boat House or Churchill’s",
        ],
      },
      {
        day: 2,
        activities: [
          "Take a boat to the Blue Hole and Inland Sea near Dwejra Bay",
          "Hike the Ta’ Ċenċ Cliffs or Marsalforn coastal path",
          "Swim and snorkel at Hondoq ir-Rummien or Wied il-Għasri",
          "Evening cocktails in Marsalforn – try Piutrentanove or Il-Kartell for laid-back nightlife",
        ],
      },
    ],
    photos: [
      require("./imgs/malta/gozo0.jpeg"),
      require("./imgs/malta/gozo1.jpeg"),
      require("./imgs/malta/gozo2.jpeg"),
      require("./imgs/malta/gozo3.jpeg"),
    ],
  },
  {
    id: "budapest-hungary",
    country: "Hungary",
    city: "Budapest",
    title: "Budapest",
    date: "2025-07-15",
    accomodation: "Avenue Hostel",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Avenue-Hostel/Budapest/87612",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walk along the Danube Promenade & cross the Chain Bridge",
          "Visit Buda Castle and Fisherman’s Bastion for panoramic views",
          "Relax at Széchenyi Thermal Baths or Gellért Baths",
          "Evening in the Jewish Quarter – ruin bars like Szimpla Kert or Instant for nightlife"
        ],
      },
      {
        day: 2,
        activities: [
          "Explore the Hungarian Parliament Building and Kossuth Square",
          "St. Stephen’s Basilica & climb to the dome for city views",
          "Walk through Central Market Hall for local food and souvenirs",
          "Sunset cruise on the Danube – amazing views of illuminated Parliament and bridges"
        ],
      },
    ],
    photos: [
      require("./imgs/hungary/budapest0.jpeg"),
      require("./imgs/hungary/budapest1.jpeg"),
      require("./imgs/hungary/budapest2.jpeg"),
      require("./imgs/hungary/budapest3.jpeg"),
    ],
  },
  {
    id: "bratislava-slovakia",
    country: "Slovakia",
    city: "Bratislava",
    title: "Bratislava",
    date: "2025-07-17",
    accomodation: "Wild Elephants Hostel",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Wild-Elephants-Hostel/Bratislava/64370",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walk through the Old Town – Main Square, Roland Fountain, and St. Martin’s Cathedral",
          "Climb to Bratislava Castle for Danube River views",
          "Cross the UFO Bridge & go up to the UFO Observation Deck for skyline views",
          "Dinner and drinks along the Danube – try Lemontree Sky Bar or The Cuba Libre Rum & Cigar House"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit the Blue Church (St. Elizabeth’s) – unique art nouveau design",
          "Explore the Slovak National Gallery or Museum of City History",
          "Relax at Sad Janka Kráľa park or take a short river cruise",
          "Nightlife in the Old Town – bars like Bukowski Bar or Spin Cocktail Bar"
        ],
      },
    ],
    photos: [
      require("./imgs/slovakia/bratislava0.jpeg"),
      require("./imgs/slovakia/bratislava1.jpeg"),
      require("./imgs/slovakia/bratislava2.jpeg"),
      require("./imgs/slovakia/bratislava3.jpeg"),
    ],
  },
  {
    id: "prague-czech-republic",
    country: "Czech Republic",
    city: "Prague",
    title: "Prague",
    date: "2025-07-21",
    accomodation: "Prague Dream Hostel",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Prague-Dream-Hostel/Prague/291136",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore Old Town Square – Astronomical Clock & Týn Church",
          "Walk across the iconic Charles Bridge to Mala Strana",
          "Climb to Prague Castle & St. Vitus Cathedral for city views",
          "Evening: Drinks in Old Town – Hemingway Bar or Black Angel’s Bar"
        ],
      },
      {
        day: 2,
        activities: [
          "Stroll through Letná Park – great view of the city’s bridges",
          "Visit the John Lennon Wall & Kampa Island",
          "Lunch at Manifesto Market – open-air food stalls & music",
          "Nightlife in Žižkov or Vinohrady – check out Bukowski’s or Bar Cobra"
        ],
      },
    ],
    photos: [
      require("./imgs/czechia/prague0.jpeg"),
      require("./imgs/czechia/prague1.jpeg"),
      require("./imgs/czechia/prague2.jpeg"),
      require("./imgs/czechia/prague4.jpeg"),
    ],
  },
  {
    id: "costa-rica-jaco",
    country: "Costa Rica",
    city: "Jaco",
    title: "Jaco",
    date: "2023-03-20",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore and shop in Jaco old town",
          "Take a surf lesson on the beach (Playa Jaco)",
          "Relax on Playa Jaco",
          "Dine at Claritas on the beach"
        ]
      },
      {
        day: 2,
        activities: [
          "Hike up to El Miro lookout (ruins & graffiti + panoramic bay views)", 
          "Visit the farmers’ market (Thu or Fri) and stroll the street-art & promenade in downtown Jacó", 
          "Nightlife: visit beachfront bars (e.g., Orange Pub / Monkey Bar) & enjoy sunset cocktails"
        ]
      },
      {
        day: 3,
        activities: [
          "Boat or catamaran sunset cruise off Jacó (with snorkeling/dolphins if available)",
          "Visit nearby beaches like Playa Hermosa for calmer surf or beach time",
          "Massage/spa & chill afternoon – recharge after active days",
        ]
      }
    ],
    photos: [
      require("./imgs/costa_rica/jaco0.jpeg"),
      require("./imgs/costa_rica/jaco1.jpeg"),
      require("./imgs/costa_rica/jaco2.jpeg"),
      require("./imgs/costa_rica/jaco3.jpeg")
    ]
  },
  {
    id: "arenal-costa-rica",
    country: "Costa Rica",
    city: "La Fortuna / Arenal",
    title: "Arenal Volcano & La Fortuna",
    date: "2025-10-13",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in La Fortuna & settle in with views of Arenal Volcano",
          "Visit La Fortuna Waterfall – swim at the base or enjoy the scenic trail",
          "Explore downtown La Fortuna for local shops & coffee",
          "Evening: relax in natural hot springs (Tabacón or EcoTermales)"
        ],
      },
      {
        day: 2,
        activities: [
          "Morning guided hike in Arenal Volcano National Park – lava fields & rainforest trails",
          "Adventure option: zip-lining or hanging bridges at Mistico Arenal Park",
          "Lunch with volcano views at a local soda (try Soda Viquez or Restaurante Don Rufino)",
          "Evening: dinner & drinks in town – Lava Lounge or La Fortuna Pub"
        ],
      },
      {
        day: 3,
        activities: [
          "Half-day white-water rafting on the Balsa River (class II-III) or safari float if you prefer calm",
          "Optional: Chocolate or coffee tour for a local taste experience",
          "Relax afternoon in hot springs or by the pool with Arenal views",
          "Sunset dinner – try Amor Loco or Los Lagos Restaurant before heading out"
        ],
      },
    ],
    photos: [
      "https://images.unsplash.com/photo-1664532869454-53ac5942d959",
      "https://images.unsplash.com/photo-1541530722192-d0a5e8b65811"
    ]
  },
  {
    id: "san-jose-costa-rica",
    country: "Costa Rica",
    city: "San José",
    title: "San José",
    date: "2025-10-15",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore the historic center – National Theatre, Plaza de la Cultura, and Avenida Central",
          "Visit the Pre-Columbian Gold Museum & Jade Museum for a look at Costa Rica’s ancient past",
          "Lunch at Mercado Central – try gallo pinto or a casado",
          "Evening: Bar & dinner in Barrio Escalante – check out El Social or Café Kracovia"
        ],
      },
      {
        day: 2,
        activities: [
          "Day trip: Visit Poás Volcano National Park or Doka Coffee Estate for a plantation tour",
          "Return to city for artisan shopping at Mercado Nacional de Artesanías",
          "Relax with a craft beer or cocktail at Calle 33 or Stiefel Pub",
          "Dinner at Grano de Oro or Sikwa for a modern Costa Rican food experience"
        ],
      },
    ],
    photos: [
      "https://images.unsplash.com/photo-1666606654465-675d553fd218",
      "https://images.unsplash.com/photo-1687698328566-683e7398996e"
    ]
  },
  {
    id: "la-cruz-costa-rica",
    country: "Costa Rica",
    city: "La Cruz",
    title: "La Cruz",
    date: "2025-10-18",
    itinerary: [{
      day: 1,
      activities: [
        "Relax at Playa Rajada (Playa El Jobo) — soft sand, turquoise water, quiet beach time",
        "Coastal walk with ocean viewpoints near Playa Rajada",
        "Lunch in La Cruz town at a local soda",
        "Visit Mirador de La Cruz for panoramic coastline views",
        "Sunset walk at Playa Papaturro"
      ]
    },
    {
      day: 2,
      activities: [
        "Hike in Área de Conservación Guanacaste — Sector Santa Elena or Murciélago",
        "Picnic lunch in nature",
        "Relax at Playa Soley — wide, unspoiled, peaceful beach",
        "Slow afternoon at your lodge (hammock time, reading, pool)",
        "Return to Playa Rajada or Papaturro for sunset and dinner"
      ]
    }],
    photos: [
      require("./imgs/costa_rica/la_cruz0.jpeg"),
      require("./imgs/costa_rica/la_cruz1.jpeg"),
      require("./imgs/costa_rica/la_cruz2.jpeg"),
    ]
  },
  {
    id: "granada-nicaragua",
    country: "Nicaragua",
    city: "Granada",
    title: "Granada",
    date: "2025-10-22",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walk around Granada’s colonial center – Parque Central, Cathedral, and Calle La Calzada",
          "Climb the bell tower at Iglesia de La Merced for city & volcano views",
          "Take a boat tour of Las Isletas on Lake Nicaragua",
          "Evening: dinner & drinks on Calle La Calzada – try Garden Café or Imagine Bar"
        ],
      },
      {
        day: 2,
        activities: [
          "Morning trip to Masaya Volcano National Park – see the active crater up close",
          "Stop at Masaya Artisan Market for local crafts and souvenirs",
          "Visit Mombacho Volcano Reserve for a coffee plantation tour or canopy hike",
          "Return to Granada for sunset drinks at El Zaguan or Café de Arte"
        ],
      },
    ],
    photos: [
      require("./imgs/nicaragua/nicaragua0.jpeg"),
      require("./imgs/nicaragua/nicaragua1.jpeg"),
      require("./imgs/nicaragua/nicaragua2.jpeg"),
      require("./imgs/nicaragua/nicaragua3.jpeg")
    ],
  },
  {
    id: "mexico-city-mexico",
    country: "Mexico",
    city: "Mexico City",
    title: "Mexico City",
    date: "2025-10-25",
    itinerary: [
      {
        day: 1,
        activities: [
          "Historic Center walk – Zócalo, Metropolitan Cathedral, and Palacio de Bellas Artes",
          "Lunch at Café de Tacuba or El Cardenal",
          "Visit Museo Frida Kahlo in Coyoacán & explore the colorful neighborhood",
          "Evening: dinner & mezcal cocktails in Roma Norte – try Licorería Limantour or Hanky Panky"
        ],
      },
      {
        day: 2,
        activities: [
          "Morning at Teotihuacán Pyramids – climb Sun & Moon Pyramids",
          "Stop for lunch at La Gruta, a cave restaurant near the pyramids",
          "Return to CDMX & stroll through Condesa’s leafy streets",
          "Nightlife: check out bars along Avenida Álvaro Obregón or dance at Patrick Miller"
        ],
      },
      {
        day: 3,
        activities: [
          "Visit Chapultepec Park – Castillo, Anthropology Museum, and park walk",
          "Lunch at El Califa or Contramar for seafood tacos",
          "Explore Polanco’s luxury shops & art galleries",
          "Sunset drinks at Terraza Cha Cha Chá or Cityzen Rooftop Bar"
        ],
      },
    ],
    photos: [
      require("./imgs/mexico/cdmx0.jpeg"),
      require("./imgs/mexico/cdmx1.jpeg"),
      require("./imgs/mexico/cdmx2.jpeg"),
      require("./imgs/mexico/cdmx3.jpeg"),
    ],
  },
  {
    id: "rosarito-ensenada-mexico",
    country: "Mexico",
    city: "Rosarito & Ensenada",
    title: "Rosarito & Ensenada",
    date: "2025-10-26",
    itinerary: [
      {
        day: 1,
        activities: [
          "Morning surf or beach walk at Playa Rosarito",
          "Lunch at Tacos El Yaqui (famous carne asada tacos)",
          "Drive the scenic coastal highway to Ensenada, stopping at viewpoints along the way",
          "Evening: dinner & nightlife in downtown Ensenada – try Hussong’s Cantina or Bar Andaluz"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit La Bufadora – Ensenada’s natural marine geyser & local market",
          "Explore Valle de Guadalupe wine region: stop at Monte Xanic or Finca Altozano for lunch & tastings",
          "Return to Rosarito for sunset drinks at Papas & Beer or K38 surf bar",
          "Optional: visit Rosarito Pier or local artisan shops before heading back"
        ],
      },
    ],
    photos: [
      require("./imgs/mexico/rosarito0.jpeg"),
      require("./imgs/mexico/rosarito1.jpeg"),
      require("./imgs/mexico/rosarito2.jpeg"),
      require("./imgs/mexico/rosarito3.jpeg"),
    ],
  },
  {
    id: "cancun-mexico",
    country: "Mexico",
    city: "Cancún",
    title: "Cancún",
    date: "2025-10-27",
    itinerary: [
      {
        day: 1,
        activities: [
          "Relax at Playa Delfines or Playa Norte (Isla Mujeres day trip optional)",
          "Lunch at Mandinga or Mar-Bella Seafood House overlooking the lagoon",
          "Explore Hotel Zone shops & beach clubs",
          "Nightlife: Coco Bongo or Mandala for music, lights, and dancing"
        ],
      },
      {
        day: 2,
        activities: [
          "Day trip to Chichén Itzá – explore the Mayan ruins (arrive early to beat crowds)",
          "Swim in nearby cenote Ik Kil",
          "Lunch in Valladolid’s colonial center before heading back",
          "Dinner at local spot in Cancún, like La Habichuela or La Parrilla"
        ],
      },
      {
        day: 3,
        activities: [
          "Visit Cenote Azul or Cenote Dos Ojos near Playa del Carmen",
          "Relax or snorkel in Puerto Morelos Reef National Park",
          "Lunch at El Nicho Café or Unico Beach Bar",
          "Sunset drinks at Cielito Lindo or Rosa Negra back in Cancún"
        ],
      },
    ],
    photos: [
      require("./imgs/mexico/cancun0.jpeg"),
      require("./imgs/mexico/cancun1.jpeg"),
      require("./imgs/mexico/cancun2.jpeg"),
      require("./imgs/mexico/cancun3.jpeg"),
    ],
  },
  {
    id: "venice-italy",
    country: "Italy",
    city: "Venice",
    title: "Venice",
    date: "2025-10-27",
    accomodation: "MEININGER Venezia Mestre",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/MEININGER-Venezia-Mestre/Venice/314891",
    itinerary: [
      {
        day: 1,
        activities: [
          "Start at Piazza San Marco – visit St. Mark’s Basilica & climb the Campanile for views",
          "Explore Doge’s Palace & cross the Bridge of Sighs",
          "Walk along the Grand Canal to Rialto Bridge, browse local shops and markets",
          "Evening gondola ride or Vaporetto down the canal, dinner at Osteria alle Testiere or Trattoria Al Gatto Nero on Burano"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Murano Island – see glassblowing demonstrations",
          "Stop by colorful Burano Island for photos & seafood lunch",
          "Return to Venice to explore Dorsoduro district & Peggy Guggenheim Collection",
          "Sunset at the Accademia Bridge, dinner & Aperol spritz at Campo Santa Margherita"
        ],
      },
      {
        day: 3,
        activities: [
        ],
      },
    ],
    photos: [
      require("./imgs/italy/venice0.jpeg"),
      require("./imgs/italy/venice1.jpeg"),
      require("./imgs/italy/venice2.jpeg"),
      require("./imgs/italy/venice3.jpeg"),
    ],
  },
  {
    id: "rome-italy",
    country: "Italy",
    city: "Rome",
    title: "Rome",
    date: "2025-10-30",
    accomodation: "The Beehive",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/The-Beehive/Rome/82786",
    itinerary: [
      {
        day: 1,
        activities: [
          "Visit the Colosseum and Roman Forum — explore ancient ruins & history",
          "Walk up to Palatine Hill for panoramic city views",
          "Lunch in Monti neighborhood (try La Taverna dei Fori Imperiali)",
          "Evening stroll to Piazza Venezia & Trevi Fountain — toss a coin!",
          "Dinner & drinks in Trastevere — lively local nightlife"
        ],
      },
      {
        day: 2,
        activities: [
          "Morning at the Vatican Museums, Sistine Chapel, and St. Peter’s Basilica",
          "Climb St. Peter’s Dome for incredible views",
          "Cross the Tiber River to Castel Sant’Angelo",
          "Dinner near Campo de’ Fiori or Piazza Navona — try local pasta like cacio e pepe or carbonara"
        ],
      },
      {
        day: 3,
        activities: [
          "Visit the Pantheon and Piazza Navona in the morning",
          "Explore Villa Borghese Gardens & Galleria Borghese (book ahead!)",
          "Walk down Via del Corso for shopping & coffee at Tazza d’Oro",
          "Sunset at the Spanish Steps, aperitivo nearby at Hotel Hassler terrace"
        ],
      },
    ],
    photos: [
      require("./imgs/italy/rome0.jpeg"),
      require("./imgs/italy/rome1.jpeg"),
      require("./imgs/italy/rome2.jpeg"),
      require("./imgs/italy/rome3.jpeg"),
    ],
  },
  {
    id: "salerno-italy",
    country: "Italy",
    city: "Salerno",
    title: "Salerno & Pompeii",
    date: "2025-11-02",
    itinerary: [
      {
        day: 1,
        activities: [
          "Stroll the Lungomare Trieste promenade along the sea",
          "Explore Salerno’s Old Town — visit the medieval Salerno Cathedral",
          "Walk up to Castello di Arechi for panoramic views",
          "Dinner & drinks in the historic center — try Osteria Canali or Ristorante Cicirinella"
        ],
      },
      {
        day: 2,
        activities: [
          "Day trip to Pompeii (30 min by train) — explore the ruins & Mount Vesuvius views",
          "Optional stop at Herculaneum if time allows",
          "Return to Salerno for gelato by the waterfront",
          "Relaxed evening at a wine bar or seafood dinner overlooking the harbor"
        ],
      },
    ],
    photos: [
      require("./imgs/italy/salerno0.jpeg"),
      require("./imgs/italy/salerno1.jpeg"),
      require("./imgs/italy/salerno2.jpeg"),
      require("./imgs/italy/salerno3.jpeg"),
    ],
  },
  {
    id: "ibiza-spain",
    country: "Spain",
    city: "Ibiza",
    title: "Ibiza",
    date: "2025-06-20",
    itinerary: [
      {
        day: 1,
        activities: [
          "Rent a motorbike and explore hidden beaches (Cala Comte, Cala Bassa, Cala d’Hort)",
          "Cliff jumping and swimming near Es Vedrà viewpoint",
          "Lunch at Sunset Ashram or Cotton Beach Club",
          "Sunset drinks at Café del Mar, then night out at Ushuaïa or Hi Ibiza"
        ],
      },
      {
        day: 2,
        activities: [
          "Morning walk through Dalt Vila (Ibiza Old Town) — UNESCO World Heritage site",
          "Explore local markets like Las Dalias or Punta Arabí (if open)",
          "Swim at Talamanca Beach or chill at Cala Tarida",
          "Dinner at La Oliva, relaxed drinks at a beach bar"
        ],
      },
    ],
    photos: [
      require("./imgs/spain/ibiza0.jpeg"),
      require("./imgs/spain/ibiza1.jpeg"),
      require("./imgs/spain/ibiza2.jpeg"),
      require("./imgs/spain/ibiza3.jpeg")
    ],
  },
  {
    id: "barcelona-spain",
    country: "Spain",
    city: "Barcelona",
    title: "Barcelona",
    date: "2025-06-24",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walk along La Rambla & visit the Boqueria Market",
          "Explore the Gothic Quarter & Barcelona Cathedral",
          "Relax at Barceloneta Beach",
          "Dinner at El Xampanyet, drinks in El Born"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit La Sagrada Família (book ahead!)",
          "Walk through Passeig de Gràcia – see Casa Batlló & La Pedrera",
          "Park Güell for Gaudí’s colorful mosaics & city views",
          "Evening tapas crawl in Gràcia or Poble-sec"
        ],
      },
      {
        day: 3,
        activities: [
          "Day trip to Montjuïc – cable car, castle, and Magic Fountain",
          "Picasso Museum or Museu Nacional d’Art de Catalunya",
          "Sunset drinks at Bunkers del Carmel viewpoint",
          "Nightlife in Eixample or Razzmatazz Club"
        ],
      },
    ],
    photos: [
      require("./imgs/spain/barcelona0.jpeg"),
      require("./imgs/spain/barcelona1.jpeg"),
      require("./imgs/spain/barcelona2.jpeg"),
      require("./imgs/spain/barcelona3.jpeg"),
    ],
  },
  {
    id: "seville-spain",
    country: "Spain",
    city: "Seville",
    title: "Seville",
    date: "2025-06-28",
    itinerary: [
      {
        day: 1,
        activities: [
          "Visit Seville Cathedral & climb La Giralda Tower",
          "Explore the Royal Alcázar Palace and its gardens",
          "Lunch in Santa Cruz district",
          "Evening tapas & flamenco show at Casa de la Memoria"
        ],
      },
      {
        day: 2,
        activities: [
          "Plaza de España & Maria Luisa Park",
          "Metropol Parasol (Las Setas) for city views",
          "Triana neighborhood for ceramics & tapas",
          "Drinks along the Guadalquivir River"
        ],
      },
      {
        day: 3,
        activities: [
          "Morning stroll around Alameda de Hércules",
          "Museo de Bellas Artes or Palacio de las Dueñas",
          "Afternoon siesta & coffee at La Cacharrería",
          "Dinner at El Rinconcillo (oldest bar in Seville) & late drinks at Terraza EME"
        ],
      },
    ],
    photos: [
      require("./imgs/spain/seville0.jpeg"),
      require("./imgs/spain/seville1.jpeg"),
      require("./imgs/spain/seville2.jpeg"),
    ],
  },
  {
    id: "vienna-austria-christmas",
    country: "Austria",
    city: "Vienna",
    title: "Vienna (Christmas Season)",
    date: "2025-12-14",
    accomodation: "Hostel Wien - Myrthengasse",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Hostel-Wien-Myrthengasse-HI-/Vienna/53031",
    itinerary: [
      {
        day: 1,
        activities: [
          "Start at Schönbrunn Palace — explore the palace & its charming Christmas market",
          "Stroll through the MuseumQuartier & Maria-Theresien-Platz Christmas Market",
          "Visit St. Stephen’s Cathedral & walk along Graben and Kärntner Strasse for lights and shopping",
          "Evening: Vienna State Opera performance or classical concert at Musikverein",
          "Warm drinks & dessert at Café Sacher (famous for Sachertorte!)"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Hofburg Palace & Imperial Treasury",
          "Explore Belvedere Palace & its art museum (Klimt’s *The Kiss*) + Christmas Market in the gardens",
          "Lunch at Naschmarkt — great local & international food stalls",
          "Late afternoon ice skating at Rathausplatz & Christmas Market at Vienna City Hall",
          "Dinner & drinks nearby or rooftop bar like Das Loft for city views"
        ],
      },
    ],
    photos: [
      require("./imgs/austria/vienna0.jpeg"),
      require("./imgs/austria/vienna4.jpeg"),
      require("./imgs/austria/vienna2.jpeg"),
      require("./imgs/austria/vienna3.jpeg"),
    ],
  },
  {
    id: "mostar-bosnia-herzegovina",
    country: "Bosnia & Herzegovina",
    city: "Mostar",
    title: "Mostar",
    date: "2025-09-04",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walk the iconic Stari Most (Old Bridge) & watch local divers jump into the Neretva River",
          "Explore the Old Bazaar (Kujundžiluk) — cobblestone lanes, shops & cafés",
          "Visit Koski Mehmed Pasha Mosque — climb the minaret for the best bridge view",
          "Lunch or dinner by the river at Hindin Han or Sadrvan (local Bosnian cuisine)",
          "Evening drinks near the bridge — riverside bars lit up at night"
        ],
      },
      {
        day: 2,
        activities: [
          "Morning visit to the Old Bridge Museum & War Photo Exhibition",
          "Take a short trip to Blagaj Tekke — Dervish monastery by a cliff spring",
          "Visit Kravice Waterfalls for swimming or photos (about 45 min away)",
          "Return to Mostar for sunset walk along the Neretva & dinner in the Old Town",
          "Optional: Chill at Black Dog Pub or Craft Beer Garden for local brews"
        ],
      },
    ],
    photos: [
      require("./imgs/bosnia/mostar0.jpeg"),
      require("./imgs/bosnia/mostar1.jpeg"),
      require("./imgs/bosnia/mostar2.jpeg"),
      require("./imgs/bosnia/mostar3.jpeg"),
    ],
  },
  {
    id: 'dublin-ireland',
    country: 'Ireland',
    city: 'Dublin',
    title: 'Dublin, Ireland',
    accomodation: "Clink i Lár",
    accomodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Clink-i-L-r/Dublin/319519",
    itinerary: [
      {
        day: 1,
        activities: [
          "Tour the Guinness Storehouse — finish with a pint at Gravity Bar overlooking the city",
          "Walk through St. Patrick’s Cathedral or nearby gardens",
          "Explore Grafton Street & St. Stephen’s Green",
          "Evening in Temple Bar — live music, pubs, and Irish nightlife"
        ]
      },
      {
        day: 2,
        activities: [
          "Full-day trip to the Cliffs of Moher (3-hour drive each way)",
          "Walk the coastal cliff paths for panoramic Atlantic views",
          "Visit the Burren region or Doolin village (depending on your tour)",
          "Return to Dublin in the evening"
        ]
      },
      {
        day: 3,
        activities: [
          "Visit Trinity College — see the Book of Kells & Long Room Library",
          "Explore Dublin Castle & the Chester Beatty Museum",
          "Walk along the River Liffey to the Ha’penny Bridge",
          "Browse shops around Henry Street or Powerscourt Townhouse",
          "Relax with a pint in a cosy pub like The Stag’s Head or The Brazen Head"
        ]
      }
    ],
    photos: [
      require("./imgs/ireland/dublin0.jpeg"),
      require("./imgs/ireland/dublin1.jpeg"),
      require("./imgs/ireland/dublin2.jpeg"),
      require("./imgs/ireland/dublin3.jpeg"),
    ]
  },
  {
    id: "ghent-belgium",
    country: "Belgium",
    city: "Ghent",
    title: "Ghent, Belgium",
    accommodation: ["NH Gent Belfort"],
    accommodationLink: "https://www.nh-hotels.com/hotel/nh-gent-belfort",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore Patershol medieval district",
          "Visit Gravensteen Castle",
          "Walk along Graslei & Korenlei canals",
          "Lunch: De Graslei (Flemish stew + local beer)",
          "Visit Saint Bavo’s Cathedral (see the Ghent Altarpiece)",
          "Stroll through Vrijdagmarkt Square",
          "Optional: Climb the Ghent Belfry",
          "Dinner at Oak Restaurant or Du Progrès",
          "Evening canal walk or beer at Dulle Griet"
        ]
      }
  ],
  photos: [
    require("./imgs/belgium/ghent0.jpeg"),
    require("./imgs/belgium/ghent1.jpeg"),
  ]
  },
  {
    id: "bruges-belgium",
    country: "Belgium",
    city: "Bruges",
    title: "Bruges, Belgium",
    accommodation: ["Hotel Duke's Palace"],
    accommodationLink: "https://www.hoteldukespalace.com/",
    itinerary: [
      {
        day: 1,
        activities: [
          "Start at Market Square (Markt)",
          "Climb the Belfry of Bruges",
          "Walk toward Burg Square",
          "Lunch: Brasserie Cambrinus",
          "Visit the Basilica of the Holy Blood",
          "Walk the canal route toward the Beguinage",
          "Visit Minnewater Lake (Lake of Love)",
          "Chocolate tasting at The Chocolate Line",
          "Waffles at Chez Albert",
          "Dinner at Den Gouden Harynck or De Vlaamsche Pot",
          "Evening canal boat ride"
        ]
      }
    ],
    photos: [
      require("./imgs/belgium/bruges0.jpeg"),
      require("./imgs/belgium/bruges1.jpeg"),
    ],
  },
  {
    id: "brussels-belgium",
    country: "Belgium",
    city: "Brussels",
    title: "Brussels, Belgium",
    accommodation: ["The Hotel Brussels"],
    accommodationLink: "https://www.thehotel.be/",
    itinerary: [
      {
        day: 1,
        activities: [
          "Start at Grand Place",
          "Visit Manneken Pis",
          "Walk through Galeries Royales Saint-Hubert",
          "Lunch at Noordzee / Mer du Nord",
          "Explore Royal Palace & Brussels Park",
          "Visit the Magritte Museum",
          "Fries at Friterie Tabora or waffle at Maison Dandoy",
          "Dinner at Nüetnigenough or Chez Léon",
          "Drinks at Delirium Café"
        ]
      },
      {
        day: 2,
        activities: [
          "Visit the Atomium (go inside for city views)",
          "Walk through Mini-Europe",
          "Lunch in the EU Quarter (Le Pain Quotidien)",
          "Tour the European Parliament Experience",
          "Walk through Parc du Cinquantenaire",
          "Optional museum: Autoworld or Art & History Museum",
          "Shopping on Avenue Louise",
          "Coffee at Café Belga",
          "Dinner at Comme Chez Soi or La Roue d'Or",
          "Evening drinks in Place Sainte-Catherine"
        ]
      }
    ],
    photos: [
      require("./imgs/belgium/brussels0.jpeg"),
      require("./imgs/belgium/brussels1.jpeg"),
    ]
  },
  {
    id: "dinant-belgium",
    country: "Belgium",
    city: "Dinant",
    title: "Dinant, Belgium",
    itinerary: [
      {
        day: 1,
        activities: [
          "Take the cable car (or climb!) for amazing Meuse River views",
          "Walk along the Charles de Gaulle Bridge, see the famous for colorful saxophones",
          "Relaxing riverside walk - or rent a Kayak!",
          "Visit the Collegiate Church of Notre Dame de Dinant",
        ]
      }
    ],
    photos: [
      require("./imgs/belgium/dinant0.jpeg"),
      require("./imgs/belgium/dinant1.jpeg"),
      require("./imgs/belgium/dinant2.jpeg"),
      require("./imgs/belgium/dinant3.jpeg"),
    ]
  }
];

export default LOCATIONS;
