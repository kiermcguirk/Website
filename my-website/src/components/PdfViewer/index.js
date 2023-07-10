import React from 'react';
import { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { PDFContainer } from './PdfViewerElements';

const Index = ({ pdfFilePath }) => {
  const [pdfFile, setPdfFile] = useState(pdfFilePath);
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    defaultScale: 1.0, // Set the default zoom level to 100%
  });
  return (
    <PDFContainer>
      {pdfFile&& (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      )}
    </PDFContainer>
  );
};

export default Index;
