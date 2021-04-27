import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFViewer = ({ file, pageNumber, width }) => {
  return (
    <Document file={file}>
      <Page pageNumber={pageNumber} width={width} />
    </Document>
  );
};
