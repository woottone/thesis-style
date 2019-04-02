module.exports = {
  harris: {
    destinations: [
      'maria',
      'bob',
      'joe',
    ],
    steps : [
        {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'This is Maria.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'She and her husband, Harris, have been married for over 60 years, and happily retired for 20.<br><br>They currently live in a single-dwelling household in a seniors community.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Maria was a stay-at-home mom when she and her husband were raising their five children.<br><br>Her husband has always worked, and she has always maintained the household.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
        choices: [
          'make him stay',
          'do something else',
        ],
      },
      {
        presentTemplate: 'present-results',
        mobileTemplate: 'mobile-results',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
      },
    ],
  },
  maria: {
    destinations: [
      'maria',
      'bob',
      'joe',
    ],
    steps: [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'whatever',
        image: 'image.png',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'whatever2',
        image: 'image2.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
        choices: [
          'make him stay',
          'do something else',
        ],
      },
      {
        presentTemplate: 'present-results',
        mobileTemplate: 'mobile-results',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
      },
    ]
  },
  bob: {
    destinations: [
      'maria',
      'bob',
      'joe',
    ],
    steps : [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'whatever',
        image: 'image.png',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'whatever2',
        image: 'image2.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
      },
      {
        presentTemplate: 'present-results',
        mobileTemplate: 'mobile-results',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
      },
    ]
  },
  joe: {
    destinations: [
      'maria',
      'bob',
      'joe',
    ],
    steps: [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'whatever',
        image: 'image.png',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'whatever2',
        image: 'image2.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
        destinations: [
          'maria',
          'bob',
          'joe',
        ]
      },
      {
        presentTemplate: 'present-results',
        mobileTemplate: 'mobile-results',
        resetResults: true,
        text: 'whatever2',
        image: 'image2.png',
      },
    ],
  },
}
