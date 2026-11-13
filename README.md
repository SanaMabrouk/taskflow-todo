# TaskFlow To-Do

A simple To-Do List web app built with **Node.js** and **Express**, containerized with **Docker** and deployed on **Kubernetes (k3s)** on an **AWS EC2** virtual machine.

## Features

- Add a task (Enter key or **Add** button)
- Mark a task as complete, delete a task
- Counter of remaining tasks and an empty-state message
- Tasks are stored in the browser (`localStorage`), so the server is **stateless** and can run as several pods
- The footer shows the hostname of the server (pod) that served the page

## Routes

| Route     | Description                                                       |
|-----------|-------------------------------------------------------------------|
| `/`       | To-Do web interface                                               |
| `/health` | Health check: HTTP 200 + `{status, app, version, hostname, uptime}` |
| `/info`   | App identity: `{app, version, hostname}`                          |

## Project structure

```
taskflow-todo/
├── server.js          # Express server (port from PORT env var, default 3000)
├── package.json       # App metadata, start script, dependency (express)
├── package-lock.json  # Exact dependency versions
├── public/            # Front-end (HTML, CSS, vanilla JS)
│   ├── index.html
│   ├── style.css
│   └── app.js
└── .gitignore
```

## Run locally

Requirements: Node.js 18+ (tested with Node 22).

```bash
npm ci
npm start
```

Then open http://localhost:3000

## Tech stack

- Node.js 22 + Express 5
- Docker (image published on Docker Hub)
- Kubernetes: k3s on Ubuntu 24.04 (AWS EC2 t3.small)

## Deployment

Docker and Kubernetes instructions will be added in the next steps of the project.

## Author

Sana Mabrouk