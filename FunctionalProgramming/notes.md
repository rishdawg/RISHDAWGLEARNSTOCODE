# Functional Programming Notes

 Functional Programming is a way to write your code that enables the developer to write code that is well-structured that is easy to understand, debug, reuse, maintain and scale. The concept is that we can break down anything no matter how complex into smalled pieces so they are more reusable and easier to maintain.

 Normally Declarative rather than imperative in nature.
 Declarative: It shows the intent of what you are trying to accomplish
 Imperative: It shows how you are going about solving it. More of a step by step

 ## 4 rules of functional programming
    1. Pure Functions: try to make a function predictable, if a certain input is going in ther is only one output that will be       returned, no dependecies on anything besides the input
    2. Referential Transparency: check if the function can be replaced with its value without changing the program's behavior
    3. Immutable Data: Data is not changed. Rather you clone it make a copy of it somewhere
    4. First Class Entities: support passing functions as arguments to other functions.