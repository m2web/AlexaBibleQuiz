/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 */
var questions = [
	{
        "How many books are in the Bible?": [
	    "66",
	    "10",
            "39",
            "27"
        ]
    },
    {
        "What was the name of the shepherd boy who became the second king in Israel?": [
            "David",
	    "Saul",
            "Jehu",
            "None of the above"
        ]
    },
    {
        "How many brothers did Joseph have?": [
            "11",
	    "10",
            "7",
            "12"
        ]
    },
    {
        "Who were the parents of Cain and Abel?": [
            "Adam and Eve",
	    "Sodom and Gomorah",
            "David and Bathseba",
            "Fibber MaGee and Molly"
        ]
    },
    {
        "Noah sent out 2 different kinds of birds from the Ark. What were they?": [
            "Pigeon and Sparrow",
	    "Buzzard and Eagle",
	    "Raven and Dove",
            "F11 and B52"
        ]
    },
    {
        "After the flood, what sign did God give that He would not destroy the earth with a flood again?": [
            "Rainbow",
	    "Manicured Lawn",
            "Dry Ground",
            "Pillar of Fire"
        ]
    },
    {
        "Who did Boaz marry?": [
            "Ruth",
	    "Jane",
            "Joan",
            "Mary"
        ]
    },
    {
        "Abraham traveled with his nephew. What was his nephew's name?": [
            "Lot",
	    "John",
            "Burt",
            "Paul"
        ]
    },
    {
        "What was the name of Joseph's baby brother?": [
            "Benjamin",
	    "Montgomery",
            "Rueben",
            "Moses"
        ]
    },
    {
        "Who found baby Moses in the river?": [
            "Pharaoh's daughter",
	    "Pharaoh'",
            "Ruth",
            "Lot's wife"
        ]
    },
    {
        "What was the name of the mountain where Moses was given the 10 Commandments?": [
            "Mt. Sinai",
            "Mt. Kilimanjaro",
            "Mt. Everest",
	    "Mt. Moriah"
        ]
    },
    {
        "When Lot's wife turned around and looked at the destruction of Sodom and Gomorrah, what did she turn into?": [
            "A pillar of salt",
	    "The local shopping mall.",
            "The street that they lived on",
            "A pumpkin"
        ]
    },
    {
        "What were Gideon's weapons when he fought the Midianites?": [
            "Trumpets, pitchers and lamps",
	    "An AK47",
            "A sling and rocks",
            "Surface to air missiles"
        ]
    },
    {
        "What did King Solomon ask God to give him?": [
            "Wisdom",
	    "Money",
            "A brand new car",
            "Long life"
        ]
    },
    {
        "What river was Jesus baptized in?": [
            "Jordan",
	    "Mississippi",
            "Ohio",
            "Tiber"
        ]
    },
    {
        "What was the first miracle of Jesus recorded in the Bible?": [
            "Turning water into wine",
	    "Healing the blind",
            "Rasiing the dead",
            "Magic show"            
        ]
    },
    {
        "What kind of work did Zacchaeus do?": [
            "Tax collector",
	    "Construction worker",
	    "Computer programmer",
            "Sanitation engineer"
        ]
    },
    {
        "When Jesus was on the Mount of Transfiguration, who were the Old Testament men who appeared with Him?": [
            "Moses and Elijah",
	    "Tom and Jerry",
            "Cain and Able",
            "Paul and Silas"
        ]
    },
    {
        "Who was in prison with Paul in Philippi when they were singing and there was an earthquake?": [
            "Silas",
	    "John",
            "Luke",
            "Mark"
        ]
    },
    {
        "How many of each animal did Moses bring into the Ark?": [
            "Two of each kind",
            "7",
            "12",
            "None. Moses led the people of Israel out of Egypt. It was Noah who was on the Ark."
        ]
    },
    {
		"What was the first thing that God created?": [
			"Light",
			"The Garden of Eden",
			"Trees",
			"New Holland, Ohio"
		]
	},
	{
		"Which day did God create plants?": [
			"The third day",
			"The second day",
			"The eigth day",
			"The fourth day"
		]
	},
	{
		"What are we told to do in the fifth commandment?": [
			"Honor your father and your mother",
			"Get good grades in school",
			"Do not lie",
			"Do not spit into the wind"
		]
	},
	{
		"Whose father gave him a coat of many colors?": [
			"Joseph",
			"Reuben",
			"Moses",
			"John"
		]
	},
	{
		"Who was thrown into a lions' den by King Darius?": [
			"Daniel",
			"The witch",
			"The wardrobe",
			"James"
		]
	},
	{
		"Who was the prophet was swallowed by a fish?": [
			"Jonah",
			"Able",
			"Cain",
			"Josiah"
		]
	},
	{
		"What animals was often used for transportation in the Bible?": [
			"Camel or donkey",
			"Bus or truck",
			"Train or plan",
			"All the above"
		]
	},
	{
		"Who was Jesus mother?": [
			"Mary",
			"Martha",
			"Eve",
			"None of the above"
		]
	},
	{
		"Jesus told a parable about a prodigal?": [
			"Son",
			"Dog",
			"Cat",
			"None of the above"
		]
	},
	{
		"Who was Jesus mother?": [
			"Mary",
			"Martha",
			"Eve",
			"He did not have a mother"
		]
	},
	{
			"How many disciples or apostles did Jesus have?": [
			"12",
			"10",
			"7",
			"3"
		]
	},

	{
		"Which of the disciples betrayed Jesus?": [
			"Judas",
			"Benedict Arnold",
			"Zacchaeus",
			"Nicodemus"
		]
	},
	{
		"What did Jesus feed to 5,000 people?": [
			"Five loaves of bread and two fish",
			"An all you can eat buffet",
			"Five thousand happy meals",
			"Meatloaf"
		]
	},
	{
		"What was the name of the Sea where Jesus calmed a storm?": [
			"The Sea of Galilee",
			"The Baltic Sea",
			"The seven seas",
			"Oh say can you see"
		]
	}
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
		 
     //if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.c4e73397-2f52-44e6-b986-48a503df140b") {
     //    context.fail("Invalid Application ID");
     //}

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4,
    GAME_LENGTH = 5;

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        cardTitle = "M Squared's Bible Quiz",
        speechOutput = "M Squared's Bible Quiz. I will ask you " + GAME_LENGTH.toString() 
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [],
        randomNum;

    // Pick 5 random questions from the list to ask the user, make sure there are no repeats
    while (gameQuestions.length != GAME_LENGTH) {
        randomNum = Math.floor(Math.random() * (questions.length - 1));
        if (gameQuestions.indexOf(randomNum) == -1) {
            gameQuestions.push(randomNum);
        }
    }
    return gameQuestions;
}

function populateRoundAnswers(gameQuestions, index, correctAnswer) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswer variable
    var answers = [],
        answersCopy = questions[gameQuestions[index]][Object.keys(questions[gameQuestions[index]])[0]],
        temp, i;
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswer];
    answers[correctAnswer] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var cardTitle = "M Squared's Bible Quiz",
        speechOutput = "";

    var answerSlot = intent.slots.Answer;
    // If the user provided answer isn't a number > 0 and < 5,
    // return an error message to the user
    if (!answerSlot || !answerSlot.value || isNaN(parseInt(answerSlot.value))
        || !(parseInt(answerSlot.value) < ANSWER_COUNT+1 && parseInt(answerSlot.value) > 0)) {
        speechOutput = "Your answer must be a number between 1 and 4."
        callback(session.attributes,
            buildSpeechletResponse(cardTitle, speechOutput, speechOutput, false));
    }
    else {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game
        if (!session.attributes || !session.attributes.questions) {
            speechOutput = "There is no game in progress. To start a new game, say, " +
                "start game.";
            callback(session.attributes,
                buildSpeechletResponse(cardTitle, speechOutput, speechOutput, false));
        }
        else {
            var gameQuestions = session.attributes.questions,
                correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
                currentScore = parseInt(session.attributes.score),
                currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
                correctAnswerText = session.attributes.correctAnswerText;

            var speechOutputAnalysis = "";
            if (parseInt(answerSlot.value) == correctAnswerIndex) {
                currentScore++;
                speechOutputAnalysis = "correct. ";
            } else {
                speechOutputAnalysis = "wrong. The correct answer is " + correctAnswerText + ". ";
            }
            // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
            if (currentQuestionIndex == GAME_LENGTH - 1) {
                speechOutput = "That answer is " + speechOutputAnalysis + "You got " +
                    currentScore.toString() + " out of " + GAME_LENGTH.toString() + " questions correct. Thank you for playing and remember to read your Bible!";
                callback(session.attributes,
                    buildSpeechletResponse(cardTitle, speechOutput, "", true));
            }
            else {
                currentQuestionIndex += 1;
                var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
                // Generate a random index for the correct answer, from 0 to 3
                correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
                var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                    questionIndexForSpeech = currentQuestionIndex + 1,
                    repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
                for (var i = 0; i < ANSWER_COUNT; i++) {
                    repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
                }
                speechOutput += "That answer is " + speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

                var sessionAttributes = {
                    "speechOutput": repromptText,
                    "repromptText": repromptText,
                    "currentQuestionIndex": currentQuestionIndex,
                    "correctAnswerIndex": correctAnswerIndex + 1,
                    "questions": gameQuestions,
                    "score": currentScore,
                    "correctAnswerText":
                        questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
                };
                callback(sessionAttributes,
                    buildSpeechletResponse(cardTitle, speechOutput, repromptText, false));
            }
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH.toString() + " multiple choice questions, try to get as many right as you can! "
        + "To give an answer to a question, respond with the number of the answer by saying one, two, three, or four. "
        + "To start a new game at any time, say, start game. "
        + "To repeat the last question asked, say, repeat.",
        repromptText = "To give an answer to a question, respond with the number of the answer. "
        + "To start a new game, say, start game",
        shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye and may God bless you!", "", true));
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
