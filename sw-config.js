/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    swFilePath: './public/service-worker.js',
    cacheId: 'sw-precache-webpack-plugin',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [ /^(?!\/__).*/ ],
    staticFileGlobsIgnorePatterns: [ /\.map$/, /asset-manifest\.json$/ ],
    staticFileGlobs:
        [   './public/rlottie/*.*',
            './public/libwebp/*.*',
            './public/**/**.html',
            './public/static/js/*.js',
            './public/static/css/*.css',
            './public/static/media/*.*',
            './public/*.wasm',
            './public/*.worker.js',
            './public/tdweb.js',
            './public/*.css',
            './public/*.mp3',
            './public/*.jpg',
            './public/*.png',
            './public/data/*.*'],
    stripPrefix: './public',
    replacePrefix: '/telegram-react',
    maximumFileSizeToCacheInBytes: 10485760,
    templateFilePath: './service-worker.tmpl',
    importScripts: ['./custom-service-worker.js'],
    ignoreUrlParametersMatching: [/./]
};