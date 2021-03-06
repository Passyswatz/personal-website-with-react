import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Tab,Tabs} from "react-bootstrap";
function App() {
  return (
    <>
    {/*header*/}
<Header/>


      
  {/*home screen*/}
    <div className="Mainbackground" id="home">
      <div class="topBackground"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#001517"
          fillopacity="1"
          d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div class="container fluids">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="screenWords">
              <h1>Hello, I'm Paschal Og.</h1>
              <p>
                A frontend developer. Specializing in building exceptional
                trending mobile applications and websites.And collabrating with other developers to deliver
                quality mobile and web applications.Feel free to take a
                look at my latest projects. Remotely available UTC−1 to UTC+8.
                project@githubcom/passyswatz Tel:+234 909 251 3945
              </p>
              <div class="twoMainButton">
                <div class="buttonMain">
                  <a href="">Mobile Apps</a>
                  <div class="hrizontalLine"></div>
                </div>
                <div class="buttonMain">
                  <a href="">Websites</a>
                  <div class="hrizontalLine diff"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="screenImage">
              <img src="/image/1.png" alt="irene blog" />
            </div>
          </div>
        </div>
      </div>
    </div>
{/*SERVICES*/}

    <div className="section" id="services">
      <div class="container rows">
        <Tabs defaultActiveKey="services" class="tab">
        
    <Tab class="tablinks"  eventKey="services"  title="services">
    <div class="container rows">
        <div class="tabcontent" id="London">
          <div class="row"> 
          
          <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  {""}
                  <img
                    src="https://image.flaticon.com/icons/svg/426/426487.svg"
                    alt="Web Development"
                  />
                </div>
                <div class="sectionWords">
                  <h4>Web Development</h4>
                  <p>
                    Expand your business outreach by capitalizing on web
                    development services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img
                    src="/image/2.png"
                    alt="Mobile Development"
                  />
                </div>
                <div class="sectionWords">
                  <h4>Mobile Development</h4>
                  <p>
                    Optimize smart ways to deal with the customers.Hire skilled
                    mobile app developer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/3.png" alt="PWA development" />
                </div>
                <div class="sectionWords">
                  <h4>PWA development</h4>
                  <p>
                    Progressive Web Apps, it can be said that this is a new
                    technology for interacting with the target audience.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img
                    src="/image/4.png"
                    alt="Cross-Platform App"
                  />
                </div>
                <div class="sectionWords">
                  <h4>Cross-Platform App</h4>
                  <p>
                    Using React Native and flutter to build single app that
                    performs on both Android and iOS.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/5.png" alt="UX/UI Designs" />
                </div>
                <div class="sectionWords">
                  <h4>UX/UI Designs</h4>
                  <p>
                    intuitive, user-friendly products for the success of your
                    business to create a human-friendly visual language.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/6.png" alt="Digital Marketing" />
                </div>
                <div class="sectionWords">
                  <h4>Digital Marketing</h4>
                  <p>
                    Data-driven strategies maximize lifecycle value by align
                    your technology and marketing execution.
                  </p>
                </div>
              </div>
            </div></div>
          </div>
          </div>
    </Tab>

    <Tab class="tablinks"  eventKey="technology"  title="technology">
    <div class="container rows">
        <div class="tabcontent" id="London">
          <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/images/7.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Mobile Development</h4>
                  <ul>
                    <li>Flutter Framework</li>
                    <li>Android Apps</li>
                    <li>React Native</li>
                    <li>Ionic Framework</li>
                    <li>Xamarin Framework</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/8.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>UX/UI Designs</h4>
                  <ul>
                    <li>Sketch</li>
                    <li>Figma</li>
                    <li>Flinto</li>
                    <li>Adobe XD</li>
                    <li>Blender</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/4.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Web Development</h4>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJs</li>
                    <li>Jquery</li>
                    <li>JSON</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/4.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>E-commerce</h4>
                  <ul>
                    <li>Shopify</li>
                    <li>WooCommerce</li>
                    <li>Drubal</li>
                    <li>Magento</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/6.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Server Side</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>PHP</li>
                    <li>Express.js Framework</li>
                    <li>Laravel Framework</li>
                  </ul>
                </div>
              </div>
            </div> </div>
          </div>
          </div>
    </Tab>

    <Tab class="tablinks"  eventKey="industry"  title="industry">
    <div class="container rows">
        <div class="tabcontent" id="London">
          <div class="row"> 
          <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/3.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Construction</h4>
                  <p>
                    Advanced software solutions that take Construction into the
                    Digital Era.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/7.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Healthcare</h4>
                  <p>
                    Patient-friendly software that empowers healthcare industry
                    workers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/2.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Retail & ECommerce</h4>
                  <p>
                    Engaging and exciting software solutions for modern retail.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/5.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>FinTech</h4>
                  <p>
                    Meet the demands of modern customers in speed and security
                    with scalable financial technology
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/8.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Travel & Hospitality</h4>
                  <p>
                    Extend the comfort of your resort with practical software
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="sectionBox">
                <div class="sectionImage">
                  <img src="/image/4.png" alt="blockchain" />
                </div>
                <div class="sectionWords">
                  <h4>Logistics</h4>
                  <p>
                    Use all the latest tech available to make your logistics run
                    like clockwork.
                  </p>
                </div>
              </div>
            </div></div>
          </div>
          </div>
    </Tab>

          </Tabs>
      
      </div>

        </div>
    
{/*ABOUT*/}
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-md-6">
                <div class="aboutMeImg">
                  <img src="/image/2.png" alt="about me" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-me">
                  <h5>About me</h5>
                  <div class="aboutHorizontalLine"></div>
                  <p>
                    I enjoy creating things that live on the internet, whether
                    that be websites, applications, or anything in between. My
                    goal is to always build products that provide pixel-perfect,
                    performant experiences.
                  </p>
                  <p>
                    Familiarity with Front End High level programming such as
                    HTML, CSS, ReactJS, XML and JSON. Server Side coding
                    skills Node.js  Frameworks.
                  </p>
                  <p>
                    Understanding of data structures algorithms including data
                    migration, transformation and analysis. Deploying, managing,
                    and operating scalable, highly available, and learning how to handle  fault tolerant
                    systems on AWS.
                  </p>
                  <p>
                    Excellent communication skills on  English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/*CONTACT*/}
    <div className="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form action="" onSubmit="">
              <div class="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100" type="text" name="email" required />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                {/*<div class="row">{showResults ? <Results /> : null}</div>*/}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
{/*RECENT WORK*/}
    <div className="container" id="blogs">
      <div class="article">
        <h2>Recent Work</h2>
        <hr />
        <div class="rows">
          <div class="shop col-lg-3 col-md-4 col-sm-6">
            <div class="shopBack">
              <img src="/image/8.png"  alt="recent" />
              <div class="shoplebal">
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="shoptext">
              <p>Sell And Buy App</p>
              <h3>
                Another app from paschals hub is....
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*FOOTER*/}
    <Footer/>
    

    
    </>
  );
}

export default App;
