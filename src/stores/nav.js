import { writable } from 'svelte/store';

export const currentSegment = writable('');
export const isMobileNavShown = writable(false);
export const shouldObserveScroll = writable(false);
