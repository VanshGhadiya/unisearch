// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Kjsieit from './component/kjsieit/kjsieit';

function App() {
  return (
    <div className="App">
      <div class="showcase">
        <nav class="">
          <div class="left-nav">
            <form action="" class="search-bar">
              <input class="search-bar" type="search" id="search" placeholder="Search here" size="80px" onChange={() => {
                var x = document.getElementById("search")
                if (x === "kjsieit") {
                  window.open(<Kjsieit />)
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
      </div>
      {/* <Kjsieit /> */}
    </div>
  );
}

export default App;
