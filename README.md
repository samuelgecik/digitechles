# DIGITECHLES Project Setup

## Initial Setup

1. Install dependencies:
```bash
npm install
```

2. Initialize Shadcn/UI components:
```bash
npx shadcn-ui@latest init
```

3. Add required Shadcn components:
```bash
npx shadcn-ui@latest add button card dialog dropdown-menu label slider tabs toast toggle tooltip
```

## Development

Run the development server:
```bash
npm run dev
```

## Project Structure

- `app/`: Next.js application
- `components/`: Reusable UI components
- `public/data/`: GeoJSON and data files
- `memory-bank/`: Project documentation and context

## Technology Stack

- Next.js 14 (TypeScript)
- Tailwind CSS
- Shadcn/UI
- Leaflet/React-Leaflet
- Recharts