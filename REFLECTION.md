## How I implemented React and TypeScript features

I started by defining the data. `TaskStatus`, `TaskPriority`, and `TaskCategory` are union types, so a misspelled status gets caught at compile time. I derived `TaskFormData` from `Task` using `Omit` to leave out `id` and `createdAt`, since the app generates those, and adding a field to `Task` also adds it to the form type.

I used `useState` for the tasks and form values, with controlled inputs for every field. I wrapped the handlers in `useCallback` and `TaskItem` in `React.memo` so changing one task doesn't re-render every row.

## Challenges and how I overcame them

**Blank task list.** The `.map()` callback used curly braces without a `return`, so every item came back `undefined`. I found it by following the data through each component.

**Overdue logic.** I mixed `||` and `&&` without realizing `&&` runs first. The mock data didn't cover the failing case, so I learned to test more than the expected case.

**Dates.** I split one function into `parseDate` and `formatDate` so I could compare dates, and built local dates to avoid the UTC off-by-one bug.

**Stale closure.** Canceling a delete brought back deleted tasks because `handleDelete` held the `tasks` value from the first render. I used the `prev` form of the setter so I could keep the empty dependency array and stay compatible with `React.memo`.

**Category dropdown.** A capitalized `name="Category"` broke the dropdown, but the code still compiled because the handler's `[name]` key is a plain `string`. The bug showed me I still need to test in the browser.

## Component composition and state management

`Dashboard` owns the `tasks` state and its handlers. Data flows down as props, and actions flow back up through callbacks like `onDelete`, so there is one source of truth. `TaskForm` keeps its inputs in local state so typing doesn't re-render the dashboard, and sends a `TaskFormData` object up on submit.