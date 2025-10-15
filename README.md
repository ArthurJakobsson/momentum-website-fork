# Momentum Lab Website

The official website for the Momentum Lab at Carnegie Mellon University's Robotics Institute. This site showcases our research, members, publications, and selected works in robotics, manipulation, and human-robot interaction.

## 🌐 Live Site

Visit our website at: **[https://momentum-robotics-lab.github.io/](https://momentum-robotics-lab.github.io/)**

## 🏗️ Built With

- **[Astro](https://astro.build/)** - Modern static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe configuration
- **GitHub Actions** - Automated deployment

## 📊 Managing Publications

The website automatically displays publications for each lab member. To update the publications:

### Advanced Update (Recommended)
```bash
npm run fetch-publications-advanced
```

The advanced script provides:
- Better error handling
- Progress tracking
- Detailed logging
- More robust data fetching

### Manual Publication Management

Publications are stored in `public/publications.json`. You can:
1. Edit this file directly for quick updates
2. Use the npm scripts for automatic fetching from Google Scholar
3. The member pages automatically load publications based on author names

## 👥 Adding New Members

To add a new lab member:

1. **Update `src/config.ts`** - Add the member to the appropriate section (PhD Students, Master Students, etc.)
2. **Add member photo** - Place the photo in `public/photos/` with naming convention: `firstname_lastname.jpg`
3. **Publications** - The member's publications will be automatically fetched and displayed on their individual page

Example member configuration:
```typescript
{
  name: "Jane Doe",
  email: "jane@cmu.edu",
  photo: "/photos/jane_doe.jpg",
  website: "https://janedoe.com",
  googleScholar: "https://scholar.google.com/citations?user=USER_ID",
  research: "Computer Vision for Robotics"
}
```

## 🎬 Managing Videos

Research videos are stored in `public/videos/` and can be embedded in the Hero section:

1. **Add videos** to `public/videos/`
2. **Update video list** in `src/components/Hero.astro`
3. **Videos auto-play** in a loop on the homepage

## 🚀 Local Development

To run the site locally:

```bash
git clone https://github.com/momentum-robotics-lab/momentum-robotics-lab.github.io.git
cd momentum-robotics-lab.github.io
npm install
npm run dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
momentum-lab-website/
├── public/
│   ├── photos/           # Member photos
│   ├── videos/           # Research videos
│   └── publications.json # Publications data
├── src/
│   ├── components/       # Astro components
│   │   ├── Hero.astro    # Homepage hero with videos
│   │   ├── Members.astro # Members showcase
│   │   ├── Projects.astro # Selected works
│   │   └── ...
│   ├── pages/
│   │   ├── index.astro   # Main homepage
│   │   └── members/      # Individual member pages
│   ├── layouts/
│   │   └── Layout.astro  # Base layout template
│   ├── utils/
│   │   └── publications.ts # Publication utilities
│   └── config.ts         # Site configuration
├── scripts/
│   ├── fetch-publications.js        # Basic publication fetcher
│   └── fetch-publications-advanced.js # Advanced publication fetcher
└── .github/workflows/
    └── deploy.yml        # GitHub Actions deployment
```

## 🔄 Deployment

The site is automatically deployed via GitHub Actions when changes are pushed to the `master` branch. The deployment process:

1. **Builds** the Astro site
2. **Uploads** artifacts to GitHub Pages
3. **Deploys** to https://momentum-robotics-lab.github.io/

### Manual Deployment

If needed, you can manually trigger deployment:
1. Go to the [Actions tab](https://github.com/momentum-robotics-lab/momentum-robotics-lab.github.io/actions)
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow"

## 🛠️ Key Features

- **Responsive Design** - Works on all devices
- **Automatic Publications** - Fetches from Google Scholar
- **Individual Member Pages** - Dedicated pages for each lab member
- **Video Showcase** - Auto-playing research videos
- **Modern UI** - Clean, professional design
- **Fast Loading** - Optimized static site generation

## 📝 Configuration

Main configuration is in `src/config.ts`:
- Lab information and description
- Member lists and details
- Research topics
- Selected works/projects
- Contact information

## 🙏 Acknowledgments

This website is based on the excellent [DevPortfolio Template](https://github.com/RyanFitzgerald/devportfolio) by [Ryan Fitzgerald](https://github.com/RyanFitzgerald).

**Template edited and modified for use for Momentum Lab by [Arthur Jakobsson](https://arthurjakobsson.com/)**

The original template provided a solid foundation which was then customized to showcase our robotics research, lab members, and publications with automated Google Scholar integration.

---

**Momentum Lab** - Advancing robotics through innovative manipulation and learning approaches.
