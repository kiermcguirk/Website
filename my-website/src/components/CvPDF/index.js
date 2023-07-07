import React from 'react'
import { useState } from 'react';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

import pdfFile from '../../pdf/cv.pdf'
import { PDFContainer } from './CvPDFElements';





const index = () => {

    // const [viewPdf, setViewPdf] = useState(pdfFile);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
        <PDFContainer>
            
                {pdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfFile}
                    plugins={[defaultLayoutPluginInstance]} />
                </Worker></>}

                {/* if we dont have pdf or viewPdf state is null
                {!defaultPdfFilef&&<>No pdf file selected</>} */}
            

        </PDFContainer>
    </>
  )
}

export default index