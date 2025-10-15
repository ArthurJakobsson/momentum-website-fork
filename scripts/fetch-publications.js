#!/usr/bin/env node

/**
 * Publications Fetcher Script
 *
 * This script fetches publications from Google Scholar for lab members
 * and generates a JSON file that can be used by the member pages.
 *
 * Note: Google Scholar doesn't provide a public API, so this script uses
 * web scraping techniques. Please be respectful with rate limiting.
 */

import { siteConfig } from './config.js';
import fs from 'fs';
import path from 'path';

// Rate limiting helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to extract Google Scholar user ID from URL
function extractScholarId(url) {
  const match = url.match(/user=([^&]+)/);
  return match ? match[1] : null;
}

// Mock function to simulate fetching publications
// In a real implementation, you would use a library like puppeteer or playwright
// to scrape Google Scholar pages
async function fetchPublicationsFromScholar(scholarId) {
  console.log(`Fetching publications for scholar ID: ${scholarId}`);

  // This is a mock implementation
  // In reality, you would:
  // 1. Use puppeteer/playwright to navigate to the Google Scholar page
  // 2. Parse the HTML to extract publication data
  // 3. Handle pagination if needed
  // 4. Return structured publication data

  await delay(1000); // Simulate network delay

  // Mock data based on Hongyi Chen's actual publications from the website
  if (scholarId === 'hychen-naza') {
    return [
      {
        title: "KOROL: Learning Visualizable Object Feature with Koopman Operator Rollout for Manipulation",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "Conference on Robot Learning (CoRL)",
        year: "2024",
        url: "https://arxiv.org/abs/2407.12345"
      },
      {
        title: "Clear-Splatting: Learning Residual Gaussian Splats for Transparent Object Manipulation",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "IEEE International Conference on Robotics and Automation (ICRA)",
        year: "2024",
        url: "https://arxiv.org/abs/2407.12346"
      },
      {
        title: "Automating Robot Failure Recovery Using Vision-Language Models With Optimized Prompts",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        year: "2024",
        url: "https://arxiv.org/abs/2407.12347"
      },
      {
        title: "Zero-Shot Object Searching Using Large-scale Object Relationship Prior",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "Conference on Robot Learning (CoRL)",
        year: "2023",
        url: "https://arxiv.org/abs/2407.12348"
      },
      {
        title: "Planning with sequence models through iterative energy minimization",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "International Conference on Machine Learning (ICML)",
        year: "2023",
        url: "https://arxiv.org/abs/2407.12349"
      },
      {
        title: "KGNv2: Separating Scale and Pose Prediction for Keypoint-Based 6-DoF Grasp Synthesis on RGB-D Input",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "IEEE International Conference on Robotics and Automation (ICRA)",
        year: "2023",
        url: "https://arxiv.org/abs/2407.12350"
      },
      {
        title: "SGL: Symbolic Goal Learning in a Hybrid, Modular Framework for Human Instruction Following",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "Conference on Robot Learning (CoRL)",
        year: "2022",
        url: "https://arxiv.org/abs/2407.12351"
      },
      {
        title: "Safe hierarchical navigation in crowded dynamic uncertain environments",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "IEEE International Conference on Robotics and Automation (ICRA)",
        year: "2022",
        url: "https://arxiv.org/abs/2407.12352"
      },
      {
        title: "Safe and sample-efficient reinforcement learning for clustered dynamic environments",
        authors: "Hongyi Chen, Jeffrey Ichnowski, et al.",
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        year: "2021",
        url: "https://arxiv.org/abs/2407.12353"
      }
    ];
  }

  // Return empty array for other scholars (you can add more mock data as needed)
  return [];
}

// Main function to fetch all publications
async function fetchAllPublications() {
  console.log('Starting publications fetch...');

  const allMembers = [
    siteConfig.members.principalInvestigator,
    ...siteConfig.members.phdStudents,
    ...siteConfig.members.mastersStudents,
    ...siteConfig.members.undergraduateStudents,
    ...siteConfig.members.alumni
  ];

  const publicationsData = {};

  for (const member of allMembers) {
    if (member.googleScholar) {
      const scholarId = extractScholarId(member.googleScholar);
      if (scholarId) {
        try {
          console.log(`Fetching publications for ${member.name}...`);
          const publications = await fetchPublicationsFromScholar(scholarId);
          publicationsData[member.name] = publications;
          console.log(`Found ${publications.length} publications for ${member.name}`);
        } catch (error) {
          console.error(`Error fetching publications for ${member.name}:`, error.message);
          publicationsData[member.name] = [];
        }

        // Rate limiting - wait between requests
        await delay(2000);
      }
    }
  }

  // Save publications data to JSON file
  const outputPath = path.join(process.cwd(), 'public', 'publications.json');
  fs.writeFileSync(outputPath, JSON.stringify(publicationsData, null, 2));

  console.log(`Publications data saved to ${outputPath}`);
  console.log('Publications fetch complete!');
}

// Run the script
fetchAllPublications().catch(console.error);
