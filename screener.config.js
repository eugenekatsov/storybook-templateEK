module.exports = {
    projectRepo: 'abrown/storyBook',
    storybookConfigDir: '.storybook',
<<<<<<< HEAD
    storybookStaticBuildDir: 'storybook-static',
    apiKey: process.env.SCREENER_API_KEY,
    baseBranch: "main",
    resolution: '360x640',
=======
    apiKey: process.env.SCREENER_API_KEY,
    failureExitCode: 0,
    baseBranch: 'main',
    commit: process.env.COMMIT_SHA,
    resolutions: [
      '360x640',
      '1024x768'
    ],
>>>>>>> a9f542802b3447d5d99328bd8f6865433e9790f4
    browsers: [
      {
        browserName: 'chrome',
        version: '102.0'
      },
      {
        browserName: 'chrome',
        version: '103.0'
      },
      // {
      //     browserName: 'firefox',
      //     version: '99.0'
      //   },
      //   {
      //       browserName: 'microsoftedge',
      //       version: '99.0',
      //     },
          // {
            // platformName: "macOS 11",
            // browserName: 'chrome',
            // version: '13.1',
          // },
        ],
        sauce: {
          username: process.env.SAUCE_USERNAME,
          accessKey: process.env.SAUCE_ACCESS_KEY,
          launchSauceConnect: true
    //       // avoidProxy: true
    //       // maxConcurrent: 50,
    //   // maxConcurrent: 24,
    }
  };