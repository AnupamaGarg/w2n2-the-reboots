console.log("test domBuilder.js")   //HN: Testing that domBuilder is linked to HTML.

//                      BEGIN SEARCH SECTION
//HN: The code below is the search section containing search input fields and search buttons

let displayContainer = document.getElementById("display-container");
displayContainer.innerHTML = `<section id="#search-section">
<article>
<h3>Search</h3>
<input type="text" id="parks-search" placeholder="Search Parks Here">
<button type="submit" id="parks-btn">Search Parks</button>
</article>
<article>  
  <input type="text" id="events-search" placeholder="Search Events Here">
  <button type="submit" id="events-btn">Search Events</button>
</article>
<article>
  <input type="text" id="meetup-search" placeholder="Search Meetups Here">
  <button type="submit" id="meetups-btn">Search Meetups</button>
</article>
<article>
  <input type="text" id="concerts-search" placeholder="Search Concerts Here">
  <button type="submit" id="concerts-btn">Search Concerts</button>
</article>
</section>

<section id="results-section">
<h3>Results</h3>
</section>

<section id="itinerary-section">
<h3>Itinerary</h3>
</section>

</article>`

//                      END SEARCH SECTION

//                      BEGIN RESULTS SECTION

//          **** Dek ****

    //Note from Hannah: write your own function here that appends the results from your API to this section.

//          **** Dolly ****

    //Note from Hannah: write your own function here that appends the results from your API to this section.

//          **** Hannah ****

//                      END RESULTS SECTION

//                      BEGIN ITINERARY SECTION

//          **** Dek ****

    //Note from Hannah: write your own function here that appends the results from your saved results to this section.

//          **** Dolly ****

    //Note from Hannah: write your own function here that appends the results from saved results to this section.

//          **** Hannah ****

//                      END ITINERARY SECTION