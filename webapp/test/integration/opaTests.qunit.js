sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'dxc/uk/managetravel/test/integration/FirstJourney',
		'dxc/uk/managetravel/test/integration/pages/TravelList',
		'dxc/uk/managetravel/test/integration/pages/TravelObjectPage',
		'dxc/uk/managetravel/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('dxc/uk/managetravel') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);