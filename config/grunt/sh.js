module.exports = () => {
    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/audio-developer-conference-2022/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /audio-developer-conference-2022/ --configuration production --subresource-integrity'
        },
        'continuous': {
            cmd: 'npx ng test'
        },
        'e2e': {
            cmd: `npx playwright install --with-deps && \
                npx playwright test --config config/playwright/config.ts`
        },
        'rimraf-source-maps': {
            cmd: 'rimraf build/audio-developer-conference-2022/browser/**.map'
        },
        'smoke': {
            cmd: `npx playwright install --with-deps && \
                IS_SMOKE_TEST=true npx playwright test --config config/playwright/config.ts && \
                npx hint --telemetry=off https://chrisguttandin.github.io/audio-developer-conference-2022`
        },
        'test': {
            cmd: 'npx ng test --watch false'
        },
        'verify': {
            cmd: `npx bundle-buddy build/audio-developer-conference-2022/browser/*.js.map && \
                grep -r build/audio-developer-conference-2022/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};
