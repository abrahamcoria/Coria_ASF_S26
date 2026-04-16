import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import movingBackground5 from "../assets/movingBackground5.mp4"
import pubBuild from "../assets/pubBuild.mp4"
import pugwars from "../assets/pugwars.mp4"
import Pugs_part_pub from "../assets/Pugs_part_pub.mp4"
import '../index.css'
import '../App.css'

export const Home = () => {
    return (
        <div className="home">
            <div className="video-background-holder">
                <video className="video-background-video"
                 src={movingBackground5}  autoPlay muted loop playsInline preload="auto" type="video/mp4" />
            </div>

            <div className="heroSection">
                <h1 className="thePugPub">Welcome to Pugs Pub!</h1>
                <h2 className="hero">The Pug-ineered Pub</h2>

                <div className="row g-4">
                    {/* Left Text */}
                    <div className="col-lg-6 col-sm-6">
                        <div className="hero-content">
                            <h3 className="heroBackground">
                                The Pug Wars erupted over the sacred velvet pillow—who sat first.
                                The Flat-Faced Royalists defended tradition, while the Wrinkled
                                Republicans demanded shared cushions. Fights featured wheeze charges,
                                snoring barrages, and newspaper artillery (mostly scaring stray Chihuahuas).
                                Then Sir Pugsly the Pug, sausage thief extraordinaire, barked,
                                “Why pillows when we can have pints?” He ended the war by founding
                                the Pugs Pub—neutral turf for beer and better snoring contests.
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 video-wrapper">
                        <video className="pubvid1" autoPlay muted loop playsInline src={pugwars} type="video/mp4"/>
                    </div>

                    <div className="col-lg-6 col-sm-6 video-wrapper">
                        <video className="pubvid1" autoPlay muted loop playsInline
                             src={pubBuild}/>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="hero-content">
                            <h3 className="heroBackground">
                                Building it was classic pug pandemonium: no thumbs, squirrel
                                distractions, drool blueprints on the carpet. They stacked
                                kibble-brick walls (seagulls approved), turned the royal throne
                                into a low bar, and opened with Sir Pugsly headbutting the tap
                                for a beer shower. Top-hatted pugs arrived for snoring showdowns,
                                guilt-eye paw-wrestling, and pathetic-treat auctions.
                                <br /><br />
                                Motto: “In dog beers, we trust.”
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="hero-content">
                            <h3 className="heroBackground">
                                Today Pugs Pub endures as wrinkled legend—drool sketches framed,
                                throne-bar creaking, Sir Pugsly’s portrait watching with tongue out.
                                Descendants sip Wheeze-ky Sours and Snuffle Shuffles amid snorts,
                                clinks, and occasional lost corgis.
                                <br /><br />
                                Long live Sir Pugsly, long live the pub, and may your bowl runneth over.
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 video-wrapper">
                        <video className="pubvid1"
                               autoPlay muted loop playsInline
                             src={Pugs_part_pub} type="video/mp4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
