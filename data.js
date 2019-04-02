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
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Knitting and baking are a big part of Maria’s life, because she loves making things for her children and all of her grandkids.<br><br>Over time, her worsening arthritis has made this difficult, to the point where she has stopped completely.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris ends up taking over the baking, and he includes a note in every tin for their children that says “Grandma’s bake shop”.<br><br>He also includes little poems on all the cards, because he loves writing prose.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'As she’s gotten older, she’s been dealing with more and more serious intestinal health issues.<br><br>A few years ago, she underwent an operation to have a permanent bypass put in for her colon, to help relieve some of these problems.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Generally she has been able to take care of the maintenance and cleaning of the bypass device on her own.<br><br>In recent years though, she has become more forgetful due to Alzheimer’s.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'With the combination of the Alzheimer’s and the arthritis, Harris increasingly takes over the maintenance of the device and helping her bathe.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Soon he also has to take on the management of her medication.<br><br>Over time, it takes an increasingly higher amount of his time to care for her properly.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'At the same time, the bypass device, arthritis and Alzheimer’s reduce Maria’s ability and motivation to take care of household tasks such as cleaning and cooking.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Increasingly, Harris takes on the maintenance of the household by himself, for the first time in his life.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The combination of the bypass and the Alzheimer’s also reduces Maria’s motivation to do anything social outside of the house.<br><br>The only activities she will leave for are ones that are music related, because music was her whole life.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Because of the time that Harris is already spending taking care of Maria and the household, this reduces his social involvement as well.<br><br>Over time he feels more and more isolated and overburdened.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Having taught to be self-sufficient his whole life as a male, Harris has found it difficult to ask for help.<br><br>Eventually Harris reaches out for support, and they hire a formal caregiver to come in a few times a week.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Even with the extra help, Harris still feels very isolated and overburdened.<br><br>He considers moving out of their retirement community. He can get some input from his wife, but he generally will have to make the decision on his own.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        image: 'decision-background.jpg',
        choices: [
          'Move in with family',
          'Move to a retirement residence that provides meals, cleaning and social activities',
          'Stay where they are with increased formal caregiving support ',
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
