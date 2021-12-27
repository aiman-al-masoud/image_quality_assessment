function display(names, originals, imp1, imp2, div_name, title) {
    console.log(names);
    console.log(originals);
    console.log(imp1);
    var original_curve = {
        x: names,
        y: originals,
        type: 'scatter',
        name: "Orginal Images",
        marker: {
          color: '#44d800',
          size: 12
        }
      };
      
      var impairment_1_curve = {
        x: names,
        y: imp1,
        type: 'scatter',
        name: "Impairment 1 Images",
        marker: {
          color: 'orange',
          size: 12
        }
      };

      var impairment_2_curve = {
        x: names,
        y: imp2,
        type: 'scatter',
        name: "Impairment 2 Images",
        marker: {
          color: 'red',
          size: 12
        }
      };

      var layout = {
        paper_bgcolor: '#080808',
        plot_bgcolor: '#080808',
        xaxis: {
          title: 'Image Name',
          color: 'rgb(241, 241, 241)',
          gridcolor: '#444444' 
        },
        yaxis: {
          title: title,
          color: 'rgb(241, 241, 241)',
          gridcolor: '#444444'
        },
        legend: {
          font: {
            color: 'rgb(241, 241, 241)'  
          }
        }
      };

      var data = [original_curve, impairment_1_curve, impairment_2_curve];
      
      Plotly.newPlot(div_name, data, layout);
}

window.onload = () => {
    //const url = 'https://siqa.pythonanywhere.com';
    const url = 'http://localhost:5000';
    fetch(url + '/get-mos-data')
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

    fetch(url + '/get-stddev-mos-data')
    .then((response) => {
        return response.json();
    })
    .then(json_data => {
        let names = json_data["names"];
        let originals = json_data["original-image-stddev-mos"];
        let imp1 = json_data["slightly-impaired-image-stddev-mos"];
        let imp2 =json_data["heavily-impaired-image-stddev-mos"];

        display(names, originals, imp1, imp2, "stddev_mos_graph_div", "&#963;");
    });
}