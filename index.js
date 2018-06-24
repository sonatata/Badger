/* This code has been generated from your interaction model by skillinator.io

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function

var bedroomBadge = "https://s3.amazonaws.com/badger-roadrunner/imgs/BedroomBoss.png";
var petBadge = "https://s3.amazonaws.com/badger-roadrunner/imgs/PetPal.png";
var kindnessBadge = "https://s3.amazonaws.com/badger-roadrunner/imgs/CareBearWhite.png";
var jingle = "https://s3.amazonaws.com/badger-roadrunner/jingle.mp3";
let speechOutput;
let reprompt;
let welcomeOutput = "Badger can help your child earn badges for completing household chores. You can start by creating a board";
let welcomeReprompt = "Badger can help your child earn badges for completing household chores. You can start by creating a board";
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const makeImage = Alexa.utils.ImageUtils.makeImage;
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
speechOutput = '';
const handlers = {
	'LaunchRequest': function () {
		this.emit(':ask', welcomeOutput, welcomeReprompt);
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = 'adger can help your child earn badges for completing household chores. You can start a Badge Board by telling me the name of your child. After your child has a board, you can tell badger about chores that your child completes. Each chore counts towards a badge, for example, the chores make bed and tidy my room help the child earn a Bedroom Boss badge. ';
		reprompt = '';
		this.emit(':ask', speechOutput, reprompt);
	},
   'AMAZON.CancelIntent': function () {
		speechOutput = 'Placeholder response for AMAZON.CancelIntent';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.StopIntent': function () {
		speechOutput = 'See you later, Alligator';
		this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
		speechOutput = '';
		//this.emit(':saveState', true);//uncomment to save attributes to db on session end
		this.emit(':tell', speechOutput);
   },
	'startBoardIntent': function () {
		// start a new board for name
		speechOutput = '';

		//any intent slot variables are listed here for convenience

		let nameSlotRaw = this.event.request.intent.slots.name.value;
		console.log(nameSlotRaw);
		let nameSlot = resolveCanonical(this.event.request.intent.slots.name);
		console.log(nameSlot);

		//Your custom intent handling goes here
		speechOutput = "A board has been created for " + nameSlot;
		this.emit(":ask", speechOutput, speechOutput);
    },
	'bedroomTaskIntent': function () {
		speechOutput = '';

        let nameSlotRaw = this.event.request.intent.slots.name.value;
		console.log(nameSlotRaw);
		let nameSlot = resolveCanonical(this.event.request.intent.slots.name);
		console.log(nameSlot);
		let bedroomActionSlotRaw = this.event.request.intent.slots.bedroomAction.value;
		console.log(bedroomActionSlotRaw);
		let bedroomActionSlot = resolveCanonical(this.event.request.intent.slots.bedroomAction);
		console.log(bedroomActionSlot);
		speechOutput = nameSlot + " has completed " + bedroomActionSlot;
		const bodyTemplate = new Alexa.templateBuilders.BodyTemplate7Builder();
		bodyTemplate.setTitle('Bedroom Boss Unlocked!');
		bodyTemplate.setImage(makeImage(bedroomBadge));
		const template = bodyTemplate.build();
		var speechOutputt = 'Congrats! You\'ve earned your Bedroom Boss badge! <audio src="' + jingle +'"/>'
		this.response.speak(speechOutputt)
		    .renderTemplate(template);
		this.emit(":responseReady");
    },
	'checkProgress': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience

		let nameSlotRaw = this.event.request.intent.slots.name.value;
		console.log(nameSlotRaw);
		let nameSlot = resolveCanonical(this.event.request.intent.slots.name);
		console.log(nameSlot);

		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named checkProgress. This intent has one slot, which is name. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.MoreIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.MoreIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.NavigateHomeIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.NavigateHomeIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.NavigateSettingsIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.NavigateSettingsIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.NextIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.NextIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.PageUpIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.PageUpIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.PageDownIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.PageDownIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.PreviousIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.PreviousIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.ScrollRightIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.ScrollRightIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'easterEggIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "It’s a little known fact that badgers are actually lazy about housekeeping.";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.ScrollDownIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.ScrollDownIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.ScrollLeftIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.ScrollLeftIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.ScrollUpIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "This is a place holder response for the intent named AMAZON.ScrollUpIntent. This intent has no slots. Anything else?";
		this.emit(":ask", speechOutput, speechOutput);
    },
    'bedroomoneIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience
		let nameSlotRaw = this.event.request.intent.slots.name.value;
		console.log(nameSlotRaw);
		let nameSlot = resolveCanonical(this.event.request.intent.slots.name);
		console.log(nameSlot);

		//Your custom intent handling goes here
		speechOutput = "Great job " + nameSlot + " is one chore away from earning the Bedroom Boss badge";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'petCareTaskIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience

		let nameSlotRaw = this.event.request.intent.slots.name.value;
		console.log(nameSlotRaw);
		let nameSlot = resolveCanonical(this.event.request.intent.slots.name);
		console.log(nameSlot);
		let petActionSlotRaw = this.event.request.intent.slots.petAction.value;
		console.log(petActionSlotRaw);
		let petActionSlot = resolveCanonical(this.event.request.intent.slots.petAction);
		console.log(petActionSlot);
		
		speechOutput = nameSlot + " has completed " + petActionSlot;
		const bodyTemplate = new Alexa.templateBuilders.BodyTemplate7Builder();
		bodyTemplate.setTitle('Pet Pal Unlocked!');
		bodyTemplate.setImage(makeImage(petBadge));
		const template = bodyTemplate.build();
		var speechOutputt = 'Congrats! You\'ve earned your Pet Pal badge! <audio src="' + jingle +'"/>'
		this.response.speak(speechOutputt)
		    .renderTemplate(template);
		this.emit(":responseReady");

    },
	'kindnessTaskIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience

		let nameSlotRaw = this.event.request.intent.slots.name.value;
		console.log(nameSlotRaw);
		let nameSlot = resolveCanonical(this.event.request.intent.slots.name);
		console.log(nameSlot);
		let kindnessActionSlotRaw = this.event.request.intent.slots.kindnessAction.value;
		console.log(kindnessActionSlotRaw);
		let kindnessActionSlot = resolveCanonical(this.event.request.intent.slots.kindnessAction);
		console.log(kindnessActionSlot);
		
		speechOutput = nameSlot + " has completed " + kindnessActionSlot;
		const bodyTemplate = new Alexa.templateBuilders.BodyTemplate7Builder();
		bodyTemplate.setTitle('Care Bear Unlocked!');
		bodyTemplate.setImage(makeImage(kindnessBadge));
		const template = bodyTemplate.build();
		var speechOutputt = 'Congrats! You\'ve earned your Care Bear badge! <audio src="' + jingle +'"/>'
		this.response.speak(speechOutputt)
		    .renderTemplate(template);
		this.emit(":responseReady");

		
    },	
	'Unhandled': function () {
        speechOutput = "The skill didn't quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', speechOutput, speechOutput);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
	  let updatedIntent= null;
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code is necessary if using ASK SDK versions prior to 1.0.9 
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);
		
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', null, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');
		
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}