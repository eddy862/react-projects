# React Mini Projects (Vite)

A collection of small React applications built to practice UI development, API integration, and common front‑end patterns. Each app is deployed to GitHub Pages under this repo.

## Live demos

- Food Recipe App: https://eddy862.github.io/react-projects/foodapp
- Gemini Clone: https://eddy862.github.io/react-projects/gemini-clone
- Movie Search App: https://eddy862.github.io/react-projects/movieapp
- To‑Do List: https://eddy862.github.io/react-projects/todoapp
- Weather App: https://eddy862.github.io/react-projects/weatherapp

## What recruiters should know

- **Modern React** (hooks, component composition) across multiple apps.
- **Tooling:** Vite dev/build, ESLint in some projects, GitHub Pages deployments.
- **API work:** real HTTP calls with axios; debounced search; simple state management patterns.
- **Styling:** Tailwind CSS in some apps; CSS Modules; and component libraries (Material UI) in the movie app.

## Projects

### 1) Food Recipe App (React + Vite)
- **Goal:** search and browse recipes, then view details.
- **Notable:** component composition (Nav/Search/List/Details layout) and state lifted to `App`.
- **Demo:** https://eddy862.github.io/react-projects/foodapp

### 2) Gemini Clone (React + Vite + Tailwind)
- **Goal:** a simple chat UI that calls Google Gemini.
- **Tech:** `@google/generative-ai`, Tailwind, optional image prompt support.
- **Demo:** https://eddy862.github.io/react-projects/gemini-clone

### 3) Movie Search App (React + TypeScript + Vite)
- **Goal:** search movies and navigate across pages (home, genres, favorites, details).
- **Tech:** TypeScript, React Router, axios, Material UI + Tailwind utilities.
- **Notable:** debounced suggestions and route-based details pages.
- **Demo:** https://eddy862.github.io/react-projects/movieapp

### 4) To‑Do List (React + Vite + Tailwind)
- **Goal:** add/remove tasks and practice component/state patterns.
- **Tech:** React, Tailwind, uuid; includes a `gh-pages` deploy script.
- **Demo:** https://eddy862.github.io/react-projects/todoapp

### 5) Weather App (React + Vite + Tailwind)
- **Goal:** search a city and show current conditions + forecast.
- **Tech:** axios + WeatherAPI; global state via React Context.
- **Demo:** https://eddy862.github.io/react-projects/weatherapp

## Getting started (run locally)

This is a **multi-project repo** (each folder is its own Vite app).

```bash
# example: run the movie app
cd movieapp
npm install
npm run dev
```

Repeat with any of the folders: `foodapp/`, `gemini-clone/`, `movieapp/`, `todoapp/`, `weatherapp/`.

## Configuration / API keys

Some demos may not work if API keys are missing or expired.

**Recommended approach:** move keys to environment variables instead of committing them.

- Gemini Clone: create `gemini-clone/.env` with:
  - `VITE_GEMINI_API_KEY=...`
- Weather App: create `weatherapp/.env` with:
  - `VITE_WEATHER_API_KEY=...`

Then update code to read from `import.meta.env`.

## Tech stack

- React (JavaScript + TypeScript)
- Vite
- Tailwind CSS (where used)
- React Router (movie app)
- axios
- GitHub Pages

---

If you’re reviewing this repo for hiring: the goal is to demonstrate breadth across small apps (routing, API calls, debouncing, context state, styling approaches) rather than a single monolith.
