# Motlow Creek Baptist Church Website

A modern website serving the Motlow Creek Baptist Church community and potential visitors.

## Overview

Our website provides a digital home for Motlow Creek Baptist Church, allowing visitors to learn about our values and principles while serving our members with useful tools and resources.

## Core Features

- Church information and values presentation
- Ministry programs information (Sunday School, Youth, Children, Choir)
- Blog system with multiple member editors
- Event management with registration capabilities
- Member portal with profile management
- Prayer request system with notification distribution
- Dynamic content areas for Pastor and Prayer Director messages

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Authentication**: Kinde Auth
- **Databases**:
  - MongoDB (Blogs/Events)
  - Neon PostgreSQL (Membership/Relational data)
- **ORM**: Drizzle
- **Forms**: react-hook-form with zod validation
- **Server Actions**: next-safe-action
- **Data Management**: TanStack
- **UI**: TailwindCSS + shadcn/ui
- **Error Monitoring**: Sentry

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

## Documentation

- [User Stories](./docs/UserStories.md)
- [Technical Stack Details](./docs/TechStack.md)
- [Project Notes](./docs/ProjectNotes.md)

## Contributing

Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting pull requests.
