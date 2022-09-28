// 2022-07-20 - brian@Spiral3
// Usage:
//  - Requires script tag: <script src="https://d3js.org/d3.v7.min.js"></script>
//  - Requires a page containing an element with id="helloWorld"
//  - Style the element with a significant height and width, for purposes of
//    demonstration.

// For purposes of demonstration, we'll just use normal content loading
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the chart with a simple data value,
  // in this case it's just an integer which represents
  // the radius of the SVG circle we're going to draw.
  // That value will also serve to be passed around via
  // simple click events.
  let data = 100;

  // This represents the react component element.
  let element = document.getElementById('helloWorld');

  // Initialize the chart. This is how the chart will be
  // rendered on the page/element with it's initial data set.
  helloWorldChart.init(element, data);

  // This is how we'll transmit data from click events within
  // the chart, back to the react component. Each event will
  // have a custom name, prefixed with 'chartEvent', i.e.
  // 'chartEvent-exportToggle', for when we use the cards in
  // the chart as toggles for what entries to add/remove from
  // data export.
  // Getting data from these events requires using the 'detail'
  // property of the event object.
  element.addEventListener("chartEvent", (event) => {
    console.log('CHART EVENT RECEIVED:', event.detail);
    // do stuff
  });

  // When we need to pass a new data set to the chart, simply
  // call the 'update' function with the new data. D3 works best
  // when idempotent, e.g. the ENTIRE data set should be passed
  // through to the chart, not just the changed values.
  data = 50;
  helloWorldChart.update(data);
});
