import React, { Fragment } from 'react';
import './assets/css/Team.css';
import TeamCard from './TeamCard';
import ISHA from './assets/images/TEAM PHOTOS/kriti_kumari_gdsc_lead.png';
import SAMRIDHI from './assets/images/TEAM PHOTOS/shruti_yadav_outreach_lead.png';
import ANSH from './assets/images/TEAM PHOTOS/charu_sharma_content_lead.png';
import MUKUL from'./assets/images/TEAM PHOTOS/lochan_web_development_lead.png';
import SANDHYA from './assets/images/TEAM PHOTOS/mohit_rathee_ui_ux_lead.png';
import ANSHUL from './assets/images/TEAM PHOTOS/navya_outreach_lead.png';
import DEEPTI from './assets/images/TEAM PHOTOS/sneha_ui_ux_lead.png';
import SANJEEV from './assets/images/TEAM PHOTOS/prathamesh_event_management_lead.png';
import SHIVAM from './assets/images/TEAM PHOTOS/ujjwal_aggarwal_web_development.png';
import KRITI from './assets/images/TEAM PHOTOS/vineet_design_team_lead.png';
import ABHISHEK from './assets/images/TEAM PHOTOS/ritu_outreach_lead.png';
import TANUSH from './assets/images/TEAM PHOTOS/anand_rai_social_media_lead.png';
import ROHAN from './assets/images/TEAM PHOTOS/simran_social_media_lead.png';
import SAAKSHI from './assets/images/TEAM PHOTOS/aditi_singh_design_team_lead.png';
import HARSH from './assets/images/TEAM PHOTOS/avipsa_pradhan_event_management_lead.png';
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
                            Mphoto={ISHA}
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
                            Mphoto={HARSH}
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
                            Mphoto={SAAKSHI}
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
                            Mphoto={TANUSH}
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
