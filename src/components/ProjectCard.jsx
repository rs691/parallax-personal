import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import thumbnail from '../assets/thumbnail.jpg';
import PdfModal from './PdfModal';
import PDFResumeModal from './PDFResumeModal';




 // Replace with your PDF URL
const pdfUrl="./public/resume.pdf";




const ProjectCard = ({ title, description }) => {
  const [show, setShow] = useState(false);
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '38em', margin: '10rem', alignItems: 'center' }}>
        <Card.Img variant="top" src={thumbnail} className="img-thumbnail"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button onClick={handleShow}>View</Button>
          <Button>  
            <PdfModal pdfUrl={pdfUrl} />
            </Button>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <PDFResumeModal pdfUrl="./public/resume.pdf" /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
    </>
  );
};



  
//add prop types
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};


export default ProjectCard;
