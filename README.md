# To-Do Application

This is an advanced To-Do application built with ReactJS. The application allows users to add, view, edit, and delete tasks with priorities. Tasks are persisted in the browser's local storage, so they remain even after the page is refreshed.

## Features

- Add tasks with a description and priority level (High, Medium, Low).
- View a list of tasks with their priority levels.
- Edit existing tasks.
- Delete tasks.
- Persist tasks in local storage.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/iamsantoshku/to-do-app.git
    cd to-do-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.


## Components

- **TodoApp**: The main component that holds the state and logic for the application.
- **TodoList**: A component that displays the list of tasks.
- **TodoItem**: A component that represents a single task item.
- **TodoForm**: A component that handles adding and editing tasks.

## Usage

- **Add a Task**: Enter a task description and select a priority level from the dropdown. Click "Add Task" to add the task to the list.
- **Edit a Task**: Click the "Edit" button next to a task. The task details will be populated in the input fields. Make changes and click "Update Task" to save.
- **Delete a Task**: Click the "Delete" button next to a task to remove it from the list.











