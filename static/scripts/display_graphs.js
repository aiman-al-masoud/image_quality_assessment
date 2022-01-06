function display(names, originals, imp1, imp2, div_name, title) {
  console.log(names);
  console.log(originals);
  console.log(imp1);
  var original_curve = {
      x: names,
      y: originals,
      type: 'scatter',
      name: "Original",
      marker: {
        color: '#44d800',
        size: 12
      }
    };

  var impairment_1_curve = {
    x: names,
    y: imp1,
    type: 'scatter',
    name: "Impairment 1",
    marker: {
      color: 'orange',
      size: 12
    }
  };

  var impairment_2_curve = {
    x: names,
    y: imp2,
    type: 'scatter',
    name: "Impairment 2",
    marker: {
      color: 'red',
      size: 12
    }
  };

  var layout = {
    paper_bgcolor: '#080808',
    plot_bgcolor: '#080808',
    xaxis: {
      titlefont: {
        color: 'rgb(241, 241, 241)',
      },
      color: 'rgb(192, 192, 192)',
      gridcolor: '#444444',
      zerolinecolor: '#444444',
      tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ticktext: ['Books', 'Water', 'Tiger', 'Dogs', 'Hand', 'Mountains', 'Tree', 'London', 'Poppies', 'Bear'],
      tickfont: {
        size: 10
      },
      tickangle: -35
    },
    yaxis: {
      title: title,
      titlefont: {
        color: 'rgb(241, 241, 241)'
      },
      tickfont: {
        size: 10
      },
      zerolinecolor: '#444444',
      color: 'rgb(192, 192, 192)',
      gridcolor: '#444444'
    },
    legend: {
      orientation: "h",
      font: {
        color: 'rgb(241, 241, 241)',
      }
    }
  };

  var data = [original_curve, impairment_1_curve, impairment_2_curve];

  Plotly.newPlot(div_name, data, layout);
}

window.onload = () => {
  fetch('/get-mos-data')
  .then((response) => {
    return response.json();
  })
  .then(json_data => {
    let names = json_data["names"];
    let originals = json_data["original-image-mos"];
    let imp1 = json_data["slightly-impaired-image-mos"];
    let imp2 = json_data["heavily-impaired-image-mos"];

    display(names, originals, imp1, imp2, "mos_graph_div", "MOS");
  });

  fetch('/get-stddev-mos-data')
  .then((response) => {
    return response.json();
  })
  .then(json_data => {
    let names = json_data["names"];
    let originals = json_data["original-image-stddev-mos"];
    let imp1 = json_data["slightly-impaired-image-stddev-mos"];
    let imp2 =json_data["heavily-impaired-image-stddev-mos"];

    display(names, originals, imp1, imp2, "stddev_mos_graph_div", "&#963; of MOS");
  });

  /* Understand the number of partecipants in ratings.csv, and write it in partecipants label in graph_display.html */
  fetch('/get-number-partecipants')
  .then((response) => {
    return response.json();
  })
  .then(json_data => {
    let partecipants = json_data["partecipants"];
    if (partecipants == 1)
      document.getElementById('get-number-partecipants').innerHTML = partecipants + ' partecipant';
    else
      document.getElementById('get-number-partecipants').innerHTML = partecipants + ' partecipants';
  });
}