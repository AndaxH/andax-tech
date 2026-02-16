const parables = [
  {
    title: 'Parable of the Lamp',
    reference: 'Matthew 5:14-16',
    text: 'You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.'
  },
  {
    title: 'Parable of the Speck and The Log',
    reference: 'Matthew 7:1-5',
    text: 'Do not judge, or you too will be judged. For in the same way you judge others, you will be judged, and with the measure you use, it will be measured to you. "Why do you look at the speck of sawdust in your brother\'s eye and pay no attention to the plank in your own eye? How can you say to your brother, \'Let me take the speck out of your eye,\' when all the time there is a plank in your own eye? You hypocrite, first take the plank out of your own eye, and then you will see clearly to remove the speck from your brother\'s eye.'
  },
  {
    title: 'Parable of New Cloth on Old Garment',
    reference: 'Matthew 9:16-17',
    text: 'No one sews a patch of unshrunk cloth on an old garment, for the patch will pull away from the garment, making the tear worse. Neither do people pour new wine into old wineskins. If they do, the skins will burst; the wine will run out and the wineskins will be ruined. No, they pour new wine into new wineskins, and both are preserved."'
  },
  {
    title: 'Parable of The Divided Kingdom',
    reference: 'Matthew 12:24-30',
    text: 'But when the Pharisees heard this, they said, "It is only by Beelzebul, the prince of demons, that this fellow drives out demons." Jesus knew their thoughts and said to them, "Every kingdom divided against itself will be ruined, and every city or household divided against itself will not stand. If Satan drives out Satan, he is divided against himself. How then can his kingdom stand? And if I drive out demons by Beelzebul, by whom do your people drive them out? So then, they will be your judges. But if it is by the Spirit of God that I drive out demons, then the kingdom of God has come upon you. "Or again, how can anyone enter a strong man\'s house and carry off his possessions unless he first ties up the strong man? Then he can plunder his house. "Whoever is not with me is against me, and whoever does not gather with me scatters.'
  },
  {
    title: 'Parable of The Sower',
    reference: 'Matthew 13:1-23',
    text: 'That same day Jesus went out of the house and sat by the lake. Such large crowds gathered around him that he got into a boat and sat in it, while all the people stood on the shore. Then he told them many things in parables, saying: "A farmer went out to sow his seed. As he was scattering the seed, some fell along the path, and the birds came and ate it up. Some fell on rocky places, where it did not have much soil. It sprang up quickly, because the soil was shallow. But when the sun came up, the plants were scorched, and they withered because they had no root. Other seed fell among thorns, which grew up and choked the plants. Still other seed fell on good soil, where it produced a crop—a hundred, sixty or thirty times what was sown. Whoever has ears, let them hear." The disciples came to him and asked, "Why do you speak to the people in parables?" He replied, "Because the knowledge of the secrets of the kingdom of heaven has been given to you, but not to them. Whoever has will be given more, and they will have an abundance. Whoever does not have, even what they have will be taken from them."'
  },
  {
    title: 'Parable of The Weeds Among the Wheat',
    reference: 'Matthew 13:24-30',
    text: 'Jesus told them another parable: "The kingdom of heaven is like a man who sowed good seed in his field. But while everyone was sleeping, his enemy came and sowed weeds among the wheat, and went away. When the wheat sprouted and formed heads, then the weeds also appeared. The owner\'s servants came to him and said, \'Sir, didn\'t you sow good seed in your field? Where then did the weeds come from?\' \'An enemy did this,\' he replied. The servants asked him, \'Do you want us to go and pull them up?\' \'No,\' he answered, \'because while you are pulling the weeds, you may uproot the wheat with them. Let both grow together until the harvest. At that time I will tell the harvesters: First collect the weeds and tie them in bundles to be burned; then gather the wheat and bring it into my barn.\'"'
  },
  {
    title: 'Parable of The Mustard Seed',
    reference: 'Matthew 13:31-32',
    text: 'He told them another parable: "The kingdom of heaven is like a mustard seed, which a man took and planted in his field. Though it is the smallest of all seeds, yet when it grows, it is the largest of garden plants and becomes a tree, so that the birds come and perch in its branches."'
  },
  {
    title: 'Parable of The Leaven',
    reference: 'Matthew 13:33-34',
    text: 'He told them still another parable: "The kingdom of heaven is like yeast that a woman took and mixed into about sixty pounds of flour until it worked all through the dough." Jesus spoke all these things to the crowd in parables; he did not say anything to them without using a parable.'
  },
  {
    title: 'Parable of Hidden Treasure',
    reference: 'Matthew 13:44',
    text: 'The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field.'
  },
  {
    title: 'Parable of Pearl of Great Price',
    reference: 'Matthew 13:45-46',
    text: 'Again, the kingdom of heaven is like a merchant looking for fine pearls. When he found one of great value, he went away and sold everything he had and bought it.'
  },
  {
    title: 'Parable of The Net',
    reference: 'Matthew 13:47-50',
    text: 'Once again, the kingdom of heaven is like a net that was let down into the lake and caught all kinds of fish. When it was full, the fishermen pulled it up on the shore. Then they sat down and collected the good fish in baskets, but threw the bad away. This is how it will be at the end of the age. The angels will come and separate the wicked from the righteous and throw them into the blazing furnace, where there will be weeping and gnashing of teeth.'
  },
  {
    title: 'Parable of The Heart of Man',
    reference: 'Matthew 15:10-20',
    text: 'Jesus called the crowd to him and said, "Listen and understand. What goes into someone\'s mouth does not defile them, but what comes out of their mouth, that is what defiles them." Then the disciples came to him and asked, "Do you know that the Pharisees were offended when they heard this?" He replied, "Every plant that my heavenly Father has not planted will be pulled up by the roots. Leave them; they are blind guides. If the blind lead the blind, both will fall into a pit." Peter said, "Explain the parable to us." "Are you still so dull?" Jesus asked them. "Don\'t you see that whatever enters the mouth goes into the stomach and then out of the body? But the things that come out of a person\'s mouth come from the heart, and these defile them. For out of the heart come evil thoughts—murder, adultery, sexual immorality, theft, false testimony, slander. These are what defile a person; but eating with unwashed hands does not defile them."'
  },
  {
    title: 'Parable of The Lost Sheep',
    reference: 'Matthew 18:10-14',
    text: 'See that you do not despise one of these little ones. For I tell you that their angels in heaven always see the face of my Father in heaven. What do you think? If a man owns a hundred sheep, and one of them wanders away, will he not leave the ninety-nine on the hills and go to look for the one that wandered off? And if he finds it, truly I tell you, he is happier about that one sheep than about the ninety-nine that did not wander off. In the same way your Father in heaven is not willing that any of these little ones should perish.'
  },
  {
    title: 'Parable of The Unforgiving Servant',
    reference: 'Matthew 18:23-35',
    text: 'Therefore, the kingdom of heaven is like a king who wanted to settle accounts with his servants. As he began the settlement, a man who owed him ten thousand bags of gold was brought to him. Since he was not able to pay, the master ordered that he and his wife and his children and all that he had be sold to repay the debt. At this the servant fell on his knees before him. \'Be patient with me,\' he begged, \'and I will pay back everything.\' The servant\'s master took pity on him, canceled the debt and let him go. But when that servant went out, he found one of his fellow servants who owed him a hundred silver coins. He grabbed him and began to choke him. \'Pay back what you owe me!\' he demanded. His fellow servant fell to his knees and begged him, \'Be patient with me, and I will pay it back.\' But he refused. Instead, he went off and had the man thrown into prison until he could pay the debt. When the other servants saw what had happened, they were outraged and went and told their master everything that had happened. Then the master called the servant in. \'You wicked servant,\' he said, \'I canceled all that debt of yours because you begged me to. Shouldn\'t you have had mercy on your fellow servant just as I had on you?\' In anger his master handed him over to the jailers to be tortured, until he should pay back all he owed. This is how my heavenly Father will treat each of you unless you forgive your brother or sister from your heart."'
  },
  {
    title: 'Parable of Laborers in the Vineyard',
    reference: 'Matthew 20:1-16',
    text: 'For the kingdom of heaven is like a landowner who went out early in the morning to hire workers for his vineyard. He agreed to pay them a denarius for the day and sent them into his vineyard. About nine in the morning he went out and saw others standing in the marketplace doing nothing. He told them, \'You also go and work in my vineyard, and I will pay you whatever is right.\' So they went. He went out again about noon and about three in the afternoon and did the same thing. About five in the afternoon he went out and found still others standing around. He asked them, \'Why have you been standing here all day long doing nothing?\' \'Because no one has hired us,\' they answered. He said to them, \'You also go and work in my vineyard.\' When evening came, the owner of the vineyard said to his foreman, \'Call the workers and pay them their wages, beginning with the last ones hired and going on to the first.\' The workers who were hired about five in the afternoon came and each received a denarius. So when those came who were hired first, they expected to receive more. But each one of them also received a denarius. When they received it, they began to grumble against the landowner. \'These who were hired last worked only one hour,\' they said, \'and you have made them equal to us who have borne the burden of the work and the heat of the day.\' But he answered one of them, \'I am not being unfair to you, friend. Didn\'t you agree to work for a denarius? Take your pay and go. I want to give the one who was hired last the same as I gave you. Don\'t I have the right to do what I want with my own money? Or are you envious because I am generous?\' So the last will be first, and the first will be last."'
  },
  {
    title: 'Parable of The Two Sons',
    reference: 'Matthew 21:28-32',
    text: 'What do you think? There was a man who had two sons. He went to the first and said, \'Son, go and work today in the vineyard.\' \'I will not,\' he answered, but later he changed his mind and went. Then the father went to the other son and said the same thing. He answered, \'I will, sir,\' but he did not go. Which of the two did what his father wanted?" "The first," they answered. Jesus said to them, "Truly I tell you, the tax collectors and the prostitutes are entering the kingdom of God ahead of you. For John came to you to show you the way of righteousness, and you did not believe him, but the tax collectors and the prostitutes did. And even after you saw this, you did not repent and believe him.'
  },
  {
    title: 'Parable of The Tenant Farmers',
    reference: 'Matthew 21:33-45',
    text: 'Listen to another parable: There was a landowner who planted a vineyard. He put a wall around it, dug a winepress in it and built a watchtower. Then he rented the vineyard to some farmers and moved to another place. When the harvest time approached, he sent his servants to the tenants to collect his fruit. The tenants seized his servants; they beat one, killed another, and stoned a third. Then he sent other servants to them, more than the first time, and the tenants treated them the same way. Last of all, he sent his son to them. \'They will respect my son,\' he said. But when the tenants saw the son, they said to each other, \'This is the heir. Come, let\'s kill him and take his inheritance.\' So they took him and threw him out of the vineyard and killed him. Therefore, when the owner of the vineyard comes, what will he do to those tenants?" "He will bring those wretches to a wretched end," they replied, "and he will rent the vineyard to other tenants, who will give him his share of the crop at harvest time." Jesus said to them, "Have you never read in the Scriptures: \'The stone the builders rejected has become the cornerstone; the Lord has done this, and it is marvelous in our eyes\'? Therefore I tell you that the kingdom of God will be taken away from you and given to a people who will produce its fruit."'
  },
  {
    title: 'Parable of the Marriage Feast',
    reference: 'Matthew 22:1-14',
    text: 'Jesus spoke to them again in parables, saying: "The kingdom of heaven is like a king who prepared a wedding banquet for his son. He sent his servants to those who had been invited to the banquet to tell them to come, but they refused to come. Then he sent some more servants and said, \'Tell those who have been invited that I have prepared my dinner: My oxen and fattened cattle have been butchered, and everything is ready. Come to the wedding banquet.\' But they paid no attention and went off—one to his field, another to his business. The rest seized his servants, mistreated them and killed them. The king was enraged. He sent his army and destroyed those murderers and burned their city. Then he said to his servants, \'The wedding banquet is ready, but those I invited did not deserve to come. So go to the street corners and invite to the banquet anyone you find.\' So the servants went out into the streets and gathered all the people they could find, the bad as well as the good, and the wedding hall was filled with guests. But when the king came in to see the guests, he noticed a man there who was not wearing wedding clothes. He asked, \'How did you get in here without wedding clothes, friend?\' The man was speechless. Then the king told the attendants, \'Tie him hand and foot, and throw him outside, into the darkness, where there will be weeping and gnashing of teeth.\' For many are invited, but few are chosen."'
  },
  {
    title: 'Parable of The Budding Fig Tree',
    reference: 'Matthew 24:32-35',
    text: 'Now learn this lesson from the fig tree: As soon as its twigs get tender and its leaves come out, you know that summer is near. Even so, when you see all these things, you know that it is near, right at the door. Truly I tell you, this generation will certainly not pass away until all these things have happened. Heaven and earth will pass away, but my words will never pass away.'
  },
  {
    title: 'Parable of Faithful vs. Wicked Servant',
    reference: 'Matthew 24:45-51',
    text: 'Who then is the faithful and wise servant, whom the master has put in charge of the servants in his household to give them their food at the proper time? It will be good for that servant whose master finds him doing so when he returns. Truly I tell you, he will put him in charge of all his possessions. But suppose that servant is wicked and says to himself, \'My master is staying away a long time,\' and he then begins to beat his fellow servants and to eat and drink with drunkards. The master of that servant will come on a day when he does not expect him and at an hour he is not aware of. He will cut him to pieces and assign him a place with the hypocrites, where there will be weeping and gnashing of teeth.'
  },
  {
    title: 'Parable of The Ten Virgins',
    reference: 'Matthew 25:1-13',
    text: 'At that time the kingdom of heaven will be like ten virgins who took their lamps and went out to meet the bridegroom. Five of them were foolish and five were wise. The foolish ones took their lamps but did not take any oil with them. The wise ones, however, took oil in jars along with their lamps. The bridegroom was a long time in coming, and they all became drowsy and fell asleep. At midnight the cry rang out: \'Here\'s the bridegroom! Come out to meet him!\' Then all the virgins woke up and trimmed their lamps. The foolish ones said to the wise, \'Give us some of your oil; our lamps are going out.\' \'No,\' they replied, \'there may not be enough for both us and you. Instead, go to those who sell oil and buy some for yourselves.\' But while they were on their way to buy the oil, the bridegroom arrived. The virgins who were ready went in with him to the wedding banquet. And the door was shut. Later the others also came. \'Lord, Lord,\' they said, \'open the door for us!\' But he replied, \'Truly I tell you, I don\'t know you.\' Therefore keep watch, because you do not know the day or the hour.'
  },
  {
    title: 'Parable of Ten Talents',
    reference: 'Matthew 25:14-30',
    text: 'Again, it will be like a man going on a journey, who called his servants and entrusted his wealth to them. To one he gave five bags of gold, to another two bags, and to another one bag, each according to his ability. Then he went on his journey. The man who had received five bags of gold went at once and put his money to work and gained five bags more. So also, the one with two bags of gold gained two more. But the man who had received one bag went off, dug a hole in the ground and hid his master\'s money. After a long time the master of those servants returned and settled accounts with them. The man who had received five bags of gold brought the other five. \'Master,\' he said, \'you entrusted me with five bags of gold. See, I have gained five more.\' His master replied, \'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master\'s happiness!\' The man with two bags of gold also came. \'Master,\' he said, \'you entrusted me with two bags of gold; see, I have gained two more.\' His master replied, \'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master\'s happiness!\' Then the man who had received one bag of gold came. \'Master,\' he said, \'I knew that you are a hard man, harvesting where you have not sown and gathering where you have not scattered seed. So I was afraid and went out and hid your gold in the ground. See, here is what belongs to you.\' His master replied, \'You wicked, lazy servant! So you knew that I harvest where I have not sown and gather where I have not scattered seed? Well then, you should have put my money on deposit with the bankers, so that when I returned I would have received it back with interest. So take the bag of gold from him and give it to the one who has ten bags. For whoever has will be given more, and they will have an abundance. Whoever does not have, even what they have will be taken from them. And throw that worthless servant outside, into the darkness, where there will be weeping and gnashing of teeth.\''
  },
  {
    title: 'Parable of The Good Samaritan',
    reference: 'Luke 10:29-37',
    text: 'But he wanted to justify himself, so he asked Jesus, "And who is my neighbor?" In reply Jesus said: "A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead. A priest happened to be going down the same road, and when he saw the man, he passed by on the other side. So too, a Levite, when he came to the place and saw him, passed by on the other side. But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him. He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him. The next day he took out two denarii and gave them to the innkeeper. \'Look after him,\' he said, \'and when I return, I will reimburse you for any extra expense you may have.\' Which of these three do you think was a neighbor to the man who fell into the hands of robbers?" The expert in the law replied, "The one who had mercy on him." Jesus told him, "Go and do likewise."'
  },
  {
    title: 'Parable of The Friend at Midnight',
    reference: 'Luke 11:5-13',
    text: 'Then Jesus said to them, "Suppose you have a friend, and you go to him at midnight and say, \'Friend, lend me three loaves of bread; a friend of mine on a journey has come to me, and I have no food to offer him.\' And suppose the one inside answers, \'Don\'t bother me. The door is already locked, and my children and I are in bed. I can\'t get up and give you anything.\' I tell you, even though he will not get up and give you the bread because of friendship, yet because of your shameless audacity he will surely get up and give you as much as you need. So I say to you: Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened. Which of you fathers, if your son asks for a fish, will give him a snake instead? Or if he asks for an egg, will give him a scorpion? If you then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give the Holy Spirit to those who ask him!"'
  },
  {
    title: 'Parable of The Rich Fool',
    reference: 'Luke 12:13-21',
    text: 'Someone in the crowd said to him, "Teacher, tell my brother to divide the inheritance with me." Jesus replied, "Man, who appointed me a judge or an arbiter between you?" Then he said to them, "Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions." And he told them this parable: "The ground of a certain rich man yielded an abundant harvest. He thought to himself, \'What shall I do? I have no place to store my crops.\' Then he said, \'This is what I\'ll do. I will tear down my barns and build bigger ones, and there I will store my surplus grain. And I\'ll say to myself, "You have plenty of grain laid up for many years. Take life easy; eat, drink and be merry."\' But God said to him, \'You fool! This very night your life will be demanded from you. Then who will get what you have prepared for yourself?\' This is how it will be with whoever stores up things for themselves but is not rich toward God."'
  },
  {
    title: 'Parable of The Barren Fig Tree',
    reference: 'Luke 13:6-9',
    text: 'Then he told this parable: "A man had a fig tree growing in his vineyard, and he went to look for fruit on it but did not find any. So he said to the man who took care of the vineyard, \'For three years now I\'ve been coming to look for fruit on this fig tree and haven\'t found any. Cut it down! Why should it use up the soil?\' \'Sir,\' the man replied, \'leave it alone for one more year, and I\'ll dig around it and fertilize it. If it bears fruit next year, fine! If not, then cut it down.\'"'
  },
  {
    title: 'Parable of The Invited Guests',
    reference: 'Luke 14:7-14',
    text: 'When he noticed how the guests picked the places of honor at the table, he told them this parable: "When someone invites you to a wedding feast, do not take the place of honor, for a person more distinguished than you may have been invited. If so, the host who invited both of you will come and say to you, \'Give this person your seat.\' Then, humiliated, you will have to take the least important place. But when you are invited, take the lowest place, so that when your host comes, he will say to you, \'Friend, move up to a better place.\' Then you will be honored in the presence of all the other guests. For all those who exalt themselves will be humbled, and those who humble themselves will be exalted." Then Jesus said to his host, "When you give a luncheon or dinner, do not invite your friends, your brothers or sisters, your relatives, or your rich neighbors; if you do, they may invite you back and so you will be repaid. But when you give a banquet, invite the poor, the crippled, the lame, the blind, and you will be blessed. Although they cannot repay you, you will be repaid at the resurrection of the righteous."'
  },
  {
    title: 'Parable of The Lost Coin',
    reference: 'Luke 15:8-10',
    text: 'Or suppose a woman has ten silver coins and loses one. Doesn\'t she light a lamp, sweep the house and search carefully until she finds it? And when she finds it, she calls her friends and neighbors together and says, \'Rejoice with me; I have found my lost coin.\' In the same way, I tell you, there is rejoicing in the presence of the angels of God over one sinner who repents."'
  },
  {
    title: 'Parable of The Prodigal Son',
    reference: 'Luke 15:11-32',
    text: 'Jesus continued: "There was a man who had two sons. The younger one said to his father, \'Father, give me my share of the estate.\' So he divided his property between them. Not long after that, the younger son got together all he had, set off for a distant country and there squandered his wealth in wild living. After he had spent everything, there was a severe famine in that whole country, and he began to be in need. So he went and hired himself out to a citizen of that country, who sent him to his fields to feed pigs. He longed to fill his stomach with the pods that the pigs were eating, but no one gave him anything. When he came to his senses, he said, \'How many of my father\'s hired servants have food to spare, and here I am starving to death! I will set out and go back to my father and say to him: Father, I have sinned against heaven and against you. I am no longer worthy to be called your son; make me like one of your hired servants.\' So he got up and went to his father. But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The son said to him, \'Father, I have sinned against heaven and against you. I am no longer worthy to be called your son.\' But the father said to his servants, \'Quick! Bring the best robe and put it on him. Put a ring on his finger and sandals on his feet. Bring the fattened calf and kill it. Let\'s have a feast and celebrate. For this son of mine was dead and is alive again; he was lost and is found.\' So they began to celebrate. Meanwhile, the older son was in the field. When he came near the house, he heard music and dancing. So he called one of the servants and asked him what was going on. \'Your brother has come,\' he replied, \'and your father has killed the fattened calf because he has him back safe and sound.\' The older brother became angry and refused to go in. So his father went out and pleaded with him. But he answered his father, \'Look! All these years I\'ve been slaving for you and never disobeyed your orders. Yet you never gave me even a young goat so I could celebrate with my friends. But when this son of yours who has squandered your property with prostitutes comes home, you kill the fattened calf for him!\' \'My son,\' the father said, \'you are always with me, and everything I have is yours. But we had to celebrate and be glad, because this brother of yours was dead and is alive again; he was lost and is found.\'"'
  },
  {
    title: 'Parable of The Rich Man and Lazarus',
    reference: 'Luke 16:19-31',
    text: 'There was a rich man who was dressed in purple and fine linen and lived in luxury every day. At his gate was laid a beggar named Lazarus, covered with sores and longing to eat what fell from the rich man\'s table. Even the dogs came and licked his sores. The time came when the beggar died and the angels carried him to Abraham\'s side. The rich man also died and was buried. In Hades, where he was in torment, he looked up and saw Abraham far away, with Lazarus by his side. So he called to him, \'Father Abraham, have pity on me and send Lazarus to dip the tip of his finger in water and cool my tongue, because I am in agony in this fire.\' But Abraham replied, \'Son, remember that in your lifetime you received your good things, while Lazarus received bad things, but now he is comforted here and you are in agony. And besides all this, between us and you a great chasm has been set in place, so that those who want to go from here to you cannot, nor can anyone cross over from there to us.\' He answered, \'Then I beg you, father, send Lazarus to my family, for I have five brothers. Let him warn them, so that they will not also come to this place of torment.\' Abraham replied, \'They have Moses and the Prophets; let them listen to them.\' \'No, father Abraham,\' he said, \'but if someone from the dead goes to them, they will repent.\' He said to him, \'If they do not listen to Moses and the Prophets, they will not be convinced even if someone rises from the dead.\'"'
  },
  {
    title: 'Parable of The Persistent Widow',
    reference: 'Luke 18:1-8',
    text: 'Then Jesus told his disciples a parable to show them that they should always pray and not give up. He said: "In a certain town there was a judge who neither feared God nor cared what people thought. And there was a widow in that town who kept coming to him with the plea, \'Grant me justice against my adversary.\' For some time he refused. But finally he said to himself, \'Even though I don\'t fear God or care what people think, yet because this widow keeps bothering me, I will see that she gets justice, so that she won\'t eventually come and attack me!\'" And the Lord said, "Listen to what the unjust judge says. And will not God bring about justice for his chosen ones, who cry out to him day and night? Will he keep putting them off? I tell you, he will see that they get justice, and quickly. However, when the Son of Man comes, will he find faith on the earth?"'
  },
  {
    title: 'Parable of The Pharisee and The Tax Collector',
    reference: 'Luke 18:9-14',
    text: 'To some who were confident of their own righteousness and looked down on everyone else, Jesus told this parable: "Two men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee stood by himself and prayed: \'God, I thank you that I am not like other people—robbers, evildoers, adulterers—or even like this tax collector. I fast twice a week and give a tenth of all I get.\' But the tax collector stood at a distance. He would not even look up to heaven, but beat his breast and said, \'God, have mercy on me, a sinner.\' I tell you that this man, rather than the other, went home justified before God. For all those who exalt themselves will be humbled, and those who humble themselves will be exalted."'
  },
  {
    title: 'Parable of The Growing Seed',
    reference: 'Mark 4:26-29',
    text: 'He also said, "This is what the kingdom of God is like. A man scatters seed on the ground. Night and day, whether he sleeps or gets up, the seed sprouts and grows, though he does not know how. All by itself the soil produces grain—first the stalk, then the head, then the full kernel in the head. As soon as the grain is ripe, he puts the sickle to it, because the harvest has come."'
  }
]
