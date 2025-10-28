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
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
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
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "downtown-finland",
    country: "Finland",
    city: "Helsinki",
    title: "Helsinki",
    date: "2025-07-28",
    itinerary: [
      {
        day: 1,
        activities: ["Exploring old town"],
      },
      {
        day: 2,
        activities: ["Trip to Estonia Tallinn"],
      },
    ],
    photos: [
      "https://images.unsplash.com/photo-1526045478516-99145907023c",
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    ],
  },
  {
    id: "albania-tirana",
    country: "Albania",
    city: "Tirana",
    title: "Tirana",
    date: "2025-10-13",
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
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "albania-shkoder",
    country: "Albania",
    city: "Shkoder",
    title: "Shkoder",
    date: "2025-10-15",
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
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "vietnam-hanoi",
    country: "Vietnam",
    city: "hanoi",
    title: "Hanoi",
    date: "2023-04-23",
    itinerary: [
      {
        day: 1,
        activities: ["Check out Post-it cafe", "Try Bahn Mi!"],
      },
      {
        day: 2,
        activities: [
          "Free walking tour, learn about the history of the Vietnam War",
          "Visit the island in the middle of the lake and see the beautiful temples",
        ],
      },
    ],
    photos: [],
  },
  {
    id: "vietnam-ha-giang",
    country: "Vietnam",
    city: "ha giang",
    title: "Ha Giang",
    date: "2023-04-25",
    itinerary: [
      {
        day: 1,
        activities: [
          "Book with tour group so all activities and accomodation are included. Also recommend booking with easy rider so you can fully take in the magic of Northern Vietnam.",
        ],
      },
    ],
    photos: [
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "albania-alps",
    country: "Albania",
    city: "Alps",
    title: "Theth & Valbone",
    date: "2025-10-17",
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
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "australia-road-trip",
    country: "Australia",
    city: "Australia - Cairnes, Airlie Beach, Byron Bay, Batemans Bay, Sydney, Melbourne",
    title: "Australia",
    date: "2024-08-26",
    itinerary: [
      {
        day: 1,
        activities: [
          "Stay in bounce hostel. fight off jet lag, trivia night. Gilligan’s day club.",
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
    photos: [],
  },
  {
    id: "iceland",
    country: "Iceland",
    city: "Iceland",
    title: "Iceland",
    date: "2024-03-28",
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
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "denmark",
    country: "Denmark",
    city: "Copenhagen",
    title: "Denmark",
    date: "2024-04-21",
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
    photos: [],
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
    photos: [],
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
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
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
    photos: [],
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
    photos: [],
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
    photos: [],
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
    photos: [],
  },
  {
    id: "budapest-hungary",
    country: "Hungary",
    city: "Budapest",
    title: "Budapest",
    date: "2025-07-15",
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
    ],
  },
  {
    id: "bratislava-slovakia",
    country: "Slovakia",
    city: "Bratislava",
    title: "Bratislava",
    date: "2025-07-17",
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
    ],
  },
  {
    id: "vienna-austria",
    country: "Austria",
    city: "Vienna",
    title: "Vienna",
    date: "2025-07-19",
    itinerary: [
      {
        day: 1,
        activities: [
          "Schönbrunn Palace & Gardens – tour the imperial rooms and explore the vast grounds",
          "Visit Karlskirche and take the elevator up for panoramic views",
          "Stroll the Ringstrasse – admire the State Opera, Parliament, and City Hall",
          "Evening: Classic concert or opera at Musikverein or Vienna State Opera, followed by drinks at Loos Bar"
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Belvedere Palace – see Klimt’s ‘The Kiss’",
          "Naschmarkt – browse food stalls and have lunch at Neni or Tewa",
          "Explore the MuseumsQuartier (Leopold Museum or MUMOK)",
          "Nightlife in Neubau district – cool cocktail bars or rooftop drinks at Das Loft"
        ],
      },
    ],
    photos: [
    ],
  },
  {
    id: "prague-czech-republic",
    country: "Czech Republic",
    city: "Prague",
    title: "Prague",
    date: "2025-07-21",
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
    ]
  },
  {
    id: "liberia-costa-rica",
    country: "Costa Rica",
    city: "Liberia",
    title: "Liberia & Guanacaste",
    date: "2025-10-18",
    itinerary: [
      {
        day: 1,
        activities: [
          "Explore Rincon de la Vieja National Park – volcanic mud pots, waterfalls, and hiking trails",
          "Swim at Oropendola Waterfall or relax in hot springs nearby",
          "Lunch at a local soda or Hacienda Guachipelín Lodge",
          "Evening: back to Liberia town – dinner at Café Liberia or Maria Juana Restaurant"
        ],
      },
      {
        day: 2,
        activities: [
          "Day trip to Playa Hermosa or Playa del Coco – beaches, snorkeling, and beach bars",
          "Try jet skiing, paddleboarding, or take a catamaran cruise along the coast",
          "Lunch beachside at Father Rooster or Maracuya Beach Club",
          "Sunset drinks & seafood dinner – Jolly Roger or Zi Lounge in Playas del Coco"
        ],
      },
    ],
    photos: [

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
    ],
  }
  
];

export default LOCATIONS;
