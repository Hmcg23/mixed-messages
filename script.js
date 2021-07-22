const Message = {
    greeting: ['Did you know that', 'Fun fact:', 'Heres something you probably didn\'t know:', 'Heres something fun:', 'I bet you wished you knew that', ],
    subject: ['all animals', 'carrots', 'peanuts', 'Chicago', 'the United States', 'vegetables', 'all people', 'cows', 'humans', 'Declan', 'homework', 'school', 'computers', 'fish', 'scorpions', 'a special species of snakes'],
    fact: ['can walk down stairs', 'don\'t know how to swim', 'know how to swim', 'can hover in mid-air', 'have the brain of a 5 year old child', 'can drink a gallon of milk in 3 seconds', 'weigh over 300 pounds', 'favorite food is grass', 'can chug a gallon of water', 'can swim', 'can survive underwater for more than an hour'],
    createMessage() {
        let message = [];
        for (i = 0; i < this.words.length; i++) {
            const wordIndex = Math.floor(Math.random() * this.words.length);
            console.log(wordIndex)
            message.push(this.words[wordIndex])
        }
        return message;
    },
}

console.log(Message.createMessage())