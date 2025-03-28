import React from "react";
import './About.css';

const About = () => {
    return (

        <div>
            <div className="AboutUs">

                <h3>♻️ABOUT US:</h3>

              
    
        <div className="aboutcontainer">
            <div className="about-content">
                <div className="about-img">
                    <img src="./assets/Images/crop img.webp" alt="Organic Vegetables"/>
                </div>
                <div className="about-text">
                    <h2>Trusted Organic Store</h2>
                    <p>Welcome to GreenVeges, your trusted source for 100% organic fruits and vegetables, cultivated with the utmost care from seed to harvest. We are passionate about delivering produce that is as close to nature as possible, free from harmful fertilizers and pesticides.</p>
                    <p>Our goal is simple – to deliver fresh, organic, and chemical-free produce right to your doorstep, ensuring you and your family enjoy a healthy lifestyle.</p>
                </div>
            </div>
        </div>




        <div className="visioncontainer">
            <div className="vision-content">
                <div className="vision-img">
                     <img src="./assets/Images/Vision.webp" alt="Vision"/>
                </div>
                <div className="vision-text">
                    <h2>Our Vision</h2>
                    <p>Driving innovation in farming and distribution of organic heirloom vegetables and fruits, using advanced technology to ensure delivery of nutritious produce to customers, empowering our farmers, and being ecologically responsible.</p>
                </div>
            </div>
        </div>
     

    

        <div className="mission-container">
            <div className="mission-content">
                <div className="mission-img">
                <img src="./assets/Images/Mission.webp" alt="Mission"/>
                </div>
                <div className="mission-text">
                        <h2>Our Mission</h2>
                    <ul>
                        <li>Earn the trust of our customers</li>
                        <li>Continuously shorten the time between harvest and consumption</li>
                        <li>Set the highest quality standards by empowering our customers, employees, and farmers</li>
                        <li>Use technology, automation, and transparency as the foundation of our business</li>
                        <li>Implement green energy across our supply chain</li>
                    </ul>
                </div>
            </div>
        </div>



        <div class="why-choose-us">
    <h2>Why Choose Us?</h2>
    <ul>
        <li>100% organic and chemical-free produce</li>
        <li>Directly sourced from sustainable farms</li>
        <li>Doorstep delivery for convenience</li>
        <li>Commitment to a greener planet</li>
    </ul>
</div>

        <div class="section">
            <h2>Meet Our Team</h2>
            <div class="team">
                <div class="team-member">
                    <h3>Nikzz</h3>
                    <p>Founder & CEO</p>
                </div>
                <div class="team-member">
                    <h3>Shubham</h3>
                    <p>Head of Operations</p>
                </div>
                <div class="team-member">
                    <h3>Ketki</h3>
                    <p>Marketing Lead</p>
                </div>
            </div>
        </div>
        <div class="image-container">
            <img src="./assets/Images/fresh Veges.jpg" alt="Fresh Vegetables"/>
        </div>
        <br></br>
        <a href="/Learn" class="btn">Learn More</a>
    </div> 



</div>

    

    )
}

export default About;