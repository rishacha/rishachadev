# Rishacha

Portfolio website for Rishabh Chakraborty made Astro (MonoLume Theme).

✨ Features

- Minimal, bold typography
- Responsive & mobile-friendly
- Work/projects showcase layout
- Blog support
- Contact form
- SEO-friendly
- Built with Astro + Tailwind CSS (easy to customize)

## Tech Stack

- [Astro](https://astro.build/) – Static site builder
- [TypeScript](https://www.typescriptlang.org/) – Type-safe development
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── astro.config.mjs
├── package.json
├── public
├── README.md
├── src
│   ├── assets
│   │   └── media
│   ├── components
│   │   ├── About.astro
│   │   ├── Articles.astro
│   │   ├── Card.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── FormattedDate.astro
│   │   ├── Head.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── content
│   │   ├── about.md
│   │   ├── blog
│   │   ├── metadata.md
│   │   ├── projects
│   │   └── translations
│   │       └── ui.json
│   ├── content.config.ts
│   ├── i18n
│   │   ├── config.ts
│   │   └── utils.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── lib
│   │   └── constants.ts
│   ├── pages
│   │   ├── 404.astro
│   │   ├── blog
│   │   │   ├── [...id].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   └── projects
│   │       ├── [...id].astro
│   │       └── index.astro
│   └── styles
│       └── global.css
└── tsconfig.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

