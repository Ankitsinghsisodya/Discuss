# Discuss - Interactive Discussion Forum

Discuss is a modern web application built with Next.js that allows users to create topics, start discussions, and engage in meaningful conversations with others. With a clean, intuitive interface and real-time updates, it's the perfect platform for community discussions.



## Features

- **User Authentication** - Secure login via GitHub
- **Topic Creation** - Create interest-based discussion topics
- **Post Creation** - Start new discussions within topics
- **Comments** - Engage in conversations through threaded comments
- **Search Functionality** - Find relevant topics and discussions
- **Responsive Design** - Seamless experience across all devices

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with GitHub provider
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL database (or Supabase account)
- GitHub OAuth application

### Installation

1. Clone the repository
2. Install dependencies
3. Set up environment variables
    - `your_postgresql_connection_string`
4. Set up the database
    - `init`
5. Run the development server
    - `dev`
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Creating a Topic

1. Sign in with your GitHub account
2. Click on the "New Topic" button
3. Enter a name and description for your topic
4. Click "Save changes"

### Creating a Post

1. Navigate to a topic
2. Click on "Create Post"
3. Enter a title and content
4. Click "Submit"

### Commenting on Posts

1. Click on a post to view its details
2. Scroll to the comment section
3. Enter your comment and click "save"

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Set the required environment variables
4. Set the build command to `npx prisma generate && next build`
5. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Vercel for hosting and deployment
- All contributors who helped shape this project

