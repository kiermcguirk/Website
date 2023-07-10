import React from 'react';
import PdfViewer from '../components/PdfViewer';
const Thesis = () => {
    const pdfFilePath = require('../pdf/thesis.pdf');

    return (
        <>
            <PdfViewer pdfFilePath={pdfFilePath} />
        </>
    );
}

export default Thesis;