# Interactive Terminal Portfolio

## Overview

This is a full-stack web application that presents a developer portfolio as an interactive terminal interface. The application simulates a command-line environment where users can navigate through different sections (about, projects, experience, etc.) using terminal commands. It's built with React on the frontend and Express.js on the backend, featuring a modern component-based architecture with TypeScript throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with shadcn/ui components for consistent design
- **Styling**: Tailwind CSS with custom terminal theme colors
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with TanStack Query for server state
- **Type Safety**: Full TypeScript coverage with strict configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL session store for user sessions
- **Development**: Hot reloading with tsx for rapid development

### Database Strategy
- **ORM**: Drizzle ORM chosen for excellent TypeScript integration and performance
- **Database**: PostgreSQL for production reliability (Neon Database serverless)
- **Migrations**: Drizzle Kit for schema management and migrations
- **Development Storage**: In-memory storage implementation for local development

## Key Components

### Terminal Interface Components
- **TerminalHeader**: Simulates terminal window chrome with traffic light controls
- **TerminalContent**: Main display area showing command history and ASCII art
- **CommandInput**: Interactive command line with history navigation and auto-focus
- **Terminal Hook**: Custom hook managing command execution, history, and state

### Portfolio Data Structure
- Structured command responses for about, education, projects, experience, certifications, and social links
- ASCII art welcome banner for authentic terminal feel
- Command history with keyboard navigation (up/down arrows)

### UI Component System
- Complete shadcn/ui component library implementation
- Consistent theming with CSS custom properties
- Mobile-responsive design considerations
- Dark/light theme support infrastructure

## Data Flow

### Command Processing Flow
1. User types command in CommandInput component
2. useTerminal hook processes command and manages history
3. Portfolio data is retrieved from structured data objects
4. Response is formatted and added to terminal history
5. Display updates with command output and maintains scroll position

### State Management
- Local state for terminal history and current command
- TanStack Query for potential future server-side data fetching
- React Context for toast notifications and tooltips

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for production
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **@radix-ui/***: Primitive UI components for accessibility
- **@tanstack/react-query**: Server state management and caching
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library

### Development Tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production builds
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Build Process
- **Development**: Vite dev server with HMR and TypeScript checking
- **Production**: Two-step build process:
  1. Frontend: Vite builds React app to `dist/public`
  2. Backend: esbuild bundles server code to `dist/index.js`

### Environment Configuration
- Database URL required for PostgreSQL connection
- Development vs production environment handling
- Replit-specific optimizations and error overlays

### Production Considerations
- Static file serving from dist/public directory
- Express.js serves both API routes and frontend assets
- Database migrations handled via `drizzle-kit push` command
- Session storage uses PostgreSQL for persistence across deployments

The application architecture prioritizes developer experience with hot reloading, type safety, and modern tooling while maintaining a clean separation between presentation (terminal UI) and data (portfolio content). The terminal interface provides an engaging way to showcase technical skills while demonstrating proficiency with modern web development practices.