// code your solution here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair='*') {
    return function(adjective='special', visualFlair=flair) {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("%");
console.log(encouragingPromptFunction("a dedicated programmer")); //=> "You are %a dedicated programmer%!"