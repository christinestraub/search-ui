# Search UI

5 Major components are in scope:

One to send search api calls that returns search term suggestion JSON that is shown in component. 

When a suggestion is clicked it is appended to a 2nd component tracking current collective search terms.

When component 2 is modified a JSON API call is made with the search term objects which returns a result JSON that will populate a 3rd component.

When one of the results is clicked in the 3rd component, a 4th component displays more detailed information on the result (information that was included in the results JSON). The 5th component is populated by another API call JSON.

When a button is clicked on the 4th component this 5th component is displayed with the JSON object list and info from the 4th component appended.

This 5th component shows a graphical representation of objects and their percent value of a total (all supplied by the 5th components original api call). This component allows you to add or removed/modify values of the objects in the list. A save button at the bottom sends the modified JSON as an API call and either returns the verified new list or returns/notifies of error.

Seach function is on backend and reached via API call. Not within scope of this project.

The below link is to the semi-functional XD prototype. If you click the search box it simulates when the string is sent with each character after the 3rd the graphical display built from an ajax json api.

The attached JSON example for this return is searchterms.json. Clicking one of the terms simulates the term being appended to the searchterms component below it that gets sent out as an api call with a json.

The example JSON for this is searchtermsout.json. The 3rd component being the results list is populated using the api response when sending the searchtermsout json and is simulated with the res1-3.json files.

There are 3 files that have pseudo pagination links representing the pagination call to be made if scrolling reaches the bottom of this component. clicking the shovel icon with open the resource allocation (5th component) tab (excuse the terrible graphical representation).

The values should be editable as the percent/dollar button is for toggling the value type. If the allocations are over the total (pulled from the json who's example is allocations.json) then the save button should not be clickable. (this will be double checked on the backend as well but the backend isn't in scope here). Here is the link: