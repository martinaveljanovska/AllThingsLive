var paywall = new InplayerPaywall("9981d40b-f442-47c8-a177-9a74ca0c83a3", [
	{ id: 95698 },
]);

$(function () {
	$(".inplayer-paywall-logout").hide();

	paywall.on("authenticated", () => {
		$(".inplayer-paywall-login").hide();
		$(".inplayer-paywall-logout").show();
	});

	paywall.on("logout", () => {
		location.reload();
	});

	paywall.on('inject', () => {
		$('.inplayer-paywall').addClass('video-wrapper');
		$('#buy-95698').css('display', 'none');
	});

	$('#buy-95698').on('click', () => {
		paywall.showPaywall({
			asset: {
				assetId: 95698
			}
		});
	})
});
