import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Fab,
  Modal,
  Paper,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './LayerStyle.scss';
import { shortenText } from '../../utils/utilities';
import TextLayer from './TextLayerComponent';

function Layer({
  type,
  content,
  index,
  totalLayers,
  deleteLayer,
  moveLayerUp,
  moveLayerDown,
  activeLayer,
  setActiveLayer,
}) {
  const [isDeleteModalOpen, setDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const LayerControllerBar = () => {
    return (
      <div className="layerControllerContainer">
        <div className="layerControllerBar">
          <div>
            <Fab
              size="small"
              color="default"
              onClick={() => {
                moveLayerUp(index);
              }}
              disabled={index === 0 ? true : false}
            >
              <ExpandLessIcon />
            </Fab>
          </div>
          <div>
            <Fab
              size="small"
              color="default"
              disabled={index === totalLayers - 1 ? true : false}
              onClick={() => {
                moveLayerDown(index);
              }}
            >
              <ExpandMoreIcon />
            </Fab>
          </div>
          <div>
            <Fab size="small" color="secondary" onClick={openDeleteModal}>
              <DeleteIcon />
            </Fab>
          </div>
          <Modal open={isDeleteModalOpen} onClose={closeDeleteModal}>
            <div className="deleteModal">
              Are you sure you want to delete this layer?
              <div className="deleteModalButtons">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    deleteLayer(index);
                    closeDeleteModal();
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  onClick={closeDeleteModal}
                  style={{ marginLeft: 10 }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  };

  return (
    <>
      {type === 'text' ? (
        <Accordion
          expanded={activeLayer === index}
          onChange={() =>
            activeLayer === index ? setActiveLayer(null) : setActiveLayer(index)
          }
        >
          <AccordionSummary>
            <Chip label={type.toUpperCase()} color="primary" /> &nbsp;
            <Chip
              label={shortenText(content.value)}
              variant="outlined"
              disabled
            />
          </AccordionSummary>
          <AccordionDetails style={{ display: 'inline-block' }}>
            <LayerControllerBar />
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
