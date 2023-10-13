/*!
 * Sanitize an HTML string
 */
export function cleanHTML(str: string): string {
	/**
	 * Convert the string to an HTML document
	 * @return {Node} An HTML document
	 */
	function stringToHTML() {
		let parser = new DOMParser();
		let doc = parser.parseFromString(str, 'text/html');
		return doc.body || document.createElement('body');
	}

	// Convert the string to HTML
	let html = stringToHTML();
	// Sanitize it
	removeScripts(html);
	return html.innerHTML as string;
}

function removeScripts(html: Element) {
	let scripts = html.querySelectorAll('script');
	for (let script of scripts) {
		script.remove();
	}
}

function clean(html: Element) {
	let nodes = html.children;
	for (let node of nodes) {
		removeAttributes(node);
		clean(node);
	}
}

function removeAttributes(elem: Element) {
	// Loop through each attribute
	// If it's dangerous, remove it
	let atts = elem.attributes;
	for (let { name, value } of atts) {
		if (!isPossiblyDangerous(name, value)) continue;
		elem.removeAttribute(name);
	}
}

function isPossiblyDangerous(name: string, value: string) {
	let val = value.replace(/\s+/g, '').toLowerCase();
	if (['src', 'href', 'xlink:href'].includes(name)) {
		if (val.includes('javascript:') || val.includes('data:text/html')) return true;
	}
	if (name.startsWith('on')) return true;
}
