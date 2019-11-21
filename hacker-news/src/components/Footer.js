import React from "react";
import Anime from "react-anime";
import ReactIcon from "./ReactIcon";

export default function Footer() {

    return (
        <div className="Footer">
            <Anime >
                <div className="FooterContent">

                                        <p className ="made">Made with React</p>
                    <div className="logo-cont">
                    <ReactIcon className="ReactIcon" />

        </div>

                </div>
            </Anime>

        </div>
    );
};