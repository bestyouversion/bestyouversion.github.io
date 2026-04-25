const BASE = import.meta.env.BASE_URL

export const IMAGES = {
  adeProfile: `${BASE}images/ade-profile.jpg`,
  adeJoin: `${BASE}images/ade-join.jpg`,
}

export const ADE_BIO = {
  name: 'Ademar Cutang',
  title: 'Your Therapist and Coach',
  subtitle: 'Founder, Bestyouversion Inc.',
  intro: 'With a foundation built on the pursuit of knowledge and a passion for empowering individuals, I am Ademar Cutang, an esteemed professional with a wealth of experience spanning decades in the realm of personal development and transformation.',
  credentials: [
    'Licensed Clinical Psychologist',
    'Doctor in Professional Counseling (On-Going)',
    'Certified Master NLP Practitioner accredited by IGGP UK',
    'Certified Hypnotherapist',
    'Certified Cognitive Behavioral Therapist',
    'Certified Human Resource Professional by The International Federation of Professional Managers (IFPM) Philippines',
  ],
  experience: 'Over the course of my 15-year career, I have dedicated myself to guiding individuals and organizations towards unlocking their full potential. Through therapy sessions, coaching, and engaging talks, my mission revolves around helping you become the best version of yourself.',
  approach: 'Whether you are seeking personal transformation, organizational development, or a captivating speaker for your event, I bring a unique blend of academic excellence and practical expertise to the table. My approach is rooted in the belief that each person has the power to shape their destiny and evolve into a more fulfilled and empowered individual.',
  cta: "Join me on this transformative journey, and let's embark together on a path to self-discovery, growth, and ultimate success. Let's rewrite your story and create a narrative that reflects the best version of yourself.",
}

export const THERAPY_PAGES = {
  nlp: {
    title: 'Neuro-Linguistic Programming (NLP)',
    subtitle: 'Unlocking Potential',
    intro: 'Neuro-Linguistic Programming (NLP) is a psychological methodology that delves into the strategies employed by successful individuals, aiming to apply these strategies for personal goal attainment. It intricately weaves together thoughts, language, and learned behavior patterns, drawing from one\'s experiences to achieve specific outcomes.',
    sections: [
      { heading: 'Evolution of NLP', content: 'In the 1970s, NLP emerged at the University of California, Santa Cruz, primarily developed by John Grinder, a linguist, and Richard Bandler, an information scientist and mathematician. Their groundbreaking book, "Structure of Magic: A Book about Language of Therapy," unveiled communication patterns that distinguished exceptional communicators.' },
      { heading: 'Diverse applications', content: 'Interest in NLP surged in the late 1970s as Bandler and Grinder marketed it as a tool for learning success strategies. Today, NLP finds application in diverse fields, including counseling, medicine, law, business, performing arts, sports, the military, and education.' },
      { heading: 'How NLP works', content: 'Central to NLP are modeling, action, and effective communication. The premise is that understanding how an individual accomplishes a task enables others to replicate and communicate the process. NLP practitioners believe in personal maps of reality, encouraging a systematic overview of situations by analyzing multiple perspectives.' },
      { heading: 'Logical levels of change', content: 'NLP posits natural hierarchies of learning, communication, and change. The six logical levels include: Purpose and Spirituality, Identity, Beliefs and Values, Capabilities and Skills, Behaviors, and Environment. Changes at a lower level can influence higher levels, and vice versa, fostering holistic development.' },
      { heading: 'NLP in therapeutic practice', content: 'A fundamental NLP concept is "The map is not the territory," emphasizing the distinction between belief and reality. NLP therapists focus on understanding an individual\'s unique perception of the world. Advocates claim NLP produces rapid, lasting results, enhancing cognitive and behavioral understanding. Over the years, NLP has been applied successfully in addressing anxiety, phobias, communication challenges, PTSD, depression, ADHD, addiction, and obsessive-compulsive disorders.' },
    ],
  },
  cbt: {
    title: 'Cognitive Behavioral Therapy (CBT)',
    subtitle: 'What is CBT?',
    intro: 'Cognitive Behavioral Therapy (CBT) is a focused and goal-oriented form of talk therapy widely used by mental health professionals, including psychologists, therapists, and counselors. It is a well-researched and widely adopted approach to treating various mental health conditions and emotional challenges.',
    sections: [
      { heading: 'Core principles', content: 'CBT is rooted in key principles: psychological issues often arise from problematic or unhelpful patterns of thinking; learned patterns of unhelpful behavior contribute to mental health challenges; and problematic core beliefs about oneself and the world impact psychological well-being.' },
      { heading: 'What CBT can treat', content: 'CBT is effective in managing a broad spectrum of conditions including depression, OCD, PTSD, ADHD, phobias, personality disorders, eating disorders, substance use disorder, bipolar disorder, schizophrenia (combined with medication), and anxiety. Studies also indicate effectiveness for insomnia, chronic pain, chronic fatigue syndrome, migraines, and IBS.' },
      { heading: 'How CBT works', content: 'The process involves understanding the issue by discussing challenges and setting goals; question-and-answer sessions to explore incidents, fears, and thoughts; recognizing problematic thoughts and behaviors; and collaborating with the therapist to change negative patterns, fostering a positive perspective. CBT typically spans five to twenty sessions.' },
    ],
  },
  hypnotherapy: {
    title: 'Hypnotherapy',
    subtitle: 'Your path to healing',
    intro: 'Unlock the potential of hypnotherapy, a powerful technique leveraging hypnosis for treating various symptoms and health conditions. Unlike the cliché image of a pocket watch-wielding magician, our professional hypnotherapy sessions focus on guided visualizations and relaxation, helping you overcome challenges and acquire valuable coping skills.',
    sections: [
      { heading: 'Why hypnotherapy?', content: 'Used in treating phobias, anxiety, pain management, weight loss, and more, hypnotherapy\'s roots date back to the late 1700s. Modern research has brought credibility to its therapeutic uses, showcasing its effectiveness in inducing a trance-like state, allowing profound focus on inner experiences.' },
      { heading: 'Techniques we employ', content: 'Our techniques include relaxation (visualizing a peaceful state even when facing fears), suggestion (gentle behavioral suggestions to conquer issues), coping skills (cognitive-behavioral techniques for fears), and exploration of past experiences (understanding and addressing origins of challenges).' },
      { heading: 'What hypnotherapy can address', content: 'Consider hypnotherapy for chronic pain, dementia symptoms, nausea related to chemotherapy, anxiety, depression, eating disorders, and PTSD. It offers a holistic approach when delivered by licensed professionals.' },
      { heading: 'Benefits of hypnosis as therapy', content: 'Experience awareness, deep focus, and relaxation during sessions. Break free from distractions and daily concerns, fostering a calm and receptive state. Calming messages ensure a safe environment for addressing problems without panic.' },
      { heading: 'Common misconceptions', content: 'It\'s not stage hypnosis — our focus is therapeutic. You\'ll remember your hypnotic state. You remain in control and cannot be coerced. Hypnotizability doesn\'t correlate with intelligence.' },
    ],
  },
  emdr: {
    title: 'EMDR Therapy',
    subtitle: 'Eye Movement Desensitization and Reprocessing',
    intro: 'EMDR is a structured therapy that encourages the patient to briefly focus on the trauma memory while simultaneously experiencing bilateral stimulation, which is associated with a reduction in the vividness and emotion associated with the trauma memories.',
    sections: [
      { heading: 'What is EMDR?', content: 'Eye Movement Desensitization and Reprocessing (EMDR) is a psychotherapy treatment originally designed to alleviate the distress associated with traumatic memories. It enables people to heal from the symptoms and emotional distress that result from disturbing life experiences.' },
      { heading: 'How EMDR works', content: 'During EMDR therapy, the therapist guides you through sets of bilateral stimulation — typically side-to-side eye movements — while you recall a traumatic event. This process helps your brain reprocess the memory so it becomes less distressing over time.' },
      { heading: 'What EMDR can treat', content: 'EMDR has been extensively researched and proven effective for the treatment of PTSD, anxiety, depression, panic disorders, phobias, grief, and other trauma-related conditions. The World Health Organization recognizes EMDR as an effective treatment for trauma.' },
      { heading: 'What to expect', content: 'A typical EMDR session lasts 60-90 minutes. You remain in control throughout the process and can stop at any time. Most people begin to experience benefits within a few sessions, though the total number of sessions varies depending on the complexity of the issue.' },
    ],
  },
}

export const ARTICLES = [
  {
    id: 'hypnotherapy-comedy',
    title: "Unveiling the Mind's Comedy Club: Healing with Hypnotherapy",
    excerpt: 'Plato once said, "If you want to heal the body, you must first heal the mind." Let\'s explore the wild world of healing through laughter and hypnotherapy.',
    illustration: 'hypnotherapy',
    content: `Plato once dropped the mic, saying, "If you want to heal the body, you must first heal the mind." So, let's hop on this thought train and explore the wild world of healing through laughter and hypnotherapy.

Ever pondered why life feels like a sitcom with plot holes? Relationships, finances, health — it's like our personal drama series. Are we accidentally playing the role of our own villain, or are we the unsung heroes?

Our mind, the undisputed headliner, has a three-ring circus going on — the conscious, the subconscious, and the unconscious. The conscious is the Sherlock Holmes of the mind, analyzing and questioning. The subconscious is the emotional DJ, spinning tunes of beliefs and experiences.

Enter hypnotherapy, the mind's stand-up comedy show! Misunderstood as a sleep-inducing trance, it's actually a heightened state of awareness. It's like Netflix for your subconscious, accessing the root of your issues while you snack on mental popcorn.

Hypnotherapy isn't just a parlor trick; it's a rockstar therapy with a history. Approved by medical bigwigs, including the British and American Medical Associations.

In the grand finale, hypnotherapy takes a bow. Resurging in popularity, it's not just a trend; it's a mind-altering experience. Dive into the mind's comedy club, let laughter echo through the subconscious, and watch the mind's encore performance unfold — a healing symphony of mind and body.`,
  },
  {
    id: 'abc-model',
    title: "Unveiling the Magic of Albert Ellis' ABC Model in CBT",
    excerpt: "Modern CBT traces its lineage back to Aaron Beck's Cognitive Therapy. Let's explore Albert Ellis's ABC Model — a treasure trove of wisdom in therapy.",
    illustration: 'thinking',
    content: `Modern CBT traces its lineage back to Aaron Beck's Cognitive Therapy. Albert Ellis's Rational-Emotive Behavior Therapy (REBT) emerged as one of the roots of this transformative journey.

The ABC Model is a magical formula where external events (A) don't play puppeteer with your emotions (C). Instead, it's the beliefs (B) that hold the strings.

A: Activating Event — Life throws a curveball.
B: Belief — Your mind chimes in with a thought, rational or irrational.
C: Consequence — Emotions and actions follow, either uplifting or challenging.
D: Disputation — Challenge that irrational belief, flip it to rational.
E: New Effect — The magical transformation; healthier consequences bloom.

The ABC Model isn't just for the therapists' office; it's your toolkit for navigating daily life.

As we wrap up, remember: you may not control the activating events, but you wield the mighty sword of beliefs, shaping your own destiny.`,
  },
  {
    id: 'limiting-beliefs',
    title: 'Unleashing Your True Potential: Overcoming Limiting Beliefs',
    excerpt: 'Each of us carries a unique set of beliefs, shaping our behaviors in ways we may not even realize. Hidden within us are limiting beliefs — subtle whispers that impact our decisions.',
    illustration: 'freedom',
    content: `Ever find yourself hesitating to reach for the stars? How much of our limitations are truly the result of our own belief systems?

Limiting beliefs restrict the realm of possibilities for you. These are thoughts or mindsets that you accept as truths, unwittingly putting a leash on your potential.

Here are 5 ways to craft a belief system that elevates you:

Discover the Positive Intention: Unravel the deeper motivations behind your beliefs and update your mental map.

Question Everything: Get curious about your behavior. Do your actions truly serve you?

Search for Evidence: Believing something doesn't make it true. Dive deep into your limiting beliefs.

Upgrade Your Thinking: Don't let past experiences dictate your present.

Ownership Check: Are these beliefs truly yours, or have they been handed down by others?

Get ready to unleash your true potential and rewrite the narrative of your extraordinary life!`,
  },


]

export const PRIVACY_POLICY = {
  lastUpdated: 'April 25, 2026',
  sections: [
    {
      heading: 'Information we collect',
      content: 'When you book a session through our website, we collect your full name, email address, phone number, and any notes you provide about your concerns. We also collect payment information through our secure payment processor, PayMongo.',
    },
    {
      heading: 'Legal basis for processing',
      content: 'We process your personal data based on (a) your consent, given when you submit the booking form; (b) the necessity to fulfill our contractual obligations to provide therapy services; and (c) our legitimate interest in managing appointments and operating the practice. You may withdraw your consent at any time by contacting us.',
    },
    {
      heading: 'How we use your information',
      content: 'We use your personal information solely to schedule and manage your therapy sessions, send appointment confirmations and reminders via Google Calendar, process payments, and communicate with you about your bookings. We will never sell, rent, or share your personal information with third parties for marketing purposes.',
    },
    {
      heading: 'Data storage and security',
      content: 'Your data is stored securely using Supabase, a trusted cloud database platform with encryption at rest and in transit. Payment processing is handled by PayMongo, a PCI-DSS compliant payment gateway. We do not store your credit card or payment details on our servers. Calendar events are managed through Google Calendar, which uses Google\'s enterprise-grade security.',
    },
    {
      heading: 'Data retention',
      content: 'We retain your personal data for as long as necessary to provide our services and to comply with our legal obligations. Booking and session records are kept for five (5) years after your last interaction, in accordance with professional record-keeping standards for mental health practitioners. After this period, your data is securely deleted or anonymized.',
    },
    {
      heading: 'Confidentiality',
      content: 'As mental health professionals, we are bound by strict confidentiality standards. All information shared during consultations and therapy sessions is kept strictly confidential in accordance with the Philippine Mental Health Act (RA 11036), professional ethics, and the Data Privacy Act of 2012 (RA 10173). Disclosures are made only with your written consent or where required by law.',
    },
    {
      heading: 'Your rights under the Data Privacy Act',
      content: 'Under the Data Privacy Act of 2012, you have the right to: be informed of data processing; access your personal data; correct inaccuracies; object to processing; request deletion or blocking of your data; data portability; and to be indemnified for damages from inaccurate or unauthorized use of your data. To exercise any of these rights, contact our Data Protection Officer (see below).',
    },
    {
      heading: 'Data Protection Officer',
      content: 'Our designated Data Protection Officer is Ademar Serrano Cutang, Licensed Clinical Psychologist. You may reach him at ade@bestyouversion.com or +63 919 374 6888 for any questions, concerns, or requests regarding your personal data.',
    },
    {
      heading: 'Filing a complaint',
      content: 'If you believe your data privacy rights have been violated, you may file a complaint with the National Privacy Commission (NPC). Contact: complaints@privacy.gov.ph · 5th Floor Delegation Building, PICC Complex, Pasay City, Philippines · https://www.privacy.gov.ph',
    },
    {
      heading: 'Cookies',
      content: 'Our website uses only essential cookies necessary for core functionality (e.g., maintaining your session). We do not use advertising, analytics, or third-party tracking cookies.',
    },
    {
      heading: 'Changes to this notice',
      content: 'We may update this Privacy Notice from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top will be revised whenever changes are made. We encourage you to review this notice periodically.',
    },
    {
      heading: 'Contact us',
      content: 'For any questions about this Privacy Notice or how we handle your personal data, please contact us at ade@bestyouversion.com or +63 919 374 6888.',
    },
  ],
}