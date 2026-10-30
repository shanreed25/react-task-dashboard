# React Task Management Dashboard


## Union Types


## Interfaces
| Name              | Kind      | Purpose                                                                       | Used by                                     |
| ----------------- | --------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| `Task`            | Interface | The main data shape for every task in state, localStorage, and exported files | Dashboard state, TaskList, TaskItem, utils  |
| `FilterOptions`   | Interface | Current filter state                                                          | Dashboard state, TaskFilter, filter utility |
| `SortOptions`     | Interface | Combines sort field and direction into one value                              | Dashboard state, TaskList, sort utility     |
| `TaskStats`       | Interface | Counts per status, overdue tasks, and completion percentage                   | Dashboard statistics section                |
| `TaskExportData`  | Interface | Structure of the exported JSON file                                           | Export and import functions                 |
| `TaskItemProps`   | Interface | Props for one task                                                            | TaskItem                                    |
| `TaskListProps`   | Interface | Props for the list                                                            | TaskList                                    |
| `TaskFormProps`   | Interface | Props for the form                                                            | TaskForm                                    |
| `TaskFilterProps` | Interface | Props for filter controls                                                     | TaskFilter                                  |