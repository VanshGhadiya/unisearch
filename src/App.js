// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Kjsieit from './component/kjsieit/kjsieit';

function App() {
  return (
    <div className="App">
      <div class="showcase">
        <nav>
          <div class="left-nav">
            <form action="" class="search-bar">
              <input class="search-bar" type="search" id="search" placeholder="Search here" size="80px" onChange={() => {
                var x = document.getElementById("search")
                if (x === "kjsieit") {
                  <Kjsieit />
                }
              }} />
            </form>
          </div>
          <div class="right-nav">
            <ul>
              <li><a href="#"><i class="fa-solid fa-filter"></i>Filters</a>
                <div class="sub-menu-1">
                  <ul>
                    <li class="hover-me"><a href="#">Courses</a><i class="fa fa-angle-right"></i>
                      <div class="sub-menu-2">
                        <div class="container-1">
                          <label class="checkbox" for="cs">
                            <input class="checkbox_input" type="checkbox" id="cs" />
                            <div class="checkbox_box"></div>
                            Computer Science
                          </label><label class="checkbox" for="it">
                            <input class="checkbox_input" type="checkbox" id="it" />
                            <div class="checkbox_box"></div>
                            Information Technology
                          </label>
                          <label class="checkbox" for="mech">
                            <input class="checkbox_input" type="checkbox" id="mech" />
                            <div class="checkbox_box"></div>
                            Mechanical
                          </label>
                          <label class="checkbox" for="extc">
                            <input class="checkbox_input" type="checkbox" id="extc" />
                            <div class="checkbox_box"></div>
                            Electronics and Telecommunication
                          </label>
                          <label class="checkbox" for="civil">
                            <input class="checkbox_input" type="checkbox" id="civil" />
                            <div class="checkbox_box"></div>
                            Civil
                          </label>
                          <label class="checkbox" for="aids">
                            <input class="checkbox_input" type="checkbox" id="aids" />
                            <div class="checkbox_box"></div>
                            Artificial-Intelligence and Data Science
                          </label>
                          <label class="checkbox" for="aiml">
                            <input class="checkbox_input" type="checkbox" id="aiml" />
                            <div class="checkbox_box"></div>
                            Artificial-Intelligence and Machine Learning
                          </label>

                          <label class="checkbox" for="etrx">
                            <input class="checkbox_input" type="checkbox" id="etrx" />
                            <div class="checkbox_box"></div>
                            Electronics
                          </label>
                          <label class="checkbox" for="iot">
                            <input class="checkbox_input" type="checkbox" id="iot" />
                            <div class="checkbox_box"></div>
                            Internet of Things
                          </label>
                          <label class="checkbox" for="chem">
                            <input class="checkbox_input" type="checkbox" id="chem" />
                            <div class="checkbox_box"></div>
                            Chemical
                          </label>
                          <label class="checkbox" for="aero">
                            <input class="checkbox_input" type="checkbox" id="aero" />
                            <div class="checkbox_box"></div>
                            Aeronautical
                          </label>
                        </div>

                      </div>
                    </li>
                    <li class="hover-me"><a href="#">Transport</a><i class="fa fa-angle-right"></i>
                      <div class="sub-menu-2">
                        <div class="container-2">
                          <label class="checkbox" for="Bus">
                            <input class="checkbox_input" type="checkbox" id="Bus" />
                            <div class="checkbox_box"></div>
                            Bus
                          </label>
                          <label class="checkbox" for="Rickshaw">
                            <input class="checkbox_input" type="checkbox" id="Rickshaw" />
                            <div class="checkbox_box"></div>
                            Rickshaw
                          </label>
                          <label class="checkbox" for="Taxi">
                            <input class="checkbox_input" type="checkbox" id="Taxi" />
                            <div class="checkbox_box"></div>
                            Taxi
                          </label>
                        </div>
                      </div>
                    </li>
                    <li class="hover-me"><a href="#">Project</a><i class="fa fa-angle-right"></i>
                      <div class="sub-menu-2">
                        <div class="container-3">
                          <label class="checkbox" for="Sem-wise">
                            <input class="checkbox_input" type="checkbox" id="Sem-wise" />
                            <div class="checkbox_box"></div>
                            Sem-wise
                          </label>
                          <label class="checkbox" for="Year-wise">
                            <input class="checkbox_input" type="checkbox" id="Year-wise" />
                            <div class="checkbox_box"></div>
                            Year-wise
                          </label>
                        </div>

                      </div>
                    </li>
                    <li class="hover-me"><a href="#">Placement</a><i class="fa fa-angle-right"></i>
                      <div class="sub-menu-2">
                        <div class="container-4">
                          <label class="checkbox" for="3-5">
                            <input class="checkbox_input" type="checkbox" id="3-5" />
                            <div class="checkbox_box"></div>
                            Average 3-5LPA
                          </label>
                          <label class="checkbox" for="6-10">
                            <input class="checkbox_input" type="checkbox" id="6-10" />
                            <div class="checkbox_box"></div>
                            Average 6-10LPA
                          </label>
                          <label class="checkbox" for="10-15">
                            <input class="checkbox_input" type="checkbox" id="10-15" />
                            <div class="checkbox_box"></div>
                            Average 10-15LPA
                          </label>
                          <label class="checkbox" for="20">
                            <input class="checkbox_input" type="checkbox" id="20" />
                            <div class="checkbox_box"></div>
                            20LPA and Above
                          </label>
                        </div>

                      </div>
                    </li>
                    <li class="hover-me"><a href="#">Commitee</a><i class="fa fa-angle-right"></i>
                      <div class="sub-menu-2">
                        <div class="container-5">
                          <label class="checkbox" for="Sc">
                            <input class="checkbox_input" type="checkbox" id="Sc" />
                            <div class="checkbox_box"></div>
                            Students Council
                          </label><label class="checkbox" for="NSS">
                            <input class="checkbox_input" type="checkbox" id="NSS" />
                            <div class="checkbox_box"></div>
                            NSS Commitee
                          </label>
                          <label class="checkbox" for="Robo">
                            <input class="checkbox_input" type="checkbox" id="Robo" />
                            <div class="checkbox_box"></div>
                            Robocon Commitee
                          </label>
                          <label class="checkbox" for="IEEE">
                            <input class="checkbox_input" type="checkbox" id="IEEE" />
                            <div class="checkbox_box"></div>
                            IEEE Commitee
                          </label>
                          <label class="checkbox" for="IETE">
                            <input class="checkbox_input" type="checkbox" id="IETE" />
                            <div class="checkbox_box"></div>
                            IETE Commitee
                          </label>
                          <label class="checkbox" for="CSI">
                            <input class="checkbox_input" type="checkbox" id="CSI" />
                            <div class="checkbox_box"></div>
                            CSI Commitee
                          </label>
                          <label class="checkbox" for="ACS">
                            <input class="checkbox_input" type="checkbox" id="ACS" />
                            <div class="checkbox_box"></div>
                            ACS Commitee
                          </label>
                        </div>

                      </div>
                    </li>
                    <li class="hover-me"><a href="#">Accomodation</a><i class="fa fa-angle-right"></i>
                      <div class="sub-menu-2">
                        <div class="container-6">
                          <label class="checkbox" for="Hostel">
                            <input class="checkbox_input" type="checkbox" id="Hostel" />
                            <div class="checkbox_box"></div>
                            Hostel
                          </label>
                          <label class="checkbox" for="Pg">
                            <input class="checkbox_input" type="checkbox" id="Pg" />
                            <div class="checkbox_box"></div>
                            Pg
                          </label>
                          <label class="checkbox" for="Other">
                            <input class="checkbox_input" type="checkbox" id="Other" />
                            <div class="checkbox_box"></div>
                            Other
                          </label>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </li>
              <li><a href="#"><i class="fa-solid fa-heart"></i>Wislist</a></li>
              <li><a href="#"><i class="fa-solid fa-user"></i>Account</a></li>
              <li><a href="#"><i class="fa-solid fa-headset"></i>Help</a></li>
            </ul>
          </div>
        </nav>
        <div class="showcase-top">
          <h1 class="logo">UniSearch</h1>

        </div>
        <div class="showcase-content">
          <h2 class="intro"> One Place destination for finding the best university in India </h2>
          <h3 class="intro"> search and explore the best India has to offer</h3>

          </div>

        </div>
        <div class="cards">
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\KJSIEIT.jpg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  KJ Somaiya Institute of Engineering and Information Technology
                </p>
                <p>
                  Loc:Somaiya Ayurvihar Complex Eastern Express Highway Near Everard Nagar, Sion East, Mumbai, Maharashtra 400022
                </p>
                <p>
                  Ratings: 4.2/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart1">
                    <input class="wishlist_input" type="checkbox" id="heart1" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>


                </div>
                <div>
                  <a href="file:///C:/Users/VANSH%20GHADIYA/Downloads/Unisearech/kjsieit.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>

          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\kjsce.jpeg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  K J Somaiya College of Engineering
                </p>
                <p>
                  Loc:Vidyanagar, Vidya Vihar East, Ghatkopar East, Mumbai, Maharashtra 400077
                </p>
                <p>
                  Ratings: 4.1/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart2">
                    <input class="wishlist_input" type="checkbox" id="heart2" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>


                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/kjsce.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\vcet.jpeg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  Vidyavardhini College of Engineering and Technology
                </p>
                <p>
                  Loc:9RMH+GFX, K.T. Marg, Vartak College Campus Vasai Road, Vasai-Virar, Maharashtra 401202</p>
                  <p>
                    Ratings: 3.7/5
                  </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart3">
                    <input class="wishlist_input" type="checkbox" id="heart3" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\thadomal.jpg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  Thadomal Shahani Engineering College
                </p>
                <p>
                  Loc:W, P. G. Kher Marg, (32nd Road, Marg, Off Linking Rd, TPS III, Bandra West, Mumbai, Maharashtra 400050
                </p>
                <p>
                  Ratings: 3.8/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart4">
                    <input class="wishlist_input" type="checkbox" id="heart4" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\djs.jpg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  Dwarkadas J. Sanghvi College of Engineering
                </p>
                <p>
                  Loc:No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme, Vile Parle, Mumbai, Maharashtra 400056
                </p>
                <p>
                  Ratings: 4.1/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart5">
                    <input class="wishlist_input" type="checkbox" id="heart5" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\rgit.jpg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  Rajiv Gandhi Institute of Technology
                </p>
                <p>
                  Loc:Juhu Versova Link Rd, behind HDFC Bank, Gharkul Society, Bharat Nagar, Versova, Andheri West, Mumbai, Maharashtra 400053
                </p>
                <p>
                  Ratings: 3.4/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart6">
                    <input class="wishlist_input" type="checkbox" id="heart6" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\umit.jpeg" alt="" class="card-image"/>
              <div class="card-content">
                <p>
                  Usha Mittal Institute of Technology
                </p>
                <p>
                  Loc:Juhu-Tara Road, Sir Vitthaldas Vidyavihar, Santacruz(W), Mumbai, Maharashtra 400049
                </p>
                <p>
                  Ratings: 3.5/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart7">
                    <input class="wishlist_input" type="checkbox" id="heart7" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\thakur-college.jpg" alt="" class="card-image"/>
              <div class="card-content">
                <p>
                  Thakur College of Engineering and Technology
                </p>
                <p>
                  Loc:TCET, A-Block, Gate No 5, Thakur Educational Campus, Shyamnarayan Thakur Rd, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101
                </p>
                <p>
                  Ratings: 4.1/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart8">
                    <input class="wishlist_input" type="checkbox" id="heart8" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\spit.jpeg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  Sardar Patel Institute of Technology
                </p>
                <p>
                  Loc:Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058
                </p>
                <p>
                  Ratings: 4.2/5
                </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart9">
                    <input class="wishlist_input" type="checkbox" id="heart9" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>

                </div>
                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>
              </div>
          </div>
          <div class="card">
            <img src="C:\Users\VANSH GHADIYA\Downloads\Unisearech\Photos\VJTI.jpg" alt="" class="card-image" />
              <div class="card-content">
                <p>
                  Veermata Jijabai Technological Institute
                </p>
                <p>
                  Loc: 2VC4+VCQ, H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019</p>
                  <p>
                    Ratings: 4/5
                  </p>

              </div>
              <div class="card-info">
                <div>
                  <label class="wishlist" for="heart10">
                    <input class="wishlist_input" type="checkbox" id="heart10" />
                    <div class="wishlist_box"><i class="fa-regular fa-heart"></i></div>
                  </label>
                </div>

                <div>
                  <a href="file:///C:/Users/LENOVO/Desktop/Ai%20UniSearch/index.html" class="card-link">View Details</a>
                </div>

              </div>
          </div>

        </div>
        <div class="footer">
          <div class="col-1">
            <h4>Useful Links</h4>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <div class="col-2">
            <h4>Newsletter</h4>
            <form>
              <input class="email-bar" type="email" placeholder="Your Email Address Here" />
                <br />
                  <button type="submit">Subscribe Now</button>
                </form>
              </div>
              <div class="col-3">
                <h4>Contact</h4>
                <p>401, XYZ Road, Lilac<br/>Mumbai, Maharashtra, IN</p>
                <div class="social-icons">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
      );
}

      export default App;
