
// importer les pays
import deathrateDrugs from '../data/data-drugs.json'
// importer les fonctions des librairies que vous utilisez

export default batons => {
  const div = select(`#${batons}`)
  // dessiner le graphique
  console.log(hello);
  /*

  const svg = d3.create("svg")
      .attr("batons", [0, 0, width, height]);

  const updateBars = bars(svg);
  const updateAxis = axis(svg);
  const updateLabels = labels(svg);
  const updateTicker = ticker(svg);

  yield svg.node();

  for (const keyframe of keyframes) {
    const transition = svg.transition()
        .duration(duration)
        .ease(d3.easeLinear);

    // Extract the top bar’s value.
    x.domain([0, keyframe[1][0].value]);

    updateAxis(keyframe, transition);
    updateBars(keyframe, transition);
    updateLabels(keyframe, transition);
    updateTicker(keyframe, transition);

    invalidation.then(() => svg.interrupt());
    await transition.end();
  }

  duration = 250;
  n = 12
  names = new Set(data.map(d => d.name))*/
}
