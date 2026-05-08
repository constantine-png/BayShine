import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

const tables = await sql`
  SELECT table_name FROM information_schema.tables
  WHERE table_schema = 'public' ORDER BY table_name
`;
console.log('Tables:', tables.map(r => r.table_name));

const cats = await sql`SELECT slug, name, published_count, total_planned FROM categories ORDER BY display_order`;
console.log('Categories:', cats.length, 'rows');
cats.forEach(c => console.log(' ', c.slug, '-', c.name, `(${c.published_count}/${c.total_planned})`));

const indexes = await sql`
  SELECT indexname FROM pg_indexes WHERE tablename = 'field_guide_queries'
`;
console.log('Indexes on field_guide_queries:', indexes.map(r => r.indexname));
