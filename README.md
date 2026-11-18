# IMR Movie Portal

CPRG 306 Assignment 3 — Full-Stack Web Applications  
Team Members: Minyan Liu, Iris Dunbar, Hoang Yen Nguyen

Internet Movies Rental Company (IMR) movie database: list, add, edit, and delete movies with Supabase.

## Empty architecture

```
app/
  layout.tsx      Navbar + page + Footer
  page.tsx        Movies page (dummy data for now)
components/
  Navbar.tsx      Static navbar
  Footer.tsx      Company / contact
  MovieList.tsx   List of movies
  MovieCard.tsx   One movie (title, actors, year)
  MovieForm.tsx   Add / edit form (empty)
lib/
  supabase.ts     Database client (TODO)
```

## How to run

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add Supabase keys when the database is ready.

## Suggested work split

- **Minyan** — layout, Navbar, Footer, Supabase connection, deploy (Vercel)
- **Yen** —  MovieCard, MovieList
- **Iris** — MovieForm, page



## Submit

- GitHub repository link
- Deployed website link
- One submission per group
