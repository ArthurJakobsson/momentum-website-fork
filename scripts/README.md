# Publications System

This directory contains scripts for automatically fetching and displaying publications from Google Scholar for lab members.

## Overview

The publications system consists of:

1. **Member Pages**: Individual pages for each lab member (e.g., `/members/hongyi-chen/`)
2. **Publications Scripts**: Scripts to fetch publications from Google Scholar
3. **Publications Data**: JSON file containing all publications data

## Setup

### 1. Add Google Scholar URLs to Config

Add a `googleScholar` field to member entries in `src/config.ts`:

```typescript
{
  name: "Hongyi Chen",
  research: "Dexterous Manipulation",
  email: "hongyicobfuscate@andrew.cmu.edu",
  photo: "/photos/hongyi_chen.jpg",
  googleScholar: "https://scholar.google.com/citations?user=hychen-naza"
}
```

### 2. Install Dependencies (Optional)

For advanced web scraping with Puppeteer:

```bash
npm install puppeteer
```

## Usage

### Basic Publications Fetch (Mock Data)

```bash
npm run fetch-publications
```

This script uses mock data and doesn't require external dependencies.

### Advanced Publications Fetch (Real Scraping)

```bash
npm run fetch-publications-advanced
```

This script uses Puppeteer to scrape Google Scholar pages. **Note**: This requires Puppeteer to be installed and may be rate-limited by Google Scholar.

## How It Works

1. **Script Execution**: Run the publications script to fetch data from Google Scholar
2. **Data Storage**: Publications are saved to `public/publications.json`
3. **Page Generation**: Member pages automatically load publications from the JSON file
4. **Dynamic Links**: Member names in the main members page link to individual member pages

## File Structure

```
scripts/
├── fetch-publications.js          # Basic script with mock data
├── fetch-publications-advanced.js # Advanced script with Puppeteer
└── README.md                      # This file

src/
├── pages/
│   └── members/
│       └── [slug].astro          # Dynamic member page template
└── layouts/
    └── Layout.astro              # Base layout for member pages

public/
└── publications.json             # Generated publications data
```

## Member Page Features

Each member page includes:

- **Profile Information**: Photo, name, research area, contact info
- **Publications List**: Automatically loaded from Google Scholar
- **Contact Links**: Email, website, Google Scholar
- **Education Info**: For principal investigators
- **Responsive Design**: Works on all device sizes

## Adding New Members

1. Add member information to `src/config.ts`
2. Add their photo to `public/photos/`
3. Add their `googleScholar` URL to the config
4. Run the publications script to fetch their publications
5. The member page will be automatically generated

## Important Notes

### Rate Limiting
- Google Scholar may block requests if you scrape too frequently
- The scripts include delays between requests
- Consider running the script during off-peak hours

### Legal Considerations
- Respect Google Scholar's terms of service
- Use reasonable delays between requests
- Consider using the mock data version for testing

### Data Accuracy
- Web scraping may not always capture all publications
- Manually verify important publications
- The system gracefully handles missing data

## Troubleshooting

### Publications Not Loading
- Check that `public/publications.json` exists
- Verify the member's Google Scholar URL is correct
- Run the publications script again

### Script Errors
- Ensure all dependencies are installed
- Check that Google Scholar URLs are accessible
- Review console output for specific error messages

### Page Not Found
- Verify the member name is in the config
- Check that the slug generation is working correctly
- Ensure the member page template exists

## Future Enhancements

Potential improvements to consider:

1. **Caching**: Add caching to avoid repeated scraping
2. **Scheduling**: Set up automated publication updates
3. **API Integration**: Use official APIs when available
4. **Citation Metrics**: Include citation counts and h-index
5. **Publication Categories**: Group publications by type
6. **Search Functionality**: Add search within publications
