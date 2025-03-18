# Time.com-inspired News Website

A static news website with category-based navigation and featured articles, inspired by Time.com.

## Getting Started

### Prerequisites

- Node.js 20.x
- npm (comes with Node.js)

### Installation

1. Clone the repository to your local machine:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Troubleshooting

If you encounter any issues:

1. Make sure Node.js version 20.x is installed:
```bash
node --version
```

2. Clear npm cache if you have dependency issues:
```bash
npm cache clean --force
```

3. If the server doesn't start, check if port 5000 is already in use:
   - On Windows: `netstat -ano | findstr :5000`
   - On Mac/Linux: `lsof -i :5000`

4. For any other issues, try removing the node_modules folder and reinstalling:
```bash
rm -rf node_modules
npm install
```

## Features

- Category-based navigation (World, Business, Technology, Science, Health)
- Featured articles on the homepage
- Trending articles sidebar
- Newsletter signup form
- Responsive design
- Article detail pages with full content
- Category pages showing all articles in a category

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities and constants
├── server/              # Express.js server
├── shared/             # Shared types and schemas
└── public/             # Static assets
```

## Built With

- React
- TypeScript
- Express.js
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Wouter (for routing)