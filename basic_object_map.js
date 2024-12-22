const originalLog = console.log;
console.log = function () { };
console.log = originalLog;
console.log = function () { };

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) { };

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) { };

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) { };

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) { };

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) { };

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) { };

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) { };
// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) { };

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) { };

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) { };

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) { };

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) { };

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) { };

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) { };

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) { };

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (objects) { };

// calculate ranks (1-based, descending) for scores in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [2, 1, 3]
const calculateRanks = function (objects) { };

// normalize scores based on a curve: first find the max score, then subtract the mean, and scale the results to a range of 0-100 in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [60, 100, 80]
// Steps: Find max score, calculate mean, normalize each score.
const normalizeWithCurve = function (objects) { };

// group students by their grades: first categorize them into A, B, C, and so on, then map each student to their respective category in [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }] => [['Alice', 'B'], ['Bob', 'A']]
// Steps: Categorize grades, then group students by category.
const groupByGrade = function (objects) { };

// map a list of students' grades in multiple subjects to their average score, and then sort the averages in descending order in [{ name: "Alice", grades: [80, 90, 85] }, { name: "Bob", grades: [70, 75, 80] }] => [{ name: "Alice", avg: 85 }, { name: "Bob", avg: 75 }]
// Steps: Calculate average for each student, then sort by average score.
const sortStudentsByAverage = function (students) { };

// given an array of objects representing sales with date and amount, calculate the total sales for each month and return them as an array of arrays like [[month, total], ...] in [{ date: "2024-01-15", amount: 100 }, { date: "2024-02-10", amount: 150 }, { date: "2024-01-25", amount: 200 }] => [["2024-01", 300], ["2024-02", 150]]
// Steps: Group by month, sum the sales for each month.
const totalSalesByMonth = function (sales) { };

// map each employee's department to their total salary, and then return an array of objects with department name and total salary in [{ name: "Alice", department: "HR", salary: 5000 }, { name: "Bob", department: "Engineering", salary: 6000 }, { name: "Charlie", department: "HR", salary: 4500 }] => [{ department: "HR", totalSalary: 9500 }, { department: "Engineering", totalSalary: 6000 }]
// Steps: Group by department, sum the salaries for each department.
const totalSalaryByDepartment = function (employees) { };

// for a list of students, return an array of objects that includes the student's name and their highest grade in [{ name: "Alice", grades: { math: 80, science: 90, history: 70 } }, { name: "Bob", grades: { math: 70, science: 85, history: 95 } }] => [{ name: "Alice", highestGrade: 90 }, { name: "Bob", highestGrade: 95 }]
// Steps: For each student, find the highest grade from their grades object.
const highestGradeByStudent = function (students) { };

// for a list of books with authors and publication years, return an array of objects that categorizes books into "old" (published before 2000) and "new" (published after 2000) in [{ title: "Book1", author: "Author1", year: 1999 }, { title: "Book2", author: "Author2", year: 2005 }] => [{ category: "old", books: [{ title: "Book1", author: "Author1" }] }, { category: "new", books: [{ title: "Book2", author: "Author2" }] }]
// Steps: Categorize by year, group books accordingly.
const categorizeBooksByYear = function (books) { };

// for a list of transactions, return an array of objects where each object contains the user's name and the total amount they spent, grouping by user name in [{ user: "Alice", transaction: { amount: 50, date: "2024-01-01" } }, { user: "Bob", transaction: { amount: 30, date: "2024-01-02" } }, { user: "Alice", transaction: { amount: 20, date: "2024-01-03" } }] => [{ user: "Alice", totalSpent: 70 }, { user: "Bob", totalSpent: 30 }]
// Steps: Group by user, sum the transaction amounts for each user.
const totalSpentByUser = function (transactions) { };

// given an array of products, each with name, price, and discount, return a list of objects containing the product name and final price (after applying the discount), rounding the final price to two decimal places in [{ name: "Product1", price: 100, discount: 0.1 }, { name: "Product2", price: 150, discount: 0.2 }] => [{ name: "Product1", finalPrice: 90.00 }, { name: "Product2", finalPrice: 120.00 }]
// Steps: Apply discount, calculate final price, round to two decimal places.
const finalPriceAfterDiscount = function (products) { };

// given a list of objects representing students with their courses, use `flatMap` to return a list of all unique courses that the students are enrolled in in [{ name: "Alice", courses: ["Math", "History"] }, { name: "Bob", courses: ["Math", "Science"] }] => ["Math", "History", "Science"]
// Steps: Use `flatMap` to combine all courses into a single array, then filter out duplicates.
const uniqueCourses = function (students) { };


// given a list of users, where each user has a list of messages, return an array of messages that contain the word "urgent" in [{ name: "Alice", messages: ["Urgent: Pay bills", "Meeting at 3"] }, { name: "Bob", messages: ["Urgent: Call customer", "Check email"] }] => ["Urgent: Pay bills", "Urgent: Call customer"]
// Steps: Use `flatMap` to combine all messages, then filter for "urgent" messages.
const urgentMessages = function (users) { };

// given a list of categories, where each category contains multiple tags, use `flatMap` to return a list of all tags in [{ category: "Tech", tags: ["JavaScript", "Node"] }, { category: "Design", tags: ["UX", "UI"] }] => ["JavaScript", "Node", "UX", "UI"]
// Steps: Use `flatMap` to combine all tags into a single array.
const allTags = function (categories) { };

// given a list of people, where each person has a list of friends, use `flatMap` to return a list of all friends, excluding duplicates, in [{ name: "Alice", friends: ["Bob", "Charlie"] }, { name: "Bob", friends: ["Alice", "David"] }] => ["Bob", "Charlie", "David"]
// Steps: Use `flatMap` to flatten the friends arrays, then remove duplicates.
const allFriends = function (people) { };

// given an array of objects with 'name' and 'age' properties, return a new array of strings where each string is "name is age years old" and append "(old)" for every person whose index is greater than or equal to 2 in [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }] => ["Alice is 30 years old", "Bob is 25 years old", "Charlie is 35 years old (old)"]
// Steps: Use the index parameter in `map` to conditionally append "(old)".
const formatNamesWithAge = function (people) { };

// given an array of posts, each with a list of hashtags, return a flat list of all hashtags used in the posts in 
// [{ post: "Vacation", hashtags: ["#sunny", "#beach"] }, { post: "Dinner", hashtags: ["#food", "#yum"] }] 
// => ["#sunny", "#beach", "#food", "#yum"]
// Steps: Use `flatMap` to extract all hashtags and combine them into a single list.
const extractHashtags = function (posts) { };

// given an array of users, each with a list of followers, return an array where each user is paired with the number of their followers 
// [{ username: "alice", followers: ["bob", "charlie"] }, { username: "bob", followers: ["alice"] }] 
// => [{ username: "alice", followersCount: 2 }, { username: "bob", followersCount: 1 }]
// Steps: Use `map` to create an object with the username and the count of followers.
const countFollowers = function (users) { };

// given an array of posts, each with a list of comments, return a new array of the comments with a "replied to" note added if the post index is even 
// [{ post: "Vacation", comments: ["Nice!", "Love it!"] }, { post: "Dinner", comments: ["Yummy", "Looks great!"] }] 
// => [["Nice! replied to", "Love it! replied to"], ["Yummy", "Looks great!"]]
// Steps: Use `map` and the index to conditionally append "replied to" for even indexed posts.
const addReplyNoteToComments = function (posts) { };

// given an array of videos, each with a list of comments, return a new array where each comment is capitalized if the number of likes on the video is more than 1000 
// [{ video: "Dance", likes: 1200, comments: ["great video", "love this"] }, { video: "Food", likes: 800, comments: ["looks good", "yum"] }] 
// => [["Great video", "Love this"], ["looks good", "yum"]]
// Steps: Use `map` to capitalize comments only if the number of likes exceeds 1000.
const capitalizeCommentsIfPopular = function (videos) { };

// given an array of posts, each with a list of user tags, return a new array where each tag is transformed into an object with { tag: 'username', count: x }, 
// where x is the number of times the tag appears in the post's list of tags, in [{ post: "TikTok Challenge", tags: ["fun", "dance", "fun"] }, { post: "Viral Recipe", tags: ["recipe", "yum", "fun"] }]
// => [{ tag: "fun", count: 2 }, { tag: "dance", count: 1 }, { tag: "recipe", count: 1 }, { tag: "yum", count: 1 }]
// Steps: Use `map` to return objects with the tag and count, aggregating the counts based on the tags in each post.
const tagCount = function (posts) { };

// given an array of objects, where each object contains a `name` and `age`, create a closure for each person that adds a `yearsToRetirement` property, then use flatMap to calculate the retirement year for each person assuming retirement at 65
// [{name: "Alice", age: 30}, {name: "Bob", age: 40}] => ["Alice will retire in 35 years", "Bob will retire in 25 years"]
const calculateRetirement = function (people) { };

// given an array of numbers, create a closure that checks if a number is greater than or equal to a specified value (e.g., 10), then use flatMap to return only the numbers that meet the condition
// [5, 10, 15], 10 => [10, 15]
const filterGreaterThanEqual = function (numbers, threshold) { };

// given an array of strings representing messages and an array of punctuation marks, create closures that append each punctuation mark to each message, then use flatMap to create all possible combinations of messages with punctuation
// ["Hello", "Goodbye"], ["!", "?"] => ["Hello!", "Hello?", "Goodbye!", "Goodbye?"]
const addPunctuation = function (messages, punctuations) { };

// given an array of user objects with `name` and `age`, create closures that return a greeting with the user's name, then use flatMap to apply the closure to each user
// [{name: "Alice", age: 30}, {name: "Bob", age: 25}] => ["Hello Alice!", "Hello Bob!"]
const greetUsers = function (users) { };

// given an array of product objects, each containing `name` and `price`, create closures to apply a sales tax (e.g., 10%) to the price, then use flatMap to calculate the price with tax for each product
// [{name: "Shirt", price: 20}, {name: "Shoes", price: 50}] => [22, 55]
const applySalesTax = function (products) { };

// given an array of user objects with `name` and `posts`, return an array of objects where each object contains the user's name and an array of post titles
// [{name: "Alice", posts: [{title: "Post 1"}, {title: "Post 2"}]}, {name: "Bob", posts: [{title: "Post 3"}]}] 
// => [{name: "Alice", posts: ["Post 1", "Post 2"]}, {name: "Bob", posts: ["Post 3"]}]
const getUserPostTitles = function (users) { };

// given an array of products, where each product contains a `name`, `price`, and `tags` array, return a new array of products where each product contains its name and an array of uppercased tags
// [{name: "Shirt", price: 20, tags: ["cotton", "summer"]}, {name: "Shoes", price: 50, tags: ["leather", "winter"]}] 
// => [{name: "Shirt", tags: ["COTTON", "SUMMER"]}, {name: "Shoes", tags: ["LEATHER", "WINTER"]}]
const formatProductTags = function (products) { };

// given an array of categories where each category has a `categoryName` and `items` array, return a new array where each item is an object with the category name and an array of item names
// [{categoryName: "Fruits", items: [{name: "Apple"}, {name: "Banana"}]}, {categoryName: "Vegetables", items: [{name: "Carrot"}]}] 
// => [{categoryName: "Fruits", items: ["Apple", "Banana"]}, {categoryName: "Vegetables", items: ["Carrot"]}]
const getCategoryItems = function (categories) { };

// given an array of order objects with `orderId` and `products`, where each product has a `name` and `quantity`, return an array of orders, where each order contains its `orderId` and an array of product names, each with the quantity
// [{orderId: 1, products: [{name: "Laptop", quantity: 1}, {name: "Mouse", quantity: 2}]}, {orderId: 2, products: [{name: "Keyboard", quantity: 1}]}]
// => [{orderId: 1, products: ["Laptop x1", "Mouse x2"]}, {orderId: 2, products: ["Keyboard x1"]}]
const summarizeOrderProducts = function (orders) { };

// given an array of students, each with a `name` and a `courses` array, return a new array of objects, where each object contains the student's name and an array of their course names in uppercase
// [{name: "Alice", courses: [{courseName: "Math"}, {courseName: "Science"}]}, {name: "Bob", courses: [{courseName: "English"}]}]
// => [{name: "Alice", courses: ["MATH", "SCIENCE"]}, {name: "Bob", courses: ["ENGLISH"]}]
const getStudentCourses = function (students) { };

// given an array of books, each with a `title` and `chapters`, where each chapter has a `title` and a `pageCount`, return an array of books, each containing the book's title and an array of chapter titles along with their page counts
// [{title: "Book 1", chapters: [{title: "Chapter 1", pageCount: 10}, {title: "Chapter 2", pageCount: 20}]}, {title: "Book 2", chapters: [{title: "Chapter 1", pageCount: 15}]}]
// => [{title: "Book 1", chapters: ["Chapter 1: 10 pages", "Chapter 2: 20 pages"]}, {title: "Book 2", chapters: ["Chapter 1: 15 pages"]}]
const summarizeBookChapters = function (books) { };

// given an array of events, where each event has a `name` and an array of `attendees`, where each attendee has a `firstName` and `lastName`, return an array of events where each event contains the event name and an array of full names of attendees
// [{name: "Concert", attendees: [{firstName: "John", lastName: "Doe"}, {firstName: "Jane", lastName: "Smith"}]}, {name: "Conference", attendees: [{firstName: "Bob", lastName: "Brown"}]}]
// => [{name: "Concert", attendees: ["John Doe", "Jane Smith"]}, {name: "Conference", attendees: ["Bob Brown"]}]
const getEventAttendees = function (events) { };