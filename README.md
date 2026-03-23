# Event Calendar

A responsive sports event calendar application built with React. Browse events by month, view detailed match information, and add new events with an intuitive interface.

## Overview

Event Calendar is a single-page application (SPA) that displays sports events in a calendar view. Users can:
- Browse events organized by month
- View detailed information about specific events (teams, scores, competition details)
- Add new events via a form
- Navigate between months using an interactive date picker

The application features a clean, modern UI with responsive design that adapts to mobile, tablet, and desktop screens.

## Tech Stack

- **React 19** - UI framework
- **React Router 7** - Client-side routing for multi-page SPA
- **Vite** - Build tool and development server
- **CSS Modules** - Scoped styling for component isolation
- **Normalize.css** - Cross-browser consistency

## Project Structure

```
src/
├── Calendar/
│   ├── Calendar.jsx              # Main calendar component
│   ├── CalendarGrid.jsx          # Calendar grid layout
│   ├── CalendarWeek.jsx          # Week row component
│   ├── CalendarDay.jsx           # Individual day cell
│   └── Calendar.module.css       # Calendar styles
├── Details/
│   ├── EventDetails.jsx          # Event details page
│   └── EventDetails.module.css   # Details styles
├── Form/
│   ├── EventForm.jsx             # Event creation form
│   └── EventForm.module.css      # Form styles
├── App.jsx                       # Root component
├── main.jsx                      # Entry point
├── routes.jsx                    # Route configuration
└── index.css                     # Global styles
```

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd event-calendar
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

### Development Server

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port). Open this URL in your browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests with Vitest

## Features

- **Month Navigation** - Select any month using the date input
- **Event Display** - View all events for the selected month in grid format
- **Event Details** - Click any event to see comprehensive match information including:
  - Competition name
  - Team names and abbreviations
  - Match score
  - Date and time
- **Add Events** - Create new events with complete match details
- **Responsive Design** - Optimized layouts for mobile (320px+), tablet (600px+), and desktop (900px+)

## Design Decisions

- **Routing & Navigation** - React Router enables SPA navigation with dedicated routes for calendar, event details, and form pages, providing clear navigation structure.
- **Calendar Generation** - Dynamic calendar built using JavaScript's Date API to handle varying month lengths and leap years; month-based filtering keeps rendering efficient.
- **State Management** - Event data flows from the App component through context to child components for easy access and modification
- **UI Structure & Component Design** - Modular components (calendar grid, week, day) for composability; CSS Grid ensures consistent 7-column layout without table semantics.
- **User Input & Interaction** - Native date input for simple, accessible month selection without custom UI complexity.



  
