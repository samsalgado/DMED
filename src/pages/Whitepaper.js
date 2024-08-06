import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

export function Whitepaper () {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleNextPage = () => {
        setPageNumber(pageNumber + 1);
    };

    const handlePrevPage = () => {
        setPageNumber(pageNumber - 1);
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Document
                file="./DECENT MED WHITEPAPER.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            
        </div>
    );
};


