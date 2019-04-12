module.exports = {
  intro: {
    //currentPath
    destinations: [
      'maria',
      'bob',
      'joe',
    ],
    choices: [
      'Move in with family',
      'Move to a retirement residence that provides meals, cleaning and social activities',
      'Stay where they are with increased formal caregiving support',
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
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Maria was a stay-at-home mom when she and her husband were raising their five children.<br><br>Her husband has always worked, and she has always maintained the household.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Knitting and baking are a big part of Maria’s life, because she loves making things for her children and all of her grandkids.<br><br>Over time, her worsening arthritis has made this difficult, to the point where she has stopped completely.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Harris ends up taking over the baking, and he includes a note in every tin for their children that says “Grandma’s bake shop”.<br><br>He also includes little poems on all the cards, because he loves writing prose.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'As she’s gotten older, she’s been dealing with more and more serious intestinal health issues.<br><br>A few years ago, she underwent an operation to have a permanent bypass put in for her colon, to help relieve some of these problems.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Generally she has been able to take care of the maintenance and cleaning of the bypass device on her own.<br><br>In recent years though, she has become more forgetful due to Alzheimer’s.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'With the combination of the Alzheimer’s and the arthritis, Harris increasingly takes over the maintenance of the device and helping her bathe.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Soon he also has to take on the management of her medication.<br><br>Over time, it takes an increasingly higher amount of his time to care for her properly.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'At the same time, the bypass device, arthritis and Alzheimer’s reduce Maria’s ability and motivation to take care of household tasks such as cleaning and cooking.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Increasingly, Harris takes on the maintenance of the household by himself, for the first time in his life.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'The combination of the bypass and the Alzheimer’s also reduces Maria’s motivation to do anything social outside of the house.<br><br>The only activities she will leave for are ones that are music related, because music was her whole life.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Because of the time that Harris is already spending taking care of Maria and the household, this reduces his social involvement as well.<br><br>Over time he feels more and more isolated and overburdened.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Having taught to be self-sufficient his whole life as a male, Harris has found it difficult to ask for help.<br><br>Eventually Harris reaches out for support, and they hire a formal caregiver to come in a few times a week.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Even with the extra help, Harris still feels very isolated and overburdened.<br><br>He considers moving out of their retirement community. He can get some input from his wife, but he generally will have to make the decision on his own.',
      //   image: 'harris-background.jpg',
      // },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        image: 'decision-background.jpg',
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
      'path1',
      'path2',
      'path3',
    ],
    choices: [
      'Give her antibiotics',
      'Don’t give her antibiotics',
    ],
    steps: [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris decides to move he and Maria in with his second eldest daughter an hour away in Guelph. With the household stuff mostly taken care of, Harris feels a lot less burdened. He also has a nearby social element now that he’s living with his family.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'It does put some additional stress on his daughter though, now that her parents are in close proximity. With the sudden responsibility to watch her mother more often, and her natural inclination to be nurturing, she often feels emotionally drained.',
        image: 'image2.png',
      },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'One day Harris goes to give Maria a bath and discovers dark bruising on her abdomen. He asks a neighbour, who is a retired nurse, to take a look and she recommends they go to the hospital.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'At the hospital, Maria is examined and given medication to help deal with the pain. At first the doctors think it’s internal bleeding, and they run some tests to confirm.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'When the tests come back, they find out that it’s an infection that’s rapidly spread through a large portion of her abdomen. They can start antibiotics to slow it down, but they’ll have to operate to actually remove it entirely.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'If they operate, it means removing all of the infected area. The recovery will be very difficult, and there’s no guarantee she will get better. Because they don’t know the extent of the infected area they’ll have to remove, they don’t know how much her quality of life will be reduced.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Because of the pain medication, Maria is incapacitated and Harris has to make the decision and give consent as her Secondary Decision Maker (SDM). One of his sons and his wife are with him, but the rest of the family are all a few hours away and likely wouldn’t be able to get there until the next day.',
      //   image: 'harris-background.jpg',
      // },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        text: 'whatever2',
        image: 'decision-background.jpg',
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
        text: 'bob step 1',
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
        text: 'joe step 1',
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
  path1: {
    destinations: [
      'path1',
      'path2',
      'path3',
    ],
    steps: [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'path 1',
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
}
