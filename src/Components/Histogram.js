import { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Histogram() {
  const [text, setText] = useState('');
  const [histogramData, setHistogramData] = useState([]);

  const fetchText = () => {
    axios.get('https://www.terriblytinytales.com/test.txt')
      .then(response => {
        setText(response.data);
        const words = response.data.toLowerCase().match(/\b\w+\b/g);
        const frequencyMap = new Map();
        words.forEach(word => {
          if (frequencyMap.has(word)) {
            frequencyMap.set(word, frequencyMap.get(word) + 1);
          } else {
            frequencyMap.set(word, 1);
          }
        });
        const sortedFrequencyMap = new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]));
        const top20Words = Array.from(sortedFrequencyMap.keys()).slice(0, 20);
        const histogramData = top20Words.map(word => {
          return { word: word, frequency: frequencyMap.get(word) };
        });
        setHistogramData(histogramData);
      })
      .catch(error => console.log(error));
  };

  const exportHistogramData = () => {
    const csvData = 'data:text/csv;charset=utf-8,' +
      'Word,Frequency\n' +
      histogramData.map(data => `${data.word},${data.frequency}`).join('\n');
    const encodedUri = encodeURI(csvData);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container">
        <div className="container1">
             <h1>Terribly Tiny Tales</h1>
        </div>
      {!text && <button className="submit-btn" onClick={fetchText}>Submit</button>}
      {text && (
        <div>
          <h2 className="title">Top 20 Words</h2>
          <div className="chart-container">
            <BarChart width={800} height={400} data={histogramData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="word" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="frequency" fill="#8884d8" />
            </BarChart>
            <button className="export-btn" onClick={exportHistogramData}>Export</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Histogram;
