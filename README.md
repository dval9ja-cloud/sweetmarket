# Marketplace — Ready-to-deploy (Frontend + Backend)

This repository contains:
 - `frontend/` — Vite + React app (deploy to Vercel)
 - `backend/` — Express API (deploy to Render, Railway, or Vercel Serverless)

## Quick overview
- Configure environment variables (see `.env.example` files).
- Create a MongoDB Atlas cluster and get `MONGO_URI`.
- For payments: set up Paystack and/or Stripe accounts and get API keys.
- Deploy frontend to Vercel (`vercel` or via dashboard).
- Deploy backend to Render/Railway (recommended) or use Vercel Serverless functions (advanced).

## Deployment suggestions
- Frontend (Vercel):
  1. Connect GitHub repo to Vercel.
  2. Set `VITE_API_URL` to your backend URL (e.g., https://your-backend.example.com).
- Backend (Render / Railway):
  1. Push `backend/` to GitHub and connect Render/Railway.
  2. Set environment variables from `.env.example`.

## Local development
- Backend:
  cd backend
  npm install
  cp .env.example .env
  # edit .env, then
  npm run dev
- Frontend:
  cd frontend
  npm install
  cp .env.example .env
  npm run dev

## Files included
- backend/: Express API with auth, products, orders, and payment routes (Paystack & Stripe placeholders)
- frontend/: Vite React app that consumes the API

