import { getCollection } from 'astro:content';

export const prerender = true;

function stripMarkdownAndHtml(raw?: string): string {
  if (!raw) return '';
  return raw
    .replace(/<[^>]*>/g, ' ')           // strip all HTML tags like <div>, <p>, <span>
    .replace(/```[\s\S]*?```/g, ' ')     // strip code blocks
    .replace(/`([^`]+)`/g, '$1')         // inline code
    .replace(/!\[.*?\]\(.*?\)/g, ' ')    // images
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // links
    .replace(/#{1,6}\s+/g, ' ')          // headers
    .replace(/(\*\*|__)(.*?)\1/g, '$2')  // bold
    .replace(/(\*|_)(.*?)\1/g, '$2')     // italic
    .replace(/>\s+/g, ' ')               // blockquotes
    .replace(/[-+*]\s+/g, ' ')           // lists
    .replace(/\d+\.\s+/g, ' ')
    .replace(/\|/g, ' ')                 // tables
    .replace(/&[a-z]+;/gi, ' ')          // html entities
    .replace(/\s+/g, ' ')                // collapse whitespace
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
      content: stripMarkdownAndHtml(doc.body),
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
      content: stripMarkdownAndHtml(doc.body),
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
      content: stripMarkdownAndHtml(doc.body),
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
