## Travel Preferences and Recommendations App
This project is a React-based application that allows users to select their top travel preferences and receive personalized travel destination recommendations. Using Google Gemini AI for text generation and Unsplash for fetching images, the app dynamically renders visually appealing recommendations tailored to the user's selected preferences.

# Features
Dynamic Preference Selection:
Users can select up to three travel preferences from a curated list (e.g., Adventure, Relaxation, Cultural).

# Personalized Recommendations:
Recommendations are generated using Google Gemini AI based on the user's selected preferences.

# Visual Enhancements:
The app fetches high-quality images of destinations using the Unsplash API.

Responsive Design: A smooth and interactive user experience with animations powered by framer-motion.

## Table of Contents
1. Technologies Used
2. Setup and Installation
3. Usage
5. Key Features
6. File Structure
7. Future Enhancements

## Technologies Used
# Frontend:
1. React: Component-based UI library.
2. Framer Motion: For smooth animations.
3. React Router: For navigation between components/pages.
4. React Markdown: For rendering AI-generated descriptions.

# APIs:
1. Google Gemini AI: For generating travel recommendations.
2. Unsplash API: For fetching destination images.

# Styling:
1. Tailwind CSS: For quick and customizable styling.
2. Custom CSS: For specific UI components.

## Setup and Installation
Prerequisites:
Node.js and npm installed.
Unsplash API key.
Google Gemini AI API key.

Run the following commandes to deploy the application locally:
1. git clone https://github.com/your-repo/travel-recommendations-app.git
2. cd travel-recommendations-app
3. npm install
4. creata a .env file and add the following (free API keys can be collected on both google api developer and unplash developer)
REACT_APP_GOOGLE_API_KEY=your_google_gemini_api_key
REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_api_key

## Usage:
On the homepage, select up to three preferences from the list.
Click "Confirm Selection" to fetch personalized travel recommendations.
View recommendations, complete with descriptions and images, on the results page.

## Key features:
- Interactive Bubbles: Users can select preferences via animated, pastel-colored bubbles.
- Real-time AI Integration: Google Gemini AI generates personalized recommendations instantly.
- High-quality Visuals: Unsplash API provides scenic images for each destination.
- Responsive Design: The app looks great on all devices.

## File Structure:
src/
├── components/
│   ├── SetOptions.js          # Component for selecting preferences
│   ├── Results.js             # Component for displaying recommendations
│   ├── Loading.js             # Loading animation
│   ├── keys.js                # API keys (dotenv integration)
├── styles/
│   ├── SetOptions.css         # Custom styles for preference selection
│   ├── Results.css            # Custom styles for results page
├── App.js                     # Main app component
├── index.js                   # Entry point for React
├── keys.js                    # API keys
├── .env                       # Environment variables (git-ignored)


## Future enhancements:
Advanced Filtering: Allow users to refine recommendations further.
More Attributes: Include additional preferences such as budget, travel time, and accommodation types. (Also would like to include my own personal recommendations, being the avid traveller I am)
Save Favorites: Enable users to save and revisit their favorite recommendations.
Globalization: Add support for multiple languages and regions.
