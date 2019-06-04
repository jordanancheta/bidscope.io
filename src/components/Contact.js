import React from "react";
import "../css/main.css";
import img1 from "..//images/img-01.jpg"


const Contact = () => {
   return (
   
   <div>

   <div className="">
      <div className="container">
         <div className="row">
            <div className="col-xs-12">
               <img className="img-responsive" alt="" src={img1} />
            </div>
         </div>
      </div>
   </div>

     <div class="section-container no-padding">
         <div class="container">
             <div class="row">
               <div class="col-xs-12">
                  <div class="row">
                     <div class="col-md-6">
                        <form action="" class="reveal-content contact-form">
                           <div class="form-group">
                              <input type="name" class="form-control" id="name" placeholder="Full name"/>
                           </div>
                           <div class="form-group">
                              <input type="email" class="form-control" id="email" placeholder="Email"/>
                           </div>
                           <div class="form-group">
                              <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                           </div>
                           <div class="form-group">
                              <textarea class="form-control" rows="3" placeholder="Enter your message"></textarea>
                           </div>
                           <button type="submit" class="btn btn-primary btn-lg">Send</button>
                        </form>
                     </div>
                     <div class="col-md-5 col-md-offset-1">    
                        <h3>Head Office</h3>
                        <div>
                           <p>653 Quail Meadows<br/>Irvine, CA 92603</p>
                        </div>
                        <div>
                           <p>contact@bidscope.io<br />909 438 1433</p>
                        </div>
                        <div>
                           <h3>Employment</h3>
                        </div>
                        <div>
                           <p>To apply for a job with our team, please feel free to send us your Linkedin profile link
                              ou CV to : careers@bidscope.io</p>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
         </div>
      </div>
   </div> 
   );
};

export default Contact;