const express=require('express');
const cors=require('cors');// for same host
const app=express();
const mongoose=require('mongoose');

app.listen(4000,()=>console.log('server runnning at port 4000'));
app.use(cors());
app.get('/',async(req,res)=>{
    const q=await model.find();
    res.json(q);
});



mongoose.connect('mongodb://127.0.0.1:27017/quotes').then(()=>console.log('db connected')).catch((e)=>console.log(e));
const schema =new mongoose.Schema({
  quote:String,
  author:String,
  anime:String,
  image:String
});
const model=mongoose.model('quotes',schema);


 const quotes = [
    {
      quote: 'A lot of the time, you\'re going into a situation you know nothing about. So what you need is to be quick to act… and make tough decisions in worst-case scenarios.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'Some scouts lives are more valuable than others, only those dumb enough to acknowledge that join us.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'Whether you have the body, dead is dead.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'The lesson you need to learn right now can\'t be taught with words, only with action.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'The only thing we\'re allowed to do is believe that we won\'t regret the choice we made.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'Don\'t get me wrong. It\'s not like I trust him. If he betrays us or goes berserk, I\'ll put him down without hesitation.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'I think pain is the best discipline.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'It\'s good to see that someone has the balls to go. But don\'t forget to do your damnedest to stay alive.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'If you don\'t want to die, think!',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'The difference between your decision and ours is experience. But you don\'t have to rely on that.',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
    {
      quote: 'No casualties, Don\'t you dare Die!',
      author: 'Levi Ackerman',
      anime: 'Attack on Titan',
      image: './assets/levi.png'
    },
  
    // Mikasa Ackerman 9
    {
      quote: 'This world is merciless, and it\'s also very beautiful.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'That\'s right… This world… is cruel. It hit me that living was like a miracle.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'I won\'t give up. I\'ll never give up again. So I\'ll win, no matter what! I\'ll survive no matter what.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'The world is crammed with cruelty.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'I am strong, real strong. None of you come close.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'Only victors are allowed to live. This world is merciless like that.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'Believe in your own power.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'Asking me for compassion is mistaken. After all I have no heart or time to spare.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
    {
      quote: 'You don\'t stand a single chance to win unless you fight.',
      author: 'Mikasa Ackerman',
      anime: 'Attack on Titan',
      image: './assets/mikasa.png'
    },
  
    // Ash Ketchum 8
    {
      quote: 'There\'s no sense in going out of your way to get somebody to like you.',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
    {
      quote: 'Me, give up? No way!',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
    {
      quote: 'Well, if you just try hard enough, things will work out, won\'t they.',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
    {
      quote: 'Know yourself, know your adversary, and you hold the key to victory.',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
    {
      quote: 'You see, sometimes friends have to go away, but a part of them stays behind with you.',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
    {
      quote: 'Well, if you just try hard enough, things will work out. \'t they?',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
    {
      quote: 'Everybody makes a wrong turn once in a while.',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
    {
      quote: 'From now on, I swear I\'ll never run away and leave my friends behind again. No more excuses.',
      author: 'Ash Ketchum',
      anime: 'Pokemon',
      image: './assets/ash.png'
    },
  
    // Mewtwo 4
    {
      quote: 'So, this is my power… but what is my purpose?',
      author: 'Mewtwo',
      anime: 'Pokemon',
      image: './assets/mewtwo.png'
    },
    {
      quote: 'Humans may have created me, but they will never enslave me. This cannot be my destiny.',
      author: 'Mewtwo',
      anime: 'Pokemon',
      image: './assets/mewtwo.png'
    },
    {
      quote: 'I see now that the circumstances of one\'s birth are irrelevant; it is what you do with the gift of life that determines who you are.',
      author: 'Mewtwo',
      anime: 'Pokemon',
      image: './assets/mewtwo.png'
    },
    {
      quote: 'I\'ve decided my own rules.',
      author: 'Mewtwo',
      anime: 'Pokemon',
      image: './assets/mewtwo.png'
    },
  
    // Brock Harrison 4
    {
      quote: 'You can\'t expect to win every single battle, but love\'s worth fighting for, and if you\'re brave and courageous and never quit, you can come out a winner, just like me.',
      author: 'Brock Harrison',
      anime: 'Pokemon',
      image: './assets/brock.png'
    },
    {
      quote: 'A Caterpie may change into a Butterfree, but the heart that beats inside remains the same.',
      author: 'Brock Harrison',
      anime: 'Pokemon',
      image: './assets/brock.png'
    },
    {
      quote: 'Rejected… by the only girl I ever loved!',
      author: 'Brock Harrison',
      anime: 'Pokemon',
      image: './assets/brock.png'
    },
    {
      quote: 'It can be hard to find the right words.',
      author: 'Brock Harrison',
      anime: 'Pokemon',
      image: './assets/brock.png'
    },
  
    // Misty Williams 2
    {
      quote: 'We don\'t have any money, but we\'d be happy to work to pay for any damages.',
      author: 'Misty Williams',
      anime: 'Pokemon',
      image: './assets/misty.png'
    },
    {
      quote: 'Don\'t you know that love is the most important thing in the whole world?',
      author: 'Misty Williams',
      anime: 'Pokemon',
      image: './assets/misty.png'
    },
  
    // Eren Jaeger 10
    {
      quote: 'if you think reality is just living comfortably and following your own whims, can you seriously dare to call yourself a soldier?',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'What is the point if those with the means and power do not fight?',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'I don\'t have time to worry if it\'s right or wrong, you can\'t hope for a horror story with a happy ending.',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'I want to see and understand the world outside. I don\'t want to die inside these walls without knowing what\'s out there.',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'Nothing can suppress a human\'s curiosity.',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'I\'ll slaughter you all…and take back what you stole… All of it!',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'If you win you live. If you lose you die. If you don\'t fight, you can\'t win.',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'I knew… you were more of a hero than anyone else.',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'I can do this. No, we can do this! Because we\'ve all been special since the day we were born. We\'re free!',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
    {
      quote: 'No matter how messed up things get, you can always figure out the best solution.',
      author: 'Eren Jaeger',
      anime: 'Attack on Titan',
      image: './assets/eren.png'
    },
  
    // Armin Arlert 9
    {
      quote: 'People are crazy for believing that these walls will protect us forever. Even though the walls have been intact for the past 100 years, there\'s nothing that can guarantee they won\'t be broken down today.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'You\'re only resorting to physical abuse because you can\'t prove that I\'m wrong.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'I think there are times people have to die… even if I don\'t like it.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'When people are faced with a situation they don\'t understand, it\'s easy for fear to take hold.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'People who can\'t throw something important away, can never hope to change anything.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'Willpower alone isn\'t enough in battle.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'I don\'t like the terms good person or bad person because it\'s impossible to be entirely good to everyone, or entirely bad to everyone. To some, you are a good person, while to others you are a bad person.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'The strong feed upon the weak. It\'s such an obligingly simple rule. Except in this world, my friends tried to be strong.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
    {
      quote: 'Everyone can make a choice after they have learned what it will result in. It is so easy to say we should have done it this way afterwards. But you can\'t know what your choice will result in before actually choosing.',
      author: 'Armin Arlert',
      anime: 'Attack on Titan',
      image: './assets/armin.png'
    },
  
    // Erwin Smith 4
    {
      quote: 'If we only focus on making the best moves, we will never get the better of our opponent. When necessary, we must be willing to take big risks, and be prepared to lose everything. Unless we change how we fight, we cannot win.',
      author: 'Erwin Smith',
      anime: 'Attack on Titan',
      image: './assets/erwin.png'
    },
    {
      quote: 'If you begin to regret, you\'ll dull your future decisions and let others make your choices for you. All that\'s left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.',
      author: 'Erwin Smith',
      anime: 'Attack on Titan',
      image: './assets/erwin.png'
    },
    {
      quote: 'It\'s us who gives meaning to our comrades lives.',
      author: 'Erwin Smith',
      anime: 'Attack on Titan',
      image: './assets/erwin.png'
    },
    {
      quote: 'They want to know what became of the heart they gave. Because the fighitng isn\'t over yet.',
      author: 'Erwin Smith',
      anime: 'Attack on Titan',
      image: './assets/erwin.png'
    },
  
    // Historia Reiss 2
    {
      quote: 'We need to stop living for others. From now on…Let\'s live for ourselves!',
      author: 'Historia Reiss',
      anime: 'Attack on Titan',
      image: './assets/historia.png'
    },
    {
      quote: 'Even if you have your reasons and there are things you can\'t tell me, no matter what, I\'m on your side.',
      author: 'Historia Reiss',
      anime: 'Attack on Titan',
      image: './assets/historia.png'
    },
  
    // Saitama 12
    {
      quote: 'You said you worked hard? Well, maybe you need to work a little longer.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'I\'m not a hero because I want your approval. I do it because I want to!',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'I\'ll leave tomorrow\'s problems to tomorrow\'s me.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'Overwhelming strength is boring.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'You gotta train like hell until the point where your hair falls out. That\'s the only way to become truly strong.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: '100 Push ups. 100 sit ups. And 100 squats. Then a 10 kilometer run. Do it every single day!',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'Human beings are strong because we can change ourselves.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'You have to keep doing it. No matter how difficult it gets. It took me a full 3 years to get this strong.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'If the heroes run and hide, who will stay and fight?',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'If you really want to become strong, stop caring about what others think about you. Living your life has nothing to do with what others think.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'Is that really the limit of your strength? Could the you of tomorrow beat you today? Instead of giving in, move forward.',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
    {
      quote: 'In exchange for power, maybe I\'ve lost something that\'s essential for a human being?',
      author: 'Saitama',
      anime: 'One Punch Man',
      image: './assets/saitama.png'
    },
  
    // Garou 6
    {
      quote: 'I won\'t lose to anyone. I will become the strongest monster ever.',
      author: 'Garou',
      anime: 'One Punch Man',
      image: './assets/garou.png'
    },
    {
      quote: 'You\'ll pay big for calling yourselves heroes.',
      author: 'Garou',
      anime: 'One Punch Man',
      image: './assets/garou.png'
    },
    {
      quote: 'Stop me if you can. Until then, I\'ll stay this cocky.',
      author: 'Garou',
      anime: 'One Punch Man',
      image: './assets/garou.png'
    },
    {
      quote: 'The only one who cares about ranks… is you dumb*ss.',
      author: 'Garou',
      anime: 'One Punch Man',
      image: './assets/garou.png'
    },
    {
      quote: 'If you don\'t want to get bossed around or mocked by the people around you… you just need to become stronger.',
      author: 'Garou',
      anime: 'One Punch Man',
      image: './assets/garou.png'
    },
    {
      quote: 'The scarier the better. Don\'t you think scary is cool?',
      author: 'Garou',
      anime: 'One Punch Man',
      image: './assets/garou.png'
    },
  
    // Genos 2
    {
      quote: 'You may be after King but I know someone who\'s stronger. More importantly I am stronger than YOU!',
      author: 'Genos',
      anime: 'One Punch Man',
      image: './assets/genos.png'
    },
    {
      quote: 'You are calm and intelligent, but youth can invite disaster. Do not fight alone.',
      author: 'Genos',
      anime: 'One Punch Man',
      image: './assets/genos.png'
    },
  
    // power 3
    {
      quote: 'I can\'t believe you took my story for truth. Humans really are foolish',
      author: 'Power',
      anime: 'Chainsaw Man',
      image: './assets/power.png'
    },
    {
      quote: 'This deceiver told me to do it! Devils can\'t lie! Only humans lie!',
      author: 'Power',
      anime: 'Chainsaw Man',
      image: './assets/power.png'
    },
  
    // Makima 4
    {
      quote: 'All devils are born with a name. The more that name is feared, the more powerful the devil itself',
      author: 'Makima',
      anime: 'Chainsaw Man',
      image: './assets/makima.png'
    },
    {
      quote: 'Naughty things feel better the more you know your partner',
      author: 'Makima',
      anime: 'Chainsaw Man',
      image: './assets/makima.png'
    },
    {
      quote: 'We\'ll be working together until death do us apart',
      author: 'Makima',
      anime: 'Chainsaw Man',
      image: './assets/makima.png'
    },
    {
      quote: 'The necessary evil you speak of, is just an excuse to justify the evil things you do. Society has no need for that excuse',
      author: 'Makima',
      anime: 'Chainsaw Man',
      image: './assets/makima.png'
    },
  
    // Denji 8
    {
      quote: 'if dreams do come true, I wanna hug a girl before I die',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
    {
      quote: 'If you\'re gonna kill me, just do it. I\'m dead either way',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
    {
      quote: 'I want you to live a normal life and die a normal death. Make my dreams come true for me!',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
    {
      quote: 'I\'m gonna take stuff just as seriously as you. So you can count on me bigtime',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
    {
      quote: 'I\'ll save you..so you save me. I don\'t wanna die either',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
    {
      quote: 'If i rip you apart then that makes your dream worth less than touching boobs!!',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
    {
      quote: 'Did I lose my humanity when I lost my heart?',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
    {
      quote: 'Of all the women I know! Every single one of them tried to kill me!',
      author: 'Denji',
      anime: 'Chainsaw Man',
      image: './assets/denji.jpg'
    },
  
    // Aki 3
    {
      quote: 'If I can kill the guy I want to kill then I don\'t care what happens next',
      author: 'Aki',
      anime: 'Chainsaw Man',
      image: './assets/aki.png'
    },
    {
      quote: 'Enemies are enemies… we\'re only using them. I have no intention of getting friendly with one',
      author: 'Aki',
      anime: 'Chainsaw Man',
      image: './assets/aki.png'
    },
    {
      quote: 'I\'ve had enough of watching people die in front of my eyes',
      author: 'Aki',
      anime: 'Chainsaw Man',
      image: './assets/aki.png'
    },
  
    // monkey d luffy 13
    {
      quote: 'Forgetting is like a wound. The wound may heal, but it has already left a scar.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'No matter how hard or impossible it is, never lose sight of your goal.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'Being lonely is more painful then getting hurt.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'If you don\'t take risks, you can\'t create a future!',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'You want to keep everyone from dying? That\'s naive. It\'s war. People die.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'Power isn\'t determined by your size, but the size of your heart and dreams!',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'Dying is not repaying a debt! That is not what he saved you for. Only weak men would die after someone spared their lives!',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'Being alone is more painful than getting hurt.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'If I die fighting for it, that\'s fine. I will fight…',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'I don\'t care who you are! I will surpass you!',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'Power isn\'t determined by your size, but the size of your heart and dreams.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'If you hurt somebody… or if somebody hurts you, the same red blood will be shed.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
    {
      quote: 'I am going to save you even if it kills me.',
      author: 'Monkey D. Luffy',
      anime: 'One Piece',
      image: './assets/luffy.jpg'
    },
  
    // Nico Robin 6
    {
      quote: 'Fools who don\'t respect the past are likely to repeat it.',
      author: 'Nico Robin',
      anime: 'One Piece',
      image: './assets/robin.jpg'
    },
    {
      quote: 'Sometimes the only thing you have to doubt is your own common sense.',
      author: 'Nico Robin',
      anime: 'One Piece',
      image: './assets/robin.jpg'
    },
    {
      quote: 'This is the first time I ever wanted to be stronger for someone else\'s sake.',
      author: 'Nico Robin',
      anime: 'One Piece',
      image: './assets/robin.jpg'
    },
    {
      quote: 'When all I want is to learn of a history, there are too many enemies within my dream”',
      author: 'Nico Robin',
      anime: 'One Piece',
      image: './assets/robin.jpg'
    },
    {
      quote: 'There is no such thing as being born into the world to be alone',
      author: 'Nico Robin',
      anime: 'One Piece',
      image: './assets/robin.jpg'
    },
    {
      quote: 'When you have a hard time, just laugh',
      author: 'Nico Robin',
      anime: 'One Piece',
      image: './assets/robin.jpg'
    },
  
    // Roronoa Zoro 10
    {
      quote: 'You need to accept the fact that you\'re not the best and have all the will to strive to be better than anyone you face.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'Only those who have suffered long, can see the light within the shadows.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'Bring on the hardship. It\'s preferred in a path of carnage.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'Either in belief or doubt, if I lean to one of these sides, my reaction time will be dulled if my heart thinks the opposite of what I choose.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'When the world shoves you around, you just gotta stand up and shove back. It\'s not like somebody\'s gonna save you if you start babbling excuses.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'When you decided to go to the sea, it was your own decision. Whatever happens to you on the sea, it depends on what you\'ve done! Don\'t blame others!',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'When I decided to follow my dream, I had already discarded my life.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'In a real fight there is no man or woman! If you don\'t fight with your real power, that will be the most shameful thing.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'I\'m sorry. I never pray to god.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
    {
      quote: 'When you have a hard time, just laughThere is someone I must meet again. And until that day...not even death himself can take my life away.',
      author: 'Roronoa Zoro',
      anime: 'One Piece',
      image: './assets/zooro.jpg'
    },
  
    // Brook 7
    {
      quote: 'Loneliness\' is no longer part of my vocabulary.',
      author: 'Brook',
      anime: 'One Piece',
      image: './assets/brook.jpg'
    },
    {
      quote: 'Death is never an apology.',
      author: 'Brook',
      anime: 'One Piece',
      image: './assets/brook.jpg'
    },
    {
      quote: 'What do you know of death? Have you ever died? You think death will preserve your cause forever? Ridiculous! Death leaves nothing behind! Once a person passes on, nothing remains but dead bones. If there is one thing I can\'t stand, it is a person with no respect for life.',
      author: 'Brook',
      anime: 'One Piece',
      image: './assets/brook.jpg'
    },
    {
      quote: 'No matter how deep the night, it always turns to day, eventually.',
      author: 'Brook',
      anime: 'One Piece',
      image: './assets/brook.jpg'
    },
    {
      quote: 'What keeps me alive in this world is neither bodily organs, nor muscles - it\'s my soul!',
      author: 'Brook',
      anime: 'One Piece',
      image: './assets/brook.jpg'
    },
    {
      quote: 'It\'s over when you give up.',
      author: 'Brook',
      anime: 'One Piece',
      image: './assets/brook.jpg'
    },
    {
      quote: 'All for one, one for all! There are times when a man has no choice but to act!',
      author: 'Brook',
      anime: 'One Piece',
      image: './assets/brook.jpg'
    },
  
    // Donquixote Doflamingo 2
    {
      quote: 'Those who stand at the top determine what\'s wrong and what\'s right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!',
      author: 'Donquixote Doflamingo',
      anime: 'One Piece',
      image: './assets/dd.png'
    },
    {
      quote: 'There is a difference in the look of the ordinary vagabond and that of a determined man.',
      author: 'Donquixote Doflamingo',
      anime: 'One Piece',
      image: './assets/dd.png'
    },
  
    // Gol D. Roger 1
    {
      quote: 'Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there are people who seek freedom in this life, these things shall not vanish from the Earth.',
      author: 'Gol D. Roger',
      anime: 'One Piece',
      image: './assets/roger.png'
    },
  
    // Sengoku the Buddha 1
    {
      quote: 'Don\'t try to find a reason for somebody\'s love.',
      author: 'Sengoku the Buddha',
      anime: 'One Piece',
      image: './assets/sengoku.png'
    },
  
    // Fujitora 1
    {
      quote: 'If you lose credibility by just admitting fault, then you didn\'t have any in the first place.',
      author: 'Fujitora',
      anime: 'One Piece',
      image: './assets/fujitora.png'
    },
  
    // Jinbe 1
    {
      quote: 'It may be hard right now… But you must silence those thoughts! Stop counting only those things that you have lost! What is gone, is gone!',
      author: 'Jinbe',
      anime: 'One Piece',
      image: './assets/j.png'
    },
  
    // Trafalgar D. Water Law 2
    {
      quote: 'There are things you can\'t see unless you change your standing.',
      author: 'Trafalgar D. Water Law',
      anime: 'One Piece',
      image: './assets/law.png'
    },
    {
      quote: 'You can\'t see the whole picture until you look at it from the outside.',
      author: 'Trafalgar D. Water Law',
      anime: 'One Piece',
      image: './assets/law.png'
    },
  
    // Sanji 3
    {
      quote: 'Don\'t start a fight if you can\'t end it.',
      author: 'Sanji',
      anime: 'One Piece',
      image: './assets/sanji.png'
    },
    {
      quote: 'A real man is someone who forgives a woman for her lies!',
      author: 'Sanji',
      anime: 'One Piece',
      image: './assets/sanji.png'
    },
    {
      quote: 'Cooking is a gift from the gods. Spices are a gift from the devil. Looks like it was a little too spicy for you.',
      author: 'Sanji',
      anime: 'One Piece',
      image: './assets/sanji.png'
    },
  
    // Smoker 3
    {
      quote: 'Don\'t ever think there\'s any perfect society made by humans! If you think that way you\'ll overlook the enemy!! Don\'t be fooled by appearances!',
      author: 'Smoker',
      anime: 'One Piece',
      image: './assets/smoker.png'
    },
    {
      quote: 'We have both become stronger. However, you cannot best me',
      author: 'Smoker',
      anime: 'One Piece',
      image: './assets/smoker.png'
    },
    {
      quote: 'I\'m going to deal with you once and for all.',
      author: 'Smoker',
      anime: 'One Piece',
      image: './assets/smoker.png'
    },
  
    // Nami 3
    {
      quote: 'Life is like a pencil that will surely run out, but will leave the beautiful writing of life.',
      author: 'Nami',
      anime: 'One Piece',
      image: './assets/Nami.png'
    },
    {
      quote: 'Everyone is expecting help from you, but you come here and don\'t think about doing anything to help those people?',
      author: 'Nami',
      anime: 'One Piece',
      image: './assets/Nami.png'
    },
    {
      quote: 'What are you, stupid?',
      author: 'Nami',
      anime: 'One Piece',
      image: './assets/Nami.png'
    },
  
    // Portgas D. Ace 4
    {
      quote: 'We have to live a life of no regrets.',
      author: 'Portgas D. Ace',
      anime: 'One Piece',
      image: './assets/ace.png'
    },
    {
      quote: 'My fire burns everything... A truly invincible ability.',
      author: 'Portgas D. Ace',
      anime: 'One Piece',
      image: './assets/ace.png'
    },
    {
      quote: 'Once I start a fight, neither side ever escapes.',
      author: 'Portgas D. Ace',
      anime: 'One Piece',
      image: './assets/ace.png'
    },
    {
      quote: 'Cross me, and I\'ll never let you live.',
      author: 'Portgas D. Ace',
      anime: 'One Piece',
      image: './assets/ace.png'
    },
  
    // Monkey D. Dragon 1
    {
      quote: 'There can be no happiness in a world where the undesirables are thrown away.',
      author: 'Monkey D. Dragon',
      anime: 'One Piece',
      image: './assets/dragon.png'
    },
  
    // Kizaru 1
    {
      quote: 'Without strength, you won\'t be able to save anyone.',
      author: 'Kizaru',
      anime: 'One Piece',
      image: './assets/kizaru.png'
    },
  
    // Silvers Rayleigh 1
    {
      quote: 'Maybe nothing in this world happens by accident. As everything happens for a reason, our destiny slowly takes form.',
      author: 'Silvers Rayleigh',
      anime: 'One Piece',
      image: './assets/dark.png'
    },
  
    // Dr. Hiriluk 1
    {
      quote: 'When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It\'s when… they are forgotten.',
      author: 'Dr. Hiriluk',
      anime: 'One Piece',
      image: './assets/dr.png'
    },
  
    // Whitebeard 1
    {
      quote: 'It doesn\'t matter who your parents were. Everyone is a child of the sea.',
      author: 'Whitebeard',
      anime: 'One Piece',
      image: './assets/Whitebeard.png'
    },
  
    // Light Yagami 8
    {
      quote: 'For murderers, there is no good or evil. I know that.',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
    {
      quote: 'I can\'t develop feelings. That\'s how most idiots screw up.',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
    {
      quote: 'Sometimes, the questions are complicated and the answers are simple.',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
    {
      quote: 'In this world, there are very few people who actually trust each other.',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
    {
      quote: 'Under normal circumstances, humans should have continued to evolve as the greatest creatures upon this earth, but we were actually regressing. A rotten world. Politics, law, education… Was there anybody around who could correct this world? But someone had to do it.',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
    {
      quote: 'You can\'t ever win if you\'re always on the defensive. To win, you have to attack!',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
    {
      quote: 'Humans aren\'t made perfectly. Everyone lies. Even so… I\'ve been careful not to tell lies that hurt others.',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
    {
      quote: 'The thing I hate the most is to trample on other people\'s goodwill.',
      author: 'Light Yagami',
      anime: 'Death Note',
      image: './assets/light.png'
    },
  
    // L Lawliet 8
    {
      quote: 'Risking your life and doing something that could easily rob you of your life are exact opposites.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
    {
      quote: 'here is no heaven or hell. No matter what you do while you\'re alive, everybody goes to the same place once you die. Death is Equal.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
    {
      quote: 'Being alone is better than being with the wrong person.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
    {
      quote: 'Not every genius is understood.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
    {
      quote: 'Let\'s value our lives.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
    {
      quote: 'Learn to treasure your life because unfortunately, it can be taken away from you anytime.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
    {
      quote: 'No matter how gifted you are… You, alone, cannot change the world.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
    {
      quote: 'If you use your head, you won\'t get fat even if you eat sweets.',
      author: 'L Lawliet',
      anime: 'Death Note',
      image: './assets/l.png'
    },
  
    // Misa Amane 1
    {
      quote: 'Unless someone makes the first move, nothing will happen.',
      author: 'Misa Amane',
      anime: 'Death Note',
      image: './assets/misa.png'
    },
  
    // Ryuk 2
    {
      quote: 'The human world is a boring place with boring people doing boring things.',
      author: 'Ryuk',
      anime: 'Death Note',
      image: './assets/Ryuk.png'
    },
    {
      quote: 'All humans die the same, the place they go after death isn\'t decided upon by a god it is Mu (nothingness).',
      author: 'Ryuk',
      anime: 'Death Note',
      image: './assets/Ryuk.png'
    },
  
    // Naruto Uzumaki 10
    {
      quote: 'Hard work is worthless for those that don\'t believe in themselves.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'I want to be with you. From now on, I want to spend all and every single one of my days until I die with you, and only you.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'The pain of being alone is completely out of this world, isn\'t it? I don\'t know why, but I understand your feelings so much, it actually hurts.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'If you don\'t like your destiny don\'t accept it. Instead have the courage to change it the way you want it to be.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'It\'s not the face that makes someone a monster, it\'s the choices they make with their lives.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'While you\'re alive, you need a reason for your existence. Being unable to find one is the same as being dead.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'Somebody told me I\'m a failure, I\'ll prove them wrong.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'Failing doesn\'t give you a reason to give up, as long as you believe.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'Don\'t underestimate me! I don\'t quit and I don\'t run.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
    {
      quote: 'When you give up, your dreams and everything else they\'re gone.',
      author: 'Naruto Uzumaki',
      anime: 'Naruto',
      image: './assets/naruto.png'
    },
  
    // Itachi Uchiha 6
    {
      quote: 'People\'s lives don\'t end when they die, it ends when they lose faith.',
      author: 'Itachi Uchiha',
      anime: 'Naruto',
      image: './assets/itachi.png'
    },
    {
      quote: 'Time doesn\'t heal anything, it just teaches us how to live with pain.',
      author: 'Itachi Uchiha',
      anime: 'Naruto',
      image: './assets/itachi.png'
    },
    {
      quote: 'Growth occurs when one goes beyond one\'s limits. Realizing that is also part of training.',
      author: 'Itachi Uchiha',
      anime: 'Naruto',
      image: './assets/itachi.png'
    },
    {
      quote: 'Those who forgive themselves, and are able to accept their true nature… They are the strong ones!',
      author: 'Itachi Uchiha',
      anime: 'Naruto',
      image: './assets/itachi.png'
    },
    {
      quote: 'The ones who aren\'t able to acknowledge their own selves are bound to fail.',
      author: 'Itachi Uchiha',
      anime: 'Naruto',
      image: './assets/itachi.png'
    },
    {
      quote: 'Even the strongest of opponents always has a weakness.',
      author: 'Itachi Uchiha',
      anime: 'Naruto',
      image: './assets/itachi.png'
    },
  
    // Nagato Uzumaki 4
    {
      quote: 'Because of the existence of love sacrifice is born. As well as hate. Then one comprehends… one knows PAIN.',
      author: 'Nagato Uzumaki',
      anime: 'Naruto',
      image: './assets/nagato.png'
    },
    {
      quote: 'If you don\'t share someone\'s pain, you can never understand them.',
      author: 'Nagato Uzumaki',
      anime: 'Naruto',
      image: './assets/nagato.png'
    },
    {
      quote: 'Love is sacrifice...',
      author: 'Nagato Uzumaki',
      anime: 'Naruto',
      image: './assets/nagato.png'
    },
    {
      quote: 'Those who do not understand true pain can never understand true peace.',
      author: 'Nagato Uzumaki',
      anime: 'Naruto',
      image: './assets/nagato.png'
    },
  
    // Tsunade 2
    {
      quote: 'People become stronger because they have memories they can\'t forget.',
      author: 'Tsunade',
      anime: 'Naruto',
      image: './assets/tsunade.png'
    },
    {
      quote: 'Grow up… Death comes with being a shinobi. There are times when death is hard to accept, but if you don\'t get over it, there\'s no future.',
      author: 'Tsunade',
      anime: 'Naruto',
      image: './assets/tsunade.png'
    },
  
    // Master Jiraiya 5
    {
      quote: 'A place where someone still thinks about you is a place you can call home.',
      author: 'Master Jiraiya',
      anime: 'Naruto',
      image: './assets/jiraiya.png'
    },
    {
      quote: 'A person grows up when he\'s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.',
      author: 'Master Jiraiya',
      anime: 'Naruto',
      image: './assets/jiraiya.png'
    },
    {
      quote: 'Rejection is a part of any man\'s life. If you can\'t accept and move past rejection, or at least use it as writing material you\'re not a real man.',
      author: 'Master Jiraiya',
      anime: 'Naruto',
      image: './assets/jiraiya.png'
    },
    {
      quote: 'Getting dumped always makes a man stronger. But then again, men aren\'t meant to pursue happiness.',
      author: 'Master Jiraiya',
      anime: 'Naruto',
      image: './assets/jiraiya.png'
    },
    {
      quote: 'Knowing what it feels to be in pain, is exactly why we try to be kind to others.',
      author: 'Master Jiraiya',
      anime: 'Naruto',
      image: './assets/jiraiya.png'
    },
  
    // Sakura Haruno 3
    {
      quote: 'A smile is the easiest way out of a difficult situation.',
      author: 'Sakura Haruno',
      anime: 'Naruto',
      image: './assets/sakura.png'
    },
    {
      quote: 'Every one of us must do what\'s in their power! If we\'re going to die anyway, then it\'s better to die fighting than to do nothing!',
      author: 'Sakura Haruno',
      anime: 'Naruto',
      image: './assets/sakura.png'
    },
    {
      quote: 'The things that are most important aren\'t written in books. You have to learn them by experiencing them yourself.',
      author: 'Sakura Haruno',
      anime: 'Naruto',
      image: './assets/sakura.png'
    },
  
    // Madara Uchiha 7
    {
      quote: 'The concept of hope is nothing more than giving up. A word that holds no true meaning.',
      author: 'Madara Uchiha',
      anime: 'Naruto',
      image: './assets/madara.png'
    },
    {
      quote: 'When a man learns to love, he must bear the risk of hatred.',
      author: 'Madara Uchiha',
      anime: 'Naruto',
      image: './assets/madara.png'
    },
    {
      quote: 'In this world, wherever there is light there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars and hatred is born to protect love.',
      author: 'Madara Uchiha',
      anime: 'Naruto',
      image: './assets/madara.png'
    },
    {
      quote: 'I\'d be lying if I said things are going according to my plan… but beggars can\'t be choosers, right?',
      author: 'Madara Uchiha',
      anime: 'Naruto',
      image: './assets/madara.png'
    },
    {
      quote: 'The longer you live… The more you realize that reality is just made of pain, suffering and emptiness.',
      author: 'Madara Uchiha',
      anime: 'Naruto',
      image: './assets/madara.png'
    },
    {
      quote: 'Love is not necessary, power is the only true necessity.',
      author: 'Madara Uchiha',
      anime: 'Naruto',
      image: './assets/madara.png'
    },
    {
      quote: 'Life Has A Repetitive Pattern',
      author: 'Madara Uchiha',
      anime: 'Naruto',
      image: './assets/madara.png'
    },
  
    // Obito Uchiha 11
    {
      quote: 'The moment people come to know love, they run the risk of carrying hate.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'No one cared who I was until I put on a mask.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'I\'m no one. I don\'t want to be anyone.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'Life HaThere is no such thing as peace in this world—that is reality.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'I wish I had more time with everyone.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'Look at me! There is nothing in my heart! I don\'t feel pain any longer.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'Somewhere inside of me? Take a good look, there\'s nothing inside of me anymore!',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'I don\'t feel pain, I don\'t feel anything!',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'A real leader may let others step over his corpse, but he\'ll never step over his comrades.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'The moment people come to know love, they run the risk of carrying hate.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
    {
      quote: 'Love gives birth to sacrifice, which brings hatred and lets you know pain.',
      author: 'Obito Uchiha',
      anime: 'Naruto',
      image: './assets/obito.png'
    },
  
    // Shikamaru 5
    {
      quote: 'Laziness is the mother of all bad habits, but ultimately she is a mother and we should respect her.',
      author: 'Shikamaru Nara',
      anime: 'Naruto',
      image: './assets/shikamaru.png'
    },
    {
      quote: 'It\'s Stupid To Talk About Things You\'re Not. Be Yourself And You\'ll Be Fine.',
      author: 'Shikamaru Nara',
      anime: 'Naruto',
      image: './assets/shikamaru.png'
    },
    {
      quote: 'The Problem Is The World Won\'t Let Me Be A Kid Forever, So I Can\'t Lie Around Crying About It.',
      author: 'Shikamaru Nara',
      anime: 'Naruto',
      image: './assets/shikamaru.png'
    },
    {
      quote: 'If Women Made You A Better Person, I Wouldn\'t Want To Know What You Were Like Before.',
      author: 'Shikamaru Nara',
      anime: 'Naruto',
      image: './assets/shikamaru.png'
    },
    {
      quote: 'I Believe In The Will Of Fire.',
      author: 'Shikamaru Nara',
      anime: 'Naruto',
      image: './assets/shikamaru.png'
    },
  
    // Kakashi Hatake 8
    {
      quote: 'To know what is right and choose to ignore it is the act of coward.',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
    {
      quote: 'I won\'t allow my comrades to die. I\'ll protect you with my life. Trust me.',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
    {
      quote: 'Forget about revenge. The fate of those who seek revenge is grim. It\'s tragic, You will end up suffering and hurting yourself even more. Even if you do succeed in getting revenge, the only thing that remains is emptiness.',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
    {
      quote: 'In society, those who don\'t have many abilities tend to complain more.',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
    {
      quote: 'The next generation will always surpass the previous one. It\'s one of the never-ending cycles in life.',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
    {
      quote: 'Some people want power and they get mad when they don\'t get it. They take their fury out on everyone else. You don\'t want it, it becomes you.',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
    {
      quote: 'If You Don\'t Want It, It Becomes You',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
    {
      quote: 'Today, I Got Lost On The Road Of Life',
      author: 'Kakashi Hatake',
      anime: 'Naruto',
      image: './assets/kakashi.png'
    },
  
  ];
  
  