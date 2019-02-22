What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    We could be introducing bugs into our apps when prop drilling by not checking the types of our props. PropTypes is a package that works with React to check the types of our props. It will throw an error when a component receives a prop of an unexpected type.

Describe a life-cycle event in React?

    The life-cycle of React is mount, update and unmount. In the mounting stage the constructor is run, and the component in rendered. Once the component is mounted componentDidMount is run. componentDidMount is where you want to fetch your data, or apply any event listeners. In the update stage if the component should be updated it is rendered again. After it is re-rendered, componentDidUpdate is run. componentDidUpdate is a good opportunity to compare your current state and props to the previous state and props. The last stage of the lifecycle is unmounting. componentWillUnmount is run, which is a good time to remove any event listeners to avoid a memory leak.

Explain the details of a Higher Order Component?

    An HOC is a functional component that takes in a component as an argument and returns an anonymous component that renders the component we passed in, but usually with added logic or properties from the HOC. This is a great way to share logic between components, or to conditionally render different components.

What are three different ways to style components in React? Explain some of the benefits of each.

    1. CSS/Preprocessor: Using CSS or a preprocessor is super flexible, and it'll be easier for other developers who want to use our app to change the styles.

    2. Library like reactstrap, or material ui: The components come styled for you, but it can be tricky to override those styles. You also have to consider the size of the library you want to use.

    3. Styled Components: You can render styled components without class names, and you can add properties to change them. You do have to import the library, and you still have to write the style components yourself, but it is flexible and neat.
