# FAQ Admin Panel

A user-friendly admin panel built with React and Tailwind CSS for managing FAQs. This frontend application interacts with a backend API to perform CRUD (Create, Read, Update, Delete) operations on FAQs.

## Features

- **View FAQs**: Display a list of FAQs fetched from the backend
- **Add FAQs**: Add new FAQs with questions and answers
- **Edit FAQs**: Update existing FAQs
- **Delete FAQs**: Remove FAQs from the list
- **Responsive Design**: Built with Tailwind CSS for a clean and responsive UI

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Tailwind CSS**: A utility-first CSS framework for styling
- **Axios**: A promise-based HTTP client for making API requests
- **React Hooks**: For managing state and side effects

## Prerequisites

Before running the project, ensure you have the following installed:
- Node.js (Download and install from nodejs.org)
- npm (Comes bundled with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vidit-maheshwari/bharatfd-frontend.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Backend

Ensure the backend server is running and accessible. The backend should expose the following endpoints:
- `GET /api/faqs`: Fetch all FAQs
- `POST /api/faqs`: Add a new FAQ
- `PUT /api/faqs/:id`: Update an existing FAQ
- `DELETE /api/faqs/:id`: Delete an FAQ

### 4. Start the Development Server

```bash
npm start
```

The application will be available at: `http://localhost:5173`

## Project Structure

```
faq-admin-panel/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── FAQForm.js      # Form for adding/editing FAQs
│   │   ├── FAQItem.js      # Single FAQ item with edit/delete options
│   │   └── FAQList.js      # List of FAQs
│   ├── App.js              # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .gitignore              # Files and directories to ignore in Git
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## Usage

### View FAQs
- The homepage displays a list of FAQs fetched from the backend
- Each FAQ item shows the question and answer, along with Edit and Delete buttons

### Add a New FAQ
1. Click the Add New FAQ form
2. Enter the question and answer
3. Click Add FAQ to submit the form

### Edit an FAQ
1. Click the Edit button on an FAQ item
2. Update the question and/or answer in the input fields
3. Click Save to update the FAQ or Cancel to discard changes

### Delete an FAQ
1. Click the Delete button on an FAQ item
2. The FAQ will be removed from the list

### API Integration

To change the backend API URL, update the axios requests in:
- `src/components/FAQList.js`
- `src/components/FAQForm.js`


## Deployment

### Build the Project
Generate a production build:
```bash
npm run build
```

### Serve the Build
Use a static server to serve the build folder:
```bash
npm install -g serve
serve -s build
```

