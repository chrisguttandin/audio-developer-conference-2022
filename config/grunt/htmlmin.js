module.exports = {
    default: {
        files: [
            {
                cwd: 'build/audio-developer-conference-2022',
                dest: 'build/audio-developer-conference-2022',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
