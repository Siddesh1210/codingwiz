// import Footer from "./Footer";
import CourseCard from "./CourseCard";
import Frontend_Img from '../Images/Frontend_img.jpg'
import Backend_Img from '../Images/Backend_img.jpg'
import DSA_C from '../Images/DataStructure_Img.webp'
import DSA_Java from '../Images/DSA_Java.jpg'
import App_dev from '../Images/App_dev.png'
import ML from '../Images/machine_learning.jpg'


// So in future if we need to add any new card we can just pass JSON Card data over here in Courses.js File

let Courses_list=[
    {
        img:Frontend_Img,
        title:'Full Stack Development [MERN]',
        price:"₹ 1499 Only",
        bestseller:"",
        date:'Starts from December 2023',
        time:'6:30 PM to 7:30 PM',
        desc:'Learn complete Full Stack Developement with 3+ live projects, Includes HTML5, CSS3, JavaScript, ReactJS, ExpressJS, NodeJS, MongoDB and host your project at free of cost!',
        oprice:'₹ 1499 Only',
        sprice:'₹ 5999',
        off:'75% off',
        btn:'Buy this Course',
        courseDuration:"8 weeks - 10 weeks",
        linkedinurl:'https://www.linkedin.com/in/vishal-vishwajeet',
        requirement:"No programming experience needed - We'll teach you everything you need to know",
        syllabus:[
            {
                title:"Introduction to course & Installation of Tools",
                description:"Basic introduction about overall flow of course , roadmap and installation of various tools like VSCode and other.",
                id:"headingOne",
                datatarget:"#collapseOne",
                arialcontrols:"collapseOne"
            },
            {
                title:"Week 1 : Introduction to Web Development and HTML",
                description:"Introduction to web development and its fundamentals, Understanding the structure and syntax of HTML, Working with HTML tags, attributes, and elements, Creating basic HTML pages, Adding headings, paragraphs, lists, links, and images to web pages, Understanding HTML forms and form validation",
                id:"headingTwo",
                datatarget:"#collapseTwo",
                arialcontrols:"collapseTwo"
            },
            {
                title:"Week 2 : CSS Fundamentals",
                description:"Introduction to CSS and its role in web development, CSS syntax and selectors, Working with CSS properties, values, and units, Styling text, backgrounds, and borders, Applying CSS layout techniques (box model, positioning, floats), Using CSS frameworks for rapid development, Creating responsive layouts with CSS media queries, Flexbox and CSS Grid for modern web design, Styling navigation menus, forms, and tables, Working with CSS transitions and animations ,Optimizing web pages for performance",
                id:"headingThree",
                datatarget:"#collapseThree",
                arialcontrols:"collapseThree"
            },
            {
                title:"Week 3 : Introduction to Tailwind CSS",
                description:"Introduction to Tailwind CSS and its utility-first approach, Setting up and configuring Tailwind CSS in a project, Using Tailwind CSS classes for styling elements, Customizing and Tailwind CSS utility classes, Building responsive designs with Tailwind CSS",
                id:"headingFour",
                datatarget:"#collapseFour",
                arialcontrols:"collapseFour"
            },
            {
                title:"Week 4 : JavaScript Fundamentals",
                description:"Introduction to JavaScript and its role in web development, JavaScript syntax, variables, data types, and operators, Control structures (conditional statements, loops), Functions, arrays and objects in JavaScript DOM manipulation and event handling with JavaScript",
                id:"headingFive",
                datatarget:"#collapseFive",
                arialcontrols:"collapseFive"
            },
            {
                title:"Responsive Food Application - Project 1 with free Deployment",
                description:"Creating an responsive food ordering application and hosting and deploying on vercel.",
                id:"headingSix",
                datatarget:"#collapseSix",
                arialcontrols:"collapseSix"
            },
            {
                title:"Week 5 : Introduction to ReactJS",
                description:"Introduction to React.js and its component-based architecture, Setting up a React.js development environment, Creating and rendering React components, Managing state and props in React.js, Handling events and user interactions in React.js",
                datatarget:"#collapseSeven",
                arialcontrols:"collapseSeven"
            },
            {
                title:"Week 6 : Advanced ReactJS Concepts",
                description:"State management with React hooks (useState, useEffect, Handling forms and form validation in React.js, Working with React Router for client-side routing, Consuming APIs and integrating external libraries in React.js, Optimizing React.js applications for performance",
                id:"headingEight",
                datatarget:"#collapseEight",
                arialcontrols:"collapseEight"
            },
            {
                title:"Week 7 : Building Dynamic Web Applications with ExpressJS and NodeJS",
                description:"Introduction to Node.js and Express.js framework, Setting up an Express.js application, Routing and handling HTTP requests in Express.js, Working with templates and views in Express.js, Handling form submissions and data validation",
                id:"headingNine",
                datatarget:"#collapseNine",
                arialcontrols:"collapseNine"
            },
            {
                title:"Week 8 : Database Integration with MongoDBt",
                description:"Introduction to MongoDB and NoSQL databases, Setting up MongoDB and connecting it to Express.js, Performing CRUD (Create, Read, Update, Delete) operations with MongoDB, Querying and manipulating data , in MongoDB, Implementing data validation and security measures",
                id:"headingTen",
                datatarget:"#collapseTen",
                arialcontrols:"collapseTen"
            },
            {
                title:"Week 9 : Project Development and Deployment",
                description:"Planning and designing a web application project, Implementing the project using the skills learned in previous weeks, Testing, debugging, and refining the web application, Deploying the application to a hosting platform, Finalizing the project and showcasing it as a portfolio piece",
                id:"headingEleven",
                datatarget:"#collapseEleven",
                arialcontrols:"collapseEleven"
            },
            {
                title:"Movie Booking Application and working with API - Project 2",
                description:"Developing a full fledge moving booking application and getting well versed with working with API ",
                id:"headingTwelve",
                datatarget:"#collapseTwelve",
                arialcontrols:"collapseTwelve"
            },
            {
                title:"News Application - Final Project",
                description:"Developing full fledge news application including frontend, backend and database. ",
                id:"headingTwenty",
                datatarget:"#collapseTwenty",
                arialcontrols:"collapseTwenty"
            },
            // {
            //     title:"Full fledge Registeration System - Project 3 with Firebase",
            //     description:"Making full fledge registeration page in connectivity with firebase as database. ",
            //     id:"headingThirteen",
            //     datatarget:"#collapseThirteen",
            //     arialcontrols:"collapseThirteen"
            // },
            // {
            //     title:"Looking what is Bootstrap and it Installation",
            //     description:"Introduction to bootstrap and connectivity of it to our html page. ",
            //     id:"headingFourteen",
            //     datatarget:"#collapseFourteen",
            //     arialcontrols:"collapseFourteen"
            // },
            // {
            //     title:"Bootstrap Grid , Breakpoint , Container , Rows and Columns",
            //     description:"Looking into structure of grid and seeing different screen breakdown , Type of Container , Rows and Columns. ",
            //     id:"headingFifteen",
            //     datatarget:"#collapseFifteen",
            //     arialcontrols:"collapseFifteen"
            // },
            // {
            //     title:"Bootstrap Tables , Form , Typography",
            //     description:"Bootstrap tables and tyoe of tables , Form and Inputs , Fonts styling using Bootstrap.",
            //     id:"headingSixteen",
            //     datatarget:"#collapseSixteen",
            //     arialcontrols:"collapseSixteen"
            // },
            // {
            //     title:"Bootstrap Component & Icons",
            //     description:"Different available components like Navbar , Carousel , Accordion , Modal, Cards , progess bar , spacing , colors and more.   ",
            //     id:"headingSeventeen",
            //     datatarget:"#collapseSeventeen",
            //     arialcontrols:"collapseSeventeen"
            // },
            // {
            //     title:"Cloning Netflix - Project 4",
            //     description:"Using Bootstrap we will be cloning netflix and host it on vercel.",
            //     id:"headingEighteen",
            //     datatarget:"#collapseEighteen",
            //     arialcontrols:"collapseEighteen"
            // },
            // {
            //     title:"Portfolio - Project 5",
            //     description:"Building Portfolio Projects using Bootstrap & hosting it on vercel.",
            //     id:"headingNineteen",
            //     datatarget:"#collapseNineteen",
            //     arialcontrols:"collapseNineteen"
            // }
        ]
    },
    {
        img:"https://tts.net.in/wp-content/uploads/2022/03/Python-01-2.png",
        title:'Python for Everyone : Zero to Hero',
        bestseller:"",
        price:'₹ 999 Only',
        date:'Starts from November 2023',
        time:'7:30 PM to 8:30 PM',
        desc:'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games!',
        oprice:'₹ 999 Only',
        sprice:'₹ 3999',
        off:'75% off',
        btn:'Buy this Course',
        linkedinurl:'https://www.linkedin.com/in/mohd-faizan-khawar-518135121',
        requirement:"Must be familiar with HTML , CSS and Javascript advance concepts ",
        courseDuration:"4 weeks - 6 weeks",
        syllabus:[
            {
                title:"Class 1 : Introduction to course",
                description:"Overview of Python and its features , Installing Python and setting up the development environment ,Writing your first Python program",
                id:"headingOne",
                datatarget:"#collapseOne",
                arialcontrols:"collapseOne"
            },
            {
                title:"Class 2 : Variables and Data Types",
                description:"Understanding variables and their types ,Working with numbers, strings, and boolean values, Type conversion and operations ,String and String Manipulation",
                id:"headingTwo",
                datatarget:"#collapseTwo",
                arialcontrols:"collapseTwo"
            },
            {
                title:"Class 3 : Type of Operators",
                description:"Arithmetic operators ,Assignment operators ,Comparison operators ,Logical operators ,Identity operators ,Membership operators",
                id:"headingThree",
                datatarget:"#collapseThree",
                arialcontrols:"collapseThree"
            },
            {
                title:"Class 4 : Control Flow Statement",
                description:"Conditional statements (if, else, elif) and practice program",
                id:"headingFour",
                datatarget:"#collapseFour",
                arialcontrols:"collapseFour"
            },
            {
                title:"Class 5 : Loops",
                description:"Using loops (for and while) for iteration , break and continue",
                id:"headingFive",
                datatarget:"#collapseFive",
                arialcontrols:"collapseFive"
            },
            {
                title:"Class 6 : Lists and Tuples",
                description:"Creating and accessing lists ,Modifying and manipulating lists ,Working with tuples and their immutability",
                id:"headingSix",
                datatarget:"#collapseSix",
                arialcontrols:"collapseSix"
            },
            {
                title:"Class 7 : Dictionaries and Sets",
                description:"Creating and accessing dictionaries ,Performing operations on dictionaries ,Using sets for unique elements and set operations",
                id:"headingSeven",
                datatarget:"#collapseSeven",
                arialcontrols:"collapseSeven"
            },
            {
                title:"Class 8 : Functions",
                description:"Understanding functions and their purpose ,Defining and calling functions ,Function parameters and return values",
                id:"headingEight",
                datatarget:"#collapseEight",
                arialcontrols:"collapseEight"
            },
            {
                title:"Class 9 : File Handling",
                description:"Reading from and writing to files ,Using file modes and file objects ,Handling exceptions in file operations",
                id:"headingEight2",
                datatarget:"#collapseEight2",
                arialcontrols:"collapseEight2"
            },

            {
                title:"Class 10 : Modules and Packages",
                description:"Understanding modules and their importance ,Importing and using modules in your code ,Organizing code into packages for better structure ,Exploring popular Python modules (e.g., datetime, math, random)",
                id:"headingNine",
                datatarget:"#collapseNine",
                arialcontrols:"collapseNine"
            },
            {
                title:"Class 11 : Object-Oriented Programming (OOP)",
                description:"Introduction to OOP concepts (classes, objects, attributes, methods) ,Defining classes and creating objects ,Inheritance",
                id:"headingTen",
                datatarget:"#collapseTen",
                arialcontrols:"collapseTen"
            },
            {
                title:"Class 12 : Error Handling and Exceptions",
                description:"Dealing with errors and exceptions ,Using try-except blocks for handling exceptions ,Working with multiple except clauses and finally block",
                id:"headingEleven",
                datatarget:"#collapseEleven",
                arialcontrols:"collapseEleven"
            },
            {
                title:"Class 13 : Introduction to Tkinter",
                description:"Overview of Tkinter and its features ,Setting up a Tkinter application ,Creating and configuring basic GUI elements (labels, buttons, entry fields)",
                id:"headingTwelve",
                datatarget:"#collapseTwelve",
                arialcontrols:"collapseTwelve"
            },
            {
                title:"Class 14 : Layout Management with Tkinter",
                description:"Understanding different layout managers (pack, grid, place), Organizing GUI elements using frames and containers, Creating responsive and dynamic layouts",
                id:"headingThirteen",
                datatarget:"#collapseThirteen",
                arialcontrols:"collapseThirteen"
            },
            {
                title:"Class 15 : Event Handling in Tkinter",
                description:"Handling user events (button clicks, keypress, mouse events) ,Binding events to functions and methods, Responding to user actions and updating the GUI",
                id:"headingFourteen",
                datatarget:"#collapseFourteen",
                arialcontrols:"collapseFourteen"
            },
            {
                title:"Class 16 : Building Interactive Project",
                description:"Creating full fledge Rock Paper Scissors Game",
                id:"headingFifteen",
                datatarget:"#collapseFifteen",
                arialcontrols:"collapseFifteen"
            },
            
        ]
    },
    {
        img:ML,
        title:'Machine Learning with Python',
        bestseller:"",
        price:'₹ 1499 Only',
        date:'Starts from November 2023',
        time:'7:30 PM to 8:30 PM',
        desc:'Deep dive into Machine Learning with Python, by learning about libraries like Numpy, Pandas, Matplotlib and building 3+ industry-level projects!',
        oprice:'₹ 1499 Only',
        sprice:'₹ 6999',
        off:'80% off',
        btn:'Buy this Course',
        courseDuration:"6 weeks - 8 weeks",
        linkedinurl:"https://www.linkedin.com/in/mohd-faizan-khawar-518135121",
        requirement:"No programming experience needed - We'll teach you everything you need to know",
        syllabus:[
            {
                title:"Introduction to course",
                description:"Basic course information and roadmap.Discussion of indepth syllabus and concepts for the overall course",
                id:"headingOne",
                datatarget:"#collapseOne",
                arialcontrols:"collapseOne"
            },
            {
                title:"Introduction to Python",
                description:"Installing Python and setting up the development environment Basic Input/Output operations. Data types and structures Data types, type casting, operators, strings and methods Understanding the basic syntax and data structures (lists, dictionaries, tuples, sets)",
                id:"headingTwo",
                datatarget:"#collapseTwo",
                arialcontrols:"collapseTwo"
            },
            {
                title:"Control structure , Functions and Modules",
                description:"If-else conditional statement , else-if ladder , while , do-while , for loop , Jump statement .Syntax for creating function , types of function and modules.",
                id:"headingThree",
                datatarget:"#collapseThree",
                arialcontrols:"collapseThree"
            },
            {
                title:"Numpy Library",
                description:"Introduction to Numpy - Creating arrays and matrices.Array indexing, slicing, and reshaping.Basic array mathematics operations",
                id:"headingFour",
                datatarget:"#collapseFour",
                arialcontrols:"collapseFour"
            },
            {
                title:"Pandas Library and Data Analysis using Pandas",
                description:"-Introduction to Pandas -Creating dataframes , Indexing and slicing dataframes.Manipulating dataframes (adding/deleting rows and columns)Grouping and aggregating data",
                id:"headingSix",
                datatarget:"#collapseSix",
                arialcontrols:"collapseSix"
            },
            {
                title:"Matplotlib Library",
                description:"Introduction to Matplotlib. Plotting line graphs, scatter plots, bar plots, and histograms. Customizing plots with labels, titles, and legends .Saving plots to image files",
                id:"headingSeven",
                datatarget:"#collapseSeven",
                arialcontrols:"collapseSeven"
            },
            {
                title:"Machine Learning Fundamentals",
                description:"How to get Datasets - Understanding the basics of machine learning.Types of machine learning algorithms (supervised, unsupervised, reinforcement learning), Overfitting and underfitting",
                id:"headingEight",
                datatarget:"#collapseEight",
                arialcontrols:"collapseEight"
            },
            {
                title:"Data Preprocessing",
                description:"Getting the dataset.Importing libraries , Importing datasets , Finding Missing Data ,Encoding Categorical Data ,Splitting dataset into training and test set ,Feature scaling.",
                id:"headingNine",
                datatarget:"#collapseNine",
                arialcontrols:"collapseNine"
            },
            {
                title:"Linear Regression",
                description:"Introduction to linear regression .Building a simple linear regression model in Python ,Evaluating model performance",
                id:"headingTen",
                datatarget:"#collapseTen",
                arialcontrols:"collapseTen"
            },
            {
                title:"House Price Prediction - Project 1",
                description:"Building an house price prediction system",
                id:"headingTen2",
                datatarget:"#collapseTen2",
                arialcontrols:"collapseTen2"
            },
            {
                title:"Logistic Regression",
                description:"Introduction to logistic regression .Building a logistic regression model in Python , Evaluating model performance",
                id:"headingEleven",
                datatarget:"#collapseEleven",
                arialcontrols:"collapseEleven"
            },
            {
                title:"Decision Trees",
                description:"Introduction to decision trees .Building a decision tree model in Python",
                id:"headingTwelve",
                datatarget:"#collapseTwelve",
                arialcontrols:"collapseTwelve"
            },
            {
                title:"Cancer Classification - Project 2",
                description:"Building full-fledge cancer classification system",
                id:"headingThirteen",
                datatarget:"#collapseThirteen",
                arialcontrols:"collapseThirteen"
            },
            {
                title:"K-Nearest Neighbors",
                description:"Introduction to K-Nearest Neighbors.Building a K-Nearest Neighbors model in Python , Evaluating model performance",
                id:"headingFifteen",
                datatarget:"#collapseFifteen",
                arialcontrols:"collapseFifteen"
            },
            {
                title:"Support Vector Machines",
                description:"Introduction to Support Vector Machines .Building a Support Vector Machine model in Python , Evaluating model performance",
                id:"headingSixteen",
                datatarget:"#collapseSixteen",
                arialcontrols:"collapseSixteen"
            },
            {
                title:"Unsupervised Learning",
                description:"Introduction to Clustering - KMeans Clustering .Building a KMeans Clustering model in Python , Evaluating model performance",
                id:"headingSeventeen",
                datatarget:"#collapseSeventeen",
                arialcontrols:"collapseSeventeen"
            },
            {
                title:"Stock Price Prediction - Final Project",
                description:"Implementing a complete machine learning project. Preparing data for analysis , Training a model ,Making predictions and evaluating model performance",
                id:"headingEighteen",
                datatarget:"#collapseEighteen",
                arialcontrols:"collapseEighteen"
            }
            
        ]
    },
    {
        img:App_dev,
        title:'App Development with Flutter',
        bestseller:"Coming Soon",
        price:'₹ 999 Only',
        date:'Starts from December 2023',
        time:'8:00 PM to 9:30 PM',
        desc:'App development | Boost mobile app development skills with android studio using Dart and Flutter by building 3 projects',
        oprice:'₹ 1499 Only',
        sprice:'₹ 4999',
        off:'80% off',
        btn:'Coming Soon!',
        courseDuration:"6 weeks - 8 weeks",
        linkedinurl:'https://www.linkedin.com/in/utkarsh-bhardwaj-6a1034162',
        requirement:"No programming experience needed - We'll teach you everything you need to know",
        syllabus:[
            {
                title:"Introduction to course",
                description:"Basic introduction about the course and discussion of roadmap.Understanidng what is dart , flutter and installation of required tool.",
                id:"headingOne",
                datatarget:"#collapseOne",
                arialcontrols:"collapseOne"
            },
            {
                title:"Introduction to Dart",
                description:"Introduction to dart  -Features, Basic syntax, DartPad, Use in Flutter, HELLO WORLD Program.",
                id:"headingTwo",
                datatarget:"#collapseTwo",
                arialcontrols:"collapseTwo"
            },
            {
                title:"Dart Datatype and Collection",
                description:"Dart Data types - constants, numbers, string.Collections- Lists, Sets, Map, Enum, Queue",
                id:"headingFour",
                datatarget:"#collapseFour",
                arialcontrols:"collapseFour"
            },
            {
                title:"FLow Control",
                description:"Flow Control- Asserts,IF-Else, Switch, Loops.",
                id:"headingFive",
                datatarget:"#collapseFive",
                arialcontrols:"collapseFive"
            },
            {
                title:"Dart Functions",
                description:"Dart Functions - Anonymous Functions,Main(), Recursion",
                id:"headingSix",
                datatarget:"#collapseSix",
                arialcontrols:"collapseSix"
            },
            {
                title:"Object Oriented",
                description:"Object-Oriented- Classes-Objects, Keywords, Methods, Interfaces.",
                id:"headingSeven",
                datatarget:"#collapseSeven",
                arialcontrols:"collapseSeven"
            },
            {
                title:"Adding Animation - Shop App",
                description:"Module Introduction ,Animations From Scratch (Completely Manually Controlled) ,Using the AnimatedBuilder Widget ,Working with the AnimatedContainer ,More Built-in Animation & Transition Widgets ,Fading Loaded Images In (And Showing a Placeholder) ,Adding a Hero Transition ,Working with Slivers ,Practice: Animating Order Boxes ,A Fix for the Latest Version of Flutter ,Implementing Custom Route Transitions ,Wrap Up ,Useful Resources & Links",
                id:"headingEight",
                datatarget:"#collapseEight",
                arialcontrols:"collapseEight"
            },
            {
                title:"Error Handling",
                description:"Error handling- Exceptions, try-catch, throw.",
                id:"headingNine",
                datatarget:"#collapseNine",
                arialcontrols:"collapseNine"
            },
            {
                title:"Introduction to Flutter",
                description:"Introduction to flutter- environment setup, architecture, IDE’s.",
                id:"headingTen",
                datatarget:"#collapseTen",
                arialcontrols:"collapseTen"
            },
            {
                title:"FLutter Widgets",
                description:"Flutter Widgets- Visible and invisible, Stateless and Stateful Widget.",
                id:"headingEleven",
                datatarget:"#collapseEleven",
                arialcontrols:"collapseEleven"
            },
            {
                title:"BMI Calculator - Project 1",
                description:"Building a BMI Calculator application using all the concepts that we have learnt so far.",
                id:"headingTwelve",
                datatarget:"#collapseTwelve",
                arialcontrols:"collapseTwelve"
            },
            ,
            {
                title:"Flutter Layouts",
                description:"Flutter Layouts- types of layouts, Layout widgets.",
                id:"headingThirteen",
                datatarget:"#collapseThirteen",
                arialcontrols:"collapseThirteen"
            },
            {
                title:"State Management",
                description:"State management- what is state?, types of state, app life cycle",
                id:"headingFourteen",
                datatarget:"#collapseFourteen",
                arialcontrols:"collapseFourteen"
            },
            {
                title:"Navigation and Routing",
                description:"Navigation and Routing- Routes, Flutter navigation.",
                id:"headingFifteen",
                datatarget:"#collapseFifteen",
                arialcontrols:"collapseFifteen"
            },
            {
                title:"Portfolio - Project 2",
                description:"Building a Portfolio application using all the concepts that we have learnt so far.",
                id:"headingSixteen",
                datatarget:"#collapseSixteen",
                arialcontrols:"collapseSixteen"
            },
            {
                title:"Restful API and Database",
                description:"Restful API and database- API integration, database, local storage.",
                id:"headingSeventeen",
                datatarget:"#collapseSeventeen",
                arialcontrols:"collapseSeventeen"
            },
            {
                title:"Grocery Ordering Application - Project 3",
                description:"Building a grocery ordering application using all the concepts that we have learnt so far.",
                id:"headingEighteen",
                datatarget:"#collapseEighteen",
                arialcontrols:"collapseEighteen"
            }
        ]
    },
    {
        img:DSA_Java,
        title:'Data Structures and Algorithms in Java',
        bestseller:"Coming Soon",
        price:'₹ 1999 Only',
        date:'Starts from December 2023',
        time:'7:00 PM to 9:00 PM',
        desc:'Learn complete Data Structure and Algorithms with 50+ live problems solving, Included all Linear and Non Linear Data Structures!',
        oprice:'₹ 1999 Only',
        sprice:'₹ 4999',
        off:'60% off',
        btn:'Coming Soon!',
        courseDuration:"8 weeks - 10 weeks",
        linkedinurl:'https://www.linkedin.com/in/nishan-banga-2154531b4',
        requirement:"No programming experience needed - We'll teach you everything you need to know",
        syllabus:[
            {
                title:"Introduction to course",
                description:"Basic introduction to course and discussion of roadmap.What is DSA and Importance of learning of DSA.",
                id:"headingOne",
                datatarget:"#collapseOne",
                arialcontrols:"collapseOne"
            },
            {
                title:"Introduction to Java and basic of Java",
                description:" what are variable , Datatypes , Operators ,Conditional Statements ,Iteration Statements(Loops) ,Break & Continue",
                id:"headingTwo",
                datatarget:"#collapseTwo",
                arialcontrols:"collapseTwo"
            },
            {
                title:"Functions , String ",
                description:"Basic syntax of creating functions , string and their implementation.",
                id:"headingThree",
                datatarget:"#collapseThree",
                arialcontrols:"collapseThree"
            },
            {
                title:"Object Oriented Programming",
                description:"Introduction to oops concepts , creating objects and other property of oops.",
                id:"headingFour",
                datatarget:"#collapseFour",
                arialcontrols:"collapseFour"
            },
            {
                title:"1D Array and 2D Array ",
                description:"Introduction to Array , Operation on Array Sum of Element ,Max Element Count , Even Element Pairs With Sum , Introduction to 2D Array Declaration & Initialisation Matrix , Addition Matrix boundary ,Traversal Transpose of matrix , Spiral Traversal of Matrix ,Leetcode Live Problem Solving",
                id:"headingFive",
                datatarget:"#collapseFive",
                arialcontrols:"collapseFive"
            },
            {
                title:"Time & Space Complexity ",
                description:"Calculating time and space complexity for different problems.",
                id:"headingSix",
                datatarget:"#collapseSix",
                arialcontrols:"collapseSix"
            },
            {
                title:"Searching and Sorting",
                description:"Introduction to binary search, Search Element, First Index Occurrence, Last index Occurrence, Count Frequency, Square Root, Search in infinite size, Search in Rotated Sorted Array, Leetcode Live problem solving",
                id:"headingSeven",
                datatarget:"#collapseSeven",
                arialcontrols:"collapseSeven"
            },
            {
                title:"Bit Manipulation",
                description:"Bitwise Operators in CPP , Check if Kth bits Sets or not , Count set bits , Power of Two , One & Two odd occuring , Leetcode Live Problem Solving",
                id:"headingEight",
                datatarget:"#collapseEight",
                arialcontrols:"collapseEight"
            },
            {
                title:"Recurrsion and Backtracking",
                description:"Introduction to Recursion , Factorial , Fibonacci Series , Print 1 to N using Recursion , Print N to 1 Using Recursion ,Print Array Elements ,Backtracking Introduction , live problem solving on leetcode",
                id:"headingNine",
                datatarget:"#collapseNine",
                arialcontrols:"collapseNine"
            },
            {
                title:" Linked List",
                description:"Introduction to Linked list , Insert first , Insert last , Insert at , Remove at , Length of Linked list , Print the linked list , Search in Linked list , Middle of linked list , Leetcode Live problem Solving",
                id:"headingTen",
                datatarget:"#collapseTen",
                arialcontrols:"collapseTen"
            },
            {
                title:"Stack - Linear Data Structure",
                description:"Introduction to Stacks , Operation on stack , Reverse a String , Reverse a number , Balanced parenthesis , Leetcode Live problem solving",
                id:"headingTwelve",
                datatarget:"#collapseTwelve",
                arialcontrols:"collapseTwelve"
            },
            {
                title:"Queue - Linear Data Structure",
                description:"Introduction to Queue , Operation on Queues , Printing the elements , Leetcode Live problem solving",
                id:"headingThirteen",
                datatarget:"#collapseThirteen",
                arialcontrols:"collapseThirteen"
            },
            {
                title:"Binary Tree",
                description:"Introduction to binary tree , Tree Traversal , Height of binary tree , Level order Traversal , Maximum in binary tree , Print left view of binary Tree , Maximum width of binary tree , Diameter of binary tree , LCA of binary tree , Leetcode Live problem solving",
                id:"headingFourteen",
                datatarget:"#collapseFourteen",
                arialcontrols:"collapseFourteen"
            },
            {
                title:"Binary Search Tree",
                description:"Introduction to BST , Search in BST , Insert in BST , Deletion in BST , Floor & Ceil in BST , AVL tree ,Leetcode Live problem solving",
                id:"headingFifteen",
                datatarget:"#collapseFifteen",
                arialcontrols:"collapseFifteen"
            },
            {
                title:"Heap",
                description:"Introduction to Heap , Function on Priority Queue , K largest Element , Profit maximization , Leetcode Live problem solving ",
                id:"headingSixteen",
                datatarget:"#collapseSixteen",
                arialcontrols:"collapseSixteen"
            },
            {
                title:"Graph",
                description:"Introduction to Graph , Graph Representation , Breadth first Search (BFS) , Depth First Search (DFS) , Shortest path in unweighted graph , Detect cycle , Topological Sorting , Different Algorithms in graph , Leetcode Live problem solving",
                id:"headingSeventeen",
                datatarget:"#collapseSeventeen",
                arialcontrols:"collapseSeventeen"
            },
            {
                title:"Dynamic Programming",
                description:"Introduction to Dynamic Programming , Climbing Stairs , Fibonacci Number , Min Cost Climbing Stairs , House Robber , Nth tribonacci Problem , 0-1 knapsack , Target sum , Best time to buy & Sell stock , Jump game , Leetcode Live problem solving",
                id:"headingEighteen",
                datatarget:"#collapseEighteen",
                arialcontrols:"collapseEighteen"
            }
        ]
    },
    {
        img:DSA_C,
        title:'Data Structures and Algorithms in C++',
        price:'₹ 1999 Only',
        bestseller:"Coming Soon",
        date:'Starts from December 2023',
        time:'7:00 PM to 9:00 PM',
        desc:'Learn complete Data Structure and Algorithms with 50+ live problems solving, Included all Linear and Non Linear Data Structures!',
        oprice:'₹ 1999 Only',
        sprice:'₹ 4999',
        off:'60% off',
        btn:'Coming Soon!',
        courseDuration:"8 weeks - 10 weeks",
        linkedinurl:'https://www.linkedin.com/in/utsavbarnwal',
        requirement:"No programming experience needed - We'll teach you everything you need to know",
        syllabus:[
            {
                title:"Introduction to course",
                description:"Basic introduction to course and discussion of roadmap.What is DSA and Importance of learning of DSA.",
                id:"headingOne",
                datatarget:"#collapseOne",
                arialcontrols:"collapseOne"
            },
            {
                title:"Introduction to C++ and basic of C++",
                description:" what are variable , Datatypes , Operators ,Conditional Statements ,Iteration Statements(Loops) ,Break & Continue",
                id:"headingTwo",
                datatarget:"#collapseTwo",
                arialcontrols:"collapseTwo"
            },
            {
                title:"Functions , Pointer , String , Structure and Union ",
                description:"Basic syntax of creating functions , pointer , string , structure and union and their implementation.",
                id:"headingThree",
                datatarget:"#collapseThree",
                arialcontrols:"collapseThree"
            },
            {
                title:"Object Oriented Programming and STL",
                description:"Introduction to oops concepts , creating objects and other property of oops.And looking into Standard Template Library",
                id:"headingFour",
                datatarget:"#collapseFour",
                arialcontrols:"collapseFour"
            },
            {
                title:"1D Array and 2D Array ",
                description:"Introduction to Array , Operation on Array Sum of Element ,Max Element Count , Even Element Pairs With Sum , Introduction to 2D Array Declaration & Initialisation Matrix , Addition Matrix boundary ,Traversal Transpose of matrix , Spiral Traversal of Matrix ,Leetcode Live Problem Solving",
                id:"headingFive",
                datatarget:"#collapseFive",
                arialcontrols:"collapseFive"
            },
            {
                title:"Time & Space Complexity ",
                description:"Calculating time and space complexity for different problems.",
                id:"headingSix",
                datatarget:"#collapseSix",
                arialcontrols:"collapseSix"
            },
            {
                title:"Searching and Sorting",
                description:"Introduction to binary search, Search Element, First Index Occurrence, Last index Occurrence, Count Frequency, Square Root, Search in infinite size, Search in Rotated Sorted Array, Leetcode Live problem solving",
                id:"headingSeven",
                datatarget:"#collapseSeven",
                arialcontrols:"collapseSeven"
            },
            {
                title:"Bit Manipulation",
                description:"Bitwise Operators in CPP , Check if Kth bits Sets or not , Count set bits , Power of Two , One & Two odd occuring , Leetcode Live Problem Solving",
                id:"headingEight",
                datatarget:"#collapseEight",
                arialcontrols:"collapseEight"
            },
            {
                title:"Recurrsion and Backtracking",
                description:"Introduction to Recursion , Factorial , Fibonacci Series , Print 1 to N using Recursion , Print N to 1 Using Recursion ,Print Array Elements ,Backtracking Introduction , live problem solving on leetcode",
                id:"headingNine",
                datatarget:"#collapseNine",
                arialcontrols:"collapseNine"
            },
            {
                title:" Linked List",
                description:"Introduction to Linked list , Insert first , Insert last , Insert at , Remove at , Length of Linked list , Print the linked list , Search in Linked list , Middle of linked list , Leetcode Live problem Solving",
                id:"headingTen",
                datatarget:"#collapseTen",
                arialcontrols:"collapseTen"
            },
            {
                title:"Stack - Linear Data Structure",
                description:"Introduction to Stacks , Operation on stack , Reverse a String , Reverse a number , Balanced parenthesis , Leetcode Live problem solving",
                id:"headingTwelve",
                datatarget:"#collapseTwelve",
                arialcontrols:"collapseTwelve"
            },
            {
                title:"Queue - Linear Data Structure",
                description:"Introduction to Queue , Operation on Queues , Printing the elements , Leetcode Live problem solving",
                id:"headingThirteen",
                datatarget:"#collapseThirteen",
                arialcontrols:"collapseThirteen"
            },
            {
                title:"Binary Tree",
                description:"Introduction to binary tree , Tree Traversal , Height of binary tree , Level order Traversal , Maximum in binary tree , Print left view of binary Tree , Maximum width of binary tree , Diameter of binary tree , LCA of binary tree , Leetcode Live problem solving",
                id:"headingFourteen",
                datatarget:"#collapseFourteen",
                arialcontrols:"collapseFourteen"
            },
            {
                title:"Binary Search Tree",
                description:"Introduction to BST , Search in BST , Insert in BST , Deletion in BST , Floor & Ceil in BST , AVL tree ,Red Black Tree ,Leetcode Live problem solving",
                id:"headingFifteen",
                datatarget:"#collapseFifteen",
                arialcontrols:"collapseFifteen"
            },
            {
                title:"Heap",
                description:"Introduction to Heap , Function on Priority Queue , K largest Element , Profit maximization , Leetcode Live problem solving ",
                id:"headingSixteen",
                datatarget:"#collapseSixteen",
                arialcontrols:"collapseSixteen"
            },
            {
                title:"Graph",
                description:"Introduction to Graph , Graph Representation , Breadth first Search (BFS) , Depth First Search (DFS) , Shortest path in unweighted graph , Detect cycle , Topological Sorting , Different Algorithms in graph , Leetcode Live problem solving",
                id:"headingSeventeen",
                datatarget:"#collapseSeventeen",
                arialcontrols:"collapseSeventeen"
            },
            {
                title:"Dynamic Programming",
                description:"Introduction to Dynamic Programming , Climbing Stairs , Fibonacci Number , Min Cost Climbing Stairs , House Robber , Nth tribonacci Problem , 0-1 knapsack , Target sum , Best time to buy & Sell stock , Jump game , Leetcode Live problem solving",
                id:"headingEighteen",
                datatarget:"#collapseEighteen",
                arialcontrols:"collapseEighteen"
            }
        ]
    }
    // So in future if we need to add any new card we can just pass JSON Card data over here in Courses.js File
]

function Courses()
{
    return(
        <div className="container-fluid pt-3">
            <div className="row justify-content-evenly">
            <div className='col-md-12 text-center'>
                <h2 className="fw-bold fs-1">Popular Courses</h2>
                <p className="fs-5 fw-lighter mb-1">Our key courses</p>
            </div>
        </div>

        <div className="row justify-content-evenly mb-4">
            {
            Courses_list.map((x)=>
            {
                return(
                    <CourseCard img={x.img} title={x.title} price={x.price} date={x.date} time={x.time} desc={x.desc} oprice={x.oprice} sprice={x.sprice} syllabus={x.syllabus} off={x.off} btn={x.btn} require={x.requirement} coursedur={x.courseDuration} linkin={x.linkedinurl} bestsell={x.bestseller}/>
                )
            })
            }

        </div>
        {/* <Footer/> */}
        </div>
    )
}

export default Courses;