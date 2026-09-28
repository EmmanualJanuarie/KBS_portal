# KBS Learning Portal — portfolio demo

An online learning portal concept for entrepreneurs, employees, and program beneficiaries. This project was originally built for a client who chose not to proceed with it. It is presented here as a portfolio demo of the product and frontend development work; the client did not launch or endorse this demo.

## Live demo

The public demo will be available at **https://emmanualjanuarie.github.io/KBS_portal/** after GitHub Pages is enabled for this repository and the first deployment completes.

Use the landing page buttons to open the sample learner dashboard and admin dashboard. Dashboard content is sample data. Authentication, payments, notifications, and server-side storage are not connected, so do not enter real personal information.

## What you can explore

- Public landing page with course information, FAQs, and testimonials
- Learner dashboard with course and event views
- Admin dashboard concept with course, assessment, event, resource, and metrics sections
- Responsive layouts for desktop and mobile

## Built with

- React 19 and TypeScript
- Vite
- React Router
- Tailwind CSS
- Recharts

This repository currently contains the frontend only. There is no deployed MERN backend or database.

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
cd mern-frontend
npm ci
npm run dev
```

To create a production build:

```bash
npm run build
```

## Deployment

GitHub Actions builds the frontend and publishes it to GitHub Pages when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow is in `.github/workflows/deploy-pages.yml`.

## Project history

See [CHANGELOG.md](./CHANGELOG.md) for the development history.
