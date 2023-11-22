<svelte:head>
	<script
		crossorigin="anonymous"
		async
		src="https://www.googletagmanager.com/gtag/js?id=G-YWDL76T2MS"
	></script>
	<script crossorigin="anonymous">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag() {
			dataLayer.push(arguments);
		};
		window.gtag('js', new Date());

		window.gtag('config', 'G-YWDL76T2MS');
	</script>

	<script crossorigin="anonymous">
		window.gtag_report_conversion = function gtag_report_conversion(url) {
			var callback = function () {
				console.log('gtag conversion');
			};
			window.gtag('event', 'conversion', {
				send_to: 'AW-11414972997/DFOGCOvo7vcYEMXUisMq',
				event_callback: callback
			});
			return false;
		};
	</script>
</svelte:head>
