try { 
	var SERVICE_WORKER_PATH = '/service-worker.js';
if (webengage_fs_configurationMap && webengage_fs_configurationMap.config && webengage_fs_configurationMap.config.webPushConfig.swPath) {
	SERVICE_WORKER_PATH = webengage_fs_configurationMap.config.webPushConfig.swPath;
}

function getRefreshStatus() {
    return localStorage.getItem('_we-sw-token-refresh-status');
}
function setRefreshStatus() {
    localStorage.setItem('_we-sw-token-refresh-status', 'done');
}

webengage.onReady(function() {
    var refreshStatus = getRefreshStatus();
    if (refreshStatus !== 'done') {
        if (Notification.permission === 'granted') {
			navigator.serviceWorker.getRegistration(SERVICE_WORKER_PATH)
			.then(function (swRegistration) {
				if (!swRegistration) {
					return navigator.serviceWorker.register(SERVICE_WORKER_PATH);
				}
				return swRegistration;
			})
            .then(function(registration) {
                registration.pushManager.getSubscription().then(function(sub) {
					if (sub) {
						sub.unsubscribe().then(function(success) {
							setRefreshStatus();
							webengage.reload();
						});
					}
				});
            });
        }
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'd8h61gh');
	 }
 }
