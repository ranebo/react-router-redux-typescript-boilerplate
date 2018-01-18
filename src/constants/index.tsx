
export const TODO_STATUSES = ['Incomplete', 'Complete']; // Order Matters
export type TODO_STATUSES = [string, string];

export const TODO_FILTER_OPTIONS = ['All'].concat(TODO_STATUSES);
export type TODO_FILTER_OPTIONS = string[];

export const DEFAULT_TODO_FILTER = TODO_FILTER_OPTIONS[0];
export type DEFAULT_TODO_FILTER = typeof DEFAULT_TODO_FILTER;
