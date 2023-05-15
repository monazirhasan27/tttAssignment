Terribly Tiny Tales Assignment Using ReactJs.


"Histogram" that fetches text data from a URL, calculates the frequency of words in the text, and displays a bar chart representing the top 20 most frequent words. 
It also includes a button to export the histogram data as a CSV file.

HOSTED LINK: http://monazirhasan27.github.io/tttAssignment

COMPONENTS:
1. App.js: It is a parent component in which child component is Rendered. This is the main component of entire application.
2. Histogram.js: It is a Child Component.

LIBERARIES USED:
1. React: The code is written as a React functional component. React is a JavaScript library for building user interfaces.
2. useState: It is a React Hook that allows us to add state to functional components. In this code, it is used to manage the state of the "text" and "histogramData" variables.
3. axios: It is a popular JavaScript library used to make HTTP requests. Here, it is used to fetch the text data from the given        URL('https://www.terriblytinytales.com/test.txt').
5. recharts: It is a charting library built with React and D3. It provides a set of reusable React components for creating charts. 

The following components from recharts are used:

-> BarChart: A component for rendering a bar chart.

-> Bar: Represents a bar within the bar chart.

-> XAxis: Renders the x-axis of the bar chart.

-> YAxis: Renders the y-axis of the bar chart.

-> CartesianGrid: Renders a grid in the background of the bar chart.

-> Tooltip: Displays tooltips when hovering over the bars.

-> Legend: Renders a legend for the chart.

CONCLUSION:
The code utilizes React, axios, and recharts libraries to fetch data, process it, and render a bar chart representing the frequency of the top 20 words.


SCREENSHOTS:

<img width="956" alt="ttt1" src="https://github.com/monazirhasan27/tttAssignment/assets/107314495/447d1719-2766-45c3-bcdf-750e726b1aac">


<img width="960" alt="ttt2" src="https://github.com/monazirhasan27/tttAssignment/assets/107314495/87519657-3864-4daa-8077-365667c44df7">
