const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

const quotes = [
  {
    quote: 'Action is the antidote to despair',
    author: 'Joan Baez',
    profession: 'American Musician'
  },
  {
    quote:
      'If you have no confidence in self, you are twice defeated in the race of life. With confidence, you have won even before you have started.',
    author: 'Marcus Garvey',
    profession: 'Jamaican publisher, journalist, entrepreneur and orator'
  },
  {
    quote:
      "If you hire only those people you understand, the company will never get people better than you are. Always remember that you often find outstanding people among those you don't particularly like.",
    author: 'Soichiro Honda',
    profession: 'Japanese engineer and industrialist'
  },
  {
    quote:
      "Challenges make you discover things about yourself that you never really knew. They're what make the instrument stretch -- what make you go beyond the norm.",
    author: 'Cicely Tyson',
    profession: 'American actress'
  },
  {
    quote: 'If there is no struggle, there is no progress',
    author: 'Frederick Douglass',
    profession: 'American abolitionist, author and orator'
  },
  {
    quote: 'Where all think alike, no one thinks very much.',
    author: 'Walter Lippmann',
    profession: 'writer and journalist'
  },
  {
    quote:
      'Whenever the world throws rose petals at you, which thrill and seduce the ego, beware.',
    author: 'Anne Lamott',
    profession: 'American writer'
  },
  {
    quote:
      "One of the things I learned the hard way was that it doesn't pay to get discouraged. Keeping busy and making optimism a way of life can restore your faith in yourself.",
    author: 'Lucille Ball',
    profession: 'American actress and comedienne'
  },
  {
    quote: 'The unfed mind devours itself.',
    author: 'Gore Vidal',
    profession: 'American Writer'
  },
  {
    quote:
      'Winning is not a sometime thing; it’s an all time thing. You don’t win once in a while, you don’t do things right once in a while, you do them right all the time. Winning is a habit, Unfortunately, so is losing.',
    author: 'Vince Lombardi',
    profession: ''
  },
  {
    quote:
      'Inaction Breeds Doubt And Fear. Action Breeds Confidence And Courage. If You Want To Conquer Fear, Do Not Sit Home And Think About It. Go Out And Get Busy.',
    author: 'Dale Breckenridge Carnegie',
    profession: ''
  },
  {
    quote:
      "The theory seems to be that as long as a man is a failure he is one of God's children, but that as soon as he succeeds he is taken over by the Devil.",
    author: 'H.L. Mencken',
    profession: 'American journalist and essayist'
  },
  {
    quote:
      'There are two great days in a person’s life- the day we are born and the day we discover why.',
    author: 'William Barclay',
    profession: 'Scottish theologian and author'
  },
  {
    quote:
      'Figuring out who you are is the whole point of the human experience.',
    author: 'Anna Quindlen',
    profession: 'American journalist and author'
  },
  {
    quote:
      "You don't lead by pointing and telling people some place to go. You lead by going to that place and making a case.",
    author: 'Ken Kesey',
    profession: 'American author'
  },
  {
    quote: 'I walk slowly, but I never walk backward.',
    author: 'Abraham Lincoln',
    profession: '16th U.S. president'
  },
  {
    quote:
      'We judge ourselves by what we feel capable of doing, while others judge us by what we have already done.',
    author: 'Henry Wadsworth Longfellow',
    profession: 'American poet and educator'
  },
  {
    quote:
      'Some men have thousands of reasons why they cannot do what they want to, when all they need is one reason why they can.',
    author: 'Willis R. Whitney',
    profession: 'American chemist'
  },
  {
    quote:
      'Too many people overvalue what they are not and undervalue what they are.',
    author: 'Malcolm Forbes',
    profession: 'American magazine publisher'
  },
  {
    quote:
      'The important work of moving the world forward does not wait to be done by perfect men.',
    author: 'George Eliot',
    profession: 'British writer'
  },
  {
    quote:
      "Freedom is man's capacity to take a hand in his own development. It is our capacity to mold ourselves.",
    author: 'Rollo May',
    profession: 'American psychologist'
  },
  {
    quote: 'Imagination is more important than knowledge.',
    author: 'Albert Einstein',
    profession: 'German-born physicist'
  },
  {
    quote:
      'A failure is not always a mistake, it may simply be the best one can do under the circumstances. The real mistake is to stop trying.',
    author: 'B.F. Skinner',
    profession: 'American psychologist, inventor and author'
  },
  {
    quote:
      'Has fortune dealt you some bad cards. Then let wisdom make you a good gamester.',
    author: 'Francis Quarles',
    profession: 'British poet'
  },
  {
    quote:
      'I know of no more encouraging fact than the unquestionable ability of man to elevate his life by conscious endeavor.',
    author: 'Henry David Thoreau',
    profession: 'American author and poet'
  },
  {
    quote:
      "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
    author: 'Bernice Johnson Reagon',
    profession: 'American singer, composer, scholar and social activist'
  },
  {
    quote:
      'Write the bad things that are done to you in sand, but write the good things that happen to you on a piece of marble.',
    author: 'Arabic proverb',
    profession: ''
  },
  {
    quote: 'To avoid criticism do nothing, say nothing, be nothing.',
    author: 'Elbert Hubbard',
    profession: 'American writer, artist and philosopher'
  },
  {
    quote:
      'I still find each day too short for all the thoughts I want to think, all the walks I want to take, all the books I want to read, and all the friends I want to see.',
    author: 'John Burroughs',
    profession: 'American naturalist and essayist'
  },
  {
    quote: "Procrastination is opportunity's assassin.",
    author: 'Victor Kiam',
    profession: 'American businessman'
  },
  {
    quote: 'It may be that those who do most, dream most.',
    author: 'Stephen Butler Leacock',
    profession: 'British-Canadian political economist and humorist'
  },
  {
    quote: 'In order to be irreplaceable one must always be different.',
    author: 'Coco Chanel',
    profession: 'French fashion designer'
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    profession: 'former U.S. first lady'
  },
  {
    quote: 'What we see depends mainly on what we look for.',
    author: 'John Lubbock',
    profession: 'British banker, politician, naturalist and archaeologist'
  },
  {
    quote:
      "Most people never run far enough on their first wind to find out they've got a second.",
    author: 'William James',
    profession: 'American psychologist and philosopher'
  },
  {
    quote:
      "I'll walk where my own nature would be leading: It vexes me to choose another guide.",
    author: 'Emily Bront&euml;',
    profession: 'British novelist and poet'
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: 'Thomas Edison',
    profession: 'American inventor'
  },
  {
    quote:
      'Worry does not empty tomorrow of its sorrow; it empties today of its strength.',
    author: 'Corrie ten Boom',
    profession: 'Dutch writer'
  },
  {
    quote:
      'In times of change, learners inherit the earth; while the learned find themselves beautifully equipped to deal with a world that no longer exists.',
    author: 'Eric Hoffer',
    profession: 'American social writer'
  },
  {
    quote: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
    profession: ''
  },
  {
    quote:
      'A ship in harbor is safe, but that is not what ships are built for.',
    author: 'William G.T. Shedd',
    profession: ''
  },
  {
    quote: 'If fate means you to lose, give him a good fight anyhow.',
    author: 'William McFee',
    profession: 'British-American writer'
  },
  {
    quote:
      'The man who insists upon seeing with perfect clearness before he decides, never decides. Accept life, and you must accept regret.',
    author: 'Henri Frédéric Amiel',
    profession: 'Swiss philosopher, poet and critic'
  },
  {
    quote:
      'That which grows fast, withers as rapidly. That which grows slowly, endures.',
    author: 'Josiah Gilbert Holland',
    profession: 'American writer and poet'
  },
  {
    quote:
      'Action is a great restorer and builder of confidence. Inaction is not only the result, but the cause, of fear.',
    author: 'Norman Vincent Peale',
    profession: 'American minister and author'
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: 'George Bernard Shaw',
    profession: 'Irish playwright'
  },
  {
    quote:
      'Optimism is essential to achievement and it is also the foundation of courage and true progress.',
    author: 'Nicholas Murray Butler',
    profession: 'American diplomat and educator'
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don't try.",
    author: 'Beverly Sills',
    profession: 'American opera singer and opera manager'
  },
  {
    quote:
      "Here is the world. Beautiful and terrible things will happen. Don't be afraid.",
    author: 'Frederick Buechner',
    profession: 'American writer and theologian'
  },
  {
    quote:
      'You may have a fresh start any moment you choose, for this thing that we call ‘failure’ is not the falling down, but the staying down.',
    author: 'Mary Pickford',
    profession: ''
  },
  {
    quote:
      'Every man should keep a fair-sized cemetery in which to bury the faults of his friends.',
    author: 'Henry Ward Beecher',
    profession: 'American clergyman and lecturer'
  },
  {
    quote:
      "The man who offers an insult writes it in sand, but for the man who receives it, it's chiseled in bronze.",
    author: 'Giovannino Guareschi',
    profession: 'Italian journalist'
  },
  {
    quote:
      'Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.',
    author: 'Scott Adams',
    profession: 'American cartoonist'
  },
  {
    quote:
      "Success and failure. We think of them as opposites, but they're really not. They're companions -- the hero and the sidekick.",
    author: 'Laurence Shames',
    profession: 'American writer'
  },
  {
    quote: 'You are never too old to set another goal or to dream a new dream.',
    author: 'C.S. Lewis',
    profession: 'Irish writer and theologian'
  },
  {
    quote:
      "If you hear a voice within you say, 'You cannot paint,' then by all means paint, and that voice will be silenced.",
    author: 'Vincent Van Gogh',
    profession: ''
  },
  {
    quote:
      'Formal education will make you a living; self-education will make you a fortune.',
    author: 'Jim Rohn',
    profession: 'American entrepreneur and motivational speaker'
  },
  {
    quote: 'High expectations are the key to everything.',
    author: 'Sam Walton',
    profession: 'American businessman'
  },
  {
    quote: 'I never dreamed about success. I worked for it.',
    author: 'Estee Lauder',
    profession: 'American businesswoman'
  },
  {
    quote:
      'Our finest moments are most likely to occur when we are feeling deeply uncomfortable, unhappy or unfulfilled. For it is only in such moments, propelled by our discomfort, that we are likely to step out of our ruts and start searching for different ways or truer answers.',
    author: 'M. Scott Peck',
    profession: 'American psychiatrist'
  },
  {
    quote:
      "I can accept failure; everyone fails at something. But I can't accept not trying.",
    author: 'Michael Jordan',
    profession: 'American professional basketball player'
  },
  {
    quote:
      'It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.',
    author: 'Vincent van Gogh',
    profession: ''
  },
  {
    quote:
      "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: 'Nido Qubein',
    profession: 'businessman and motivational speaker'
  },
  {
    quote:
      'He who is not every day conquering some fear has not learned the secret of life.',
    author: 'Ralph Waldo Emerson',
    profession: 'Writer'
  },
  {
    quote: 'Have patience. All things are difficult before they become easy.',
    author: 'Saadi',
    profession: 'poet'
  },
  {
    quote:
      'Perfection is not attainable, but if we chase perfection, we can catch excellence.',
    author: 'Vince Lombardi',
    profession: 'football coach'
  },
  {
    quote:
      'Is he alone who has courage on his right hand and faith on his left hand?',
    author: 'Charles Lindbergh',
    profession: 'aviator'
  },
  {
    quote: 'Restlessness and discontent are the first necessities of progress.',
    author: 'Thomas A. Edison',
    profession: ''
  },
  {
    quote: 'Growth demands a temporary surrender of security.',
    author: 'Gail Sheehy',
    profession: ''
  },
  {
    quote:
      'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    author: 'Helen Keller',
    profession: 'author and political activist'
  },
  {
    quote: "Don't expect to build up the weak by pulling down the strong.",
    author: 'Calvin Coolidge',
    profession: ''
  },
  {
    quote:
      'Only he who attempts the absurd is capable of achieving the impossible.',
    author: 'Miguel de Unamuno',
    profession: 'writer and philosopher'
  },
  {
    quote: 'Goals allow you to control the direction of change in your favor.',
    author: 'Brian Tracy',
    profession: 'entrepreneur'
  },
  {
    quote: 'Too many people are quick to dream big, but slow to act on it.',
    author: 'Edmond Mbiaka',
    profession: 'Writer'
  },
  {
    quote: 'Don’t find fault – find a remedy.',
    author: 'Henry Ford',
    profession: 'Industrialist'
  },
  {
    quote:
      'Who is the happier man, he who has braved the storm of life and lived or he who has stayed securely on shore and merely existed?',
    author: 'Hunter S. Thompson',
    profession: 'journalist and writer'
  },
  {
    quote:
      'Practice is the hardest part of learning, and training is the essence of transformation.',
    author: 'Ann Voskamp',
    profession: ''
  },
  {
    quote:
      "Obstacles can't stop you. Problems can't stop you. Most important of all, other people can't stop you. Only you can stop you.",
    author: 'Jeffrey Gitomer',
    profession: ''
  },
  {
    quote: 'Failure is the opportunity to begin again more intelligently.',
    author: 'Henry Ford',
    profession: ''
  },
  {
    quote: 'Never confuse a single defeat with a final defeat.',
    author: 'F. Scott Fitzgerald',
    profession: 'Author'
  },
  {
    quote:
      'Failure should be our teacher, not our undertaker. Failure is delay, not defeat. It is a temporary detour, not a dead-end street. Failure is something we can avoid only by saying nothing, doing nothing, and being nothing.',
    author: 'Denis Waitley',
    profession: ''
  },
  {
    quote:
      'If you want something you have never had, be prepared to do something you have never done.',
    author: 'Author Unknown',
    profession: ''
  },
  {
    quote:
      'Your most powerful weapon against limiting thoughts is your willingness to clarify and envision what you truly want for your life.',
    author: 'David McNally',
    profession: ''
  },
  {
    quote:
      "Having just the vision's no solution; everything depends on execution.",
    author: 'Stephen Sondheim',
    profession: 'Composer and Lyricist'
  },
  {
    quote:
      'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.',
    author: 'Carl Sagan',
    profession: 'Astronomer'
  },
  {
    quote:
      'To improve is to change, so to be perfect is to have changed often.',
    author: 'Winston Churchill',
    profession: 'Statesman'
  },
  {
    quote:
      'There are a lot of ways to become a failure, but never taking a chance is the most successful.',
    author: 'Anonymous',
    profession: ''
  },
  {
    quote:
      'Individual commitment to a group effort -- that is what makes a team work, a company work, a society work, a civilization work.',
    author: 'Vince Lombardi',
    profession: 'Coach'
  },
  {
    quote:
      'Unless you try to do something beyond what you have already mastered, you will never grow.',
    author: 'Ronald Osborn',
    profession: 'Teacher and Writer'
  },
  {
    quote: 'Mistakes are the growing pains of wisdom.',
    author: 'William George Jordan',
    profession: 'Writer and Editor'
  },
  {
    quote:
      'The only way you are going to have success is to have lots of failures first.',
    author: 'Sergey Brin',
    profession: 'Computer Scientist and Entrepreneur'
  },
  {
    quote:
      'Whatever it takes to finish things, finish. You will learn more from a glorious failure than you ever will from something you never finished.',
    author: 'Neil Gaiman',
    profession: 'Writer'
  },
  {
    quote:
      'Growth is an erratic forward movement: two steps forward, one step back. Remember that and be very gentle with yourself.',
    author: 'Julia Cameron',
    profession: 'Writer and Teacher'
  },
  {
    quote:
      "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
    author: 'Conrad Hilton',
    profession: 'Hotelier'
  },
  {
    quote: 'The greatest of faults, I should say, is to be conscious of none.',
    author: 'Thomas Carlyle',
    profession: 'Historian and Philosopher'
  },
  {
    quote: 'I was taught that the way of progress is neither swift nor easy.',
    author: 'Marie Curie',
    profession: 'Physicist and Chemist'
  },
  {
    quote:
      'The greatest mistake you can make in life is to continually be afraid you will make one.',
    author: 'Elbert Hubbard',
    profession: 'Writer and Artist'
  },
  {
    quote:
      'The superior man is modest in his speech but exceeds in his actions.',
    author: 'Confucius',
    profession: 'Philosopher'
  },
  {
    quote:
      "Inspiration and growth only come from adversity and from challenge — from stepping away from what's comfortable and familiar and stepping out into the unknown.",
    author: 'Ben Saunders',
    profession: ''
  },
  {
    quote: 'Growth demands a temporary surrender of security.',
    author: 'Gail Sheehy',
    profession: 'Passages'
  },
  {
    quote:
      'In all human affairs there are efforts, and there are results, and the strength of the effort is the measure of the result.',
    author: 'James Allen',
    profession: 'Writer'
  },
  {
    quote: 'Character, not circumstances, makes the man.',
    author: 'Booker T. Washington',
    profession: 'Educator, Writer and Orator'
  },
  {
    quote:
      'Any fool can criticize, condemn and complain -- and most fools do. But it takes character and self-control to be understanding and forgiving.',
    author: 'Dale Carnegie',
    profession: 'Writer, Lecturer and Leadership Consultant'
  },
  {
    quote:
      'Progress everywhere today does seem to come so very heavily disguised as chaos.',
    author: 'Joyce Grenfell',
    profession: 'Actress'
  },
  {
    quote: 'Failure is only the opportunity more intelligently to begin again.',
    author: 'Henry Ford',
    profession: 'Industrialist'
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don't try.",
    author: 'Beverly Sills',
    profession: ''
  },
  {
    quote:
      'Let us not seek to fix the blame for the past -- let us accept our own responsibility for the future.',
    author: 'John F. Kennedy',
    profession: '35th US President'
  },
  {
    quote: 'Mistakes are part of the dues one pays for a full life.',
    author: 'Sophia Loren',
    profession: 'Actress'
  },
  {
    quote:
      "When you get into a tight place, and everything goes against you till it seems as if you couldn't hold on a minute longer, never give up then, for that's just the place and time that the tide'll turn.",
    author: 'Harriet Beecher Stowe',
    profession: 'Abolitionist and Writer'
  },
  {
    quote: 'There is no failure except in no longer trying.',
    author: 'Elbert Hubbard',
    profession: 'Writer, Publisher and Artist'
  },
  {
    quote: 'Success is the sum of small efforts, repeated day in and day out.',
    author: 'Robert Collier',
    profession: 'Writer'
  },
  {
    quote:
      'Everybody thinks of changing humanity, and nobody thinks of changing himself.',
    author: 'Leo Tolstoy',
    profession: 'Writer'
  },
  {
    quote:
      'Live daringly, boldly, fearlessly. Taste the relish to be found in competition -- in having to put forth the best within you to match the deeds of risk-taking, hard-working competitors.',
    author: 'Henry J. Kaiser',
    profession: 'Industrialist'
  },
  {
    quote:
      'The important thing is this: to be able at any moment to sacrifice what we are for what we could become.',
    author: 'Charles Du Bos',
    profession: 'Writer and Critic'
  },
  {
    quote:
      "You don't learn to walk by following rules, you learn by doing and by falling over.",
    author: 'Richard Branson',
    profession: 'Entrepreneur, Investor and Philanthropist'
  },
  {
    quote:
      'Destiny is not a matter of chance; it is a matter of choice. It is not a thing to be waited for; it is a thing to be achieved.',
    author: 'William Jennings Bryan',
    profession: 'Political Leader and Orator'
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
    profession: 'Activist and Political Leader'
  },
  {
    quote:
      'The Lord made us all out of iron. Then he turns up the heat to forge some of us into steel.',
    author: 'Marie Osmond',
    profession: 'Singer and Actress'
  },
  {
    quote: 'Restlessness and discontent are the first necessities of progress.',
    author: 'Thomas Edison',
    profession: 'American inventor'
  }
]

app.listen(PORT, () => console.log('API 🟢'))

app.get('/quotes', (req, res) => {
  res.status(200).send(quotes)
})
