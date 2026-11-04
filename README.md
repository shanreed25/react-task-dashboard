# React Task Management Dashboard



## Setup
> `npm install`

> `npm run dev`

**Open the local URL that prints in the terminal**


## Project Structure
```
App
    └── Dashboard          owns the tasks state
        ├── TaskForm       onSubmit
        ├── TaskFilter     placeholder
        └── TaskList       tasks, onStatusChange, onDelete
            └── TaskItem   key, task, onStatusChange, onDelete

```
- **`App`**: Renders Dashboard inside `<main>`
- **`Dashboard`**: Holds the tasks, defines the handlers, and passes both to its children
- **`TaskForm`**: Holds the input values in local state and sends them up through `onSubmit`
- **`TaskList`**: Renders one `TaskItem` per task, or a "No Tasks Yet" message
- **`TaskItem`**: Shows the task's fields, formatted due date, and overdue label and icon, plus the status dropdown and delete button. Wrapped in `React.memo`.


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
| Function            | Signature                                 | Purpose                                                                    |
| ------------------- | ----------------------------------------- | -------------------------------------------------------------------------- |
| `createTask`        | `(taskData: TaskFormData): Task`          | Adds an id and createdAt timestamp to the form data and returns a new Task |
| `parseDate`         | `(dueDate: string) => Date`               | Builds a local date from `"YYYY-MM-DD"` to avoid the UTC off-by-one bug    |
| `formatDate`        | `(dueDate: string) => string`             | `"2026-11-05"` becomes `"Nov 5, 2026"`                                     |
| `isOverdue`         | `(task: Task) => boolean`                 | Due date before today and status not `'completed'`                         |
| `getStatusStyles`   | `(status: TaskStatus) => string`          | Returns the Tailwind color classes for the status dropdown in `TaskItem`   |
| `getPriorityStyles` | `(priority: TaskPriority) => string`      | Returns the Tailwind text color class for the priority in `TaskItem`       |


## Form Types
| Name           | Purpose                                                                  | Used by  |
| -------------- | ------------------------------------------------------------------------ | -------- |
| `TaskFormData` | The fields a user fills in; leaves out `id` and `createdAt` using `Omit` | TaskForm |

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


## User actions

| User action   | Starts in | Callback                            | Dashboard handler             |
| ------------- | --------- | ----------------------------------- | ----------------------------- |
| Change status | TaskItem  | `onStatusChange(taskId, newStatus)` | Update that task's status     |
| Delete task   | TaskItem  | `onDelete(taskId, taskTitle)`       | Confirm, then remove the task |


