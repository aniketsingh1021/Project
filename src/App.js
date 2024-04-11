import './App.css';
import logo from './images/logo_nw.png'
import bracel from './images/bracel_nw.png'
import bag from './images/bag.png'
import dp from './images/dp_nw.png'
function App() {
  return (
    <div className='bg'>
      <section className='main_bd'>
        <div className="Navbar">
          <div className="logo1">
            <img className='logo' src={logo} />
            <i class="fa-solid fa-circle" id='online_2'></i>
          </div>
          <div className="name">
            <h2>Timpu<img className='bracel' src={bracel} /></h2>
            <h3 >Chat assistant</h3>
          </div>
          <div className='online'>
          <i class="fa-solid fa-circle" id='online_1'></i>
            <h3>Online</h3>
          </div>
        </div>
        <div className="main">
          <div className='left_msg' >
            <p >
              Hi Sam! I am your personal shopping assistant , how can i help you today?
            </p>
          </div>
          <span className='left_time' >4:45 PM</span>
          <div className='right_msg'>
            <p>I am looking for a hand bag, with long strap.</p>
          </div>
          <span className='right_time'>4:46 PM</span>
          <div className='tag'><p>Popular tags for handbag</p></div>
          <button>Clutch</button>
          <button>Fabric lining</button>
          <button>Baggit</button>
          <button>Multi</button>
          <i class="fa-solid fa-angle-right fa-4x" id='angle'></i>
          <div className='batch'>
            <div className="product">
              <img className='bag' src={bag} />
              <div className='product_2'>
                <p className='bag_txt'>Bags on Timpu<img className='barcel_2' src={bracel} /></p>
                <p className='bag_txt_1'>1123 products </p><i class="fa-solid fa-angle-right" id="bag_row"></i>
              </div>
            </div>
            <p className='bag_txt_2'>Or set filter and help us choose the best bag for you.</p>
          </div>
          <span className='left_time'>4:48 PM</span>
          <div className='last_tag'>
          <h3 className='tag'>Select filters</h3>
          <h3 className='tag_1'><i class="fa-solid fa-sliders"></i> Filter</h3>
          </div>
          <div className='btn_coll'>
         <button>Strap - Long <i class="fa-solid fa-xmark"></i></button>
         <button className='clr_btn'>Colour <i class="fa-solid fa-xmark fa-1x"></i></button>
         <button className='clr_btn'>Size <i class="fa-solid fa-xmark"></i></button>
         <button className='clr_btn'>Brand <i class="fa-solid fa-xmark"></i></button>
         <button className='clr_btn'>Material <i class="fa-solid fa-xmark"></i></button>
        </div>
        </div>
        <div className="msg_sec">
          <div className='msg_sec_1'>
          <input type="text" placeholder='Type your message' /><i class="fa-solid fa-paperclip fa-2x"></i>
          <button className='button_2'><i class="fa-solid fa-angle-right fa-2x"></i></button>
          <div className='about'>Powered by <span className='bold'>Krunk.ai </span><img className='dp_1' src={dp}/></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
