import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@material-ui/core';

import { shortenText } from '../../utils/utilities';
import TextLayer from './TextLayerComponent';

function Layer({ type, content, index }) {
  return (
    <>
      {type === 'text' ? (
        <Accordion>
          <AccordionSummary>
            <Chip label={type.toUpperCase()} color="primary" /> &nbsp;
            <Chip
              label={shortenText(content.value)}
              variant="outlined"
              disabled
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextLayer content={content} index={index} />
          </AccordionDetails>
        </Accordion>
      ) : (
        <></>
      )}
    </>
  );
}

export default Layer;
