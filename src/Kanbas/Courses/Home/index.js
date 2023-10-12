import ModuleList from "../Modules/ModuleList";
import ActionBar from "../ActionsBar/ActionBar";
import './home.css'
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { BiImport } from 'react-icons/bi';
import { TbFileImport } from 'react-icons/tb';
import { BsClipboard2Data } from 'react-icons/bs';
import { TfiAnnouncement } from 'react-icons/tfi';
import { IoIosNotificationsOutline } from 'react-icons/io'

function Home() {
  return (
    <div className='d-flex justify-content-between home-page'>
      <div className="home-left">
        <ActionBar />
        <ModuleList />
      </div>
      <div className='home-right'>
        <button className='btn btn-outline-secondary home-right-buttons'>
          <BiImport /> Import Existing Content
        </button>
        <button className='btn btn-outline-secondary home-right-buttons'>
          <TbFileImport /> Import from Commons
        </button>
        <button className='btn btn-outline-secondary home-right-buttons'>
          <AiOutlineHome /> Choose Home Page
        </button>
        <button className='btn btn-outline-secondary home-right-buttons'>
          <BsClipboard2Data /> View Course Stream
        </button>
        <button className='btn btn-outline-secondary home-right-buttons'>
          <TfiAnnouncement /> New Announcement
        </button>
        <button className='btn btn-outline-secondary home-right-buttons'>
          <BsClipboard2Data /> New Analytics
        </button>
        <button className='btn btn-outline-secondary home-right-buttons'>
          <IoIosNotificationsOutline /> View Course Notifications
        </button>

        <div className='to-do-header'>
          To Do
        </div>

        <div className='to-dos'>
          <div className='to-do-item'>
            <div className='d-flex'>
              <p className='circle-num'>5</p>
              <div className='to-do-item-text-container'>
                <p className='main-text'>Grade A1 - ENV + HTML</p>
                <p className='subtext'>100 points * Sep 18 at 11:59pm</p>
              </div>
            </div>
            <AiOutlineClose className='close-x' />
          </div>
          <div className='to-do-item'>
            <div className='d-flex'>
              <p className='circle-num'>5</p>
              <div className='to-do-item-text-container'>
                <p className='main-text'>Grade A2 - CSS + BOOTSTRAP</p>
                <p className='subtext'>100 points * Oct 2 at 11:59pm</p>
              </div>
            </div>
            <AiOutlineClose className='close-x' />
            </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

