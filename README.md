# 🎬 Movie Search App

A full-stack Movie Search Application built with **React**, **Node.js**, **Express**, **Bootstrap**, and the **OMDB API**.

---

## ✨ Features

- 🔍 Search movies by title
- 🎥 View detailed movie info (plot, cast, director, ratings, awards)
- ❤️ Save & manage favourite movies (stored in localStorage)
- 💀 Skeleton loading animations
- 📱 Fully responsive (mobile-friendly)
- 🌙 Dark theme UI

---

## 🛠️ Tech Stack

| Layer    | Technology               |
|----------|--------------------------|
| Frontend | React, React Router DOM  |
| Styling  | Bootstrap 5, Custom CSS  |
| Backend  | Node.js, Express         |
| API      | OMDB API (free)          |
| HTTP     | Axios                    |

---

## 🚀 Getting Started

### 1. Get a Free OMDB API Key
Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and register for a **free** API key.

---

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```
OMDB_API_KEY=your_api_key_here
PORT=5000
```

Start the server:

```bash
npm start
# or for development with auto-reload:
npm run dev
```

Server runs on: `http://localhost:5000`

---

### 3. Setup the Frontend

```bash
cd client
npm install
npm start
```

App runs on: `http://localhost:3000`

---

## 📁 Project Structure

```
movie-search-app/
├── client/                  # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── SearchBar.jsx
│       │   ├── MovieCard.jsx
│       │   └── SkeletonCard.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Detail.jsx
│       │   └── Favourites.jsx
│       ├── App.jsx
│       ├── index.js
│       └── index.css
│
├── server/                  # Node.js Backend
│   ├── index.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## 🌐 API Endpoints

| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| GET    | `/api/search?title=` | Search movies by title       |
| GET    | `/api/movie/:id`    | Get movie details by IMDB ID |

---

## 🎓 What You'll Learn

- Building a REST API with Node.js & Express
- Consuming third-party APIs securely (hiding API keys in .env)
- React state management with hooks (useState, useEffect)
- React Router DOM for navigation
- Responsive UI with Bootstrap 5
- localStorage for client-side data persistence

---

## 📸 Pages

- **Home** — Search bar + movie result grid
- **Detail** — Full movie info + save to favourites
- **Favourites** — Saved movies list

---

## 🔗 Deployment

- **Frontend**: Deploy `/client` to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- **Backend**: Deploy `/server` to [Render](https://render.com) or [Railway](https://railway.app)

> ⚠️ Update the API base URL in the frontend when deploying (change proxy or use environment variable).

---

Made with ❤️ by a student developer
