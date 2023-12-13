// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
		gtag_report_conversion: (...args: any[]) => void;
	}

	interface NavLink {
		name: string;
		path: string;
	}

	interface WorkProject {
		name: string;
		img: string;
		skills: string[];
		description: string;
		github?: string;
		site?: string;
	}

	interface BlogPost {
		title: string;
		createdAt: Date;
		htmlBody: string;
		img: string;
	}

	// @TODO: DELETE AFTER MAKING NEW BLOG SYSTEM
	interface BlogParagraph {
		header: string;
		content: string;
		codeExample?: string;
	}
}

export {};
