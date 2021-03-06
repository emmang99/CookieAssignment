/*
Welcome to the final assignment

In this assignment we will use the skills we have practiced throughout the semester

Each task has a TO DO and a number.  Solve each task in order.

Use your node scripts, and run the console in your browser to keep track of your progress

The list of questions in order is in the readme.md and can either be viewed in your editor or online at the repo
*/

function CookieBuilder(){
    this.init = function(){
        //4.  TO DO: add a console log to the init function
        console.log(this.init);
        //5.  TO DO: call the gatherData function
        this.gatherData();
    }
}
CookieBuilder.prototype.setTitle = function(){
    //16: TO DO: use querySelector to find the h1 tag and set its title to this.title
    this.title = document.querySelector('h1');
    //17: TO DO: use querySelector to find header>h2 tag and set its title to this.descriptor
    this.descriptor = document.querySelector('header > h2');
};
CookieBuilder.prototype.listIngredients = function(){
    //18: TO DO: make a variable called ingredientsList have it store the result of a query selector looking for #ingredients >ul
    var ingredientsList = document.querySelector('#ingredients > ul');
    //19: TO DO: uncomment the forEach and add a console log describing what it is doing
    this.cookieIngredients.forEach(ingred =>{
        let item = document.createElement("li");
        item.innerText = ingred;
        ingredientsList.appendChild(item);
        console.log("Adding each ingredients one by one as a list.");
    });
};
CookieBuilder.prototype.listSteps = function(){
    let stepsList = document.querySelector("#steps ol");
    this.cookieSteps.forEach(stp => {
        //20: TO DO: create a variable called stepItem that creates an li tag(eg. document.createElement("li"))
        var stepItem = document.createElement("li");
        //21: TO DO: make the inner text of stepItem equal to stp
        stepItem.innerHTML = stp;
        //22: TO DO: append stepItem to the end of stepsList
        stepsList.appendChild(stepItem);
    })
}
CookieBuilder.prototype.listNotes = function(){
    //23: TO DO:  add a console log to this function describing what it does
    let notesArea = document.querySelector("#steps article");
    this.notes.forEach(nt => {
        let theCopy = document.createElement("p");
        theCopy.innerHTML = nt;
        notesArea.appendChild(theCopy);
        console.log("Adding notes to theCopy area as p.");
    })
}
CookieBuilder.prototype.setPrepTime = function(){
    document.querySelector("header #prep").innerHTML = `<span>Prep Time:</span> ${this.prepTime}`;
}
CookieBuilder.prototype.setDifficultyLevel = function(){
    //24: TO DO: set the contents of the inner html to match the following format-> Difficulty: difficultyLevelHere
    //please note that the difficulty level should come from your data!
    document.querySelector("header #difficulty").innerHTML = `<span>Difficulty:</span> ${this.difficultyLevel}`;
}
CookieBuilder.prototype.populateData = function(resp){
    //9. TO DO: set the value of this.cookieIngredients to resp.cookieIngredients
    this.cookieIngredients = resp.cookieIngredients;
    //10: TO DO: in the same way as you set cookieIngredients, set the value for this.cookieSteps
    this.cookieSteps = resp.cookieSteps;
    //11: TO DO: in the same way as you set cookieIngredients, set the value for this.notes
    this.notes = resp.notes;
    //12: TO DO: in the same way as you set cookieIngredients, set the value for this.title
    this.title = resp.title;
    //13: TO DO: in the same way as you set cookieIngredients, set the value for this.descriptor
    this.descriptor = resp.descriptor;
    //14: TO DO: in the same way as you set cookieIngredients, set the value for this.prepTime
    this.prepTime = resp.prepTime;
    //15: TO DO: in the same way as you set cookieIngredients, set the value for this.difficultyLevel
    this.difficultyLevel = resp.difficultyLevel;
    //calling the data visual functions
    this.setTitle();
    this.listIngredients();
    this.listSteps();
    this.listNotes();
    this.setPrepTime();
    this.setDifficultyLevel();
}
CookieBuilder.prototype.gatherData = function(){
    //6.  TO DO: In the line below use the fetch command to get data.json
    fetch('data.json')
    .then(resp => {
        return resp.json();
    })
    .then(resp => {
        //7. TO DO: and a console log to show the contents of resp
        console.log(resp);
        //8. TO DO: call populateData and send it resp
        this.populateData.call(this, resp);
    });
}

//1. TO DO: make an instance of CookieBuilder and call it theCookie
let theCookie = new CookieBuilder("theCookie");

//the script below fires when your page is loaded
window.onload = function(){
    //2. TO DO:  add a console log
    console.log("Program running");
    //3. TO DO:  call the init function of theCookie
    theCookie.init();
};
