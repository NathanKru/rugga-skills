import './App.css';

function App() {
  return (
    <div className="App">
      <div class="own-nav">
        <div class="container">
          <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
              <div class="col-md-3 mb-2 mb-md-0">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none"></a>
              </div>

              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary white">Home</a></li>
                <li><a href="#" class="nav-link px-2 white">About</a></li>
                <li><a href="#" class="nav-link px-2 white">Contact Us</a></li>
              </ul>
            </header>
          </div>
        </div>
      </div>

      <div class="background-container">
        <div class="overlay">
          <div class="banner-text">
            <h2 class="black"> Place holder Banner Swapping ? Carasoul?</h2>
            <button>Contact Us Now</button>
            <h4>OR</h4>
            <button>Find Out More</button>
          </div>
        </div>
      </div>

      <div class="center-text">
        <h1 class="red">Get to Know Us</h1>\
          <h3 class="red">RUGBY IS A GAME FOR EVERYONE</h3>
        <br></br>
        <p class="text2">Welcome to Rugga Skills, where passion meets performance! We provide expert rugby training for women, 
          children, and players of all ages and skill levels. Whether you're just starting or looking to refine your game, our inclusive 
          academy offers a supportive environment to help you grow as an athlete. 
        </p>
        <p class="text2">Join us and experience the thrill of rugby, while building confidence, 
        fitness, and teamwork along the way!</p>
      </div>

      <div class="test2">
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Learn More About Us</h2>
                <p>At [Academy Name], we are passionate about developing rugby skills for players of all ages and skill levels. Our mission is to empower individuals through expert coaching, a supportive environment, and personalized training programs that foster growth both on and off the field.</p>
                <p>Whether you're just starting out or looking to refine your game, we offer everything you need to take your rugby skills to the next level. <a href="/about-us" class="text-light">Read more about us</a> and join the rugby community!</p>
            <button class="btn btn-outline-light" type="button">Example button</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary border rounded-3 ">
          <h2>Explore Our Gallery</h2>
                <p>Check out our gallery to see photos of our training sessions, events, and community-building activities. Our academy is all about bringing people together and celebrating the love of rugby through pictures and memories.</p>
                <p>Take a look at our collection of images from various training camps, matches, and social events. <a href="/gallery" class="text-secondary">Explore the gallery</a> to get a closer look at the action!</p>
                <button class="btn  btn-outline-dark" type="button">Example button</button>
          </div>
        </div>
      </div>
  </div>
      {/* Add thin border to split the content white */}
      <div class="background-container2">
        <div class="overlay">
          <div class="icon-text-container">
            <div class="icon-text">
              <img src="icon1.png" alt="Icon 1" class="icon" />
              <span class="text">Unlock your full potential with personalized rugby training for all ages and skill levels</span>
            </div>
            <div class="icon-text">
              <img src="icon2.png" alt="Icon 2" class="icon" />
              <span class="text">Develop elite rugby skills through expert coaching and cutting-edge techniques</span>
            </div>
            <div class="icon-text">
              <img src="icon4.png" alt="Icon 3" class="icon" />
              <span class="text">From beginners to pros, we help you elevate your game with tailored rugby sessions.</span>
            </div>
            <div class="icon-text">
              <img src="icon3.png" alt="Icon 3" class="icon" />
              <span class="text">From Rooi Falk to Rugga Campion ships</span>
            </div>
          </div>
         
        </div>
      </div>



      <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom">Our Rugby Skills Training Features</h2>

      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
              <h2 class="fw-bold text-body-emphasis">Tailored Rugby Training for All Ages & Skill Levels</h2>
              <p class="text-body-secondary">Whether you're a beginner, intermediate, or advanced player, we provide personalized rugby training that helps you unlock your potential. Our training programs are designed to cater to every age group and experience level, focusing on improving your technical skills, fitness, and overall game awareness.</p>
              <a href="#" class="btn btn-primary btn-lg">Join Our Program</a>
          </div>

          <div class="col">
              <div class="row row-cols-1 row-cols-sm-2 g-4">
                  <div class="col d-flex flex-column gap-2">
                      <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                          <svg class="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 class="fw-semibold mb-0 text-body-emphasis">Fitness for Rugby</h4>
                      <p class="text-body-secondary">Get in top physical shape with our fitness-focused rugby training. Improve your strength, speed, endurance, and agility with exercises tailored for rugby players of all levels.</p>
                  </div>

                  <div class="col d-flex flex-column gap-2">
                      <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                          <svg class="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 class="fw-semibold mb-0 text-body-emphasis">Skills Development</h4>
                      <p class="text-body-secondary">Hone your rugby skills with drills designed to enhance ball-handling, passing, kicking, and tackling. Our experienced coaches provide guidance to elevate your technique on the field.</p>
                  </div>

                  <div class="col d-flex flex-column gap-2">
                      <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                          <svg class="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 class="fw-semibold mb-0 text-body-emphasis">All Ages Welcome</h4>
                      <p class="text-body-secondary">From kids learning the basics to adults refining advanced strategies, our academy welcomes players of all ages. We create a fun and inclusive environment to develop skills and foster a love for the game.</p>
                  </div>

                  <div class="col d-flex flex-column gap-2">
                      <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                          <svg class="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 class="fw-semibold mb-0 text-body-emphasis">Experience-Level Specific Training</h4>
                      <p class="text-body-secondary">Our training programs are customized to your experience level. Whether you're a complete beginner or a seasoned player, we provide drills and guidance tailored to your current skills and goals.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
      <div class="b-example-divider"></div>

 

    <div class="test">
      <div class="image-container">
        <div class="image-box">
          <img src="rug1.jpg" alt="Image 1"/>
          <div class="image-overlay">Text 1</div>
        </div>
        <div class="image-box">
          <img src="rugga1.jpg" alt="Image 2"/>
          <div class="image-overlay">Text 2</div>
        </div>
        <div class="image-box">
          <img src="rugwoman.jpg" alt="Image 3"/>
          <div class="image-overlay">Text 3</div>
        </div>
        <div class="image-box">
          <img src="rugga2.jpg" alt="Image 4"/>
          <div class="image-overlay">Text 4</div>
        </div>
      </div>
    </div>


      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Gallery</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact Us</a></li>
          </ul>
          <p class="text-center text-body-secondary">©2025 Rugga Skills</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
