
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Usage of application

Top, left button `>>`: This button opens the menu. There are three more buttons for navigation:
- `Home screen`: There is only introductory description with a link to Todo screen.
- `Todo screen`: Main screen where you can get, create, update, delete and filter your Todo items.
  First of all you need to create your first Todo item with `form` on the right side of the application. The form has three inputs:
  1. **Title**: Set title of your Todo item. The title cannot be `shorter` than two characters and `longer` than thirty characters. Also cannot be `empty`.
  2. **Description**: Write `short description` for your Todo item. What you want to do or achieve. Cannot be `empty` and `longer` than a hundred characters.
  3. **Date and time picker**: Set a `deadline` for your Todo item. Cannot be `empty` and `older` than current date and time.
  4. **Create button**: After all inputs are set press `ADD TO THE LIST` button to `post` a new item to your list of Todo items.

  On the left side there should pop up the new Todo item. The Todo item is a `card` that consists of:
  1. **Title**.
  2. **Description**.
  3. **Deadline**: If the deadline `expires` border and deadline text of the Todo item changes its color to `red`.
  4. **Done checkbox**: Click the checkbox to `update` its state from `Incomplete` to `Done`.
  5. **X button**: Click `X` if you want to `delete` this Todo item.

  Lastly, on the top of the page there is `searchbar` and `filter`:
  1. **Searchbar**: With this bar you can look up for the Todo item you are searching for. Use `title` of a Todo item.
  2. **Radio buttons**: There are three options. You can choose whether you want to filter `All` Todo items, `Incomplete` or `Done`.
  If there is no Todo item in the list the search bar and the filter are `disabled`.
- `Progress screen`: This screen shows you your progress with completed Todo items on the `progress bar`.
