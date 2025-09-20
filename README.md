# E-Learning Frontend

`React + TypeScript frontend for the E-Learning platform (student + admin). This README describes project structure, setup, environment variables, development scripts, important implementation notes (RTK Query, auth, protected routes, SSLCommerz flow), and deployment steps.`

### Table of Contents

`Project Overview`

`Tech Stack`

#### Features

`Folder Structure`

`Environment Variables`

`Local Setup (Development)`

`Available Scripts`

`Important Implementation Notes`

`Authentication (JWT)`

`RTK Query (API)`

`Protected & Role-based Routes`

`Course & Dashboard Flow`

`SSLCommerz Payment Flow (frontend)`

`shadcn/ui & Tailwind`

`Production Build & Deployment`

`Testing & Linting`

`Contribution
`


#### 1. Project Overview

`This frontend is a single-page application built with React + TypeScript. It consumes a Node.js + Express backend (separate repository) via REST endpoints and uses Redux Toolkit + RTK Query for API communication and state management. UI is styled using Tailwind CSS and shadcn/ui components.`

`Users (students) can browse courses, purchase them via SSLCommerz, and view purchased modules/classes in their dashboard. Admins can add/edit courses and manage students.`

#### 2. Tech Stack

`React 18+ with TypeScript`

`Redux Toolkit + RTK Query`

`React Router v6`

`Tailwind CSS`

`shadcn/ui (optional component library)`

`React Hook Form (forms)`

`axios / fetch (HTTP client inside RTK Query baseQuery)`

Vite (recommended) or Create React App

### 3. Features

`Student`

`Register / Login`

`Browse all courses (Home)`

`View course detail`

`Buy course (SSLCommerz)`

`Dashboard: see purchased courses, modules, and classes`

`Profile update (optional)`

`Admin
`
`Admin login`

`Add / Edit / Delete courses`

`Add student manually`

`Remove student`

`Manage payments `