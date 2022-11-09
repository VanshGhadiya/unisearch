import React from 'react';
import "./kjsieit.css";

const Kjsieit = () => {
    return (
        <div>
            <div>
                <nav>
                    <div>
                        <h1 class="logo">KJ Somaiya Institute of Engineering and &emsp; &emsp; &emsp; &emsp; Information Technology</h1>
                    </div>
                </nav>
            </div>
            <div class="align">
                <div class="slider">
                    <div class="slides">
                        {/* <!--radio buttons start--> */}
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />
                        {/* <!--radio buttons end--> */}
                        {/* <!--slide images start--> */}
                        <div class="slide first">
                            <img src="https://media-exp1.licdn.com/dms/image/C511BAQFWWYpALnPdzQ/company-background_10000/0/1557380144419?e=1668625200&v=beta&t=vICS1mDCrti6dYr8unHzuv9pQrYcfsgtBvcXleHN_w8" alt="Slide 1" />
                        </div>
                        <div class="slide">
                            <img src="D:\VS CODE\unisearch\src\images\kjsieit6.jpg" alt="Slide 2" />
                        </div>
                        <div class="slide">
                            <img src="unisearch\src\images\kjsieit3.jpg" alt="Slide 3" />
                        </div>
                        <div class="slide">
                            <img src="D:\VS CODE\unisearch\src\images\KJSIEIT5.avif" alt="Slide 4" />
                        </div>
                        {/* <!--slide images end--> */}
                        {/* <!--automatic navigation start--> */}
                        <div class="navigation-auto">
                            <div class="auto-btn1"></div>
                            <div class="auto-btn2"></div>
                            <div class="auto-btn3"></div>
                            <div class="auto-btn4"></div>
                        </div>
                        {/* <!--automatic navigation end--> */}
                    </div>
                    {/* <!--manual navigation start--> */}
                    <div class="navigation-manual">
                        <label for="radio1" class="manual-btn"></label>
                        <label for="radio2" class="manual-btn"></label>
                        <label for="radio3" class="manual-btn"></label>
                        <label for="radio4" class="manual-btn"></label>
                    </div>
                </div>
                {/* <!--image slider end--> */}

                {/* <script type="text/javascript">
                var counter = 1;
                setInterval(function(){
                    document.getElementById('radio' + counter).checked = true;
                    counter++;
                    if(counter > 4){
                    counter = 1;
                    }
                }, 5000);
                </script> */}

            </div>
            <div>
                <h2 class="header"><u>Admission</u></h2>
                <p class="subheader">KJSIEIT offers various courses at the UG and PG levels. Candidates can apply for BTech through the Centralised Admission Process (CAP)</p>
                <ul>
                    <li>KJSIEIT BTech admission is based on JEE Main or MHT CET rank</li>
                    <li>A valid GATE score is required to get admission to KJSIEIT for MTech</li>
                    <li>Lateral entry admission is offered for the BTech programme</li>
                    <li>International students can also apply for admission to the BTech programme</li>
                </ul>
                <h3 class="header"><u>Placements</u></h3>
                <p class="subheader">KJSIEIT Placements 2021</p>
                <ul>
                    <li>There was a fall of around 7% in the no. of companies visiting in 2021 as compared with 2020</li>
                    <li>A rise of 4% was witnessed in the no. of students placed from the IT branch in 2021 as compared with 2020</li>
                    <li>A rise of 18% was witnessed in the no. of students placed from the Computer branch in 2021 as compared with 2020</li>
                </ul>
                <h4 class="header"><u>Cut-Offs</u></h4>
                <p class="subheader">BTech Cutoff Trend: Fluctuating(Maharashtra)</p>
                <img src="C:\Users\LENOVO\Desktop\Ai UniSearch\kjsieitcf1.png" alt="" class="sub-image" />
                <p class="subheader">BTech Cutoff Trend: Fluctuating(India)</p>
                <img src="C:\Users\LENOVO\Desktop\Ai UniSearch\kjsieitcf2.jpeg" alt="" class="sub-image" />
                <h6 class="header"><u>Courses & Fees</u></h6>
                <div class="cards">
                    <div class="card">
                        <img src="C:\Users\LENOVO\Desktop\Ai UniSearch\Artificial-Intelligence.jpg" alt="" class="card-image" />
                        <div class="card-content">
                            <p>
                                B.Tech. in Artificial Intelligence and Data Science(4 yrs)
                            </p>
                            <p>No. of seats: 60</p>
                            <p>Exams: MHT CET,JEE Main</p>
                            <p>Total tuition fees: 6.85L</p>
                            <p>Median Salary: - </p>
                            <p> Ratings: 4.5/5</p>

                        </div>
                        <div class="card-info">
                            <div>
                                <a href="file:///C:/Users/LENOVO/Downloads/K_J_Somaiya_Institute_of_Engineering_and_Information_Technology.pdf" class="card-link">Course details</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="C:\Users\LENOVO\Desktop\Ai UniSearch\cs.jpg" alt="" class="card-image" />
                        <div class="card-content">
                            <p>
                                B.Tech in Computer Engineering(4 yrs)
                            </p>
                            <p>No. of seats: 120</p>
                            <p>Exams: MHT CET,JEE Main</p>
                            <p>Total tuition fees: 6.85L</p>
                            <p>Median Salary: Rs.4.2 LPA</p>
                            <p> Ratings: 3.9/5</p>

                        </div>
                        <div class="card-info">
                            <div>
                                <a href="file:///C:/Users/LENOVO/Downloads/K_J_Somaiya_Institute_of_Engineering_and_Information_Technology.pdf" class="card-link">Course details</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="C:\Users\LENOVO\Desktop\Ai UniSearch\it.jpeg" alt="" class="card-image" />
                        <div class="card-content">
                            <p>
                                B.Tech. in Information Technology(4 yrs)
                            </p>
                            <p>No. of seats: 60</p>
                            <p>Exams: MHT CET,JEE Main</p>
                            <p>Total tuition fees: 6.85L</p>
                            <p>Median Salary: Rs.4.2 LPA</p>
                            <p> Ratings: 4.2/5</p>

                        </div>
                        <div class="card-info">
                            <div>
                                <a href="#" class="card-link">Course details</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="C:\Users\LENOVO\Desktop\Ai UniSearch\enee.jpeg" alt="" class="card-image" />
                        <div class="card-content">
                            <p>
                                B.Tech in Electronics and Telecommunication Engineering(4 yrs)
                            </p>
                            <p>No. of seats: 120</p>
                            <p>Exams: MHT CET,JEE Main</p>
                            <p>Total tuition fees: 6.85L</p>
                            <p>Median Salary: Rs.3.8 LPA</p>
                            <p> Ratings: 4.1/5</p>

                        </div>
                        <div class="card-info">
                            <div>
                                <a href="#" class="card-link">Course details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 class="header"><u>Infrastructure</u></h5>
                    <p class="subheader"><strong>Library</strong></p>
                    <p class="sub-content">The Library is filled with books of all kinds of genre for students to choose their pick and read away. Library truly is an integral part of the institute. The Library has more than 6500 titles, more than 22300 volumes and 500 E-journals. It has a built-up area of approx. 410 Sq. Meters and sitting capacity of 100 students.</p>
                    <p class="subheader"><strong>Cafeteria</strong></p>
                    <p class="sub-content">K.J. Somaiya Institute of Engineering and Information Technology has a cafeteria with open canteen beautifully constructed with all the facilities like Wi-Fi and electric points to operate computers etc.</p>
                    <p class="subheader"><strong>Hostel</strong></p>
                    <p class="sub-content">Two students sharing one room with attached toilet bathroom , and Four students sharing one room with common washroom facility, facilities includes Wi-Fi, Gym, Good hygienic food facility, Indoor & Outdoor games, Cooking area with utensils if want to cook and eat, Bus facility from institute to hostel for the students</p>
                    <p class="subheader"><strong>Sports Complex</strong></p>
                    <p class="sub-content">Available Facilities: Badminton Court|Basketball Court|Cricket Ground|Football Ground|Squash Court|Tennis Court|Skating and Cycling track|Outdoor Chess|Lawn Tennis Court|Kabaddi Court|Kho-Kho Court|Volleyball ground</p>
                    <p class="subheader"><strong>Labs</strong></p>
                    <p class="sub-content">The institute has 827 computer terminals with the latest Intel-i5 configuration and are loaded with advanced application and system software on LAN and Wi-Fi. Internet accessibility is provided for 24 hours with the bandwidth of 150 Mbps</p>
                    <p class="sub-content">Available Facilities: Electronics Lab|Language Lab|Electronica and Telecommunication Lab|Information technology Lab|Science Lab|eYantra lab|IoT based lab|PCB Machine and Lab|Project Laboratory Hardware/Software|Research and Development Lab</p>

                </div>
            </div>
        </div>

    )
}

export default Kjsieit ;