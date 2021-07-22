const Message = {
    greeting: ['Did you know that', 'Fun fact:', 'Heres something you probably didn\'t know:', 'Heres something fun:', 'I bet you wished you knew that', ],
    subject: ['all animals', 'carrots', 'peanuts', 'Chicago', 'the United States', 'vegetables', 'all people', 'cows', 'humans', 'Declan', 'homework', 'schools', 'computers', 'fish', 'scorpions', 'a special species of snakes'],
    fact: ['can walk down stairs', 'does not know how to swim', 'knows how to swim', 'can hover in mid-air', 'have the brain of a 5 year old child', 'can drink a gallon of milk in 3 seconds', 'weigh over 300 pounds', 'favorite food is grass', 'can chug a gallon of water', 'can swim', 'can survive underwater for more than an hour', 'among us is sus'],
    punctuation: ['.', '!', '!!!', '...', '?!', '. Cool Right?', '. I think that\'s pretty cool!!', '. Awesome.']
}

function createMessage() {
    let message = [];
    const greetingIndex = Math.floor(Math.random(1) * Message.greeting.length);
    const subjectIndex = Math.floor(Math.random(1) * Message.subject.length);
    const factIndex = Math.floor(Math.random(1) * Message.fact.length);
    const punctuationIndex = Math.floor(Math.random(1) * Message.punctuation.length);
    message.push(Message.greeting[greetingIndex]);
    message.push(Message.subject[subjectIndex]);
    message.push(Message.fact[factIndex]);
    message.push(Message.punctuation[punctuationIndex]);
    return message.join(' ');
};

console.log(createMessage())