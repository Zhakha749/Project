# No Retake — Student Guide to University Professors

> A web platform that helps university students make informed decisions about courses by providing detailed information about professors — their teaching style, grading patterns, disciplines, and student success statistics.

---

## Overview

**No Retake** is a full-stack web application built with **Angular** (frontend) and **Django REST Framework** (backend). Students can register, browse professor profiles, view discipline-specific statistics, and see aggregated pass rates — all to help them strategically plan their academic journey.

---

## Features

- **JWT Authentication** — Secure registration, login, and logout
- **Student Profile** — Personal dashboard with account information
-  **Professor Directory** — Browse and search all university professors
- **Discipline Info** — See which courses each professor teaches
- **Rating System** — Community-driven 5-star professor ratings
- **Pass Rate Statistics** — Number and percentage of students who passed each discipline under a given professor
- **Student Reviews** — Leave and read feedback about professors

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | Angular 17+, TypeScript, FormsModule |
| Backend   | Django 4+, Django REST Framework  |
| Auth      | JWT (SimpleJWT)                   |
| Database  | PostgreSQL / SQLite (dev)         |
| CORS      | django-cors-headers               |
| API Docs  | Postman Collection (see `/postman`) |

---

## Project Structure

```
profinsight/
├── frontend/          # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/          # Auth interceptor, guards, services
│   │   │   ├── pages/         # Login, Register, Profile, Professors, Detail
│   │   │   └── shared/        # Shared components, interfaces
│   └── ...
├── backend/           # Django project
│   ├── users/         # Custom user model & auth endpoints
│   ├── professors/    # Professor, Discipline, Rating, Statistics models
│   └── ...
├── postman/           # Postman collection with example responses
└── README.md
```

---

## Backend Models

| Model          | Description                                              |
|----------------|----------------------------------------------------------|
| `Student`      | Extended user profile (university, year, major)          |
| `Professor`    | Professor info (name, department, bio, photo)            |
| `Discipline`   | Course/subject taught by a professor (FK → Professor)    |
| `Rating`       | Student rating + review for a professor (FK → Professor, Student) |

> Pass rate statistics are computed dynamically via custom model manager / annotated querysets.

---

## API Endpoints (Summary)

### Auth
| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| POST   | `/api/auth/register/` | Register new student |
| POST   | `/api/auth/login/`    | Obtain JWT tokens   |
| POST   | `/api/auth/logout/`   | Blacklist token     |

### Professors
| Method | Endpoint                        | Description                    |
|--------|---------------------------------|--------------------------------|
| GET    | `/api/professors/`              | List all professors            |
| GET    | `/api/professors/{id}/`         | Professor detail + disciplines |
| GET    | `/api/professors/{id}/stats/`   | Pass rate statistics           |

### Disciplines
| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | `/api/disciplines/`    | List all disciplines     |
| GET    | `/api/disciplines/{id}/` | Discipline detail       |

### Ratings
| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/ratings/`       | List ratings                 |
| POST   | `/api/ratings/`       | Submit a rating (auth)       |
| PUT    | `/api/ratings/{id}/`  | Update own rating (auth)     |
| DELETE | `/api/ratings/{id}/`  | Delete own rating (auth)     |

### Profile
| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/profile/`   | Get current user profile |
| PUT    | `/api/profile/`   | Update profile info      |

---

## Frontend Routes

| Path                    | Component            | Description                  |
|-------------------------|----------------------|------------------------------|
| `/login`                | LoginComponent       | Login page                   |
| `/register`             | RegisterComponent    | Registration page            |
| `/profile`              | ProfileComponent     | Student profile (auth guard) |
| `/professors`           | ProfessorListComponent | Browse all professors       |
| `/professors/:id`       | ProfessorDetailComponent | Professor detail & stats  |

---

## Getting Started

### Backend
```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

> Frontend runs on `http://localhost:4200`, backend on `http://localhost:8000`

---

## Group Members

| Name | GitHub |
|------|--------|
| Kydyrbai Kazbek | [@KydyrbaiKazbek](https://github.com/KydyrbaiKazbek) |
| Shakarbekov Zhakhongir | [@Zhakha749](https://github.com/Zhakha749) |
| Amantay Bagdat | [@bagdat-mp4](https://github.com/bagdat-mp4) |

**University:** Kazakhstani-British Technical University (KBTU)  
**Course:** Web Development — Angular + Django  
**Academic Year:** 2025–2026

---

## Postman Collection

A full Postman collection with all endpoints and example responses is available in the `/postman` directory of this repository.

---

*Built with ❤️ at KBTU*
