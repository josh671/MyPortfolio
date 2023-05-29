import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';
import pdfFile from '../../JoshuaMBordallo.pdf';
 
 

function ResumePage() {
  return (
    <Box>
      <div>
        <embed src={pdfFile} type="application/pdf" width="100%" height="1000px"/>
      </div>
       
    </Box>
     
  );
}

export default ResumePage;