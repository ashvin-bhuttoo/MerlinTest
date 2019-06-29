define(['durandal/app'], function (app) {
    var ctor = function () {
        this.displayName = 'Welcome to the Merlin Test Project using Durandal';
        this.tasks = [
            'Change the Loader Splash Message "Merlin Test" to your First Name',
            'Add a new HTML View and JS View Model called "TEST"',
            'Add this View to the Banner on the Home Page next to FLICKR',
            'Add this View to the Route etc to make the navigation work from the Home Page',
            'On this View, add a Text Input box and Button',
            'Enter your Name into the box and when the button is clicked, display your name anywhere on the page',
            'Add a button to the page. When the button is pressed, display a MODAL with the current time in it ',
            'Create a GRID on this page, with two columns called Name and Amount',
            'Populate the values for Name and Amount with any values of your choice',
            'On this TEST page, use Knockout to create a simple list of the Months of the Year ',
            'Add a Warning when navigating away from the Page to confirm if the user wants to navigate away from the page',
            'On the FLICKR View Model, update the Item.VIEWURL in the Item Select Function to use VIEWS/DETAIL VIEW'
        ];
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});