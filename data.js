module.exports = {
  path1_intro: {
    //currentPath
    destinations: [
      'path2a_family',
      'path2b_residence',
      'path2c_stay',
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
        text: 'She and her husband, Harris, have been married for over 60 years, and happily retired for 20.<br><br>They currently live in a single-dwelling household in a senior’s community.',
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
        text: 'As Maria has gotten older, she’s been dealing with more serious intestinal health issues.<br><br>To improve some of these problems, she had a permanent bypass put in for her colon.',
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
        text: 'At the same time, Maria’s health issues reduce her ability and motivation to take care of household tasks such as cleaning and cooking.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'For the first time in his life, Harris takes on the maintenance of the household by himself.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Maria’s health issues also reduce her motivation to do anything social outside of the house.<br><br>The only activities she will leave for are ones that are music related, because music was her whole life.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Because Harris is busy taking care of everything, this reduces his social involvement as well. <br><br>Over time he feels more and more isolated and overburdened.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'As a male, Harris has found it difficult to ask for help.<br><br>Eventually he reaches out for support, and they hire a formal caregiver to come in a few times a week.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Even with the extra help, Harris still feels overwhelmed. He considers moving somewhere with more support.<br><br>He will mostly have to make the decision on his own.',
        image: 'harris-background.jpg',
      },
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
        image: 'results-background.png',
      },
    ],
  },
  path2a_family: {
    destinations: [
      'path1',
      'path2',
      'path3',
    ],
    choices: [
      'Give her antibiotics so the rest of their family can get there',
      'Don’t give her antibiotics (let the infection run its course)',
    ],
    steps: [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris decides they should move in with his second eldest daughter in Guelph.<br><br>With the household taken care of, Harris feels a lot less burdened. He also has a nearby social element now that he’s living with his family.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'But his daughter feels more stressed, with the sudden responsibility of looking after her mother.<br><br>Because of her natural inclination to be nurturing, she often feels emotionally drained.',
        image: 'image2.png',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'One day Harris goes to give Maria a bath and discovers dark bruising on her abdomen.<br><br>He asks a neighbour, who is a retired nurse, to take a look and she recommends they go to the hospital.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'At the hospital, Maria is examined and given medication to help deal with the pain.<br><br>The doctors think its internal bleeding, and they run some tests to confirm.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'When the tests come back, they find out that it’s an infection that’s rapidly spread through a large portion of her abdomen.<br><br>They can start antibiotics to slow it down, but they’ll have to operate to remove it entirely.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'If they operate, it means removing all of the infected area, which will result in a large wound. It will take months in the hospital to heal.<br><br>Maria’s quality of life will be permanently reduced. They can’t say how much it will be impacted, because they don’t know the extent of the infection.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Because of the pain medication, Maria is incapacitated. Harris has to make the decision and give consent as her Secondary Decision Maker (SDM).<br><br>One of his sons and his wife are with him, but the rest of the family are all a few hours away and likely wouldn’t be able to get there until the next day.',
        image: 'harris-background.jpg',
      },
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
  path2b_residence: {
    destinations: [
      'path1',
      'path2',
      'path3',
    ],
    choices: [
      'Give her antibiotics so the rest of their family can get there',
      'Don’t give her antibiotics (let the infection run its course)',
    ],
    steps: [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris decides to move he and Maria to a retirement facility near one of their daughters.<br><br>Now that their meals and housekeeping are taken care of, Harris is able to get involved in the community more.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Unfortunately, Maria doesn’t get involved in the community as much as Harris had hoped.<br><br>He starts to worry that it was a very drastic change for her, and that a new environment may have been worse for her health.',
        image: 'image2.png',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'One day Harris goes to give Maria a bath and discovers dark bruising on her abdomen.<br><br>He asks a neighbour, who is a retired nurse, to take a look and she recommends they go to the hospital.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'At the hospital, Maria is examined and given medication to help deal with the pain.<br><br>The doctors think its internal bleeding, and they run some tests to confirm.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'When the tests come back, they find out that it’s an infection that’s rapidly spread through a large portion of her abdomen.<br><br>They can start antibiotics to slow it down, but they’ll have to operate to remove it entirely.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'If they operate, it means removing all of the infected area, which will result in a large wound. It will take months in the hospital to heal.<br><br>Maria’s quality of life will be permanently reduced. They can’t say how much it will be impacted, because they don’t know the extent of the infection.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Because of the pain medication, Maria is incapacitated. Harris has to make the decision and give consent as her Secondary Decision Maker (SDM).<br><br>One of his sons and his wife are with him, but the rest of the family are all a few hours away and likely wouldn’t be able to get there until the next day.',
        image: 'harris-background.jpg',
      },
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
