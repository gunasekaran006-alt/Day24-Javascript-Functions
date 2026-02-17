# JavaScript Functions Masterclass 🚀

This repository contains practical examples and explanations of JavaScript functions, ranging from basic syntax to advanced functional programming patterns.

## 📚 What's Inside?

I have covered the following concepts in this practice session:

*   **Basic Function Declaration:** Understanding `function` keyword, naming, and execution.
*   **Conditional Logic:** Implementing `if-else` statements inside functions.
*   **Parameters & Arguments:** Passing dynamic data into functions for flexibility.
*   **Return Statements:** Learning how to output values from functions for further use.
*   **Real-world Logic:** A student grade calculator example demonstrating practical application.
*   **Nested Functions:** Understanding scope and how functions can exist inside other functions.
*   **Function Currying:** An advanced interview-centric pattern used for specialized authentication logic.

## 🛠️ How to Use
1. Clone the repository.
2. Open `index.html` in your browser.
3. Check the **Console** in Developer Tools (F12) to see the outputs.

## 💻 Code Snippet Example: Currying
```javascript
function authentication(username){
    return function(password){
        // Logic for secure access
    }
};