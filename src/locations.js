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
    accommodation: "CheapSleep Hostel Helsinki",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/CheapSleep-Helsinki/Helsinki/59673",
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
    accommodation: "The Bearded Dad Hostel",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/The-Bearded-Dad-Hostel/Tirana/313345",
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
    accommodation: "Galley Party Hostel",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/The-Galley-Party-Hostel-Social-Solo-Travellers-Day-Tours/Shkoder/315294",
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
    accommodation: "CNTR Park Hotel",
    accommodationlink: "https://www.booking.com/hotel/al/cnt-park-valbona.en-gb.html",
    itinerary: [
      {
        day: 1,
        activities: [
          "Get bus to Theth Village in the Albanian Alps",
          "Leave on 7 hour/20k hike to Valbona",
          "Check into accommodation, we stayed in a hut at Centre Park",
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
    accommodation: "Global Backpackers Hostel",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Global-Backpackers-Hostel/Hanoi/319717",
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
    accommodation: "Jasmine tours",
    accommodationlink: "https://jasminehagiang.com/",
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
    accommodation: ["Wake Up Bondi Beach", "Mad Monkday Cairns", "Wake Up Byron Bay"],
    accommodationlink: [
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
    accommodation: "KEX Hostel",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/KEX-Hostel-and-Hotel/Reykjavik/48573",
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
    accommodation: "Next House Copenhagen",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Next-House-Copenhagen/Copenhagen/310761",
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
    id: "val-thorens-france",
    country: "France",
    city: "Val Thorens",
    title: "Val Thorens Ski Trip",
    accommodation: "Silveralpes",
    accommodationlink: "https://www.booking.com/hotel/fr/le-silveralp-val-thorens.en-gb.html",
    date: "2025-02-10",
    itinerary: [
      {
        day: 1,
        activities: [
          "Check-in and settle into chalet/apartment",
          "Après ski at La Folie Douce (terrace dancing & DJs)",
          "Fondue or raclette dinner at La Maison Val Thorens",
          "Late drinks at Malaysia nightclub",
          "Walk back through snowy village at night"
        ],
      },
      {
        day: 2,
        activities: [
          "Relaxed afternoon recovery after skiing",
          "Après at 360 Bar with panoramic mountain views",
          "Casual dinner (pizza or comfort food)",
          "Night out at Le Monde for live music & dancing",
          "Village bar hopping"
        ],
      },
      {
        day: 3,
        activities: [
          "Spa / hot tub or sauna recovery session",
          "Chill terrace drinks at La Pause",
          "Easy dinner night",
          "Return to favorite après bar",
          "Early night or casual drinks"
        ],
      },
      {
        day: 4,
        activities: [
          "Scenic sunset drinks overlooking the slopes",
          "Final celebratory dinner",
          "Last-night après victory lap",
          "Souvenir shopping in the village",
          "Pack & relax evening"
        ],
      },
    ],
    photos: [
      require('./imgs/france/valt0.jpeg'),
      require('./imgs/france/valt1.jpeg'),
      require('./imgs/france/valt2.jpeg'),
      require('./imgs/france/valt3.jpeg'),
      require('./imgs/france/valt4.jpeg'),
    ]
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
    accommodation: "Avenue Hostel",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Avenue-Hostel/Budapest/87612",
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
    accommodation: "Wild Elephants Hostel",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Wild-Elephants-Hostel/Bratislava/64370",
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
    accommodation: "Prague Dream Hostel",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Prague-Dream-Hostel/Prague/291136",
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
    accommodation: "MEININGER Venezia Mestre",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/MEININGER-Venezia-Mestre/Venice/314891",
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
    accommodation: "The Beehive",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/The-Beehive/Rome/82786",
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
    accommodation: "Hostel Wien - Myrthengasse",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Hostel-Wien-Myrthengasse-HI-/Vienna/53031",
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
    date: "2025-03-28",
    accommodation: "Clink i Lár",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/Clink-i-L-r/Dublin/319519",
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
    date: "2025-05-05",
    accommodation: ["NH Gent Belfort"],
    accommodationlink: "https://www.nh-hotels.com/hotel/nh-gent-belfort",
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
    date: "2025-05-06",
    accommodation: ["Hotel Duke's Palace"],
    accommodationlink: "https://www.hoteldukespalace.com/",
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
    date: "2025-05-08",
    accommodation: ["The Hotel Brussels"],
    accommodationlink: "https://www.thehotel.be/",
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
    date: "2025-05-04",
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
  },
  {
    id: "luxembourg",
    city: "Luxembourg City",
    title: "Luxembourg",
    date: "2025-06-05",
    country: "Luxembourg",
    itinerary: [
      {
        day: 1,
        activities: [
          "Old Town — wander through Place Guillaume II & Place d'Armes",
          "Walk to the Grand Ducal Palace (changing of the guard if timed right)",
          "Explore Casemates du Bock — underground tunnels carved into cliffs",
          "Lunch in the Grund — charming riverside district",
          "Luxembourg City History Museum",
          "Walk through the beautiful Kirchberg district",
          "Explore Parc de Ville for a relaxing nature break",
          "Afternoon hike: Pfaffenthal → Kirchberg Skywalk trail loop",
          "Take the panoramic lift from Upper Town → Grund",
          "Dinner in Grund — recommended: Scott’s Pub or Bosso Brasserie"
        ]
      },
    ],
    photos: [
      require("./imgs/luxembourg/lux0.jpeg"),
      require("./imgs/luxembourg/lux1.jpeg"),
      require("./imgs/luxembourg/lux2.jpeg"),
      require("./imgs/luxembourg/lux3.jpeg"),
    ]
  },
  {
    id: "amsterdam-netherlands",
    city: "Amsterdam",
    title: "Amsterdam",
    date: "2025-06-22",
    country: "Netherlands",
    accommodation: "St Christopher's Inn Amsterdam - The Winston",
    accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/St-Christopher-s-Inn-Amsterdam-The-Winston/Amsterdam/13607",
    itinerary: [
      {
        day: 1,
        activities: [
          "Jordaan district — cozy streets, indie shops, cafés",
          "Visit the Anne Frank House (must book weeks in advance — timed entry only)",
          "Lunch at Café Winkel 43 (famous apple pie)",
          "Explore the Nine Streets (De 9 Straatjes) — boutique shopping & canals",
          "Take a 1-hour canal cruise (best at sunset, book with wine and cheese!)",
          "Dinner and drinks at A'DAM Lookout swing for panoramic views over the city",          
        ]
      },
      {
        day: 2,
        activities: [
          "Start at Museumplein — visit the Van Gogh Museum (allow 1-2 hours)",
          "Walk through Vondelpark — Amsterdam’s most famous park",
          "Visit the Royal Palace & Dam Square",
          "Explore the floating flower market (Bloemenmarkt)",
          "Lunch at Foodhallen — indoor food market with great options",
          "Visit the Heineken Experience (fun, interactive brewery tour - 1-2 hours)",
          "Explore De Pijp neighborhood — hip cafés & trendy streets",
          "Evening option: canal-side dinner or a relaxed cocktail bar in De Pijp"
        ]
      },
    ],
    photos: [
      require("./imgs/netherlands/amsterdam0.jpeg"),
      require("./imgs/netherlands/amsterdam5.jpeg"),
      require("./imgs/netherlands/amsterdam1.jpeg"),
      require("./imgs/netherlands/amsterdam3.jpeg"),
      require("./imgs/netherlands/amsterdam4.jpeg")
    ]
  },
  {
    id: 'tunisia',
    city: 'Tunis',
    country: 'Tunisia',
    date: '2025-10-08',
    title: 'Tunis, Tunisia',
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore the Medina of Tunis (UNESCO World Heritage Site) — maze-like souks, mosques, and historic palaces",
          "Visit Zitouna Mosque, the spiritual heart of the medina",
          "Lunch at a traditional medina restaurant (try couscous or ojja)",
          "Visit the Bardo Museum — world-famous Roman mosaics and Tunisian history",
          "Evening stroll and dinner in La Marsa or Sidi Bou Said area"
        ],
      },
      {
        day: 2,
        activities: [
          "Day trip to Carthage (UNESCO World Heritage Site)",
          "Explore the ancient ruins: Antonine Baths, Punic Ports, and Roman villas",
          "Visit Carthage National Museum for historical context",
          "Stop in Sidi Bou Said — white-and-blue coastal village with sea views",
          "Coffee or mint tea at Café des Délices overlooking the Mediterranean"
        ],
      },
      {
        day: 3,
        activities: [
          "Day trip south to Matmata — famous underground Berber houses built to escape desert heat",
          "Guided visit inside a traditional troglodyte home",
          "Learn about Berber culture and desert life",
          "Optional stop at Star Wars filming locations nearby",
          "Return to Tunis in the evening for a relaxed dinner"
        ],
      },
    ],
    photos: [
      require('./imgs/tunisia/tunisia1.jpeg'),
      require('./imgs/tunisia/tunisia6.jpeg'),
      require('./imgs/tunisia/tunisia3.jpeg'),
      require('./imgs/tunisia/tunisia4.jpeg'),
      require('./imgs/tunisia/tunisia5.jpeg'),
    ]
  },
  {
    id: 'turkey',
    city: 'Istanbul',
    country: 'Turkey',
    date: '2024-05-01',
    title: 'Istanbul, Turkey',
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore Sultanahmet Square — heart of historic Istanbul",
          "Visit Hagia Sophia (book early or arrive early to avoid queues)",
          "Blue Mosque — iconic domes and intricate tilework",
          "Basilica Cistern — atmospheric underground columns and Medusa heads",
          "Evening walk through Sultanahmet with dinner nearby"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Topkapi Palace — Ottoman sultans’ former residence",
          "Lunch overlooking the Bosphorus",
          "Shop at the Grand Bazaar — spices, carpets, jewelry, souvenirs",
          "Traditional Turkish dinner with meze and rakı"
        ],
      },
      {
        day: 3,
        activities: [
          "Morning in Galata — climb Galata Tower for panoramic city views",
          "Wander Istiklal Street — cafés, shops, street music",
          "Evening boat ride with drinks on the Bosphorus Strait along"
        ],
      },
      {
        day: 4,
        activities: [
          "Relaxed morning with Turkish breakfast (kahvaltı)",
          "Explore Balat & Fener neighborhoods — colorful streets and historic churches",
          "Visit Spice Bazaar for sweets, teas, and spices",
          "Nightlife — clubbing, dancing (We went to Zorlu and danced all night)",
        ],
      },
    ],
    photos: [
      require('./imgs/turkey/turkey1.jpeg'),
      require('./imgs/turkey/turkey3.jpeg'),
      require('./imgs/turkey/turkey4.jpeg'),
      require('./imgs/turkey/turkey5.jpeg'),
      require('./imgs/turkey/turkey7.jpeg'),
    ]
  },
  {
    id: "bangkok-thailand",
    country: "Thailand",
    city: "Bangkok",
    title: "Bangkok, Thailand",
    date: "2023-07-01",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Bangkok and check into hostel",
          "Explore Khao San Road — backpacker hub, street food, bars",
          "Visit nearby temples or chill with a Thai massage",
          "Night out on Khao San Road"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit the Grand Palace and Wat Phra Kaew",
          "Wat Pho — Reclining Buddha",
          "Cross river to Wat Arun for views",
          "Evening street food crawl or rooftop drinks"
        ],
      },
      {
        day: 3,
        activities: [
          "Floating or railway market day trip ",
          "Explore Chinatown (Yaowarat) — incredible food scene",
          "Overnight flight to Chiang Mai"
        ],
      },
    ],
    photos: [
      require('./imgs/thailand/bangkok1.jpeg'),
      require('./imgs/thailand/bangkok2.jpeg'),
      require('./imgs/thailand/bangkok3.jpeg'),

    ],
  },
  {
    id: 'chiang-mai-thailand',
    title: 'Chiang Mai, Thailand',
    country: "Thailand",
    city: "Bangkok",
    date: "2023-07-04",
    itinerary: [{
      day: 1,
      activities: [
          "Explore Chiang Mai Old City temples",
          "Visit Wat Phra Singh or Wat Chedi Luang",
          "Evening at Chiang Mai Night Bazaar or Sunday Market"
        ],
  }],
    photos: [
      require('./imgs/thailand/chiang-mai.jpeg'),
    ]
  },
  {
    id: 'pai-thailand',
    title: 'Pai, Thailand',
    country: "Thailand",
    city: "Pai",
    date: "2023-07-05",
    itinerary: [{
      day: 1,
      activities: [
        "Check into hostel and relax",
        "Explore Pai walking street",
        "Sunset at Pai Canyon"
      ],
    },
    {
      day: 2,
      activities: [
        "Scooter around Pai countryside",
        "Visit Pai Hot Springs",
        "Explore waterfalls (Mo Paeng or Pam Bok)",
        "Evening drinks and live music in Pai town"
      ],
    },
    {
      day: 3,
      activities: [
        "Visit an elephant sanctuary, go on a walk with elephants and bathe in the river with them",
        "Tipsy Tubing (white water rafting with glow paint and drinks)",
        "Night out at Boom Room"
      ],
  }],
  photos: [
    require('./imgs/thailand/pai1.jpeg'),
    require('./imgs/thailand/pai2.jpeg'),
    require('./imgs/thailand/pai3.jpeg'),
    require('./imgs/thailand/pai4.jpeg'),
  ]
},
{
  id: 'krabi-thailand',
  title: 'Krabi, Thailand',
  country: "Thailand",
  city: "Krabi",
  date: "2023-07-09",
  itinerary: [{
    day: 1,
    activities: [
      "Travel back to Chiang Mai",
      "Fly south to Krabi",
      "Check into hostel and relax",
      "Sunset at Ao Nang beach"
    ],
  },
  {
    day: 2,
    activities: [
      "Rock climbing in Railay Beach (world-famous limestone cliffs)",
      "Beach time and swimming",
      "Explore caves and viewpoints in Railay",
      "Evening drinks in Ao Nang or Railay"
    ],
  }],
  photos: [
    require('./imgs/thailand/krabi1.jpeg'),
    require('./imgs/thailand/krabi2.jpeg'),
    require('./imgs/thailand/krabi3.jpeg'),
    require('./imgs/thailand/krabi4.jpeg'),
  ]
},
{
  id: 'koh-phi-phi-thailand',
  title: 'Koh Phi Phi & Phuket, Thailand',
  country: "Thailand",
  city: "Koh Phi Phi",
  date: "2023-07-11",
  itinerary: [
    {
      day: 1,
      activities: [
        "Boat transfer to Koh Phi Phi",
        "Check into hostel and explore the island",
        "Swim and relax on the beach",
        "Night out at Phi Phi beach bars and fire shows"
      ],
    },
    {
      day: 2,
      activities: [
        "Phi Phi island hopping tour",
        "Maya Bay, Pileh Lagoon, snorkeling stops",
        "Sunset viewpoint hike on Phi Phi",
        "Another lively night out"
      ],
    },
    {
      day: 3,
      activities: [
        "Sleep in and beach recovery day",
        "Kayaking or snorkeling",
        "Final night partying on the island"
      ],
    },
    {
      day: 4,
      activities: [
        "Ferry to Phuket & check into hostel",
        "Check into hostel",
        "Explore Phuket Old Town",
        "Sunset at Karon or Kata Beach"
      ],
    },
    {
      day: 5,
      activities: [
        "Beach day or island hopping from Phuket",
        "Relax, swim, and shop",
        "Night out in Patong or relaxed dinner",
      ],
    },
  ],
  photos: [
    require('./imgs/thailand/kohphiphi1.jpeg'),
    require('./imgs/thailand/kohphiphi2.jpeg'),
    require('./imgs/thailand/kohphiphi3.jpeg'),
    require('./imgs/thailand/kohphiphi4.jpeg'),
  ]
},
{
  id: "bulgaria",
  city: "Borovets",
  country: "Bulgaria",
  title: "Boroverts, Bulgaria - SKI Holiday",
  date: "2025-02-09",
  itinerary: [{
    activities: ["Ski/Snowboard/Sled/Snowsports!"]
  }],
  photos: [
    require('./imgs/bulgaria/borovets1.jpeg'),
    require('./imgs/bulgaria/borovets2.jpeg'),
    require('./imgs/bulgaria/borovets3.jpeg'),
  ]
},
{
  id: "singapore",
  city: "Singapore",
  country: "Singapore",
  title: "Singapore",
  date: "2023-05-03",
  itinerary: [
    {
      day: 1,
      activities: [
        "Early morning walk through Gardens by the Bay — see the Supertrees in daylight",
        "Optional visit to the Cloud Forest or Flower Dome",
        "Walk along Marina Bay Sands promenade",
        "Merlion Park photo stop",
        "Lunch at a hawker centre (Lau Pa Sat or Maxwell Food Centre)",
        "Explore Chinatown — temples, street markets, and cafés",
        "Afternoon visit to Little India — Sri Veeramakaliamman Temple & colorful streets",
        "Sunset at Marina Bay Sands SkyPark (book ahead)",
        "Night stroll through Clarke Quay or rooftop drinks at a city bar"
      ]
  }
  ],
  photos: [
    require('./imgs/singapore/singapore1.jpeg'),
    require('./imgs/singapore/singapore2.jpeg'),
    require('./imgs/singapore/singapore3.jpeg'),
    require('./imgs/singapore/singapore4.jpeg'),
  ]
},
{
  id: "stockholm-sweden",
  country: "Sweden",
  city: "Stockholm",
  title: "Stockholm",
  date: "2025-03-10",
  itinerary: [
    {
      day: 1,
      activities: [
        "Walk around Gamla Stan (Old Town) — cobblestone streets, medieval alleys, and colorful buildings",
        "Walk along the waterfront toward Skeppsholmen for winter views",
        "Evening sauna experience (traditional Nordic sauna - cold plunge optional if brave)",
        "Dinner and drinks in Södermalm - cozy bars and laid-back nightlife",
      ],
    },
    {
      day: 2,
      activities: [
        "Visit the Vasa Museum — preserved 17th-century warship (& Vikings history!)",
        "Explore Djurgården Island — quiet winter walks and museum hopping",
        "Optional stop at ABBA The Museum or Skansen open-air museum",
        "Sunset viewpoint at Monteliusvägen (early sunset in March)",
        "Final dinner along the waterfront or in Norrmalm",
      ],
    },
  ],
  photos: [
    require('./imgs/sweden/stockholm1.jpeg'),
    require('./imgs/sweden/stockholm2.jpeg'),
    require('./imgs/sweden/stockholm3.jpeg'),
    require('./imgs/sweden/stockholm4.jpeg'),
  ],
},
{
  id: "ljubjana-slovenia",
  city: "Ljubljana",
  country: "Slovenia",
  title: "Ljubljana",
  date: "2025-12-29",
  itinerary: [
    {
      day: 1,
      activities: [
        "Coffee & panini at slaščičarna",
        "Climb up to castle (or use funicular if you’d rather rest your legs!)",
        "Explore the park (lots of pretty trails)",
        "Descend into old town and walk through centre market and cathedral of saint nicolas",
        "See if there’s anything going on in paviljon (main square where events and concerts are held)",
        "Dinner from a stall try local cuisine",
        "Meletkova to see graffiti and street art everywhere",
      ]
    },
    {
      day: 2,
      activities: [
        "Morning stroll or coffee along the Ljubljanica River — cafés near Cobbler’s Bridge",
        "Visit Metelkova Art Center — alternative culture hub with street art and galleries",
        "Tivoli Park walk — green space, gardens, and city viewpoints",
        "Lunch near the park or back in the old town",
        "Optional visit to the National Gallery or Museum of Modern Art",
        "Late afternoon river cruise (short and scenic)",
        "Dinner by the river",
      ]
    },
  ],
  photos: [
    require('./imgs/slovenia/slov.jpeg'),
    require('./imgs/slovenia/slov1.jpeg'),
    require('./imgs/slovenia/slov2.jpeg'),
    require('./imgs/slovenia/slov3.jpeg'),
  ]
},
{
  id: "bled-slovenia",
  city: "Bled",
  country: "Slovenia",
  title: "Bled",
  date: "2025-12-31",
  itinerary: [
    {
      day: 1,
      activities:
      [
        "Arrive early to Lake Bled for quiet morning views",
        "Walk the full lake loop (~6 km) — flat, scenic, and incredibly peaceful",
        "Climb up to Bled Castle for panoramic views over the lake and island",
        "Lunch in Bled town (try traditional Slovenian dishes)",
        "Traditional pletna boat ride to Bled Island",
        "Climb the 99 steps to the Church of the Assumption and ring the wishing bell",
        "Afternoon coffee or swim by the lake if warm",
        "Try Bled cream cake (kremšnita) before leaving",
        "Sunset stroll along the lake"
      ]
    }
  ],
  photos: [
    require('./imgs/slovenia/bled1.jpeg'),
    require('./imgs/slovenia/bled2.jpeg'),
    require('./imgs/slovenia/bled3.jpeg'),
  ]
},
{
  id: "athens-greece",
  country: "Greece",
  city: "Athens",
  title: "Athens",
  date: "2025-05-01",
  itinerary: [
    {
      day: 1,
      activities: [
        "Walk through Plaka — charming old streets beneath the Acropolis",
        "Acropolis & Parthenon — go early or late to avoid crowds",
        "Visit the Acropolis Museum",
        "Sunset views from Areopagus Hill",
        "Dinner in Monastiraki with views of the Acropolis lit up"
      ],
    },
    {
      day: 2,
      activities: [
        "Ancient Agora & Temple of Hephaestus",
        "Stroll through Psiri — street art and cafés",
        "Lunch at a traditional taverna",
        "National Archaeological Museum (optional but incredible)",
        "Evening drinks in Kolonaki or rooftop bar like A for Athens"
      ],
    },
    {
      day: 3,
      activities: [
        "Day trip to Cape Sounion & Temple of Poseidon",
        "Coastal drive along the Athenian Riviera",
        "Beach stop if weather allows",
        "Sunset at the Temple of Poseidon",
        "Late dinner back in Athens"
      ],
    },
    {
      day: 4,
      activities: [
        "Morning walk through the National Gardens",
        "Changing of the Guard at Syntagma Square",
        "Last-minute shopping or café hopping",
        "Head to port (Piraeus) for island ferry"
      ],
    },
  ],
  photos: [
    require('./imgs/greece/athens0.jpeg'),
    require('./imgs/greece/athens1.jpeg'),
    require('./imgs/greece/athens3.jpeg'),
    require('./imgs/greece/athens4.jpeg')
  ],
},
{
  id: "paros-greece",
  country: "Greece",
  city: "Paros",
  title: "Paros",
  date: "2025-05-05",
  itinerary: [
    {
      day: 1,
      activities: [
        "Arrive in Parikia — explore port town & old streets",
        "Visit Panagia Ekatontapiliani (historic church)",
        "Beach time at Livadia Beach",
        "Sunset drinks by the harbor",
        "Casual dinner in Parikia"
      ],
    },
    {
      day: 2,
      activities: [
        "Day trip to Naoussa — whitewashed streets & boutique shops",
        "Swim at Kolymbithres Beach (rock formations)",
        "Late lunch in Naoussa harbor",
        "Relaxed afternoon beach hopping",
        "Nightlife in Naoussa — lively bars & clubs"
      ],
    },
    {
      day: 3,
      activities: [
        "Rent a scooter or ATV to explore inland villages",
        "Stop at Lefkes village — traditional mountain town",
        "Beach stop at Golden Beach or Santa Maria",
        "Ferry prep for next island"
      ],
    },
  ],
  photos: [
    require('./imgs/greece/paros0.jpeg'),
    require('./imgs/greece/paros1.jpeg'),
    require('./imgs/greece/paros2.jpeg'),
    require('./imgs/greece/paros3.jpeg')
  ],
},
{
  id: "naxos-greece",
  country: "Greece",
  city: "Naxos",
  title: "Naxos",
  date: "2025-05-08",
  itinerary: [
    {
      day: 1,
      activities: [
        "Explore Naxos Town (Chora)",
        "Walk up to the Portara — iconic marble gate",
        "Lunch in the old town",
        "Beach time at Agia Anna or Agia Prokopios",
        "Sunset at Portara"
      ],
    },
    {
      day: 2,
      activities: [
        "Rent a car or scooter to explore inland villages",
        "Visit Halki village & local distillery",
        "Stop at Filoti village at Mount Zas",
        "Lunch at a traditional mountain taverna",
        "Beach stop at Plaka Beach"
      ],
    },
    {
      day: 3,
      activities: [
        "Optional hike on Mount Zas (highest point in Cyclades)",
        "Relaxed morning beach time",
        "Final shopping & café hopping in Chora",
        "Evening ferry to Hydra (via Athens)"
      ],
    },
  ],
  photos: [
    require('./imgs/greece/naxos0.jpeg'),
    require('./imgs/greece/naxos1.jpeg'),
    require('./imgs/greece/naxos2.jpeg'),
    require('./imgs/greece/naxos3.jpeg')
  ],
},
{
  id: "hydra-greece",
  country: "Greece",
  city: "Hydra",
  title: "Hydra",
  date: "2025-05-12",
  itinerary: [
    {
      day: 1,
      activities: [
        "Arrive by ferry — soak in the car-free island vibes",
        "Explore Hydra Harbor & stone alleys",
        "Swim off rocks near Spilia or Hydronetta",
        "Sunset drinks overlooking the port",
        "Dinner by the water"
      ],
    },
    {
      day: 2,
      activities: [
        "Hike from Hydra Town to Mandraki Beach",
        "Beach day — swimming & sunbathing",
        "Lunch at a seaside taverna",
        "Afternoon café stop back in town",
        "Low-key evening drinks"
      ],
    },
    {
      day: 3,
      activities: [
        "Morning coastal walk or boat taxi to a quiet swim spot",
        "Last swim & harbor stroll",
        "Souvenir shopping",
        "Afternoon ferry back to Athens"
      ],
    },
  ],
  photos: [
    require('./imgs/greece/hydra0.jpeg'),
    require('./imgs/greece/hydra1.jpeg'),
    require('./imgs/greece/hydra2.jpeg'),
    require('./imgs/greece/hydra3.jpeg')
  ],
},
{
  id: "oslo-norway",
  country: "Norway",
  city: "Oslo",
  title: "Oslo",
  date: "2025-04-05",
  itinerary: [
    {
      day: 1,
      activities: [
        "Explore Oslo City Center — Karl Johans gate & surrounding streets",
        "Visit the Royal Palace & palace park",
        "Walk along Aker Brygge waterfront",
        "Visit the Nobel Peace Center (optional)",
        "Dinner by the harbor",
        "Evening drinks in Grünerløkka — trendy bars and relaxed nightlife"
      ],
    },
    {
      day: 2,
      activities: [
        "Visit the Vigeland Sculpture Park (Frogner Park)",
        "Explore the Viking Ship Museum or the new National Museum",
        "Lunch in Tjuvholmen",
        "Sauna experience at Oslo Fjord Sauna or KOK (fjord views)",
        "Optional cold plunge in the fjord",
        "Sunset along the waterfront",
        "Casual dinner and wine bar"
      ],
    },
    {
      day: 3,
      activities: [
        "Take the metro to Holmenkollen",
        "Visit the Holmenkollen Ski Jump & Ski Museum",
        "Short hike or viewpoint walk overlooking the Oslo Fjord",
        "Return to the city for lunch",
        "Souvenir shopping or café hopping",
        "Final evening in Grünerløkka or rooftop drinks"
      ],
    },
  ],
  photos: [
    require('./imgs/norway/oslo0.jpeg'),
    require('./imgs/norway/oslo1.jpeg'),
    require('./imgs/norway/oslo2.jpeg'),
    require('./imgs/norway/oslo4.jpeg')
  ],
},
{
  id: "lisbon-portugal",
  country: "Portugal",
  city: "Lisbon",
  title: "Lisbon",
  date: "2025-05-01",
  itinerary: [
    {
      day: 1,
      activities: [
        "Explore Alfama — wander narrow streets and viewpoints",
        "Visit Lisbon Cathedral (Sé)",
        "Miradouro de Santa Luzia & Portas do Sol",
        "Lunch at a traditional Alfama restaurant",
        "Short ride on Tram 28",
        "Sunset at Miradouro da Senhora do Monte",
        "Dinner and wine in Alfama or Graça"
      ],
    },
    {
      day: 2,
      activities: [
        "Visit Jerónimos Monastery in Belém",
        "Explore Belém Tower",
        "Walk to Padrão dos Descobrimentos",
        "Stop at Pastéis de Belém for pastries",
        "Walk along the Tagus River",
        "Afternoon rest or café stop",
        "Evening in Bairro Alto",
        "Optional nightlife in Cais do Sodré (Pink Street)"
      ],
    },
    {
      day: 3,
      activities: [
        "Morning visit to LX Factory (coffee, shops, street art)",
        "Explore Baixa district",
        "Walk Rua Augusta",
        "Visit Praça do Comércio",
        "Ride the Elevador de Santa Justa",
        "Lunch near the river",
        "Sunset drinks or optional Fado dinner"
      ],
    },
  ],
  photos: [
    require('./imgs/portugal/lisbon1.jpeg'),
    require('./imgs/portugal/lisbon2.jpeg'),
    require('./imgs/portugal/lisbon4.jpeg'),
  ]
},
{
  id: "faro-portugal",
  country: "Portugal",
  city: "Faro",
  title: "Faro",
  date: "2025-05-04",
  itinerary: [
    {
      day: 1,
      activities: [
        "Arrive in Faro",
        "Explore Faro Old Town (Cidade Velha)",
        "Walk through Arco da Vila",
        "Visit Faro Cathedral",
        "Lunch in the old town",
        "Boat trip through Ria Formosa Lagoon",
        "Relax by the marina",
        "Sunset walk along Faro waterfront",
        "Seafood dinner"
      ],
    },
  ],
  photos: [
    require('./imgs/portugal/faro0.jpeg'),
    require('./imgs/portugal/faro1.jpeg'),
    require('./imgs/portugal/faro3.jpeg'),
  ]
},
{
  id: "cascais-portugal",
  country: "Portugal",
  city: "Cascais",
  title: "Cascais",
  date: "2025-05-05",
  itinerary: [
    {
      day: 1,
      activities: [
        "Train from Lisbon to Cascais (scenic coastal route)",
        "Explore Cascais Old Town",
        "Relax at Praia da Ribeira",
        "Walk along the coastal promenade",
        "Visit Boca do Inferno cliffs",
        "Lunch by the sea",
        "Beach time or coastal walk",
        "Sunset by the water",
        "Evening train back to Lisbon"
      ],
    },
  ],
  photos: [
    require('./imgs/portugal/cascais0.jpeg'),
    require('./imgs/portugal/cascais1.jpeg'),
    require('./imgs/portugal/cascais2.jpeg'),
    require('./imgs/portugal/cascais3.jpeg'),
  ]
},
{
  id: "berlin-germany",
  country: "Germany",
  city: "Berlin",
  title: "Berlin",
  date: "2025-06-01",
  accommodation: "Meininger Hostel - East Side Gallery",
  accommodationlink: "https://www.hostelworld.com/pwa/hosteldetails.php/MEININGER-Berlin-East-Side-Gallery/Berlin/280374?",
  itinerary: [
    {
      day: 1,
      activities: [
        "Visit the Brandenburg Gate",
        "Walk through the Reichstag area",
        "Memorial to the Murdered Jews of Europe",
        "Explore Tiergarten park",
        "Lunch in Mitte",
        "Berlin Wall East Side Gallery",
        "Sunset along the Spree River",
        "Evening drinks in Kreuzberg"
      ],
    },
    {
      day: 2,
      activities: [
        "Museum Island (Pergamon or Neues Museum)",
        "Berlin Cathedral",
        "Alexanderplatz & TV Tower area",
        "Hackescher Markt cafés and shops",
        "Street food lunch",
        "Tempelhofer Feld park walk",
        "Dinner in Neukölln",
        "Berlin club or underground nightlife experience (Sisophys recommended)"
      ],
    },
    {
      day: 3,
      activities: [
        "Checkpoint Charlie",
        "Topography of Terror museum",
        "Walk along remaining Berlin Wall sections",
        "Shopping on Kurfürstendamm",
        "Sunset and drinks at Klunkerkranich",
        "Final dinner and cocktail bar"
      ],
    },
  ],
  photos: [
    require('./imgs/germany/berlin/berlin0.jpeg'),
    require('./imgs/germany/berlin/berlin1.jpeg'),
    require('./imgs/germany/berlin/berlin2.jpeg'),
    require('./imgs/germany/berlin/berlin3.jpeg'),
  ]
},
{
  id: "munich-germany",
  country: "Germany",
  city: "Munich",
  title: "Munich",
  date: "2025-06-04",
  itinerary: [
    {
      day: 1,
      activities: [
        "Marienplatz and Glockenspiel",
        "Walk through Munich Old Town",
        "Visit Frauenkirche cathedral",
        "Viktualienmarkt food market lunch",
        "English Garden stroll",
        "Watch surfers at Eisbach wave",
        "Dinner at a traditional beer hall",
        "Evening beer garden"
      ],
    },
    {
      day: 2,
      activities: [
        "Day trip to Neuschwanstein Castle",
        "Explore Füssen town",
        "Alpine lake views and hiking",
        "Return to Munich",
        "Casual Bavarian dinner",
        "Late evening drinks"
      ],
    },
    {
      day: 3,
      activities: [
        "Visit Nymphenburg Palace",
        "BMW Museum or Olympic Park",
        "Lunch near Olympic Park",
        "Shopping in city center",
        "Café stop",
        "Sunset walk",
        "Final Bavarian dinner"
      ],
    },
  ],
  photos: [
      require('./imgs/germany/munich/munich1.jpeg'),
      require('./imgs/germany/munich/munich2.jpeg'),
      require('./imgs/germany/munich/munich3.jpeg'),
  ]
},
{
  id: "frankfurt-germany",
  country: "Germany",
  city: "Frankfurt",
  title: "Frankfurt",
  date: "2025-06-07",
  itinerary: [
    {
      day: 1,
      activities: [
        "Explore Römerberg old town square",
        "Frankfurt Cathedral",
        "Walk along the Main River",
        "Lunch in Sachsenhausen",
        "Visit Städel Museum",
        "Main Tower observation deck",
        "Dinner with skyline views",
        "Cocktail bar evening"
      ],
    },
    {
      day: 2,
      activities: [
        "Palmengarten botanical gardens",
        "Shopping on Zeil street",
        "Café hopping (Eat and afternoon wine Amelie's Wohnzimmer)",
        "Museum Embankment walk",
        "River cruise option",
        "Relaxed dinner",
        "Night walk through illuminated skyline"
      ],
    },
  ],
  photos: [
    require('./imgs/germany/frankfurt/frankfurt0.jpeg'),
    require('./imgs/germany/frankfurt/frankfurt1.jpeg'),
    require('./imgs/germany/frankfurt/frankfurt2.jpeg'),
  ]
},
{
  id: "rothenburg-germany",
  country: "Germany",
  city: "Rothenburg ob der Tauber",
  title: "Rothenburg",
  date: "2025-06-11",
  itinerary: [
    {
      day: 1,
      activities: [
        "Walk the medieval town walls (full loop around the city)",
        "Explore Marktplatz and the Town Hall tower viewpoint",
        "St. Jakob’s Church visit",
        "Wander cobblestone streets and half-timbered houses",
        "Visit the Medieval Crime Museum",
        "Try a Schneeball pastry",
        "Sunset at Castle Garden overlooking the valley",
        "Dinner in a traditional tavern"
      ],
    },
    {
      day: 2,
      activities: [
        "Morning walk through Plönlein (iconic postcard street)",
        "Christmas Museum & Käthe Wohlfahrt shop",
        "Local café breakfast",
        "Small boutique shopping",
        "Optional countryside walk outside the walls",
        "Lunch in old town square",
        "Photography walk through quiet side streets",
        "Final evening stroll along the walls"
      ],
    },
  ],
  photos: [
    require('./imgs/germany/rothenburg/rothenburg0.jpeg'),
    require('./imgs/germany/rothenburg/rothenburg1.jpeg'),
    require('./imgs/germany/rothenburg/rothenburg2.jpeg'),
    require('./imgs/germany/rothenburg/rothenburg3.jpeg'),
    require('./imgs/germany/rothenburg/rothenburg4.jpeg')
  ]
},
{
  id: "geneva-switzerland",
  country: "Switzerland",
  city: "Geneva",
  title: "Geneva",
  date: "2025-06-20",
  itinerary: [
    {
      day: 1,
      activities: [
        "Walk along Lake Geneva promenade",
        "See the Jet d’Eau fountain",
        "Explore Old Town & St. Pierre Cathedral tower climb",
        "Lunch in the old town square",
        "Visit Parc des Bastions & Reformation Wall",
        "Chocolate tasting stop",
        "Sunset by the lake",
        "Dinner with lake views"
      ],
    },
    {
      day: 2,
      activities: [
        "Boat cruise on Lake Geneva",
        "Visit the United Nations & international district",
        "Café hopping in Carouge (bohemian neighborhood)",
        "Local market browsing",
        "Relax in lakeside park",
        "Wine bar evening",
        "Casual dinner stroll"
      ],
    },
  ],
  photos: [
    require('./imgs/switzerland/geneva0.jpeg'),
    require('./imgs/switzerland/geneva1.jpeg'),
  ]
},
{
  id: "interlaken-switzerland",
  country: "Switzerland",
  city: "Interlaken",
  title: "Interlaken",
  date: "2025-06-23",
  itinerary: [
    {
      day: 1,
      activities: [
        "Morning walk through Höhematte park",
        "Cable car up Harder Kulm viewpoint",
        "Lunch overlooking Lake Thun",
        "Explore Interlaken town shops",
        "Lake Thun sunset cruise",
        "Swiss dinner in town"
      ],
    },
    {
      day: 2,
      activities: [
        "Day trip to Lauterbrunnen Valley",
        "Visit Staubbach Falls",
        "Train ride through alpine villages",
        "Optional hike or scenic walk",
        "Return to Interlaken",
        "Relaxed evening drinks"
      ],
    },
    {
      day: 3,
      activities: [
        "Lake Brienz morning walk",
        "Kayaking or paddleboarding (seasonal)",
        "Souvenir shopping",
        "Café brunch",
        "Final scenic viewpoints",
        "Chill evening before departure"
      ],
    },
  ],
  photos: [
    require('./imgs/switzerland/interlaken0.jpeg'),
    require('./imgs/switzerland/interlaken1.jpeg'),
    require('./imgs/switzerland/interlaken2.jpeg'),
  ]
},
{
  id: "marrakesh-morocco",
  country: "Morocco",
  city: "Marrakesh",
  title: "Marrakesh",
  date: "2025-06-28",
  itinerary: [
    {
      day: 1,
      activities: [
        "Explore Jemaa el-Fnaa square for street food, performers, markets",
        "Visit Bahia Palace",
        "Walk through the souks (shopping maze)",
        "Lunch in a rooftop café overlooking the medina",
        "Visit Koutoubia Mosque exterior & gardens",
        "Relax at a traditional hammam spa",
        "Dinner in the old city",
        "Night market atmosphere in Jemaa el-Fnaa"
      ],
    },
    {
      day: 2,
      activities: [
        "Day trip to the Atlas Mountains",
        "Visit Berber villages",
        "Mountain valley hike or scenic walk",
        "Traditional lunch in a local home or mountain café",
        "Waterfall viewpoint stop",
        "Return to Marrakesh in the evening",
        "Relaxed dinner back in the city"
      ],
    },
    {
      day: 3,
      activities: [
        "Morning visit to Jardin Majorelle & YSL Museum",
        "Traditional Tajin cooking class - one of the most incredible experiences!",
        "Evening trip to Tameslouht desert",
        "Camel ride at sunset",
        "ATV quad biking in the desert",
        "Traditional dinner and desert camp experience"
      ],
    },
  ],
  photos: [
    require('./imgs/morocco/marrakech0.jpeg'),
    require('./imgs/morocco/marrakech7.jpeg'),
    require('./imgs/morocco/marrakech3.jpeg'),
    require('./imgs/morocco/marrakech5.jpeg'),
    require('./imgs/morocco/marrakech9.jpeg'),
  ]
},
{
  "id": "calgary-canada",
  "country": "Canada",
  "city": "Calgary",
  "title": "Calgary",
  "date": "2025-07-02",
  "itinerary": [
    {
      "day": 1,
      "activities": [
        "Walk through downtown Calgary — Stephen Avenue pedestrian street",
        "Visit Calgary Tower observation deck for skyline + Rocky Mountain views",
        "Explore the Bow River pathway and Peace Bridge walk",
        "Lunch in Kensington neighborhood (cafés & boutique streets)",
        "Visit Studio Bell National Music Centre or Glenbow Museum (optional)",
        "Prince’s Island Park stroll and river views",
        "Dinner in East Village or Inglewood district",
        "Evening drinks with rooftop or riverfront views"
      ]
    }
  ],
  photos: [
    require('./imgs/canada/calgary0.jpeg'),
    require('./imgs/canada/calgary1.jpeg'),
    require('./imgs/canada/calgary2.jpeg'),
    require('./imgs/canada/calgary3.jpeg'),
  ]
},
{
  "id": "budva-montenegro",
  "country": "Montenegro",
  "city": "Budva",
  "title": "Budva",
  "date": "2025-07-15",
  "itinerary": [
    {
      "day": 1,
      "activities": [
        "Explore Budva Old Town (Stari Grad) — medieval walls & stone streets",
        "Visit Citadel viewpoint overlooking the Adriatic",
        "Coffee break in a hidden old town café",
        "Relax at Mogren Beach (short coastal walk from town)",
        "Sunset walk along Budva promenade",
        "Seafood dinner inside Old Town",
        "Evening cocktails by the marina"
      ]
    },
    {
      "day": 2,
      "activities": [
        "Morning swim at Slovenska Beach",
        "Boat trip along the Budva Riviera (optional island stop)",
        "Visit Sveti Stefan viewpoint (iconic photo stop)",
        "Lunch at a seaside restaurant",
        "Afternoon relaxation or spa time",
        "Dinner with sunset sea views",
        "Late-night beach bar or casual nightlife"
      ]
    },
    {
      "day": 3,
      "activities": [
        "Short hike or coastal walk above Budva cliffs",
        "Brunch overlooking the water",
        "Souvenir shopping in Old Town boutiques",
        "Final beach afternoon — choose your favorite spot",
        "Gelato or café stop before sunset",
        "Last evening stroll through Stari Grad",
        "Farewell dinner by candlelight"
      ]
    }
  ],
  photos: [
    require('./imgs/montenegro/budva0.jpeg'),
    require('./imgs/montenegro/budva2.jpeg'),
    require('./imgs/montenegro/budva3.jpeg'),
    require('./imgs/montenegro/budva4.jpeg'),
  ]
},
{
  id: "canggu-bali",
  country: "Indonesia",
  city: "Canggu",
  title: "Canggu",
  date: "2025-07-20",
  itinerary: [
    {
      day: 1,
      activities: [
        "Sunrise coffee & smoothie bowls at a Canggu café",
        "Surf lesson or beach hang at Batu Bolong Beach",
        "Explore rice fields by scooter",
        "Lunch at a trendy health café (Mama Coco)",
        "Relax at a beach club pool",
        "Sunset dinner, drinks, & swim at The Lawn"
      ],
    },
    {
      day: 2,
      activities: [
        "Yoga or wellness morning class",
        "Shopping local boutiques & markets",
        "Beach hopping along the coast",
        "Late afternoon massage or spa",
        "Play some afternoon Padel",
        "Dinner at a modern Bali restaurant",
        "Beer and Live music at Black Sand brewery"
      ],
    },
    {
      day: 3,
      activities: [
        "3am wakeup shuttle to Mount Batur for sunrise views of the volcano",
        "Relax in hot springs and have breakfast",
        "Back to Canggu midday, nap on the beach",
        "Afternoon shopping in the main Canggu markets",
        "Dinner at Seaweed Resto and drinks across the street at Old Man's",
        "Finns night club for late night swimming and dancing"
      ]
    }
  ],
  photos: [
    require('./imgs/indonesia/canggu0.jpeg'),
    require('./imgs/indonesia/canggu1.jpeg'),
    require('./imgs/indonesia/canggu2.jpeg'),
    require('./imgs/indonesia/canggu3.jpeg')
  ]
},
{
  id: "uluwatu-bali",
  country: "Indonesia",
  city: "Uluwatu",
  title: "Uluwatu",
  date: "2025-07-22",
  itinerary: [
    {
      day: 1,
      activities: [
        "Morning cliffside café breakfast",
        "Beach time at Padang Padang or Bingin Beach",
        "Relax at a beach club pool",
        "Visit Uluwatu Temple",
        "Watch Kecak fire dance at sunset",
        "Seafood dinner overlooking cliffs",
        "Chill drinks under the stars"
      ],
    },
    {
      day: 2,
      activities: [
        "Surf watching or beginner lesson",
        "Hidden beach exploring",
        "Spa afternoon",
        "Sunset viewpoint hopping",
        "Dinner with ocean views",
        "Dance the night away at Savaya"
      ],
    },
  ],
  photos: [
    require('./imgs/indonesia/ulu0.jpeg'),
    require('./imgs/indonesia/ulu1.jpeg'),
    require('./imgs/indonesia/ulu2.jpeg'),
  ]
},
{
  id: "ubud-bali",
  country: "Indonesia",
  city: "Ubud",
  title: "Ubud",
  date: "2025-07-24",
  itinerary: [
    {
      day: 1,
      activities: [
        "Visit a jungle waterfall",
        "Lunch overlooking the valley",
        "Explore Ubud town markets",
        "Monkey Forest visit",
        "Traditional Balinese dinner",
        "Walk through Tegallalang rice terraces",
        "Swim and drinks at Cretya"
      ],
    },
    {
      day: 2,
      activities: [
        "Sunrise yoga class",
        "Temple visit & water purification ritual",
        "Coffee plantation tasting",
        "Spa afternoon",
        "Sunset jungle walk",
        "Relaxed dinner in town"
      ],
    },
  ],
  photos: [
    require('./imgs/indonesia/ubuud0.jpeg'),
    require('./imgs/indonesia/ubuud1.jpeg'),
    require('./imgs/indonesia/ubuud2.jpeg'),
    require('./imgs/indonesia/ubuud3.jpeg'),
  ]
},
{
  id: "gili-trawangan",
  country: "Indonesia",
  city: "Gili Trawangan",
  title: "Gili Trawangan",
  date: "2025-07-26",
  itinerary: [
    {
      day: 1,
      activities: [
        "Bike ride around the island (no cars!)",
        "Snorkeling with turtles",
        "Beachside lunch",
        "Hammock relaxation afternoon",
        "Sunset swing photos",
        "Dinner on the sand",
        "Island nightlife & beach bars - full moon party if timing aligns!"
      ],
    },
    {
      day: 2,
      activities: [
        "Morning swim in crystal water",
        "Boat snorkeling tour",
        "Massage by the beach",
        "Café hopping",
        "Sunset drinks",
      ],
    },
  ],
  photos: [
    require('./imgs/indonesia/gili0.jpeg'),
    require('./imgs/indonesia/gili1.jpeg'),
  ]
},
{
  id: "egypt",
  country: "Egypt",
  city: "Cairo",
  title: "Cairo",
  date: "2026-05-12",
  itinerary: [
    {
      day: 1,
      activities: [
        "Giza Pyramids & Great Sphinx at sunrise (beat the crowds!)",
        "Camel ride around the plateau",
        "Lunch at a local koshary spot",
        "Egyptian Museum — don't miss Tutankhamun's treasures",
        "Stroll & haggle in Khan el-Khalili bazaar",
        "Dinner cruise on the Nile",
      ],
    },
  ],
  photos: [
    require('./imgs/egypt/cairo.jpg'),
    require('./imgs/egypt/cairo2.jpg'),
    require('./imgs/egypt/cairo3.jpg'),
    require('./imgs/egypt/cairo4.jpg'),
  ]
},
{
  id: "egypt",
  country: "Egypt",
  city: "Sharm El-Sheikh",
  title: "Sharm El-Sheikh",
  date: "2026-05-14",
  itinerary: [
    {
      day: 1,
      activities: [
        "Fly or transfer to Sharm el Sheikh — check into resort",
        "First dip in the Red Sea",
        "Afternoon snorkeling at Ras Mohammed reef",
        "Beachside sundowner cocktails",
        "Fresh seafood dinner at the Old Market",
      ],
    },
    {
      day: 2,
      activities: [
        "Morning snorkeling or diving at the Blue Hole or Shark's Bay",
        "Lazy beach afternoon — sunbathing & paddleboarding",
        "Glass-bottom boat tour",
        "Hammam spa session",
        "Dinner at the resort",
      ],
    },
    {
      day: 3,
      activities: [
        "Sunrise quad biking or jeep safari into the Sinai Desert",
        "Final snorkel session at a coral garden",
        "Beach lunch & last swim",
        "Souvenir shopping at Naama Bay",
        "Rooftop dinner with Red Sea views",
      ],
    },
  ],
  photos: [
    require('./imgs/egypt/sharm0.jpg'),
    require('./imgs/egypt/sharm1.jpg'),
    require('./imgs/egypt/sharm2.jpg'),
  ]
}
];

export default LOCATIONS;
