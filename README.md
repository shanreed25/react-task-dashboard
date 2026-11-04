# React Task Management Dashboard



## Setup
> `npm install`

> `npm run dev`

**Open the local URL that prints in the terminal**


## Project Structure
```bash
App
└──
├── components/
│   ├── Dashboard/Dashboard.tsx  # tasks and taskEdit state
│   ├── TaskFilter/TaskFilter.tsx
│   ├── TaskForm/TaskForm.tsx # onSubmit (formData and formErrors state)
│   └── TaskList/
│       ├── TaskList.tsx # tasks, onStatusChange, onDelete
│       └── TaskItem.tsx # key, task, onStatusChange, onDelete
├── data/
│   └── mockTasks.ts  # sample tasks for testing
├── types/
│   └── index.ts      # all types and interfaces
└── utils/
    ├── taskUtils.ts   # task, date, and validation functions
    └── taskStyles.ts  # Tailwind class functions and style constants

```

---

- **`App`**: Renders Dashboard inside `<main>`
- **`Dashboard`**: Holds the tasks and taskEdit, defines the handlers, and passes both to its children
- **`TaskForm`**: Holds the input values and validation errors in local state. The title and description are validate and valid data is sent up through `onSubmit`
- **`TaskList`**: Renders one `TaskItem` per task, or a "No Tasks Yet" message
- **`TaskItem`**: Wrapped in `React.memo`, shows the task's fields, formatted due date, and overdue label and icon, plus the status dropdown and delete and edit buttons. .

## State
| Component   | State        | Type             | Purpose                                                    |
| ----------- | ------------ | ---------------- | ---------------------------------------------------------- |
| `Dashboard` | `tasks`      | `Task[]`         | Every task in the app                                      |
| `Dashboard` | `taskEdit`   | `Task \| null`   | The task being edited, or `null` when adding a new task    |
| `TaskForm`  | `formData`   | `TaskFormData`   | The current input values                                   |
| `TaskForm`  | `formErrors` | `TaskFormErrors` | Validation messages from the last submit attempt           |


## Union Types
| Name           | Purpose                                                            | Used by                                              |
| -------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| `TaskStatus`   | The three stages a task can be in                                  | Task, status dropdown, status filter, stats          |
| `TaskPriority` | How important a task is                                            | Task, priority badge, priority filter, sorting       |
| `TaskCategory` | The area a task belongs to                                         | Task, category dropdown, task label                  |

## Interfaces
| Name              | Purpose                                                                       | Used by                                     |
| ----------------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| `Task`            | The main data shape for every task in state                                   | Dashboard state, TaskList, TaskItem, utils  |
| `TaskItemProps`   | Props for one task                                                            | TaskItem                                    |
| `TaskListProps`   | Props for the list                                                            | TaskList                                    |
| `TaskFormProps`   | Props for the form                                                            | TaskForm                                    |
<!-- | `FilterOptions`   | Current filter state                                                          | Dashboard state, TaskFilter, filter utility |
| `SortOptions`     | Combines sort field and direction into one value                              | Dashboard state, TaskList, sort utility     |
| `TaskStats`       | Counts per status, overdue tasks, and completion percentage                   | Dashboard statistics section                |
| `TaskExportData`  | Structure of the exported JSON file                                           | Export and import functions                 |
| `TaskFilterProps` | Props for filter controls                                                     | TaskFilter                                  | -->


## Utility Functions
| Function            | Signature                                                                       | Purpose                                                                    |
| ------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `createTask`        | `(taskData: TaskFormData) => Task`                                              | Adds an id and createdAt timestamp to the form data and returns a new Task |
| `parseDate`         | `(dueDate: string) => Date`                                                     | Builds a local date from `"YYYY-MM-DD"` to avoid the UTC off-by-one bug    |
| `formatDate`        | `(dueDate: string) => string`                                                   | `"2026-11-05"` becomes `"Nov 5, 2026"`                                     |
| `isOverdue`         | `(task: Task) => boolean`                                                       | Due date before today and status not `'completed'`                         |
| `validateField`     | `(data: TaskFormData, formErrors: TaskFormErrors, field: keyof TaskFormData) => void` | Checks one field and writes its error message into `formErrors`      |
| `validateForm`      | `(data: TaskFormData) => TaskFormErrors`                                        | Runs `validateField` for title and description; an empty object means valid |
| `getStatusStyles`   | `(status: TaskStatus) => string`                                                | Returns the Tailwind color classes for the status dropdown in `TaskItem`   |
| `getPriorityStyles` | `(priority: TaskPriority) => string`                                            | Returns the Tailwind text color class for the priority in `TaskItem`       |

`getStatusStyles`, `getPriorityStyles`, and the style constants (`dashStyles`, `taskFormStyles`) are in `utils/taskStyles.ts`. The other functions are in `utils/taskUtils.ts`.



## Form Types
| Name              | Purpose                                                                  | Used by  |
| ----------------- | ------------------------------------------------------------------------ | -------- |
| `TaskFormData`    | The fields a user fills in; leaves out `id` and `createdAt` using `Omit` | TaskForm |
| `TaskFormErrors`  | One optional error message per form field, using `Partial` and `Record`  | TaskForm, `validateField`, `validateForm` |
| `TaskFormTouched` | Tracks which fields the user has left, so errors can show after blur     | Not used yet |


## Component Props
| Component  | Prop             | Type                                              | Purpose                           |
| ---------- | ---------------- | ------------------------------------------------- | --------------------------------- |
| `TaskList` | `tasks`          | `Task[]`                                          | Tasks to display                  |
| `TaskList` | `onStatusChange` | `(taskId: string, newStatus: TaskStatus) => void` | Passed down to each `TaskItem`    |
| `TaskList` | `onDelete`       | `(taskId: string, taskTitle: string) => void`     | Passed down to each `TaskItem`    |
| `TaskItem` | `task`           | `Task`                                            | The task to display               |
| `TaskItem` | `onStatusChange` | `(taskId: string, newStatus: TaskStatus) => void` | Reports a new status              |
| `TaskItem` | `onDelete`       | `(taskId: string, taskTitle: string) => void`     | Reports a delete request          |
| `TaskForm` | `onSubmit`       | `(data: TaskFormData) => void`                    | Sends the form values up          |
| `TaskForm` | `initialTask`    | `Task` (optional)                                 | Fills in the form in edit mode (not used yet) |
| `TaskForm` | `onCancel`       | `() => void` (optional)                           | Cancels editing (not used yet)                |


## User actions

| User action   | Starts in | Callback                            | Dashboard handler             |
| ------------- | --------- | ----------------------------------- | ----------------------------- |
| Change status | TaskItem  | `onStatusChange(taskId, newStatus)` | Update that task's status     |
| Delete task   | TaskItem  | `onDelete(taskId, taskTitle)`       | Confirm, then remove the task |
| Add task      | TaskForm  | `onSubmit(data)`                    | Runs only if validation passes; `createTask(data)`, then adds it to the end of `tasks` |


