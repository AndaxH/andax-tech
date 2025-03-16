const verses = [
    {
        reference: 'John 3:16',
        text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.'
    },
    {
        reference: 'Isaiah 40:30-31',
        text: 'Even youths grow tired and weary, and young men stumble and fall. But those who put their hope in the Lord will renew their strength. They will soar on wings like eagles, they will walk and not grow weary, they will run and not grow faint.'
    },
    {
        reference: 'Psalms 19:1',
        text: 'The heavens declare the glory of God; the skies proclaim the work of his hands.'
    },
    {
        reference: '1 Peter 1:3-5',
        text: "Blessed be the God and Father of our Lord Jesus Christ! By his great mercy he gave us new birth into a living hope through the resurrection of Jesus Christ from the dead, that is, into an inheritance imperishable, undefiled, and unfading. It is reserved in heaven for you, who by God's power are protected through faith for a salvation ready to be revealed in the last time."
    },
    {
        reference: '1 Peter 5:10',
        text: 'And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast.'
    },
    {
        reference: 'Numbers 6:24-26',
        text: 'The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; The LORD turn his face toward you and give you peace.'
    },
    {
        reference: 'Philippians 4:4',
        text: 'Rejoice in the Lord always. I will say it again: Rejoice!'
    },
    {
        reference: 'Psalm 44:6',
        text: 'I put no trust in my bow, my sword does not bring me victory'
    },
    {
        reference: 'Psalm 42:1',
        text: 'As the deer pants for streams of water, so my soul pants for you, my God.'
    },
    {
        reference: 'Joshua 1:9',
        text: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.'
    },
    {
        reference: 'Galatians 5:13-15,22-23',
        text: 'You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. For the entire law is fulfilled in keeping this one command: "Love your neighbor as yourself." If you bite and devour each other, watch out or you will be destroyed by each other. But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.'
    },
    {
        reference: 'Hebrews 12:28-29',
        text: 'Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful, and so worship God acceptably with reverence and awe, for our "God is a consuming fire."'
    },
    {
        reference: 'Ephesians 1:13-14',
        text: "And you also were included in Christ when you heard the message of truth, the gospel of your salvation. When you believed, you were marked in him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance until the redemption of those who are God's possession—to the praise of his glory."
    },
    {
        reference: 'Colossians 1:29',
        text: 'To this end I strenuously contend with all the energy Christ so powerfully works in me.'
    },
    {
        reference: '1 John 2:17',
        text: 'The world and its desires pass away, but the man who does the will of God lives forever.'
    },
    {
        reference: 'Isaiah 41:10',
        text: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.'
    },
    {
        reference: 'Philippians 1:6',
        text: 'God who began a good work in you will carry it on to completion until the day of Christ Jesus.'
    },
    {
        reference: 'James 1:22',
        text: 'Do not merely listen to the word, and so deceive yourselves. Do what it says.'
    },
    {
        reference: 'Romans 15:4',
        text: 'Everything that was written in the past was written to teach us, so that through the endurance taught in the Scriptures and the encouragement they provide we might have hope.'
    },
    {
        reference: '1 Corinthians 13:2',
        text: 'If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing.'
    },
    {
        reference: '1 Corinthians 13:13',
        text: 'And now these three remain: faith, hope and love. But the greatest of these is love.'
    },
    {
        reference: 'Hebrews 11:1',
        text: 'Now faith is confidence in what we hope for and assurance about what we do not see.'
    },
    {
        reference: 'Proverbs 19:21',
        text: "Many are the plans in a person's heart, but it is the Lord's purpose that prevails."
    },
    {
        reference: '1 John 1:9',
        text: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness'
    },
    {
        reference: '1 John 4:10',
        text: 'This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.'
    },
    {
        reference: '1 John 4:15-16',
        text: 'If anyone acknowledges that Jesus is the Son of God, God lives in them and they in God. And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.'
    },
    {
        reference: 'Matthew 11:28',
        text: 'Come to me, all you who are weary and burdened, and I will give you rest.'
    },
    {
        reference: '1 Corinthians 1:27',
        text: 'But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong.'
    },
    {
        reference: 'Deuteronomy 7:9',
        text: 'Know therefore that the Lord your God is God; he is the faithful God, keeping his covenant of love to a thousand generations of those who love him and keep his commandments.'
    },
    {
        reference: 'Matthew 6:34',
        text: 'Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.'
    },
    {
        reference: 'Psalm 121:1-2',
        text: 'I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth'
    },
    {
        reference: 'Psalm 119:114',
        text: 'You are my refuge and my shield; I have put my hope in your word.'
    },
    {
        reference: 'Hebrews 12:1',
        text: 'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us'
    },
    {
        reference: 'Ephesians 2:8-10',
        text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast. For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."
    },
    {
        reference: 'Deuteronomy 25:15',
        text: 'You must have accurate and honest weights and measures, so that you may live long in the land the Lord your God is giving you.'
    },
    {
        reference: '1 Corinthians 15:17',
        text: 'And if Christ has not been raised, your faith is futile; you are still in your sins.'
    },
    {
        reference: '1 Thessalonians 5:15',
        text: 'Make sure that nobody pays back wrong for wrong, but always strive to do what is good for each other and for everyone else.'
    },
    {
        reference: 'Zephaniah 3:17',
        text: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.'
    },
    {
        reference: '2 Peter 1:21',
        text: 'For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit.'
    },
    {
        reference: 'Proverbs 5:23',
        text: 'For lack of discipline they will die, led astray by their own great folly.'
    },
    {
        reference: 'Hebrews 13:8',
        text: 'Jesus Christ is the same yesterday and today and forever.'
    },
    {
        reference: 'Psalm 1:1-2',
        text: 'Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, but whose delight is in the law of the Lord, and who meditates on his law day and night.'
    },
    {
        reference: 'Psalm 23:1-4',
        text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name's sake.Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me."
    },
    {
        reference: 'Proverbs 12:1',
        text: 'Whoever loves discipline loves knowledge, but whoever hates correction is stupid.'
    },
    {
        reference: '1 Peter 1:7',
        text: 'These have come so that the proven genuineness of your faith—of greater worth than gold, which perishes even though refined by fire—may result in praise, glory and honor when Jesus Christ is revealed.'
    },
    {
        reference: '1 Peter 1:24-25',
        text: 'For, "All people are like grass, and all their glory is like the flowers of the field; the grass withers and the flowers fall, but the word of the Lord endures forever."'
    },
    {
        reference: '1 Peter 2:6',
        text: 'For in Scripture it says: "See, I lay a stone in Zion, a chosen and precious cornerstone, and the one who trusts in him will never be put to shame."'
    },
    {
        reference: '1 Peter 3:15',
        text: 'But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect.'
    },
    {
        reference: '1 Peter 4:8',
        text: 'Above all, love each other deeply, because love covers over a multitude of sins.'
    },
    {
        reference: '2 Peter 1:16',
        text: 'For we did not follow cleverly devised stories when we told you about the coming of our Lord Jesus Christ in power, but we were eyewitnesses of his majesty.'
    },
    {
        reference: '2 Peter 3:8',
        text: 'But do not forget this one thing, dear friends: With the Lord a day is like a thousand years, and a thousand years are like a day.'
    },
    {
        reference: '1 John 2:3-6',
        text: 'We know that we have come to know him if we keep his commands. Whoever says, "I know him," but does not do what he commands is a liar, and the truth is not in that person. But if anyone obeys his word, love for God is truly made complete in them. This is how we know we are in him: Whoever claims to live in him must live as Jesus did.'
    },
    {
        reference: '1 John 2:15',
        text: 'Do not love the world or anything in the world. If anyone loves the world, love for the Father is not in them.'
    },
    {
        reference: '1 John 3:1',
        text: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!'
    },
    {
        reference: '1 John 3:18',
        text: 'Dear children, let us not love with words or speech but with actions and in truth.'
    },
    {
        reference: '1 John 4:7-8',
        text: 'Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love.'
    },
    {
        reference: '1 John 5:13',
        text: 'I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.'
    },
    {
        reference: '2 Peter 2:2',
        text: 'Many will follow their depraved conduct and will bring the way of truth into disrepute.'
    }
]

const main = () => {
    const randomVerseButton = document.getElementById('random-verse')
    const verseReference = document.getElementById('verse-reference')
    const verseText = document.getElementById('verse-text')

    const getRandomVerse = () => {
        const randomIndex = Math.floor(Math.random() * verses.length)
        const randomVerse = verses[randomIndex]
        verseReference.textContent = randomVerse.reference
        verseText.textContent = randomVerse.text
    }
    getRandomVerse();
    randomVerseButton.addEventListener('click', getRandomVerse)
}

main();