# Portfolio Website

## Overview

This is a personal portfolio website for Alex Rodriguez, a BS Software Engineering student passionate about competitive programming. The application is built as a full-stack web application with a React frontend and Node.js/Express backend, featuring a modern glassmorphism design and comprehensive portfolio sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React SPA with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not fully implemented)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: Built on shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom glassmorphism effects and dark mode support
- **Animations**: Framer Motion for smooth animations and transitions
- **Icons**: Lucide React icons and React Icons for technology logos
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM configured for PostgreSQL
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
Currently defines a basic user model with:
- Users table with id, username, and password fields
- UUID primary keys with PostgreSQL's gen_random_uuid()
- Zod schemas for validation

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests at `/api` endpoints
3. **Storage Layer**: Abstract storage interface allows switching between implementations
4. **Database**: Drizzle ORM manages PostgreSQL interactions (when implemented)

The current implementation uses in-memory storage for user data, with the database integration prepared but not active.

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Animations**: Framer Motion for transitions and scroll-triggered animations
- **State Management**: TanStack Query for server state caching
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS, class-variance-authority for component variants

### Backend Dependencies
- **Database**: @neondatabase/serverless, Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Vite integration for hot module replacement

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support across the stack
- **Linting/Formatting**: ESBuild for production builds
- **Replit Integration**: Custom plugins for Replit development environment

## Deployment Strategy

The application is configured for deployment with:

1. **Build Process**: 
   - Frontend built with Vite to `dist/public`
   - Backend bundled with ESBuild to `dist/index.js`

2. **Production Setup**:
   - Static file serving for the built React app
   - Express server handling API routes and serving the SPA
   - Environment-based configuration for database connections

3. **Development Environment**:
   - Vite dev server with HMR for frontend development
   - Express server with TypeScript compilation for backend
   - Integrated development experience with Replit support

The portfolio currently functions as a static showcase with prepared backend infrastructure for future dynamic features like contact forms, blog posts, or user authentication.