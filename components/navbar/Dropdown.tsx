'use  client'
import React from 'react'
import Link from "next/link"

const Dropdown = () => {
  return (
  <>
   <div className="navbar  bg-base-100 ml-60" >
  <div className="navbar-center">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Home</a>
  </div>
  <div className="dropdown dropdown-hover z-10">
  <div tabIndex={0} role="button" className="btn ml-6">Leagues</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link href="/league">Premier League</Link></li> 
    <li><a>English Premier League</a></li>
    <li><a>Laliga</a></li>
    <li><a>Serie A</a></li>
    <li><a>Bundesliga</a></li>
    <li><a>Ligue 1</a></li>
    <li><a>LMS League</a></li>
    <li><a>Saudi Pro League</a></li>
  </ul>
</div>
<div className="dropdown dropdown-hover z-10">
  <div tabIndex={0} role="button" className="btn ml-6">Footware</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>FIRM GROUND CLEATS</a></li>
    <li><a>INDOOR(Fairplay)SHOES</a></li>
  </ul>
</div>
<div className="dropdown dropdown-hover z-10">
  <div tabIndex={0} role="button" className="btn ml-6">Kids</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Jerseys</a></li>
    <li><a>FOOTWARE</a></li>
  </ul>
</div>
<div className="dropdown dropdown-hover z-10">
  <div tabIndex={0} role="button" className="btn ml-6">Non-ClubTeamJerseys</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>FootballTeam</a></li>
    <li><a>BasketballTeam</a></li>
    <li><a>NetballTeam</a></li>
    <li><a>VolleyballTeam</a></li>
    <li><a>Kids Football Jerseys</a></li>
    <li><a>Kids Basketball Jerseys</a></li>
  </ul>
</div>
<div className="dropdown dropdown-hover z-10">
  <div tabIndex={0} role="button" className="btn m-1">APPARELS</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Tracksuits</a></li>
    <li><a>Sockings</a></li>
    <li><a>Jumpers</a></li>
    <li><a>BodyArmours</a></li>
    <li><a>Shop All Apparels</a></li>

  </ul>
</div>
<div className="dropdown dropdown-hover z-10">
  <div tabIndex={0} role="button" className="btn ml-6">EQUIPMENTS</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Balls</a></li>
    <li><a>GoalKeeper Gloves</a></li>
    <li><a>Shin Guards & Safety Gears</a></li>
    <li><a>Bags</a></li>
    <li><a>Cones & Training Eqipments</a></li>
    <li><a>More Equipments</a></li>
    
  </ul>
</div>
</div>
</div>
  </>
 
  )
}

export default Dropdown

