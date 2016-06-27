
var APP_ID = undefined;

var FACTS = [
  "Keep love in your heart, A life without it is like a sunless garden when the flowers are dead.",
  "To love onself is the beginning of a lifelong romance.",
  "I can resist everything except temptation.",
  "Be yourself; everyone else is already taken.",
  "Always forgive your enemies; nothing annoys them so much.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "I am so clever that sometimes I don't understand a single word of what I am saying.",
  "We are all in the gutter, but some of us are looking at the stars.",
  "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
  "It is what you read when you don't have to that determines what you will be when you can't help it.",
  "The truth is rarely pure and never simple.",
  "The books that the world calls immoral are books that show the world its own shame.",
  "You can never be overdressed or overeducated.",
  "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
  "Women are meant to be loved, not to be understood.",
  "A good friend will always stab you in the front.",
  "I don't want to go to heaven. None of my friends are there.",
  "Never love anyone who treats you like you're ordinary.",
  "Anyone who lives within their means suffers from a lack of imagination.",
  "You will always be fond of me. I represent to you all the sins you never had the courage to commit.",
  "Every saint has a past, and every sinner has a future.",
  "I am not young enough to know everything.",
  "The heart was made to be broken.",
  "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
  "A thing is not necessarily true because a man dies for it.",
  "Experience is merely the name men gave to their mistakes.",
  "Everything in the world is about sex except sex. Sex is about power.",
  "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
  "The very essence of romance is uncertainty.",
  "I think God, in creating man, somewhat overestimated his ability.",
  "I never travel without my diary. One should always have something sensational to read in the train.",
  "Some cause happiness wherever they go; others whenever they go.",
  "With freedom, books, flowers, and the moon, who could not be happy.",
  "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.",
  "A cynic is a man who knows the price of everything, and the value of nothing.",
  "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.",
  "To define is to limit.",
  "All women become like their mothers. That is their tragedy. No man does, and that is his.",
  "Quotation is a serviceable substitute for wit.",
  "It is absurd to divide people into good and bad. People are either charming or tedious.",
  "The only way to get rid of temptation is to yield to it.",
  "Who, being loved, is poor.",
  "Nowadays people know the price of everything and the value of nothing.",
  "I have the simplest tastes. I am always satisfied with the best.",
  "There is only one thing in the world worse than being talked about, and that is not being talked about.",
  "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live.",
  "I have nothing to declare except my genius.",
  "Fashion is a form of ugliness so intolerable that we have to alter it every six months.",
  "I am too fond of reading books to care to write them.",
  "A man's face is his autobiography. A woman's face is her work of fiction.",
  "After a good dinner one can forgive anybody, even one's own relations.",
  "No good deed goes unpunished.",
  "Anybody can sympathise with the sufferings of a friend, but it requires a very fine nature to sympathise with a friend's success.",
  "Whenever people agree with me I always feel I must be wrong.",
  "We are each our own devil, and we make this world our hell.",
  "Life is too important to be taken seriously.",
  "When one is in love, one always begins by deceiving one's self, and one always ends by deceiving others. That is what the world calls a romance.",
  "Behind every exquisite thing that existed, there was something tragic.",
  "Children begin by loving their parents; as they grow older they judge them; sometimes they forgive them.",
  "Morality is simply the attitude we adopt towards people we personally dislike.",
  "To lose one parent may be regarded as a misfortune; to lose both looks like carelessness.",
  "Only dull people are brilliant at breakfast.",
  "I like men who have a future and women who have a past.",
  "The world is a stage and the play is badly cast.",
  "Never marry at all, Dorian. Men marry because they are tired, women, because they are curious: both are disappointed.",
  "I choose my friends for their good looks, my acquaintances for their good characters, and my enemies for their good intellects.",
  "To get back my youth I would do anything in the world, except take exercise, get up early, or be respectable.",
  "Art is the only serious thing in the world. And the artist is the only person who is never serious.",
  "We live in an age when unnecessary things are our only necessities.",
  "A bore is someone who deprives you of solitude without providing you with company.",
  "How can a woman be expected to be happy with a man who insists on treating her as if she were a perfectly normal human being.",
  "If you are not long, I will wait for you all my life.",
  "There are only two kinds of people. People who are really fascinating: people who know absolutely everything, and people who know absolutely nothing.",
  "Humanity takes itself too seriously. It is the world's original sin. If the cave-man had known how to laugh, History would have been different.",
  "The suspense is terrible. I hope it will last.",
  "Nowadays most people die of a sort of creeping common sense, and discover when it is too late that the only things one never regrets are one's mistakes.",
  "Everything in moderation, including moderation.",
  "Nothing can cure the soul but the senses, just as nothing can cure the senses but the soul.",
  "There are moments when one has to choose between living one's own life, fully, entirely, completely-or dragging out some false, shallow, degrading existence that the world in its hypocrisy demands.",
  "Society often forgives the criminal; it never forgives the dreamer.",
  "There is no sin except stupidity.",
  "The public have an insatiable curiosity to know everything, except what is worth knowing.",
  "Some things are more precious because they don't last long.",
  "Men always want to be a woman's first love - women like to be a man's last romance.",
  "Paradoxically though it may seem, it is none the less true that life imitates art far more than art imitates life.",
  "An idea that is not dangerous is unworthy of being called an idea at all.",
  "Indeed I have always been of the opinion that hard work is simply the refuge of people who have nothing to do.",
  "Laughter is not at all a bad beginning for a friendship, and it is by far the best ending for one.",
  "I always pass on good advice. It is the only thing to do with it. It is never of any use to oneself.",
  "The good ended happily, and the bad unhappily. That is what Fiction means.",
  "Every portrait that is painted with feeling is a portrait of the artist, not of the sitter."
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');


var Fact = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Fact.prototype = Object.create(AlexaSkill.prototype);
Fact.prototype.constructor = Fact;

Fact.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Fact.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Fact.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Fact.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me a quote, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * FACTS.length);
    var randomFact = FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your quote: " + randomFact;
    var cardTitle = "Your Fact";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var fact = new Fact();
    fact.execute(event, context);
};
