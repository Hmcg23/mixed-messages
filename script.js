const Message = {
    greeting: ['Did you know that', 'Fun fact:', 'Heres something you probably didn\'t know:', 'Heres something fun:', 'I bet you wished you knew that', ],
    subject: ['all animals', 'carrots', 'peanuts', 'Chicago', 'the United States', 'vegetables', 'all people', 'cows', 'humans', 'Declan', 'homework', 'school', 'computers'],
    fact: [],
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