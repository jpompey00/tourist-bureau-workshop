"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

const categoryDropDown = document.getElementById("categoryDropDown");
const activityDropDown = document.getElementById("activityDropDown");

//purchase form elements
const purchaseForm = document.getElementById("purchaseForm");

const ticketNumberBox = document.getElementById("ticketNumberBox");
const creditCardTextBox = document.getElementById("creditCardTextBox");
const emailAddressTextBox = document.getElementById("emailAddressTextBox");

const purchaseButton = document.getElementById("purchaseButton");
const resetButton = document.getElementById("resetButton");

const purchaseOutputTextbox = document.getElementById("purchaseOutputTextbox");
const activityOutputTextbox = document.getElementById("activityOutputTextbox");

const submitButton = document.getElementById("submitButton");

const categoryOutputTextbox = document.getElementById("categoryOutputTextbox");
const activityNameOutputTextbox = document.getElementById("activityNameOutputTextbox");
const descriptionOutputTextbox = document.getElementById("descriptionOutputTextbox");
const locationOutputTextbox = document.getElementById("locationOutputTextbox");

window.onload = function () {

    loadDropDown();
    categoryDropDown.onchange = onCategoryDropDownChanged;
    submitButton.onclick = onSubmitButtonClicked;
    purchaseButton.onclick = onPurchaseButtonClicked;
    resetButton.onclick = onResetButtonClicked;

}

function loadDropDown() {
    let categoryOption = new Option("Select an Item", "");
    categoryDropDown.appendChild(categoryOption);
    for (let category of categories) {
        categoryOption = new Option(category, category);
        categoryDropDown.appendChild(categoryOption);
    }


}

function onCategoryDropDownChanged() {
    purchaseForm.style.display = "none";
    //activityOutputTextbox.innerHTML = "";
    categoryOutputTextbox.innerHTML = "";
    activityNameOutputTextbox.innerHTML = "";
    descriptionOutputTextbox.innerHTML = "";
    locationOutputTextbox.innerHTML = "";



    activityDropDown.options.length = 0;

    if (categoryDropDown.value == "") {
        activityDropDown.options.length = 0;

    } else {
        for (let activity of activities) {
            if (activity.category == categoryDropDown.value) {

                let activityOption = new Option(activity.name, activity.id);
                activityDropDown.appendChild(activityOption);
            }
        }
    }

}

function onSubmitButtonClicked() {
    let outputString;
    if (activityDropDown.value != "") {

        for (let activity of activities) {
            if (activity.id == activityDropDown.value) {
                outputString = activity;
                displayInfo(activity);

                //basic object printing. Not formatted yet. Will fix later
                //activityOutputTextbox.innerHTML = JSON.stringify(outputString);

            }
        }
        if (outputString.price > 0) {
            purchaseForm.style.display = "block";
        } else {
            purchaseForm.style.display = "none";
        }
    }


}

function onPurchaseButtonClicked() {
    let outputAmount;
    let numberOfTickets;
    let emailAddress;
    let adventureName;

    for (let i = 0; i < activities.length; i++) {
        if (activities[i].id == activityDropDown.value) {
            outputAmount = activities[i].price;
            adventureName = activities[i].name;
        }
    }
    emailAddress = emailAddressTextBox.value;
    numberOfTickets = ticketNumberBox.value;


    purchaseOutputTextbox.innerHTML = `Your Credit card has been charged ${outputAmount}
    for ${numberOfTickets} ticket(s) to ${adventureName}. A confirmation email has been sent to ${emailAddress}`;
    //input values from the textBoxes here
}

function onResetButtonClicked() {
    ticketNumberBox.value = "";
    creditCardTextBox.value = "";
    emailAddressTextBox.value = "";

    purchaseOutputTextbox.innerHTML = "";
}

function displayInfo(activityToDisplay) {
    // let outputString = `
    // Category: ${activityToDisplay.category}
    // \nName: ${activityToDisplay.name}
    // \nDescription: ${activityToDisplay.description}
    // \nLocation: ${activityToDisplay.location}`;

    // activityOutputTextbox.innerHTML = outputString;

    categoryOutputTextbox.innerHTML = activityToDisplay.category;
    activityNameOutputTextbox.innerHTML = activityToDisplay.name;
    descriptionOutputTextbox.innerHTML = activityToDisplay.description;
    locationOutputTextbox.innerHTML = activityToDisplay.location

}