import React from 'react'
import Topbar from '../../component/topbar/topbar';
import Sidebar from '../../component/sidebar/sidebar';
import Feet from '../../component/feet/feet';
import Rightbar from '../../component/rightbar/rightbar';
const Home = () => {
  return (
    <div>
        <>
        <Topbar/>
        <div className="containe  ">
            <div className="row">
                <div className="col-2 ">
                    <Sidebar/>
                </div>
                <div className="col-8 ">
                    <Feet/>
                </div>
                <div className="col-2 ">
                    <Rightbar content="home"/>
                </div>
            </div>
        </div>
        </>
    </div>
  )
}

export default Home