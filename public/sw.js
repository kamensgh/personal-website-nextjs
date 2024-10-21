if (!self.define) {
  let e,
    s = {}
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (c, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[n]) return
    let t = {}
    const r = (e) => a(e, n),
      d = { module: { uri: n }, exports: t, require: r }
    s[n] = Promise.all(c.map((e) => d[e] || r(e))).then((e) => (i(...e), t))
  }
}
define(['./workbox-87b8d583'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/Kwame_Mensah.pdf',
          revision: 'b6cdd3583083cff76a4163bd961d3712',
        },
        {
          url: '/_next/app-build-manifest.json',
          revision: '73155e9e02c69fd0befba0ee4c2fbe79',
        },
        {
          url: '/_next/static/AEt3US_957buIc0veIjv6/_buildManifest.js',
          revision: 'cca026661e41be30cd398761aac4466b',
        },
        {
          url: '/_next/static/AEt3US_957buIc0veIjv6/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/142-94a05dd66d683cad.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/142-94a05dd66d683cad.js.map',
          revision: '104b9887d7a4019fa034b698fdb0474c',
        },
        {
          url: '/_next/static/chunks/23-9ee12fa5da2e12eb.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/23-9ee12fa5da2e12eb.js.map',
          revision: '8183ce07d1731269b8aefa854fbe0e59',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-318decb56a26469f.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-318decb56a26469f.js.map',
          revision: '5a7e1fc1f9dbbaf92d3df8299c3515cc',
        },
        {
          url: '/_next/static/chunks/app/layout-3c6db7d25e7bc598.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/app/layout-3c6db7d25e7bc598.js.map',
          revision: 'b0be7188fffdb27b3218dc1f855c7f50',
        },
        {
          url: '/_next/static/chunks/app/page-14da2fcc7c4f7200.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/app/page-14da2fcc7c4f7200.js.map',
          revision: '0a082a843d745cbe7a4c6b999802fff0',
        },
        {
          url: '/_next/static/chunks/fd9d1056-e452f7126db14c09.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/fd9d1056-e452f7126db14c09.js.map',
          revision: '811843f6f7b525669e1bcf0d5260b7d9',
        },
        {
          url: '/_next/static/chunks/framework-62ff339676d87553.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/framework-62ff339676d87553.js.map',
          revision: 'c4eca6fadd647876d36ff1d4d9d023ba',
        },
        {
          url: '/_next/static/chunks/main-app-66e7b101b9a69ac8.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/main-app-66e7b101b9a69ac8.js.map',
          revision: '815ace9a5e6820e9e5f1c05f24654153',
        },
        {
          url: '/_next/static/chunks/main-b4ad7bbc58dbb77e.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/main-b4ad7bbc58dbb77e.js.map',
          revision: '6de05cf86ad74b3930ee9259feb7c56b',
        },
        {
          url: '/_next/static/chunks/pages/_app-62e8dfa5ca0e8d5d.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/pages/_app-62e8dfa5ca0e8d5d.js.map',
          revision: '7576c4f70ef18ed7fa2d87a3df47493f',
        },
        {
          url: '/_next/static/chunks/pages/_error-4e67edb43300d372.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/pages/_error-4e67edb43300d372.js.map',
          revision: 'e0f31312c3d1cd748f420aa2d1dcaa9c',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-d681ce15b37bcc03.js',
          revision: 'AEt3US_957buIc0veIjv6',
        },
        {
          url: '/_next/static/chunks/webpack-d681ce15b37bcc03.js.map',
          revision: '45d001caee4160c9315e93ad2f86c854',
        },
        {
          url: '/_next/static/css/225005724423a5dc.css',
          revision: '225005724423a5dc',
        },
        {
          url: '/_next/static/css/225005724423a5dc.css.map',
          revision: '42b80fbb7e8b37aa1b00d6150f445266',
        },
        {
          url: '/_next/static/css/908fb011d8199049.css',
          revision: '908fb011d8199049',
        },
        {
          url: '/_next/static/css/908fb011d8199049.css.map',
          revision: 'f56813864d671d15053543bf36daf596',
        },
        {
          url: '/_next/static/media/634216363f5c73c1-s.woff2',
          revision: '4a1bf14c88bdef173c2a39c5c60e65ce',
        },
        {
          url: '/_next/static/media/88325a2c1fede2f4-s.woff2',
          revision: '93131c3ec4fe9782c2c40a708db9b0b6',
        },
        {
          url: '/_next/static/media/aec774cbe1963439-s.woff2',
          revision: '37f8885214448afc8f3b3678db525598',
        },
        {
          url: '/_next/static/media/d83fe381bb17eb77-s.woff2',
          revision: '215b11e73137fdb7d9a773e0211c29d6',
        },
        {
          url: '/_next/static/media/e1c529c04de64b40-s.p.woff2',
          revision: 'e88b1871ed8eef59b7df05a91a6f2157',
        },
        {
          url: '/images/Artboard 11@2x.jpg',
          revision: '5f288d9f762cfc8e7baffbf0e926162e',
        },
        {
          url: '/images/Artboard 9@2x.jpg',
          revision: 'fbe97d34ab779e362fb17610643b3799',
        },
        {
          url: '/images/abstract.png',
          revision: '599054689bf88cf7054e04eafc820419',
        },
        {
          url: '/images/bg-dark-mobile.jpg',
          revision: '5f288d9f762cfc8e7baffbf0e926162e',
        },
        {
          url: '/images/bg-dark.jpg',
          revision: 'b3ed1ad591711bce86f5db34c92d2543',
        },
        {
          url: '/images/bg-dark.png',
          revision: 'fc88f897668e67b397ee6ef743d08d4b',
        },
        {
          url: '/images/bg-light-mobile.jpg',
          revision: 'fbe97d34ab779e362fb17610643b3799',
        },
        {
          url: '/images/bg-light.jpg',
          revision: '0bb0a2797c81e41b52680569f78b6981',
        },
        {
          url: '/images/bg-light.png',
          revision: '00a9ed49be765ec91b49f8eba70da59a',
        },
        {
          url: '/images/cowry.png',
          revision: 'f31dc4daa115139bbb0db00710fd4cc3',
        },
        {
          url: '/images/email.png',
          revision: '53ac06d2a053fc54ddae86fec5057704',
        },
        {
          url: '/images/email1.png',
          revision: 'eb7a36c29dd1d9cdafc199fea1338bb3',
        },
        {
          url: '/images/fabra.png',
          revision: 'e72860c21e66b5375ac05db015ea1619',
        },
        { url: '/images/fb.png', revision: '4f2eea4a123e85491fe69772b7d757b8' },
        {
          url: '/images/ghanagov.png',
          revision: 'dce42fd3741528f05e7c27828aa34742',
        },
        {
          url: '/images/git.png',
          revision: 'eb9b2818f89d0ded98d44cf0c3c4df04',
        },
        {
          url: '/images/insta.png',
          revision: '033631dd816bb564c55c439c627e78d2',
        },
        {
          url: '/images/logos/black.png',
          revision: 'c6f29d52226c2f06b56b017a4aa3d26a',
        },
        {
          url: '/images/logos/white.png',
          revision: '1127fcf558b6720d1e9a6ef6be5497b5',
        },
        {
          url: '/images/logos/yellow.png',
          revision: '8391dd055ef242216d563e5d796533cc',
        },
        {
          url: '/images/myghqr.png',
          revision: '0787e962a0f1ea5572dc60fb1045b311',
        },
        {
          url: '/images/projectimage.png',
          revision: 'a277d86484fbb095064ba9de39076cee',
        },
        {
          url: '/images/sims.png',
          revision: '31e64fe8df23eec57f46dfc9601c94f3',
        },
        {
          url: '/images/tel.png',
          revision: '0e18a2b9f0ea036ccff725840cb8561d',
        },
        {
          url: '/images/twitter.png',
          revision: '7689939ea02a6046b0a1514a38c4d9b7',
        },
        { url: '/main.css', revision: '53bca89df6d96b531d1eb1ded510d7d1' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
      new e.CacheFirst({
        cacheName: 'images',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 2592e3 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js|css)$/,
      new e.StaleWhileRevalidate({
        cacheName: 'static-resources',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/,
      new e.StaleWhileRevalidate({ cacheName: 'google-fonts', plugins: [] }),
      'GET'
    ),
    e.registerRoute(
      /^\/.*/,
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [new e.CacheableResponsePlugin({ statuses: [0, 200] })],
      }),
      'GET'
    )
})
//# sourceMappingURL=sw.js.map
