# Django React Todo Application

A full-stack Todo application built with Django (backend), React (frontend), and PostgreSQL (database), all dockerized for easy setup and deployment.

## Features

- Create, read, update, and delete Todo items
- Mark Todo items as completed
- REST API using Django REST Framework
- Modern React frontend with hooks
- PostgreSQL database for data persistence
- Fully containerized with Docker

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/) (typically included with Docker Desktop)

## Quick Start

1. Clone the repository:
```
git clone <repository-url>
cd todo
```

2. Start the application with Docker Compose:
```
docker-compose up -d
```

3. Access the applications:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api/todos/
   - Admin interface: http://localhost:8000/admin/ (username: admin, password: adminpassword)

## Project Structure

- `backend/`: Django REST Framework backend
  - `backend/`: Django project settings
  - `todo/`: Todo app implementation
- `frontend/`: React frontend
  - `src/components/`: React components
  - `src/services/`: API services

## Development

### Backend

The backend is built with Django and Django REST Framework, providing a RESTful API for the Todo items.

API endpoints:
- `GET /api/todos/`: List all Todo items
- `POST /api/todos/`: Create a new Todo item
- `GET /api/todos/{id}/`: Retrieve a specific Todo item
- `PUT /api/todos/{id}/`: Update a specific Todo item
- `DELETE /api/todos/{id}/`: Delete a specific Todo item

### Frontend

The frontend is built with React, using functional components and hooks. It communicates with the backend API using Axios.

## Stopping the Application

To stop all running containers:
```
docker-compose down
```

To stop and remove all data (including database volume):
```
docker-compose down -v
```

## License

This project is licensed under the MIT License.
# Django_Next_Todo
