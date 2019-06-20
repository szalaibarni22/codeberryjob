# Notes

## Step 1: Setup

- Create the GitHub repo
- Create the .html, .js .css files (we will need the CSS at the end of the process only)
- try to commit and check if it works well

## Step 2: What are we going to build?

- A To-Do App with:
   - a title
   - an input field
   - an Add button
   (probably we can do all of these in just the HTML)

   -then we will need:
      - the Add button to take action: to make a new list element and show it in the page
      - we will need a Remove button - which deletes the item
      - we will need a Complete button - which turns the item's inner text into italics, faded, strikethrough format
      - we should reach that Enter key does the same as a click on the add button
      - we should use basic CSS to make the App nice enough for the students portfolio


## Problems occured during the building process
 - It's easy to make permanent buttons, but how to make them on the fly in JS?
 
 - When added an if statement to prevent adding empty elements, it works, but the buttons show up after the alert

 ## Useful observations
 - It is essential wo understand child-parent relatoins to create this to-do list
 - We should use other selector types to teach them, not only getElementById
 - The Remove and Complete buttons are going INSIDE the function which is connected to the Add button