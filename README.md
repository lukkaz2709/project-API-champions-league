# 🏆 Champions League API
API developed in Node.js with TypeScript to manage information about UEFA Champions League teams. It allows creating, listing, updating, and deleting teams through REST endpoints.

## 🚀 Technologies Used
Node.js – JavaScript runtime environment

Express – Framework for routing and middleware

TypeScript – Static typing for safer code

ts-node-dev – Development tool with hot reload

## 📂 Project Structure
project-API-champions-league/
│── src/
│   ├── Controllers/     # Route handler functions
│   ├── Routes/          # API routes
│── package.json         # Dependencies and scripts
│── tsconfig.json        # TypeScript configuration

## ⚙️ Installation and Setup
### Clone the repository:
git clone https://github.com/lukkaz2709/project-API-champions-league.git

### Navigate to the project folder:
cd project-API-champions-league

### Install dependencies:
npm install

### Start the server:
npm run start:dev

### The server will be running at:
http://localhost:3333

## 🔑 Endpoints
## 📌 Get all clubs

GET /clubs

Response:

json
Copiar
Editar
[
  {
    "id": 1,
    "name": "Real Madrid",
    "country": "Spain",
    "league": "La Liga"
  }
]

### ➕ Add a new team
http
Copiar
Editar
POST /teams
Body:

json
Copiar
Editar
{
  "name": "Manchester City",
  "country": "England",
  "league": "Premier League"
}
### 
✏️ Update a team
http
Copiar
Editar
PUT /teams/:id
Body:

json
Copiar
Editar
{
  "name": "Manchester City FC"
}

### ❌ Delete a team
http
Copiar
Editar
DELETE /teams/:id
📜 License
This project is free to use for learning and educational purposes.


