import React, { useState } from "react";
import { Card, CardContent } from "/components/ui/card";
import { Button } from "/components/ui/button";
import { Checkbox } from "/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "/components/ui/dialog";

const topics = [
  {
    title: "Introduction to Java",
    percentage: 5,
    challenges: [
      "What is Java? Explain its features.",
      "Why is Java platform-independent?",
      "What is the difference between JDK, JRE, and JVM illustrate in detail?"
    ],
    subtopics: [
      "Why you must learn Java",
      "What is a Programming Language",
      "What is an Algorithm",
      "What is Syntax",
      "History of Java",
      "Magic of Byte Code",
      "How Java Changed the Internet",
      "Java Buzzwords",
      "Object Oriented Programming"
    ]
  },
  {
    title: "Java Basics",
    percentage: 10,
    challenges: [
      "Write a program to print 'Hello World' in Java.",
      "Explain the structure of a Java class.",
      "What is the significance of the 'main' method?"
    ],
    subtopics: [
      "Installing JDK",
      "First Class using Text Editor",
      "Compiling and Running",
      "Anatomy of a Class",
      "File Extensions",
      "JDK vs JVM vs JRE",
      "Showing Output",
      "Importance of the main method",
      "Installing IDE (Intellij Idea)",
      "Project Structure"
    ]
  },
  {
    title: "Data Types, Variables & Input",
    percentage: 10,
    challenges: [
      "Write a program to demonstrate type casting.",
      "Explain the difference between primitive and reference data types.",
      "Write a program to take user input and display it."
    ],
    subtopics: [
      "Variables",
      "Data Types",
      "Naming Conventions",
      "Literals",
      "Keywords",
      "Escape Sequences",
      "User Input",
      "Type Conversion and Casting"
    ]
  },
  {
    title: "Operators, If-Else, Number System",
    percentage: 10,
    challenges: [
      "Write a program to check if a number is even or odd.",
      "Explain logical and relational operators with examples.",
      "Convert a decimal number to binary and vice versa."
    ],
    subtopics: [
      "Assignment Operator",
      "Arithmetic Operators",
      "Order of Operation",
      "Shorthand Operators",
      "Unary Operators",
      "If-else",
      "Relational Operators",
      "Logical Operators",
      "Operator Precedence",
      "Intro to Number System",
      "Intro to Bitwise Operators"
    ]
  },
  {
    title: "Loops, Methods & Arrays",
    percentage: 15,
    challenges: [
      "Write a program to print the Fibonacci series using a loop.",
      "Explain the difference between while and do-while loops.",
      "Write a program to find the maximum element in an array."
    ],
    subtopics: [
      "Comments",
      "While Loop",
      "Methods",
      "Return statement",
      "Arguments",
      "Arrays",
      "2D Arrays"
    ]
  },
  {
    title: "Classes & Objects",
    percentage: 15,
    challenges: [
      "Create a class 'Book' with attributes title, author, and price.",
      "What is the difference between instance and static variables?",
      "Explain the concept of constructors with an example."
    ],
    subtopics: [
      "Process vs Object Oriented",
      "Instance Variables and Methods",
      "Declaring and Using Objects",
      "Class vs Object",
      "This & Static Keyword",
      "Constructors & Code Blocks",
      "Stack vs Heap Memory",
      "Primitive vs Reference Types",
      "Variable Scopes",
      "Garbage Collection & Finalize"
    ]
  },
  {
    title: "Control Statements, Math & Strings",
    percentage: 10,
    challenges: [
      "Write a program to reverse a string.",
      "Explain the switch-case statement with an example.",
      "Write a program to calculate the area of a circle using Math.PI."
    ],
    subtopics: [
      "Ternary operator",
      "Switch",
      "Loops (Do-while, For, For each)",
      "Using break & continue",
      "Recursion",
      "Random Numbers & Math class",
      "Don’t Learn Syntax",
      "toString Method",
      "String class",
      "StringBuffer vs StringBuilder",
      "Final keyword"
    ]
  },
  {
    title: "Encapsulation & Inheritance",
    percentage: 10,
    challenges: [
      "Create a class with private fields and public getters/setters.",
      "Explain the types of inheritance in Java.",
      "Write a program to demonstrate method overriding."
    ],
    subtopics: [
      "Intro to OOPs Principle",
      "What is Encapsulation",
      "Import & Packages",
      "Access Modifiers",
      "Getter and Setter",
      "What is Inheritance",
      "Types of Inheritance",
      "Object class",
      "Equals and Hash Code",
      "Nested and Inner Classes"
    ]
  },
  {
    title: "Abstraction & Polymorphism",
    percentage: 10,
    challenges: [
      "Create an abstract class 'Shape' with a method calculateArea().",
      "Explain method overloading and overriding with examples.",
      "Write a program to demonstrate upcasting and downcasting."
    ],
    subtopics: [
      "What is Abstraction",
      "Abstract Keyword",
      "Interfaces",
      "What is Polymorphism",
      "References and Objects",
      "Method / Constructor Overloading",
      "Super Keyword",
      "Method / Constructor Overriding",
      "Final keyword revisited",
      "Pass by Value vs Pass by reference"
    ]
  },
  {
    title: "Exception & File Handling",
    percentage: 5,
    challenges: [
      "Write a program to handle ArrayIndexOutOfBoundsException.",
      "Explain the use of try-catch-finally blocks.",
      "Write a program to read from and write to a file."
    ],
    subtopics: [
      "What is an Exception",
      "Try-Catch",
      "Types of Exception",
      "Throw and Throws",
      "Finally Block",
      "Custom Exceptions",
      "FileWriter class",
      "FileReader class"
    ]
  },
  {
    title: "Collections & Generics",
    percentage: 5,
    challenges: [
      "Write a program to demonstrate the use of ArrayList.",
      "Explain the difference between HashMap and TreeMap.",
      "Write a program to sort a list using Collections.sort()."
    ],
    subtopics: [
      "Variable Arguments",
      "Wrapper Classes & Autoboxing",
      "Collections Library",
      "List Interface",
      "Queue Interface",
      "Set Interface",
      "Collections Class",
      "Map Interface",
      "Enums",
      "Generics & Diamond Operators"
    ]
  },
  {
    title: "Multithreading & Executor Service",
    percentage: 3,
    challenges: [
      "Create a program to demonstrate thread creation using Runnable.",
      "Explain the lifecycle of a thread in Java.",
      "Write a program using ExecutorService to manage threads."
    ],
    subtopics: [
      "Intro to Multi-threading",
      "Creating a Thread",
      "States of a Thread",
      "Thread Priority",
      "Join Method",
      "Synchronize keyword",
      "Thread Communication",
      "Intro to Executor Service",
      "Multiple Threads with Executor",
      "Returning Futures"
    ]
  },
  {
    title: "Functional Programming",
    percentage: 2,
    challenges: [
      "Write a program using a lambda expression to filter a list.",
      "Explain the concept of streams in Java.",
      "Write a program to demonstrate the use of Optional class."
    ],
    subtopics: [
      "What is Functional Programming",
      "Lambda Expression",
      "What is a Stream",
      "Filtering & Reducing",
      "Functional Interfaces",
      "Method References",
      "Functional vs Structural Programming",
      "Optional Class",
      "Intermediate vs Terminal Operations",
      "Max, Min, Collect to List",
      "Sort, Distinct, Map"
    ]
  }
];

const JavaRevisionPlanner = () => {
  const [progress, setProgress] = useState(
    topics.map(() => false)
  );
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleProgress = (index) => {
    setProgress((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const resetProgress = () => {
    setProgress(topics.map(() => false));
  };

  const openDialog = (topic) => {
    setSelectedTopic(topic);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedTopic(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Java Revision Planner</h1>
      <p className="mb-6">Track your daily progress as you revise Java topics.</p>
      <div className="grid gap-4">
        {topics.map((topic, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  checked={progress[index]}
                  onCheckedChange={() => toggleProgress(index)}
                  className="mr-4"
                />
                <div>
                  <CardContent className="font-bold">{topic.title}</CardContent>
                  <p className="text-sm text-gray-500">{topic.percentage}% of syllabus</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600">View Subtopics</summary>
                    <ul className="list-disc pl-6">
                      {topic.subtopics.map((subtopic, i) => (
                        <li key={i}>{subtopic}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
              <Button onClick={() => openDialog(topic)}>View Challenges</Button>
            </div>
          </Card>
        ))}
      </div>
      <Button onClick={resetProgress} className="mt-6">
        Reset Progress
      </Button>

      {selectedTopic && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedTopic.title} Challenges</DialogTitle>
            </DialogHeader>
            <ul className="list-disc pl-6">
              {selectedTopic.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <Button onClick={closeDialog} className="mt-4">
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default JavaRevisionPlanner;
