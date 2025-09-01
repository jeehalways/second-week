# TypeScript Callback Assignments

This repository contains TypeScript exercises focused on understanding and implementing callback functions. The assignments progress from foundational concepts to more challenging scenarios involving asynchronous operations and error handling.

## 🧰 Setup

1. Clone this repository
2. Navigate to the project folder and run:

```bash
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init
```

3. Create a `src` folder for your assignment files

## 📁 Project Structure

```
src/
├── index.ts
├── a01-hello-callback.ts
├── a02-delayed-greeting.ts
├── a03-math-callback.ts
├── a04-uppercase-callback.ts
├── a05-pizza-order.ts
├── a06-multiple-messages.ts
├── a07-download-simulation.ts
├── a08-success-error.ts
├── a09-math-operations.ts
└── a10-chained-callbacks.ts
```

## 🏃‍♂️ Running the Code

To run any assignment file:

```bash
npx ts-node src/a01-hello-callback.ts
```

Or compile and run:

```bash
npx tsc
node dist/a01-hello-callback.js
```

## 🧪 Assignments

### Foundational (1-5)

#### 1) Hello Callback
Write a function that takes a callback and calls it with 'Hello from callback!'.

**Learning Goal**: Basic callback function syntax and invocation.

#### 2) Delayed Greeting
Make a function called `sayHelloLater` that waits 2 seconds, then calls a callback with 'Hi, I am late!'.

**Learning Goal**: Asynchronous callbacks with `setTimeout`.

#### 3) Math Callback
Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback.

**Learning Goal**: Passing computed values to callbacks.

#### 4) Uppercase Callback
Write a function that takes a string and a callback. The callback should return the string in uppercase.

**Learning Goal**: Callbacks that transform data.

#### 5) Pizza Order
Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'.

**Learning Goal**: Simulating real-world asynchronous operations.

### Advanced (6-10)

#### 6) Multiple Messages
Make a function that takes a callback and calls it three times with different messages.

**Learning Goal**: Multiple callback invocations within a single function.

#### 7) Download Simulation
Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from \<URL\>'.

**Learning Goal**: Dynamic callback messages based on input parameters.

#### 8) Success and Error Callback
Make a function that takes two callbacks: one for success and one for error. Use `Math.random()` to decide which to call.

**Learning Goal**: Error handling patterns with callbacks.

#### 9) Math with Different Operations
Write one function that can do addition, subtraction, multiplication, and division. It should take two numbers, an operation string, and a callback.

**Learning Goal**: Complex callback scenarios with conditional logic.

#### 10) Chained Callbacks
Make three functions that each wait 1 second and then call the next callback, printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order.

**Learning Goal**: Sequential asynchronous operations and callback chaining.

## ✅ Submission Checklist

Before submitting your work, ensure:

- [ ] Code compiles and runs (no TypeScript errors)
- [ ] All console outputs match the expected messages
- [ ] No `any` types; use proper TypeScript annotations
- [ ] Functions are small, clear, and named well
- [ ] Comments explain what each callback does
- [ ] Each assignment is in its own file following the naming convention
- [ ] All files are properly structured in the `src` directory

## 🎯 Learning Objectives

By completing these assignments, you will:

- Understand callback function syntax and usage
- Learn to work with asynchronous operations using `setTimeout`
- Practice error handling with callback patterns
- Gain experience with function composition and chaining
- Develop skills in TypeScript function typing
- Build familiarity with common callback patterns in JavaScript/TypeScript

## 🔧 TypeScript Tips

- Use proper function type annotations: `(param: type) => returnType`
- Define callback types explicitly: `type CallbackType = (message: string) => void`
- Avoid using `any` - be specific about your types
- Use `setTimeout` for simulating asynchronous operations
- Remember that callbacks can be called multiple times or conditionally

## 📚 Resources

- [TypeScript Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [JavaScript Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

## 🤝 Contributing

Feel free to submit pull requests with:
- Improved solutions
- Additional test cases
- Better documentation
- Bug fixes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).