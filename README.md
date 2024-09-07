#  Gourmet Delight - Recipe Finder App
A React-based recipe finder app that allows users to search and explore gourmet recipes, using the Edamam Recipe Search API for detailed recipe information and nutritional data.

## Features

- **Search Recipes**: Users can search for gourmet recipes by entering a keyword (e.g., ingredient or dish).
- **Responsive UI**: The app is fully responsive and works seamlessly on both desktop and mobile devices.
- **Recipe Cards**: Each recipe includes an image, title, calorie count, and a link to the full recipe on the original website.

## Getting Started

To run the app locally, follow these steps:

### Prerequisites

- Node.js

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/RaigaX9/gourmet-delight.git
   cd gourmet-delight
   
2. Install Dependencies
   ```bash
    npm install
3. Create a `.env` file in the root of the project with your Edamam API credentials
   ```env
   REACT_APP_EDAMAM_APP_ID=your_app_id_here
   REACT_APP_EDAMAM_APP_KEY=your_app_key_here
4. Run the app
   ```bash
   npm start

5. Go to your browser and go to `localhost:3000`

### Built With
- React - A JavaScript library for building user interfaces.
- Edamam API - Provides recipe data, nutritional information, and health-related search filters.
- Axios - Promise-based HTTP client used for API requests.

### API Key
To run this app, you will need an App ID and App Key from Edamam. Get them by signing up at [Edamam Recipe API](https://www.edamam.com/).
