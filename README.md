# Nuxt 14 Project - Ticketing System

Welcome to the Nuxt 14 Ticketing System project! This project allows you to manage tickets, providing functionality to add, delete, or update tickets. Additionally, the project includes user authentication features such as login, logout, and registration for a comprehensive user experience.

## Project Configuration

Before getting started with the project, make sure to follow these configuration steps:

### Step 1: Add the .env.local file

Create a file named `.env.local` at the root of the project.

### Step 2: Add MongoDB Information

In the `.env.local` file, add your MongoDB database information by replacing `<name>`, `<password>`, and `<NameOfDB>` with your own details:

```env
MONGODB_URI=mongodb+srv://<name>:<password>@cluster0.hg6d2vz.mongodb.net/<NameOfDB>?retrywrites=true

### Step 3: Configure Next.js Authentication URL
Add your Next.js project URL to the .env.local file:
NEXTAUTH_URL=http://localhost:3000

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```
