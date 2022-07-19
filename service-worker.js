const APP_PREFIX = 'jvmcdonnell-';
const VERSION = 'version06';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./styles.css",
    "./scripts.js",
    "./manifest.webmanifest",
    "./assets/back-end/csharp.png",
    "./assets/back-end/express.png",
    "./assets/back-end/graphql.png",
    "./assets/back-end/jest.png",
    "./assets/back-end/mongodb.png",
    "./assets/back-end/mongoose.png",
    "./assets/back-end/mysql.png",
    "./assets/back-end/node.png",
    "./assets/back-end/rest.png",
    "./assets/back-end/sequelize.svg",
    "./assets/certs/ucf.png",
    "./assets/contact/github.png",
    "./assets/contact/linkedin.png",
    "./assets/contact/mail.png",
    "./assets/contact/phone.png",
    "./assets/front-end/bootstrap.png",
    "./assets/front-end/css.png",
    "./assets/front-end/hdbs.png",
    "./assets/front-end/heroku.png",
    "./assets/front-end/html.png",
    "./assets/front-end/jquery.png",
    "./assets/front-end/js.png",
    "./assets/front-end/react.png",
    "./assets/front-end/s-c.png",
    "./assets/icons/512x512.png",
    "./assets/projects/01.jpg",
    "./assets/projects/02.png",
    "./assets/projects/03.jpg",
    "./assets/projects/04.png",
    "./assets/headshot.jpg",
    "./assets/resume.pdf",
    "./assets/wave-projects-top.svg",
    "./assets/wave-skills-bottom.svg",
    "./assets/wave-skills-top.svg"
];

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Installing cache: ' + CACHE_NAME);
            return cache.addAll(FILES_TO_CACHE);
        })
    )
});

self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            let cacheKeeplist = keyList.filter(function(key) {
                return key.indexOf(APP_PREFIX);
            });
            cacheKeeplist.push(CACHE_NAME);

            return Promise.all(
                keyList.map(function(key, i) {
                    if (cacheKeeplist.indexOf(key) === -1) {
                        console.log('deleting cache: ' + keyList[i]);
                        return caches.delete(keyList[i]);
                    }
                })
            )
        })
    );
});

self.addEventListener("fetch", function (e) {
    console.log('fetch request: ' + e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(req) {
            if (req) {
                console.log('responding with cache: ' + e.request.url);
                return req;
            } else {
                console.log('file is not cached, fetching: ' + e.request.url);
                return fetch(e.request);
            }
        })
    )
})