# What is this?

The app is Dan Abramov's code from his Redux Tutorials on Egghead (Getting Started with Redux, Building React Applications with Idiomatic Redux).

## And

I'm using the code to learn how to write unit tests in react.

## Testing philosophy

This is a create-react-app, so Jest is baked in.

* smoke tests: verifies the component renders without throwing. Also could be described by initializing a class, or calling a function and making sure no errors get thrown. This is great for documentation because it shows the minimal props for the component to render, but comes with caviates, like being required to create the store or adding MemoryRouter. Looks like this:

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

* shallow rendering, testing some outputs

* full rendering, testing lifecycle and state changes
