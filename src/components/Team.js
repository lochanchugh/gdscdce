import React, { Fragment } from 'react';
import './assets/css/Team.css';
import TeamCard from './TeamCard';
import KRITI from './assets/images/TEAM PHOTOS/kriti_kumari_gdsc_lead.png';
import SHRUTI from './assets/images/TEAM PHOTOS/shruti_yadav_outreach_lead.png';
import CHARU from './assets/images/TEAM PHOTOS/charu_sharma_content_lead.png';
import LOCHAN from'./assets/images/TEAM PHOTOS/lochan_web_development_lead.png';
import MOHIT from './assets/images/TEAM PHOTOS/mohit_rathee_ui_ux_lead.png';
import NAVYA from './assets/images/TEAM PHOTOS/navya_outreach_lead.png';
import SNEHA from './assets/images/TEAM PHOTOS/sneha_ui_ux_lead.png';
import PRATHMESH from './assets/images/TEAM PHOTOS/prathamesh_event_management_lead.png';
import UJJWAL from './assets/images/TEAM PHOTOS/ujjwal_aggarwal_web_development.png';
import VINEET from './assets/images/TEAM PHOTOS/vineet_design_team_lead.png';
import RITU from './assets/images/TEAM PHOTOS/ritu_outreach_lead.png';
import ANAND from './assets/images/TEAM PHOTOS/anand_rai_social_media_lead.png';
import SIMRAN from './assets/images/TEAM PHOTOS/simran_social_media_lead.png';
import ADITI from './assets/images/TEAM PHOTOS/aditi_singh_design_team_lead.png';
import AVIPSA from './assets/images/TEAM PHOTOS/avipsa_pradhan_event_management_lead.png';
import ASHIMA from './assets/images/TEAM PHOTOS/Ashima.jpeg'
import TUSHAR from './assets/images/TEAM PHOTOS/tushar_khatri_app_development_lead.png'
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
                            Mphoto={KRITI}
                            link="http://www.linkedin.com/in/kriti-kumari-342865248"
                        />
                                 <div className="row"></div>
                    <h1 id="heading">Meet the Team!!</h1>
                        <TeamCard
                            Mname="Lochan"
                            Mdesc="Web Development Lead"
                            Mphoto={LOCHAN}
                            link="https://www.linkedin.com/in/lochanchugh/"
                        />

                         <TeamCard
                            Mname="Ujjwal Aggarwal"
                            Mdesc="Web Development Lead"
                            Mphoto={UJJWAL}
                            link="https://www.linkedin.com/in/ujjwal-aggarwal-669165252"
                        />
                        <TeamCard
                            Mname="Prathamesh Wakekar"
                            Mdesc="Event Management Lead"
                            Mphoto={PRATHMESH}
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
                            Mphoto={SHRUTI}
                            link="https://www.linkedin.com/in/shruti-yadav-10a504253"
                        />

                         <TeamCard
                            Mname="Ritu"
                            Mdesc="Outreach team lead"
                            Mphoto={RITU}
                            link="https://www.linkedin.com/in/ritu-yadav-0bb447253"
                        />

                        <TeamCard
                            Mname="Charu Sharma"
                            Mdesc="Content Team Lead"
                            Mphoto={CHARU}
                            link="https://www.linkedin.com/in/charu-sharma-799284262"
                        />

                        <TeamCard
                            Mname="Navya"
                            Mdesc="Content Team Lead"
                            Mphoto={NAVYA}
                            link="https://www.linkedin.com/in/navya-yadav-3443b5253?fromQR=1"
                        />

                        <TeamCard
                            Mname="Sneha Pandey"
                            Mdesc="UI/UX Lead"
                            Mphoto={SNEHA}
                            link="https://www.linkedin.com/in/sneha-pandey-05a970223"
                        />
                        <TeamCard
                            Mname="Mohit Rathee"
                            Mdesc="UI/UX Lead"
                            Mphoto={MOHIT}
                            link="https://www.linkedin.com/in/mohitrathee051"
                        />

                         <TeamCard
                            Mname="Vineet Bhatt"
                            Mdesc="Design Team Lead"
                            Mphoto={VINEET}
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
                            Mphoto={SIMRAN}
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
                            Mphoto={TUSHAR}
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
