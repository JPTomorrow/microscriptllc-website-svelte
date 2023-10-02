import { render } from 'svelte-email';
import Hello from '$lib/email.svelte';
import postmark from 'postmark';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
	const data = await request.formData();
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const msg = data.get('msg') as string;
	const client = new postmark.ServerClient(env.POSTMARK_API_KEY);

	const emailHtml = render({
		template: Hello,
		props: {
			name: name,
			email: email,
			msg: msg
		}
	});

	const options = {
		From: 'connect@microscriptllc.com',
		To: 'connect@microscriptllc.com',
		Subject: `microscriptllc.com contact form - ${name}`,
		HtmlBody: emailHtml
	};

	client.sendEmail(options).then(() => {
		console.log(`email sent: ${[name, email, msg].join(' | ')}`);
	});

	return new Response('{}', { status: 200 });
}
