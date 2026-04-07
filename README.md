# HandiMap

**HandiMap** is a web application that lets users search for and rate the accessibility of public establishments for people with disabilities.

## Features

- **Search establishments** by name or type
- **Accessibility ratings** across four categories:
  - 🧠 Mental / cognitive
  - 👁️ Visual
  - 👂 Auditory
  - ♿ Motor
- **Questionnaire** – answer yes/no questions per establishment to generate scores
- **Add establishments** – register new venues with owner and location details
- **Score overview** – view global and per-category accessibility scores for each establishment

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express 4 |
| Templating | Pug |
| Database | MySQL (via XAMPP / phpMyAdmin) |
| ORM | Sequelize 6 |
| Animation | animate.css |
| Dev server | nodemon |

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [XAMPP](https://www.apachefriends.org/) or any MySQL server running on `localhost:3306`

## Getting Started

### 1. Import the database

Open **phpMyAdmin** and import the provided SQL dump:

```
HandiMap/others/HandiMap.sql
```

This creates the `HandiMap` database with the `etablissements`, `questions`, `reponses`, and `notes` tables and seeds sample data.

### 2. Configure the database connection

Edit `HandiMap/config/db.js` and update the credentials if needed:

```js
const sequelize = new Sequelize("HandiMap", "root", "<your_password>", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
```

### 3. Install dependencies

```bash
cd HandiMap
npm install
```

### 4. Start the server

**Production:**
```bash
npm start
```

**Development (with auto-reload):**
```bash
npm run devstart
```

The app will be available at **http://localhost:3000**.

## Project Structure

```
HandiMap/
├── config/
│   └── db.js                  # Sequelize / MySQL connection
├── controllers/
│   ├── establishmentController.js
│   ├── questionnaireController.js
│   └── searchController.js
├── models/
│   ├── establishment.js       # Etablissement model
│   ├── note.js                # Accessibility scores
│   ├── question.js            # Questionnaire questions
│   ├── response.js            # User answers
│   └── index.js               # Associations & Sequelize export
├── routes/
│   ├── establishments.js      # GET /establishments/new, POST /establishments
│   ├── questionnaire.js       # GET/POST /questionnaire/:estId
│   ├── search.js              # GET /, GET /search
│   └── notes.js               # Scores routes
├── views/                     # Pug templates
├── public/                    # Static assets (CSS, JS)
├── others/
│   └── HandiMap.sql           # Database dump
└── server.js                  # Express entry point
```

## Database Schema

| Table | Description |
|-------|-------------|
| `etablissements` | Establishments (name, address, type, owner) |
| `questions` | 50 accessibility questions across 4 categories |
| `reponses` | Yes/No answers per establishment per question |
| `notes` | Computed scores (global, mental, visual, auditory, motor) |

## License

This project is open source. Contributions are welcome.
