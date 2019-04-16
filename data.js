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
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'She and her husband, Harris, have been married for over 60 years, and happily retired for 20.<br><br>They currently live in a single-dwelling household in a senior’s community.',
      //   image: 'harris-background.jpg',
      // },
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
      //   text: 'As Maria has gotten older, she’s been dealing with more serious intestinal health issues.<br><br>To improve some of these problems, she had a permanent bypass put in for her colon.',
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
      //   text: 'At the same time, Maria’s health issues reduce her ability and motivation to take care of household tasks such as cleaning and cooking.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'For the first time in his life, Harris takes on the maintenance of the household by himself.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Maria’s health issues also reduce her motivation to do anything social outside of the house.<br><br>The only activities she will leave for are ones that are music related, because music was her whole life.',
      //   image: 'maria-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Because Harris is busy taking care of everything, this reduces his social involvement as well. <br><br>Over time he feels more and more isolated and overburdened.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'As a male, Harris has found it difficult to ask for help.<br><br>Eventually he reaches out for support, and they hire a formal caregiver to come in a few times a week.',
      //   image: 'harris-background.jpg',
      // },
      // {
      //   presentTemplate: 'info',
      //   mobileTemplate: 'look-at-screen',
      //   text: 'Even with the extra help, Harris still feels overwhelmed. He considers moving somewhere with more support.<br><br>He will mostly have to make the decision on his own.',
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
        image: 'results-background.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 2,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ],
  },
  path2a_family: {
    destinations: [
      'path3a_antibiotics',
      'path3b_pass',
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
        text: 'But with the sudden responsibility of looking after her mother, his daughter feels stressed.<br><br>Because of her natural inclination to be nurturing, she often feels emotionally drained.',
        image: 'maria-background.jpg',
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
        image: 'results-background.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 8,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ]
  },
  path2b_residence: {
    destinations: [
      'path3a_antibiotics',
      'path3b_pass',
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
        image: 'maria-background.jpg',
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
        image: 'results-background.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 8,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ]
  },
  path2c_stay: {
    destinations: [
      'path3a_antibiotics',
      'path3b_pass',
    ],
    choices: [
      'Give her antibiotics so the rest of their family can get there',
      'Don’t give her antibiotics (let the infection run its course)',
    ],
    steps: [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris decides to bring more formal caregiving support to their house.<br><br>Harris feels less stressed and is able to be more socially active. Both he and Maria are happy they were able to stay in their own home.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Unfortunately, the CCAC doesn’t provide as many hours as he and Maria actually need, and so a lot of the burden still falls onto him.',
        image: 'harris-background.jpg',
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
        image: 'results-background.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 8,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ]
  },
  path3a_antibiotics: {
    destinations: [
      'path4a_everyoneGo',
      'path4b_2stay',
    ],
    choices: [
      'Everyone goes to the motel',
      'Some stay, some go to the motel',
    ],
    steps : [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris decides to give Maria antibiotics. They stay with her most of the night, and then check into a nearby motel to get some sleep.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The next day most of Harris’s family is able to get to the hospital.<br><br>They all take turns seeing her, because the ICU is too small for the entire family to fit. Because of the infection, everyone has to wear gowns, masks and gloves.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris sits by her bed reciting his poems to her, holding her hand and stroking her hair.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Now that they’ve had time to run more tests, they’ve found that the infection runs deep.<br><br>If they were to operate, it would be a very difficult recovery for Maria. It will take months in the hospital to heal, and she will have a large, permanent wound.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Having grieved as he watched his wife slowly slip away for the last few years, Harris feels ready to let her pass away.<br><br>Now that everyone is together, the family is able to discuss what they think should be done, and what Maria would have wanted.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris makes the decision to discontinue antibiotics and have the doctors make her as comfortable as possible.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'But because they never created an Advance Care Plan (ACP), it’s difficult to convince the doctor that they’re acting in the best interests of Maria and doing what she would have wanted.<br><br>The doctor needs some sort of proof to be able to authorize it.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris goes into his legal documents to retrieve hand-written paper where he and Maria wrote down their wishes.<br><br>It helps support their case, but it isn’t a legal document. Harris still has to have a lengthy discussion with the doctor to convince her they’re making the decision Maria would have if she were able.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The doctor eventually agrees.<br><br>They discontinue the antibiotics and shift towards comfort, rather than curative care for Maria.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The doctors tell Harris and the family that they’re not sure how long it will be, it could be hours, it could be days.<br><br>Exhausted, the family has to decide whether to go back to the motel or stay with Maria at the hospital.',
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
        image: 'results-background.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 11,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ]
  },
  path3b_pass: {
    destinations: [
      'path3b1_forNow',
      'path3b2_push',
    ],
    choices: [
      'Give her antibiotics for now',
      'Push for them to let her pass away',
    ],
    steps : [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris decides to not give Maria antibiotics, but the doctor pushes back against Harris.<br><br>Because it’s still too early to tell the extent of the infection, she doesn’t think it’s the right call to make. She recommends that Harris start antibiotics to at least slow down the infection until they can assess the situation further.',
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
        image: 'results-background.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 2,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ]
  },
  path3b1_forNow: {
    destinations: [
      'path4a_everyoneGo',
      'path4b_2stay',
    ],
    choices: [
      'Everyone goes to the motel',
      'Some stay, some go to the motel',
    ],
    steps : [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris agrees to give Maria antibiotics for now. They stay with her most of the night, and then check into a nearby motel to get some sleep.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The next day most of Harris’s family is able to get to the hospital.<br><br>They all take turns seeing her, because the ICU is too small for the entire family to fit. Because of the infection, everyone has to wear gowns, masks and gloves.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris sits by her bed reciting his poems to her, holding her hand and stroking her hair.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Now that they’ve had time to run more tests, they’ve found that the infection runs deep.<br><br>If they were to operate, it would be a very difficult recovery for Maria. It will take months in the hospital to heal, and she will have a large, permanent wound.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Having grieved as he watched his wife slowly slip away for the last few years, Harris feels ready to let her pass away.<br><br>Now that everyone is together, the family is able to discuss what they think should be done, and what Maria would have wanted.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris makes the decision to discontinue antibiotics and have the doctors make her as comfortable as possible.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'But because they never created an Advance Care Plan (ACP), it’s difficult to convince the doctor that they’re acting in the best interests of Maria and doing what she would have wanted.<br><br>The doctor needs some sort of proof to be able to authorize it.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris goes into his legal documents to retrieve hand-written paper where he and Maria wrote down their wishes.<br><br>It helps support their case, but it isn’t a legal document. Harris still has to have a lengthy discussion with the doctor to convince her they’re making the decision Maria would have if she were able.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The doctor eventually agrees.<br><br>They discontinue the antibiotics and shift towards comfort, rather than curative care for Maria.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The doctors tell Harris and the family that they’re not sure how long it will be, it could be hours, it could be days.<br><br>Exhausted, the family has to decide whether to go back to the motel or stay with Maria at the hospital.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision',
        resetResults: true,
        text: 'whatever2',
        image: 'decision-background',
      },
      {
        presentTemplate: 'present-results',
        mobileTemplate: 'mobile-results',
        resetResults: true,
        text: 'whatever2',
        image: 'results-background',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 11,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ]
  },
  path3b2_push: {
    destinations: [
      'path4a_everyoneGo',
      'path4b_2stay',
    ],
    choices: [
      'Everyone goes to the motel',
      'Some stay, some go to the motel',
    ],
    steps : [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris decides to push back against the recommendations of the doctor and won’t give consent for her to be given antibiotics.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'But because he doesn’t have ACP documentation, the doctor can’t authorize the discontinuation of antibiotics until more tests are run.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris agrees to give Maria antibiotics for now. They stay with her most of the night, and then check into a nearby motel to get some sleep.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The next day most of Harris’s family is able to get to the hospital.<br><br>They all take turns seeing her, because the ICU is too small for the entire family to fit. Because of the infection, everyone has to wear gowns, masks and gloves.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris sits by her bed reciting his poems to her, holding her hand and stroking her hair.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Now that they’ve had time to run more tests, they’ve found that the infection runs deep.<br><br>If they were to operate, it would be a very difficult recovery for Maria. It will take months in the hospital to heal, and she will have a large, permanent wound.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Having grieved as he watched his wife slowly slip away for the last few years, Harris feels ready to let her pass away.<br><br>Now that everyone is together, the family is able to discuss what they think should be done, and what Maria would have wanted.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris makes the decision to discontinue antibiotics and have the doctors make her as comfortable as possible.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'But because they never created an Advance Care Plan (ACP), it’s difficult to convince the doctor that they’re acting in the best interests of Maria and doing what she would have wanted.<br><br>The doctor needs some sort of proof to be able to authorize it.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Harris goes into his legal documents to retrieve hand-written paper where he and Maria wrote down their wishes.<br><br>It helps support their case, but it isn’t a legal document. Harris still has to have a lengthy discussion with the doctor to convince her they’re making the decision Maria would have if she were able.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The doctor eventually agrees.<br><br>They discontinue the antibiotics and shift towards comfort, rather than curative care for Maria.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The doctors tell Harris and the family that they’re not sure how long it will be, it could be hours, it could be days.<br><br>Exhausted, the family has to decide whether to go back to the motel or stay with Maria at the hospital.',
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
        image: 'results-background.png',
      },
      {
        presentTemplate: 'present-decision',
        mobileTemplate: 'mobile-decision-random',
        resetResults: true,
        image: 'decision-background.jpg',
        to: 13,
        // works because it's in an array instead of an object, so it's ordinal
      },
    ]
  },
  path4a_everyoneGo: {
    steps : [
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The whole family goes back to the motel. It’s not often that everyone is together in one place, so it’s nice spending time with each other despite the circumstances.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'The next day everyone goes to the hospital and they spend the day making her as comfortable as possible.<br><br>They hold her hand and sing her the songs that she used to sing to them as children.<br><br>Later that night she passes away in her sleep.',
        image: 'maria-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen',
        text: 'Despite his grief, Harris feels at peace and relieved that they were able to make the decision that was best for her.',
        image: 'harris-background.jpg',
      },
      {
        presentTemplate: 'info',
        mobileTemplate: 'look-at-screen-final',
        text: 'His family helps him return to his life on his own. It’s an adjustment, but over time he gets used it.<br><br>Over the next year, he perfects his baking recipes and continues making tins for his family under “Grandpa’s bake shop”.',
        image: 'harris-background.jpg',
      },
    ]
  },
      path4b_2stay: {
        steps : [
          {
            presentTemplate: 'info',
            mobileTemplate: 'look-at-screen',
            text: 'The family decides that Maria shouldn’t be alone. Two of them stay at the hospital overnight with her, and the rest go back to the motel.',
            image: 'harris-background.jpg',
          },
          {
            presentTemplate: 'info',
            mobileTemplate: 'look-at-screen',
            text: 'The next day everyone goes to the hospital and they spend the day making her as comfortable as possible.<br><br>They hold her hand and sing her the songs that she used to sing to them as children.<br><br>Later that night she passes away in her sleep.',
            image: 'maria-background.jpg',
          },
          {
            presentTemplate: 'info',
            mobileTemplate: 'look-at-screen',
            text: 'Despite his grief, Harris feels at peace and relieved that they were able to make the decision that was best for her.',
            image: 'harris-background.jpg',
          },
          {
            presentTemplate: 'info',
            mobileTemplate: 'look-at-screen-final',
            text: 'His family helps him return to his life on his own. It’s an adjustment, but over time he gets used it.<br><br>Over the next year, he perfects his baking recipes and continues making tins for his family under “Grandpa’s bake shop”.',
            image: 'harris-background.jpg',
          },
    ]
  },
}
