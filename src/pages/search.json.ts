import { getCollection } from 'astro:content';

export const prerender = true;

function stripMarkdown(md?: string): string {
  if (!md) return '';
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[.*?\]\(.*?\)/g, ' ')
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    .replace(/#{1,6}\s+/g, ' ')
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/>\s+/g, ' ')
    .replace(/[-+*]\s+/g, ' ')
    .replace(/\d+\.\s+/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function GET() {
  const [launchpad, wealthEngine, bigDecisions] = await Promise.all([
    getCollection('launchpad'),
    getCollection('wealth-engine'),
    getCollection('big-decisions'),
  ]);

  const items: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    section: string;
    url: string;
    tags: string[];
    content: string;
  }> = [];

  for (const doc of launchpad) {
    items.push({
      id: `launchpad-${doc.id}`,
      title: doc.data.title,
      description: doc.data.description || '',
      category: doc.data.category || 'Launchpad',
      section: 'The Launchpad',
      url: `/launchpad/${doc.id}`,
      tags: [],
      content: stripMarkdown(doc.body),
    });
  }

  for (const doc of wealthEngine) {
    items.push({
      id: `wealth-${doc.id}`,
      title: doc.data.title,
      description: doc.data.description || '',
      category: doc.data.category || 'Wealth Engine',
      section: 'The Wealth Engine',
      url: `/wealth-engine/${doc.id}`,
      tags: [],
      content: stripMarkdown(doc.body),
    });
  }

  for (const doc of bigDecisions) {
    items.push({
      id: `big-decisions-${doc.id}`,
      title: doc.data.title,
      description: doc.data.description || '',
      category: doc.data.category || 'Big Decisions',
      section: 'The Big Decisions',
      url: `/big-decisions/${doc.id}`,
      tags: [],
      content: stripMarkdown(doc.body),
    });
  }

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
