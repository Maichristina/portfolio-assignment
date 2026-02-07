# Web Developer Portfolio | Assignment for WebEleven

## Project Structure

The project follows a structured routing system to support multiple languages (Greek and English)

- '/src/pages/index.astro': Root entry point with automatic or manual redirection.
- 'src/pages/el/index.astro': Greek version.
- 'src/pages/en/index.astro': English version.
- 'src/components/': UI components built with Svelte and Astro.
- 'src/layouts/': The main page.
- '/public/api/': API for data fetching.

## Tech Stack

- **Framework:** Astro 5.1: selected for static site.
- **UI Libraries:** Svelte: library for reactive components.
- **Styling:** Tailwind CSS: responsive styling.
- **Language:** Typescript: type safety.

## Set Up

Follow these steps to run the project locally:

1.**Clone the repository:**
'''bash
git clone https://github.com/Maichristina/portfolio_assignment.git
cd portfolio-assignment

2.**Install dependencies:**
npm install

3.**Start the Development Server:**
npm run dev
The site will be available at http://localhost:4321

4.**Build for production:**
npm run build
