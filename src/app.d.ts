// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface NavLink {
		name: string,
		path: string
	}

	interface WorkProject {
		name: string,
		img: string;
		description: string;
		description2?: string;
		bullet_points: string[];
	}
}

export {};
