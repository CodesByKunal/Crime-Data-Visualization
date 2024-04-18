# Crime Data Visualization App

The Crime Data Visualization App is a web application designed to provide users with interactive visualizations of crime data. It utilizes heatmaps on maps along with charts and graphs to present insights into crime trends in a given area.


Below is a concise and organized description of the features for a README file, suitable for explaining the capabilities of a crime data visualization application. This version separates features available to police officials and regular citizens, enhancing clarity and readability.

# Features

## For Police Officials

- Heatmap Visualization: Interactive heatmap displaying exact locations of crime incidents.
- Detailed Data Analysis: Various charts and graphs depict crime data trends and patterns.
- Advanced Filters: Customize the displayed data based on criteria such as time, location, crime type and more.

## For Citizens

- Generalized Heatmap: View a simplified heatmap that indicates general areas of crime without revealing specific locations.
- Real-Time Crime Alerts: Receive alerts when entering high-crime areas to enhance personal safety.
- Safety Recommendations: Access do's and don'ts tailored to specific areas to improve situational awareness.
- Emergency Contact: Quickly call helpline numbers directly through the app for immediate assistance.

## Technologies Used

> Frontend
> `Next.js` `Tailwind CSS` `Workbox`

> Map
> `Leaflet` `MapBox` `Google Maps js API`

> Charts and Graphs
> `Chart.js`

> Backend:
> `Node.js` `Express.js`

> Database:
> `MongoDB` `Redis`

### Project Setup Guide For Police Officals
> [!IMPORTANT]
> Set up [MongoDB](https://www.mongodb.com/docs/manual/installation/) , [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/) and [nodejs.org](https://nodejs.org/) on Machine.

#### 1. Set Up and Run the Backend Server

The backend part of this project uses Express.js. Here’s how you can set it up and start the server:

a. Open a new terminal or command prompt window. Navigate back to the main project directory `Crime-Data-Visualization` and then into the `Backend` folder:

```bash
cd path/to/Crime-Data-Visualization
cd Backend
```

b. Install the necessary packages:

```bash
npm install
```

c. Start the server:

```bash
npm start
```

This will start the Express server,  on `localhost:3030` or another port specified in your server configuration.

#### 2. Set Up and Run the Frontend Server

The frontend part of this project uses Next.js. Here’s how you can set it up and start the development server:

a. Open a new terminal or command prompt window. Navigate back to the main project directory `Crime-Data-Visualization` and then into the `Frontend` folder:

```bash
cd path/to/Crime-Data-Visualization
cd Frontend
```
b. Install the necessary packages:

```bash
npm install
```

c. Start the development server:

```bash
npm run dev
```

This command starts the Next.js development server, typically available at `http://localhost:3000`.
