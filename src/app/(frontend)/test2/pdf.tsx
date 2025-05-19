// MyDocument.jsx
import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

export const MyDocument = () => (
  <Document>
    <Page size="A4">
      <Text>Hello World!</Text>
    </Page>
  </Document>
);
