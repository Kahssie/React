import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { bookdeet } from './Components/BookDetails';
import Blogdetails from './Components/Blogdetails';
import CourseDetails from './Components/Course';

import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function App() {
  const [openCourse, setOpenCourse] = useState(false);
  const [openBook, setOpenBook] = useState(false);

  return (
    <Container>
      <Row>
        <Col className="square border-end border-5 border-success">
          <h1 onClick={() => setOpenCourse(!openCourse)} aria-controls="course-collapse"
            aria-expanded={openCourse}>Course Details</h1>
          
          <Collapse in={openCourse}>
            <div id="course-collapse">
              <CourseDetails />
            </div>
          </Collapse>
        </Col>

        <Col className="square border-end border-5 border-success">
          <h1 onClick={() => setOpenBook(!openBook)} aria-controls="book-collapse"
            aria-expanded={openBook}>Book Details</h1>
            <Collapse in={openBook}>
            <div id="book-collapse">
            {bookdeet}
            </div>
          </Collapse>
          
        </Col>
        <Col >
          <h1>Blog Details</h1>
          <Blogdetails />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
