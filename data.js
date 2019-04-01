module.exports = {
  harris: [
    {
      presentTemplate: 'info',
      mobileTemplate: 'look-at-screen',
      text: 'whatever',
      image: 'image.png',
    },
    {
      presentTemplate: 'info',
      mobileTemplate: 'look-at-screen',
      text: 'whatever2<br>asdf',
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
  maria: [
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
  bob: [
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
  joe: [
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
  ]
}
