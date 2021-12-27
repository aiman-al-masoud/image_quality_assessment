function display(names, originals, imp1, imp2, div_name) {
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
    fetch('https://siqa.pythonanywhere.com/get-mos-data')
    .then((response) => {
        let names = response.json()["names"];
        let originals = response.json()["original-image-mos"];
        let imp1 = response.json()["slightly-impaired-image-mos"];
        let imp2 = response.json()["heavily-impaired-image-mos"];

        display(names, originals, imp1, imp2, "mos_graph_div");
    })
    .then(data => console.log(data));

    fetch('https://siqa.pythonanywhere.com/get-stddev-mos-data')
    .then((response) => {
        let names = response.json()["names"];
        let originals = response.json()["original-image-stddev-mos"];
        let imp1 = response.json()["slightly-impaired-image-stddev-mos"];
        let imp2 = response.json()["heavily-impaired-image-stddev-mos"];

        display(names, originals, imp1, imp2, "stddev_mos_graph_div");
    })
    .then(data => console.log(data));
}