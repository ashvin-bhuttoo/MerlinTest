define(['plugins/router', 'durandal/app', 'knockout', 'bootstrap'], function (router, app, ko) {

    return {
        router: router,
        activate: function () {
            this.myGridRows = [
                    { Name: 'Kevin', Amount: '10', Col: 'grey' },
                    { Name: 'Vivek', Amount: '20', Col: 'grey' },
                    { Name: 'Denise', Amount: '30', Col: 'grey' },
                    { Name: 'Carl', Amount: '30', Col: 'grey' },
                    { Name: 'Mike', Amount: '50', Col: 'grey' },
                    { Name: 'Kyle', Amount: '60', Col: 'grey' },
                ];

            this.myMonths = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

            // ko.applyBindings({
            //     myGridRows: [
            //         { Name: 'Kevin', Amount: '10' },
            //         { Name: 'Vivek', Amount: '50' },
            //         { Name: 'Denise', Amount: '30' }
            //     ],
            //     myMonths: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
            // });
        },
        setname: function() {
            $('#lblUser')[0].innerText = "Hi " + $('#txtUser')[0].value;
        },
        showtime: function() {
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            app.showMessage('The time is: ' + time);
        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }
    };

});