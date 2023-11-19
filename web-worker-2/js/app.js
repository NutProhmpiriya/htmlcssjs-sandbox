const APP = {
    SW: null,
    init() {
        if('serviceWorker' in navigator) {
            navigator.serviceWorker.register("./sw.js")
        } else {
            console.log('Service workers are not supported');
        }
    }
}

document.addEventListener('DOMContentLoaded', APP.init);