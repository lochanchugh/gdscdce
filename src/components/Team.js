import React, { Fragment } from 'react';
import './assets/css/Team.css';
import TeamCard from './TeamCard';
import KRITII from './assets/images/TEAM PHOTOS/kriti_kumari_gdsc_lead.png';
import AVIPSA from './assets/images/TEAM PHOTOS/avipsa_pradhan_event_management_lead.png';
import ADITI from './assets/images/TEAM PHOTOS/aditi_singh_design_team_lead.png';
import ANAND from './assets/images/TEAM PHOTOS/anand_rai_social_media_lead.png';
import SANDHYA from './assets/images/TEAM PHOTOS/Sandhya Yadav (ui ux design).jpg';
import ANSHUL from './assets/images/TEAM PHOTOS/Anshul_EventManagement.jpg';
import DEEPTI from './assets/images/TEAM PHOTOS/DeeptiKaushik_eventManagement.jpg';
import SANJEEV from './assets/images/TEAM PHOTOS/SanjeevArora.jpg';
import SHIVAM from './assets/images/TEAM PHOTOS/Shivam.png';
import KRITI from './assets/images/TEAM PHOTOS/Kriti.jpg';
import ABHISHEK from './assets/images/TEAM PHOTOS/AbhishekKumar.jpg';
import TANUSH from './assets/images/TEAM PHOTOS/Tanush_Arora_SocialMedia_Lead.jpeg';
import ROHAN from './assets/images/TEAM PHOTOS/Rohan.jpg';
import SAAKSHI from './assets/images/TEAM PHOTOS/Saakshi.jpeg';
import HARSH from './assets/images/TEAM PHOTOS/Harsh.JPG';
import ASHIMA from './assets/images/TEAM PHOTOS/Ashima.jpeg'
import Volunteer from './Volunteer';
const Team = () => {
    return (
        <Fragment>
            <div className="profile-area ">

                <div className="container">
                    <h2>Faculty Advisor</h2>
                    <div className="row">
                        <TeamCard
                            Mname="Dr. Ashima Mehta"
                            Mdesc="Faculty Advisor"
                            Mphoto={ASHIMA}
                            link="https://www.linkedin.com/in/dr-ashima-mehta-71216177/" 
                        />
                    </div>
                    <h2>Our Core Team</h2>
                    <div className="row">
                        <TeamCard
                            Mname="Kriti Kumari"
                            Mdesc="Community lead"
                            Mphoto={KRITII}
                            link="http://www.linkedin.com/in/kriti-kumari-342865248"
                        />
                                 <div className="row"></div>
                    <h1 id="heading">Meet the Team!!</h1>
                        <TeamCard
                            Mname="Lochan"
                            Mdesc="Web Development Lead"
                            Mphoto={MUKUL}
                            link="https://www.linkedin.com/in/lochanchugh/"
                        />

                         <TeamCard
                            Mname="Ujjwal Aggarwal"
                            Mdesc="Web Development Lead"
                            Mphoto={SHIVAM}
                            link="https://www.linkedin.com/in/ujjwal-aggarwal-669165252"
                        />
                        <TeamCard
                            Mname="Prathamesh Wakekar"
                            Mdesc="Event Management Lead"
                            Mphoto={SANJEEV}
                            link="https://www.linkedin.com/in/prathamesh-wakekar-62529825a"
                        />
                         <TeamCard
                            Mname="Avipsa Pradhan"
                            Mdesc="Event Management Lead"
                            Mphoto={AVIPSA}
                            link="https://www.linkedin.com/in/avipsapradhan"
                        />

                        <TeamCard
                            Mname="Shruti Yadav"
                            Mdesc="Outreach Team Lead"
                            Mphoto={SAMRIDHI}
                            link="https://www.linkedin.com/in/shruti-yadav-10a504253"
                        />

                         <TeamCard
                            Mname="Ritu"
                            Mdesc="Outreach team lead"
                            Mphoto={ABHISHEK}
                            link="https://www.linkedin.com/in/ritu-yadav-0bb447253"
                        />

                        <TeamCard
                            Mname="Charu Sharma"
                            Mdesc="Content Team Lead"
                            Mphoto={ANSH}
                            link="https://www.linkedin.com/in/charu-sharma-799284262"
                        />

                        <TeamCard
                            Mname="Navya"
                            Mdesc="Content Team Lead"
                            Mphoto={ANSHUL}
                            link="https://www.linkedin.com/in/navya-yadav-3443b5253?fromQR=1"
                        />

                        <TeamCard
                            Mname="Sneha Pandey"
                            Mdesc="UI/UX Lead"
                            Mphoto={DEEPTI}
                            link="https://www.linkedin.com/in/sneha-pandey-05a970223"
                        />
                        <TeamCard
                            Mname="Mohit Rathee"
                            Mdesc="UI/UX Lead"
                            Mphoto={SANDHYA}
                            link="https://www.linkedin.com/in/mohitrathee051"
                        />

                         <TeamCard
                            Mname="Vineet Bhatt"
                            Mdesc="Design Team Lead"
                            Mphoto={KRITI}
                            link="https://www.linkedin.com/in/vineet-bhatt-8ab341235"
                        />
                        
                          <TeamCard
                            Mname="Aditi Sharma"
                            Mdesc="Design Team lead"
                            Mphoto={ADITI}
                            link="https://www.linkedin.com/in/aditi-sharma-4a39b827b"
                        />
                          <TeamCard
                            Mname="Simran Bhardwaj"
                            Mdesc="Social Media lead"
                            Mphoto={ROHAN}
                            link="https://www.linkedin.com/in/simran-bhardwaj-71b2a024a"
                        />
                        <TeamCard
                            Mname="Anand Rai"
                            Mdesc="Social Media Lead"
                            Mphoto={ANAND}
                            link="https://www.linkedin.com/in/anand-rai-384026146"
                        /> 
                         <TeamCard
                            Mname="Tushar Khatri"
                            Mdesc="App Development Lead"
                            Mphoto={TANUSH}
                            link="https://www.linkedin.com/in/tusharkhatriofficial"
                        /> 
                    </div>
                    <h2> </h2>
                    <div className="row">
                    <Volunteer/>
                    </div>

                </div>
            </div>
            
        </Fragment>
    )
}

export default Team
