# Suitmedia Frontend Intern Test Project

A responsive web application built with Next.js that showcases Suitmedia's services, work, and ideas. This project was developed as part of the Suitmedia internship test.

![Suitmedia Logo](/public/suitmedia-orange.webp)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [API Integration](#api-integration)
- [Author](#author)

## Features

- Responsive design for all device sizes
- Dynamic content loading with pagination
- Filtering and sorting capabilities
- Skeleton loading states for better UX
- Integration with Suitmedia backend API
- Multiple page sections (Home, About, Services, Work, Ideas, Careers, Contact)

## Technologies Used

- **Next.js 15.3.5** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **CSS Modules** - For component-scoped styling
- **Boxicons** - High quality web icons library
- **Day.js** - JavaScript date utility library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/suitmedia-intern.git
   cd suitmedia-intern
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
suitmedia-intern/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── careers/    # Careers page
│   │   ├── contact/    # Contact page
│   │   ├── ideas/      # Ideas listing page (main)
│   │   ├── services/   # Services page
│   │   ├── work/       # Work/Portfolio page
│   │   ├── layout.js   # Root layout component
│   │   └── page.js     # Home page
│   └── ui/             # Reusable UI components
│       ├── banner.js   # Page banner component
│       ├── card.js     # Content card component
│       ├── filter.js   # Filtering component
│       ├── header.js   # Navigation header
│       ├── pagination.js # Pagination component
│       └── skeletonCard.js # Loading skeleton
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Pages

- **Home** - Welcome page with introduction to Suitmedia
- **About** - Information about the company
- **Services** - Services offered by Suitmedia
- **Work** - Portfolio of past projects
- **Ideas** - Blog or ideas section with pagination and filtering
- **Careers** - Job opportunities
- **Contact** - Contact information and form

## Components

The project uses several reusable components:

- **Banner** - Hero section for each page
- **Card** - Display content items in a grid
- **Filter** - Sort and filter content
- **Pagination** - Navigate through paginated content
- **SkeletonCard** - Loading state for cards

## API Integration

The Ideas page integrates with the Suitmedia backend API:
```
https://suitmedia-backend.suitdev.com/api/ideas
```

The API supports:
- Pagination with page number and size
- Sorting options
- Image appending for different sizes

## Author

Halilintar Daiva Dirgantara

---

This project is part of the Suitmedia internship selection process.
