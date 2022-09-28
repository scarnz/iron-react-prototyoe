// 2022-07-20 - brian@Spiral3
// Usage:
//  - Requires script tag: <script src="https://d3js.org/d3.v7.min.js"></script>

// For purposes of demonstration, we'll just use normal content loading
window.addEventListener('load', () => {
  let data = [window.depreciationData, window.depreciationData2];

  // This represents the react component element.
  let element = document.getElementById('comparablesChart');

  // Initialize the chart. This is how the chart will be
  // rendered on the page/element with it's initial data set.
  comparablesChart.init(element, data[0]);

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

  document.getElementById('chartUpdateLink').addEventListener('click', (e) => {

    let currData = Number(e.target.getAttribute('data-dataset')),
        newDataIndex = currData === 0 ? 1 : 0;

    e.target.setAttribute('data-dataset', newDataIndex);
    comparablesChart.update(data[newDataIndex]);

    e.preventDefault()
  });

  // When we need to pass a new data set to the chart, simply
  // call the 'update' function with the new data. D3 works best
  // when idempotent, e.g. the ENTIRE data set should be passed
  // through to the chart, not just the changed values.
  // data = 50;
  // helloWorldChart.update(data);
});
