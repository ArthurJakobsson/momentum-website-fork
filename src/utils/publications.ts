import fs from 'fs';
import path from 'path';

export async function loadPublications() {
  try {
    const publicationsPath = path.join(process.cwd(), 'public', 'publications.json');
    const publicationsData = fs.readFileSync(publicationsPath, 'utf-8');
    return JSON.parse(publicationsData);
  } catch (error) {
    console.error('Error loading publications:', error);
    return {};
  }
}

export async function getPublicationsForMember(memberName: string) {
  const publications = await loadPublications();
  return publications[memberName] || [];
}
