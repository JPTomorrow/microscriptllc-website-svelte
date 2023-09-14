import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
// This code adds vercel analytics to the project
inject({ mode: dev ? 'development' : 'production' });