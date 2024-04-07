/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Elías García y Juan Aday Siverio González
 * @since 06 abril 2024
 * @desc  la-liga.ts
 *        File to draw a chart with the classification of the Spanish League. 
 *        It uses FusionCharts library to draw the chart.
*/

// Include the FusionCharts library and the theme.
/// <reference path='../node_modules/fusioncharts/fusioncharts.charts.d.ts' />
/// <reference path='../node_modules/fusioncharts/themes/fusioncharts.theme.fusion.d.ts' />

// Include the "module" with the colors definition
/// <reference path='../colors/colors.ts' />


// Define the source of the data. It is an object with two properties: chart and data.
const dataSource = {
  chart: {
    caption: 'Clasificación de la Liga Española',
    subCaption: 'Temporada 2023-2024',
    xAxisName: 'Equipos',
    yAxisName: 'Puntos',
    baseFontColor: WHITE, 
    theme: 'fusion',
    animation: true, 
    bgColor: LIGHT_GREY,
    valueFontColor: WHITE,
    showValues: true,
    plotToolText: '<div style=\'font-weight:bold; background-color:lightblue; padding:10px; border-radius:5px; color:black;\'> <b>$label</b>: $value puntos </div>',
  },
  data: [
    { label: 'Barcelona', value: '90', color: `${RED},${BLUE}`, link: 'https://i.pinimg.com/736x/d4/d9/25/d4d9258a4e8fd626b4c72e177d10daef.jpg'},   
    { label: 'Real Madrid', value: '75', color: `${WHITE},${BLUE}`}, 
    { label: 'Atlético de Madrid', value: '73', color: `${RED},${WHITE}`},  
    { label: 'Valencia', value: '65', color: `${ORANGE},${VIOLET}`},
    { label: 'Sevilla', value: '63', color: `${RED},${WHITE}`, link: 'https://sevillafc.es/' }, 
    { label: 'Real Sociedad', value: '58', color: `${BLUE},${WHITE}`}, 
    { label: 'Villarreal', value: '56', color: `${YELLOW},${BLUE}`},  
    { label: 'Athletic Club', value: '53', color: `${RED},${WHITE}`}, 
    { label: 'Celta de Vigo', value: '50', color: `${LIGHT_BLUE},${WHITE}`}, 
    { label: 'Getafe', value: '48', color: `${BLUE},${WHITE}`},
    { label: 'Levante', value: '45', color: `${RED},${BLUE}`},
    { label: 'Espanyol', value: '42', color: `${BLUE},${WHITE}`},
    { label: 'Betis', value: '41', color: `${GREEN},${WHITE}`},
    { label: 'Alavés', value: '38', color: `${BLUE},${BLACK}`},
    { label: 'Mallorca', value: '36', color: `${RED},${BLACK}`},
  ]
};

// Render the graph. 
FusionCharts.ready(function () {
  const chart = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '1600',
    height: '900',
    dataFormat: 'json',
    dataSource
  });
  chart.render();
});
