import {
    pgTable,
    text,
    varchar,
    timestamp,
    jsonb,
    uuid
} from 'drizzle-orm/pg-core';
// import { title } from 'process';
// import { relations } from 'drizzle-orm';

// Message from the Pastor's Heart Schema
export const pastorMessages = pgTable('pastor_messages', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title').notNull(),
    content: text('content').notNull(),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    status: varchar('status', { length: 20 }).notNull().default('draft'),
    metadata: jsonb('metadata').$type<{
        title?: string;
        scriptureReferences?: string[];
        theme?: string;
        featuredImage?: string;
        tags?: string[];
    }>()
});

// Message from the Prayer Director Schema
export const prayerMessages = pgTable('prayer_messages', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title').notNull(),
    content: text('content').notNull(),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    status: varchar('status', { length: 20 }).notNull().default('draft'),
    metadata: jsonb('metadata').$type<{
        title?: string;
        scriptureReferences?: string[];
        theme?: string;
        featuredImage?: string;
        tags?: string[];
    }>()
});

// Church Blog Post Schema