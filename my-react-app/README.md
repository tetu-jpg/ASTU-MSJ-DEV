# React Blog app
A simple and responsive blog application built with React. This app allows users to explore blog posts, read full details, search for blogs, and save their favorite posts as bookmarks.

# Features
 Home Page
- Displays blog posts in a card grid layout.
- Each card shows:
  - Blog title
  - Short paragraph/description
  - Read More link to view the full post
- Includes a search bar to easily find blogs by title.

 New Blog Page
- Allows users to create and add new blog posts.
- Users can add blog information and display it in the home page.

Blog Detail Page
- Shows complete information about a selected blog:
  - Title
  - Full paragraph/content
  - Username of the author
  - Number of likes
  - Comments
- Users can bookmark a blog from this page.

#Bookmark Feature
- Users can save blogs they like.
- Bookmarks are stored using *localStorage*, so they remain saved even after refreshing the page.
- If there are no saved blogs, the app displays:
   "No bookmarks yet"

#Technologies Used

- React.js
- React Router
- Axios
- Jotai (State Management)
- JavaScript
- CSS
- Local Storage

#How to Run the Project

1. Clone this repository:

git clone <[https://github.com/tetu-jpg/ASTU-MSJ-DEV/edit/main/my-react-app]>
`
2. Open the project folder:
cd my-react-app


3. Install dependencies:
npm install


4. Start the development server
npm run dev

5. Open the link shown in your terminal (usually):

http://localhost:5173

##Project Structure


src
│
├── components
│   ├── BlogCard.jsx
│   ├── BlogForm.jsx
│   └── NavBar.jsx
│
├── pages
│   ├── Home.jsx
│   ├── BlogDetails.jsx
│   └── Bookmarks.jsx
│
├── atoms
│   └── blogAtoms.js
│
├── App.jsx
└── main.jsx
```

##How to Access the Files

After downloading or cloning the project:

1. Open the project folder in **VS Code**.
2. Open the `src` folder to access the main code.
3. Components are inside the `components` folder.
4. Pages are inside the `pages` folder.
5. Styling files are where the CSS files are located.

You can edit any file, save the changes, and the React app will automatically update in the browser.

## Future Improvements

- Add user authentication(login system).
- Allow comments on the blog post app itself.
- Allow users to edit and delete blogs.
- Add categories and better filtering



Tesnim Abdella
github:https://github.com/tetu-jpg
