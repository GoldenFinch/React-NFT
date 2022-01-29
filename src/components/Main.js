import react from "react";
import './Main.css'
import insLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'

const Main = ({activePunk}) => {
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighLight">
                    <div className="punkContainer">
                        <img className="selectedPunk" src={activePunk?.image_url} alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{color: '#fff'}}>
                    <div>
                        <div className="title">{activePunk?.name}<span className="itemNumber"> ·#{activePunk?.token_id}</span></div>
                    </div>
                    <div className="owner">
                        <div style={{display: 'flex'}}>
                            <div className="ownerImageContainer">
                                <img src={activePunk?.owner?.profile_img_url} />
                            </div>
                            <div className="ownerDetails">
                                <div className="ownerNameAndHandle">
                                    <div>{activePunk?.owner?.address}</div>
                                    <div className="ownerHandle">@lzhang665-c@my.cityu.edu.hk</div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className="ownerLink">
                                <img src={insLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main