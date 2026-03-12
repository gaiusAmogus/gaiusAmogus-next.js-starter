# gaiusAmogus Next.js Starter

Next.js starter including SCSS, App Router, sticky header with mobile menu, and a dev UI kit page.

Repository: https://github.com/gaiusAmogus/gaiusAmogus-next.js-starter

## Requirements

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

## Installation

### Clone repository

```bash
git clone https://github.com/gaiusAmogus/gaiusAmogus-next.js-starter.git
cd gaiusAmogus-next.js-starter
```

### Install dependencies

```bash
npm install
```

## Running the project

### Development mode

```bash
npm run dev
```

Starts the Next.js development server. The app is available at:

```
http://localhost:3000
```

Changes in JS, JSX, and SCSS files are refreshed automatically.

### Production build

```bash
npm run build
```

Builds the project into the `.next/` directory. Ready for deployment.

### Production server

```bash
npm run start
```

Starts the production server. Requires `npm run build` to be run first.

### Lint

```bash
npm run lint
```

Checks the code for errors using Next.js built-in ESLint configuration.

## Project structure

```
app/
  layout.jsx               # root layout (Header, Footer, global styles)
  page.jsx                 # home page (/)
  not-found.jsx            # 404 page
  dev-page/
    page.jsx               # ui kit page (/dev-page)
src/
  js/
    components/
      Header/
        Header.jsx         # header (sticky + mobile menu)
      Footer/
        Footer.jsx         # footer
    pages/
      Home/
        Home.jsx           # home page component
      DevPage/
        DevPage.jsx        # ui kit page component
      NotFound/
        NotFound.jsx       # 404 page component
  scss/
    style.scss             # main SCSS file
    layout/                # global styles (grid, colors, fonts, etc.)
    components/
      Header/
        _Header.scss       # header styles
      Footer/
        _Footer.scss       # footer styles
    pages/
      Home/
        _Home.scss         # home page styles
      DevPage/
        _DevPage.scss      # ui kit page styles
      NotFound/
        _NotFound.scss     # 404 page styles
.next/                     # build output (generated, not committed)
```

## Adding new pages

1. Create a folder `app/page-name/` with a `page.jsx` file inside
2. Create a component in `src/js/pages/PageName/PageName.jsx` and import it in `app/page-name/page.jsx`
3. (optional) Create an SCSS file in `src/scss/pages/PageName/_PageName.scss`
4. Import styles in `src/scss/style.scss`:
   ```scss
   @use "pages/PageName/PageName";
   ```
