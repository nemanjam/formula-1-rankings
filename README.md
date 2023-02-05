# Formula 1 rankings

- neither 2 nor 4 hours is enough to do this properly with extracting reusable components, typing, SSR, proper data fetching and caching, configuring formatting and linting, etc.
- I suggest using some public API other than Rapid-Api, I was unable to find working API key in that docs and dashboard in short time and that shouldn't be the point of this task

## Explanation

This is basically nested tabs problem, the first level are seasons buttons, the second level is switch control. Data needs to be fetched and states for the switch, buttons, tables, sorting needs to be handled, plus styling.

### Done

- break app into reusable components, `TableHead` and `TableBody` aren't optimally solved, better chose simpler solution and make separate `TableRowTeam`, `TableRowDriver`
- basic styling with Tailwind
- basic SSR setup with `react-query` and `axios` data fetching

### Todo

- solve Rapid-Api key, currently app is not rendered, unable to fetch data
- states aren't implemented at all - switch, buttons, table, sorting
- improve styling to match Figma

### Screenshot

![Screenshot](/screenshots/Screenshot.png)