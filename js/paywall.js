var paywall = new InplayerPaywall("9981d40b-f442-47c8-a177-9a74ca0c83a3", [
	{ id: 95698 },
]);

$(function () {
	$(".inplayer-paywall-logout").hide();

	paywall.on("authenticated", function () {
		$(".inplayer-paywall-login").hide();
		$(".inplayer-paywall-logout").show();
	});

	paywall.on("logout", function () {
		location.reload();
	});

	paywall.on("payment", function (a, b) {
		// console.log(a,b)
		window.location.replace("videos.html");
	});
});
