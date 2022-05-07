# BEES front-end challenge

This project was made for the BEES front-end challenge, you can see the challenge in this link:
[BEES front-end interview challenge](https://gist.github.com/lucaslacava/9608d8b957224df44cd198c08de5bf2b)

The goal was to make a simple two-screen project:
The first screen have a textbox, a checkbox and a button. The button should be activated only when the Textbox and the Checkbox are filled.
The second screen should exhibit the content of an fetched public API in cards, with the option to delete the cards one by one.

Despite this two screens, I also made a simple third screen as fallback for errors.

## Used technologies

This project used the following technologies.

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org)
- [Styled Components](https://styled-components.com/)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [SWR](https://swr.vercel.app/)
- [Typescript](https://www.typescriptlang.org/)

## Execution

To execute this project, the following things are necessary:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/en/)

#### After installing them, follow these steps:  

Clone the repository
```
$ git clone https://github.com/allanhermann/bees-project.git
```

Access the repo folder
```
$ cd <cloned_repo_folder> 
```

 Install modules
```
$ yarn
```
 
Run the project
```
$ yarn dev
```

After this, the project could be executed in the browser through this page:

```
localhost:3000
```

## Testing

To run the unit tests, you can run
```
$ yarn jest
```

To run the integration tests, first execute the project with
```
$ yarn dev
```

And then run
```
$ yarn cypress
```

## Features

The project have all of the required features and also:

### Nice to have / Bonus  
- [x] Implement using Typescript
- [x] Save user name in the global state (using Context API from Next.js)
- [x] Some Unit tests (jest+react-testing-library)
- [x] Integration tests (using cypress)
- [x] Some responsivity
- [x] Add more feature
- [x] Accept only valid characters in the first screen
- [x] Loading state (Lazy loading can be found on the Dashboard component) 
- [X] Lazy loading (Lazy loading can be found on the Dashboard component)
- [x] Error handling with a **error page**
- [x] Empty state
- [x] Git commit history.

## Screenshots

### First page
![First page](https://user-images.githubusercontent.com/83714868/167234281-0d58f47a-00b9-4338-b3c1-807c730885bc.png)

### Breweries page
![Breweries page](https://user-images.githubusercontent.com/83714868/167234632-938a3291-1d24-4c3b-90ac-cfdc0104c8a6.png)

### Error page
![Error page](https://user-images.githubusercontent.com/83714868/167234599-b47935d3-4253-4f48-8bad-52a0432cce14.png)

### Loading state
![Loading State](https://user-images.githubusercontent.com/83714868/167234852-50ef13ee-c623-4eda-aeda-26bd82a63d0e.gif)

### Empty State
![Empty State](https://user-images.githubusercontent.com/83714868/167234672-f0d8aee2-9efc-4ed2-ad68-39865460b3af.png)

### Known issues
- [] Not all components are tested or fully tested
- [] No context cache, so when you refresh the breweries page, it falls to error page due to not having a userName on global context at the time
- [] Lazy Loading, Loading State and Error Catching could be improved

## Questions?

Any questions, contact me. I'm open for feedback.

#### Made by Allan Biagio Hermann
