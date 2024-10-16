# My-Blog: React Blog Application

## Overview

My-Blog is a simple, interactive blog application built with React. It allows users to create, read, update, and delete blog posts. The application uses React's Context API for state management and features a clean, responsive design with gradient styling.

## Features

- Create new blog posts
- View a list of all blog posts
- Edit existing blog posts
- Delete blog posts
- Responsive design with gradient styling

## Technologies Used

- React (with Hooks and Context API)
- Tailwind CSS for styling
- Framer Motion for animations
- React Icons for icons

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/sanketb-14/my-blog.git
   cd my-blog
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Usage

### Adding a New Blog Post

1. Fill in the "Title", "Description", and "Image URL" fields in the form at the top of the page.
2. Click the "Add Blog" button to create a new blog post.

### Editing a Blog Post

1. Click the "Edit" button on the blog post you want to modify.
2. The form will be populated with the current post's data.
3. Make your changes in the form.
4. Click the "Update Blog" button to save your changes.

### Deleting a Blog Post

1. Click the "Delete" button on the blog post you want to remove.
2. The post will be immediately deleted from the list.

## Project Structure

- `src/context/BlogContext.js`: Contains the BlogContext and BlogProvider for state management.
- `src/components/BlogForm.js`: Component for adding and editing blog posts.
- `src/components/BlogList.js`: Component for displaying the list of blog posts.
- `src/components/SingleBlog.js`: Component for rendering individual blog posts.
- `src/App.js`: Main application component.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## Contact

If you have any questions or feedback, please reach out to sanket barapatre(mailto:sanketbarapatre999@gmail.com).

---

Happy blogging!