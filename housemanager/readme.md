
House Manager App

The House Manager app is a household management app useful for my small family to organize our home. We have three dogs and a baby on its way and I have found it exceedingly difficult to keep track of all the different things that need to be done. As a project that is a combination of all the things we have learned in this course I think it is unique from any other project we have been asked to do during CS50W.
It's complexity is contained in the interconnectedness between the various categories that the app contains. For example, adding a todo in the todo list section involves choosing a category - when you choose that category, the todo-list will show up in that category page, as well as in the todo-list. 
Here are the main categories that the app offers:
1. Dogs: A page to keep track of our dogs. This includes a page with a listing of dogs, a button to add a dog, where you can name the dog, record its weight and record its vaccine info (last date of vaccine and next vaccine due date).
2. Baby: A page to keep track of baby things. Todo items with the baby category selected show up here. A note text field that dynamically adds the note to the page (and indicates which user added the note) is also present. 
3. Bills: A page of all due bills with a button to indicate if the bill has been paid. On clicking the button the bill dissapears. Also a button to add a bill, with its title, amount to be paid and due date. This page is paginated to allow for no more than 10 bills. 
4. Todo list: A todo-list with a form to add a todo with title, do-by-date and category choice. A checkbox next to each todo item can be checked to 'complete' the todo item and make it dissapear. 


Files:

html files:
1. baby.html: Page displaying baby related info with a countdown to the due date. 
2. bills.html: List of upcoming bill payment details with pagination to limit bills to 10 per page.
3. dog_name.html: Details of specific dog (you get here from dogs.html page) including vaccination details, date of birth and weight. Weight can be updated. Vaccine can be marked as done, at which point the vaccine dates will update by a year. 
4. dogs.html: List of dogs with button to add more dogs, with weight, DoB and vaccine details. 
5. Index: Home page with all categories. 
6. Layout: Basic page layout template with nav bar on top. 
7. Login: Login page.
8. Register: Register new users.
9. todo.html: Todo list with button to add todo item. Each item as a checkbox to mark its completion.

js files:
1. baby.js: Countdown, baby-related todo's. Text field to add note and space where the note displays.
