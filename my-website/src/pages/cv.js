import React from 'react';
import PdfViewer from '../components/PdfViewer';
const Cv = () => {
    const pdfFilePath = require('../pdf/cv.pdf');

    return (
        <>
            <PdfViewer pdfFilePath={pdfFilePath} />
        </>
    );
}

export default Cv;