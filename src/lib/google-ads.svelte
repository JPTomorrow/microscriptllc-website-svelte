<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-YWDL76T2MS">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag(...args) {
			window.dataLayer.push(args);
		};
		window.gtag('js', new Date());
		window.gtag('config', 'G-YWDL76T2MS');
	</script>

	<script>
		window.gtag_report_conversion = function gtag_report_conversion(url) {
			var callback = function () {
				if (typeof url != 'undefined') {
					window.location = url;
				}
			};
			window.gtag('event', 'conversion', {
				send_to: 'AW-11414972997/DFOGCOvo7vcYEMXUisMq',
				event_callback: callback
			});
			return false;
		};
	</script>
</svelte:head>
