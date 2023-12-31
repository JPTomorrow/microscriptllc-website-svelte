import { render } from 'svelte-email';
import Hello from '$lib/email.svelte';
import postmark from 'postmark';
import { PUBLIC_BRAND_NAME } from '$env/static/public';
import { PRIVATE_POSTMARK_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const data = await request.formData();
	const msg = data.get('msg') as string;
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const sq = (data.get('standardQuote') as string) === 'on';
	const eq = (data.get('eCommerceQuote') as string) === 'on';
	const aiq = (data.get('aiIntegrationQuote') as string) === 'on';

	const client = new postmark.ServerClient(PRIVATE_POSTMARK_API_KEY);
	const emailHtml = render({
		template: Hello,
		props: {
			name: name,
			email: email,
			msg: msg,
			standardQuote: sq,
			eCommerceQuote: eq,
			aiIntegrationQuote: aiq
		}
	});

	const options = {
		From: 'connect@microscriptllc.com',
		To: 'connect@microscriptllc.com',
		Subject: `${PUBLIC_BRAND_NAME} contact form - ${name}`,
		HtmlBody: emailHtml
	};

	await client.sendEmail(options).catch((err) => {
		console.error(`error sending email with postmark: ${err.message}`);
		return new Response(JSON.stringify(err), { status: 500 });
	});

	return new Response('{}', { status: 200 });
}
