# SnipSave

A modern web application for creating, storing, and managing your code snippets. Built with Next.js, Prisma, and SQLite.

## Features

- **Create** new code snippets with syntax highlighting
- **Browse** your collection of saved snippets
- **Edit** existing snippets to keep them up-to-date
- **Delete** snippets you no longer need
- **Responsive design** for both desktop and mobile use

## Tech Stack

- **Frontend**: Next.js with React, TypeScript
- **UI Components**: shadcn/ui
- **Code Editor**: Monaco Editor
- **Styling**: Tailwind CSS
- **Database**: SQLite
- **ORM**: Prisma

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/snipsave.git
   cd snipsave
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
/app                  - Next.js app directory
  /api                - API routes
  /snippets           - Snippet pages
/components           - Reusable React components
/lib                  - Utility functions and shared code
/prisma               - Database schema and migrations
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Created by Shubh Raj