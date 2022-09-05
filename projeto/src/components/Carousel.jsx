import react from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel() {

  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <img class="d-block w-100" src="..." alt="First slide"> */}
          </div>
          <div class="carousel-item">
            {/* <img class="d-block w-100" src="..." alt="Second slide"> */}
          </div>
          <div class="carousel-item">
            {/* <img class="d-block w-100" src="..." alt="Third slide"> */}
          </div>
        </div>
      </div>
    </>

  );
};