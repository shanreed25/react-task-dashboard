# React Task Management Dashboard


## Union Types
| Name           | Purpose                                                            | Used by                                              |
| -------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| `TaskStatus`   | The three stages a task can be in                                  | Task, status dropdown, status filter, stats          |
| `TaskPriority` | How important a task is                                            | Task, priority badge, priority filter, sorting       |
| `TaskCategory` | The area a task belongs to                                         | Task, category dropdown, category filter, task label |

## Interfaces
| Name              | Purpose                                                                       | Used by                                     |
| ----------------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| `Task`            | The main data shape for every task in state, localStorage, and exported files | Dashboard state, TaskList, TaskItem, utils  |
| `FilterOptions`   | Current filter state                                                          | Dashboard state, TaskFilter, filter utility |
| `SortOptions`     | Combines sort field and direction into one value                              | Dashboard state, TaskList, sort utility     |
| `TaskStats`       | Counts per status, overdue tasks, and completion percentage                   | Dashboard statistics section                |
| `TaskExportData`  | Structure of the exported JSON file                                           | Export and import functions                 |
| `TaskItemProps`   | Props for one task                                                            | TaskItem                                    |
| `TaskListProps`   | Props for the list                                                            | TaskList                                    |
| `TaskFormProps`   | Props for the form                                                            | TaskForm                                    |
| `TaskFilterProps` | Props for filter controls                                                     | TaskFilter                                  |


## Utility Functions
| Function     | Signature                        | Purpose                                                                 |
| ------------ | -------------------------------- | ----------------------------------------------------------------------- |
| `parseDate`  | `(dueDate: string) => Date`      | Builds a local date from `"YYYY-MM-DD"` to avoid the UTC off-by-one bug |
| `formatDate` | `(dueDate: string) => string`    | `"2026-11-05"` becomes `"Nov 5, 2026"`                                  |
| `isOverdue`  | `(task: Task) => boolean`        | Due date before today and status not `'completed'`                      |