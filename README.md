# MYCO 🐒

\*_Myco is a word formed by My & CO(ntacts), is a play on words that in Catalan means monkey_ 🐵

## My Contact List project

**MYCO** it's a full-stack CRUD application built with Ruby on Rails in the backend with SQLite3 database and ReactJS in the frontend.

With **MYCO** you can manage contacts simply and quickly!

### In the main view, contact cards are displayed. The user can add a new one, edit or delete a existent one.

![Main](https://i.ibb.co/FVy7MHp/Captura-de-pantalla-2020-09-14-a-las-17-40-58.png)

### In add or edit view, a form will be displayed with the contact data.

**Add:**

![Add](https://i.ibb.co/rxtV9gS/Captura-de-pantalla-2020-09-14-a-las-17-41-15.png)

**Edit:**

![Edit](https://i.ibb.co/KsW771q/Captura-de-pantalla-2020-09-14-a-las-17-41-09.png)

### When successfully add, edit or delete a contact, a toast will be displayed.

![Success](https://i.ibb.co/sVqQTKX/Captura-de-pantalla-2020-09-14-a-las-17-53-06.png)

### Errors are displayed on the form and also in a toast.

**Error:**

![Fail](https://i.ibb.co/gDrRgd6/Captura-de-pantalla-2020-09-14-a-las-17-51-16.png)

**Form error:**

![Error](https://i.ibb.co/cD8QQB9/Captura-de-pantalla-2020-09-14-a-las-17-52-52.png)

## INSTALLATION & RUNNING

This project require such dependencies as **_ruby_**, **_ruby on rails_**, **_sqlite3_** & **_node_**.

After installed you need to follow the next steps:

**Copy the project running the following command:**

```
git clone git@github.com:vior1992/myco.git
```

### BACKEND

1. **Move to api folder from the project root:**

   ```
   cd api
   ```

2. **Prepare the DB:**

   ```
   rails db:migrate
   ```

3. **Run the api server:**

   ```
   rails s
   ```

4. **If you want to restart the DB with fresh seed:**
   ```
   rails db:reset db:migrate
   ```

### FRONTEND

1. **Move to frontend folder from the project root:**

   ```
   cd frontend
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the frontend server:**

   ```
   npm run start
   ```

4. **If you want to delete \***node\*modules\*\*\* folder and \_**package-lock.json**\* file and do clean install:\*\*
   ```
   npm run setup
   ```

## TESTS & TEST COVERAGE

If you want to run the tests & test coverage, in each root folder you have to run the next commands:

### BACKEND

- Tests:
  ```
  rails s
  ```

### FRONTEND

- Tests:
  ```
  npm run test
  ```
- Test coverage:
  ```
  npm run test:coverage
  ```

![Coverage](https://i.ibb.co/hZ8C4Rp/Captura-de-pantalla-2020-09-14-a-las-17-26-33.png)

## DOCUMENTATION

### BACKEND

- [Ruby on rails](https://guides.rubyonrails.org/getting_started.htm)

- [Ruby on rails (API)](https://guides.rubyonrails.org/api_app.html)

### FRONTEND

- [React](https://reactjs.org/docs/)

- [React router](https://reactrouter.com/web/guides/quick-start)

- [React styled components](https://styled-components.com/docs)

- [React testing library](https://testing-library.com/docs/react-testing-library/intro)
