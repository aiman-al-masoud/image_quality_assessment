function display(names, originals, imp1, imp2, div_name) {
    console.log(names);
    console.log(originals);
    console.log(imp1);
    var original_curve = {
        x: names,
        y: originals,
        type: 'scatter'
      };
      
      var impairment_1_curve = {
        x: names,
        y: imp1,
        type: 'scatter'
      };

      var impairment_2_curve = {
        x: names,
        y: imp2,
        type: 'scatter'
      };
      
      var data = [original_curve, impairment_1_curve, impairment_2_curve];
      
      Plotly.newPlot(div_name, data);
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

        display(names, originals, imp1, imp2, "mos_graph_div");
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

        display(names, originals, imp1, imp2, "stddev_mos_graph_div");
    });
}