# Todo List App

## Overview

This is a simple Todo List application developed using Vite and Preact. The application allows users to manage their tasks efficiently by adding, editing, and deleting tasks. The project includes unit tests written using Vitest to ensure the reliability of the codebase.

## Features

- Add new tasks to the todo list
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Clear all completed tasks with a single click
- Responsive design for various screen sizes

## Technologies Used

- [Vite](https://vitejs.dev/): A fast development server and build tool for modern web development.
- [Preact](https://preactjs.com/): A fast 3kB alternative to React with the same modern API.
- [Vitest](https://vitest.dev/): A lightweight and fast testing library for Vite.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ahmed-sudani/todo-app.git
   cd todo-app
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   yarn run dev
   ```

   This will start the development server, and you can view the app by navigating to `http://localhost:5174/` in your browser.

4. **Run tests:**

   ```bash
   yarn run test
   ```

   This will execute the tests using Vitest and provide feedback on the code's reliability.

## Folder Structure

```
.
├── README
├── public
│   └── icons
└── src
    ├── core
    │   ├── components
    │   │   ├── button
    │   │   └── input
    │   ├── types
    │   └── util
    │       ├── cn
    │       ├── signalSetter
    │       └── timeSince
    ├── features
    │   └── todo
    │       ├── components
    │       │   ├── header
    │       │   ├── taskForm
    │       │   ├── tasksActionButtons
    │       │   ├── tasksFilter
    │       │   │   ├── buttons
    │       │   │   └── searchInput
    │       │   ├── tasksTable
    │       │   │   ├── body
    │       │   │   ├── header
    │       │   │   └── row
    │       │   │       ├── ActionButton
    │       │   │       ├── input
    │       │   │       └── status
    │       │   └── todo
    │       ├── hooks
    │       │   └── filter
    │       ├── signals
    │       │   ├── filter
    │       │   └── tasks
    │       ├── types
    │       │   └── task
    │       └── util
    │           └── tasks
    ├── pages
    └── styles
```

## Contributing

If you would like to contribute to the development of this Todo List app, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request, providing a clear explanation of the changes and the problem they solve.

## License

This Todo List app is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.
