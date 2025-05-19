// App.jsx
'use client';
import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './pdf';

const App = () => (
  <div>
    <h1>PDF Example</h1>

    {/* PDF Viewer */}
    <PDFViewer width="100%" height="600">
      <MyDocument />
    </PDFViewer>

    {/* PDF Download Link */}
    <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
      {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
    </PDFDownloadLink>
  </div>
);

export default App;
