import react from 'react';

import "./css/footer.css";


export default function Footer() {

  return (
    <>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">

              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="widget subscribe no-box">
                  <h6 className="widget-title logo">ACADEMY<span></span></h6>
                  <p>Buscamos excelencia em passar o conhecimento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright Academy © 2022. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );

};