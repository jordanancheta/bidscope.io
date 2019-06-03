import React from "react";


class PdfParse extends React.Component {
   
    constructor() {
      super();
      this.state = {
      }
      // You only need this if you don't use an arrow function when creating a function
      // this.submitPDF = this.submitPDF.bind(this);
   }
   submitPDF = () => {
   // If absolute URL from the remote server is provided, configure the CORS
   // header on that server.

   // unable to grab local file..need to fix this 
   
      var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
      
      // Loaded via <script> tag, create shortcut to access PDF.js exports.
      const pdfjsLib = window["pdfjs-dist/build/pdf"];
      
      // The workerSrc property shall be specified.
      pdfjsLib.GlobalWorkerOptions.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";
  
      // Asynchronous download of PDF
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(function(pdf) {
      console.log("PDF Loaded");
      
      // Fetch the first page
      const pageNumber = 1;
      pdf.getPage(pageNumber).then(function(page) {
         console.log('Page loaded');
         
         const scale = 1.5;
         const viewport = page.getViewport({scale: scale});
         
         // Prepare canvas using PDF page dimensions
         const canvas = document.getElementById("the-canvas");
         const context = canvas.getContext("2d");
         canvas.height = viewport.height;
         canvas.width = viewport.width;

         // Render PDF page into canvas context
         const renderContext = {
            canvasContext: context,
            viewport: viewport
         };
         const renderTask = page.render(renderContext);
         renderTask.promise.then(function () {
            console.log("Page Rendered")
         })
      });
      }, function (reason) {
      // PDF loading error
      console.error(reason);
      });
   }

   render() {
      return (
         <div>
            <section className="App-content">
               <div>
                  <h2>Upload Your Plans</h2>
                     {/* <form className="form pdf-form">
                        <input type="text"></input>
                     </form> */}
                  <div className="form">
                  <input type="file" id="file"/>
                     <button type="file" name="file" className="form-button" onClick={this.submitPDF}>Scan PDF</button>
                  </div>
               </div>
            </section>
            <section className="App section">
               <h2>Scope of Work</h2>
               <canvas id="the-canvas"></canvas>
            </section>
          </div>
      );
   }
}
 


export default PdfParse;
