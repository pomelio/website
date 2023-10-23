---
subject: Wallaby programming language
=--

# Wallaby programming language

- The Wallaby programming language is a functional language. When designing Wallaby, the language aimed to achieve the following goals:

- Concise syntax with strong expressive power. Wallaby strives to express clear, precise, and powerful purposes with minimal lines of code. For example, it incorporates features like object spread (similar to ES6's object spread), coroutines, block scope, defer statements, tuple objects, and destructuring assignment.

- I/O optimization. Wallaby language doesn't include keywords like async and await, but any Wallaby API does not block I/O, and there's no need to annotate calls to these APIs with await. Calling these APIs is indistinguishable from calling regular functions. This approach significantly reduces the learning curve and programming complexity for developers.

- Extensibility. The Wallaby runtime is easily extensible. Users are encouraged to suggest new features, and the development team will consider and add appropriate extensions to meet these requirements.