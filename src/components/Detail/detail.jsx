import React from "react";
import {FaUserAlt} from "react-icons/fa"
import {BiDonateBlood} from "react-icons/bi"
import {SiTheregister} from "react-icons/si"
import {MdPictureAsPdf} from "react-icons/md"

const Detail = ( ) => {
    return (
        <div className="detail">
            <ul>
                <li>
                <a href="">Dashboard</a>
                </li>
                <li>
                <a href=""><div className="icon"><FaUserAlt /></div>Users Details</a>
                    <li>
                        <a href="">Add Users</a>
                    </li>
                    <li>
                        <a href=" ">View Users</a>
                    </li>
                    <li>
                        <a href="">Edit Users</a>
                    </li>
                    <li>
                        <a href=" ">Delete Users</a>
                    </li>
                    </li>
                    <li>
                <a href=""><div className="icon"><BiDonateBlood /></div>Donation Details</a>
                    <li>
                        <a href="">Add Donation</a>
                    </li>
                    <li>
                        <a href=" ">View Donation</a>
                    </li>
                    <li>
                        <a href="">Edit Donation</a>
                    </li>
                    <li>
                        <a href=" ">Delete Donation</a>
                    </li>
                    </li>
                    <li>
                <a href=""><div className="icon"><SiTheregister /></div>Region Details</a>
                    <li>
                        <a href="">Add Region</a>
                    </li>
                    <li>
                        <a href=" ">View Region</a>
                    </li>
                    <li>
                        <a href="">Edit Region</a>
                    </li>
                    <li>
                        <a href=" ">Delete Region</a>
                    </li>
                    </li>
            </ul>
                 <li>
                     <a href=""><MdPictureAsPdf /> Generate Report <span class="fa arrow"></span></a>
                           <li>
                                <a href="">Download Report</a>
                          </li>
                          </li>
        </div>
    )
}

export default Detail
