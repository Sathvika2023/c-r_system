import React from 'react';
import PbImg from '../assets/images/pb_img.jpg';
//import BXImg from '../assets/images/bx_img.jpg';
//import OScImg from '../assets/images/osc_img.jpg';
import { BsBrowserChrome } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const CSEClubsPage = () => (
  <div className="p-4">
    <h1 className="text-3xl font-bold">CSE Clubs</h1>
    <p>Details about various CSE clubs...</p>

    <br/>
    <hr className="border-t border-gray-500 my-4" />

  {/* club name */ }
  <div className="w-full min-h-screen bg-gray-100 pt-20 pb-20">


  <div className="box card p-6 shadow-lg border-0 bg-white rounded-lg max-w-5xl mx-auto">
    <div className="flex items-center mb-4">
      <img
        alt="Logo"
        loading="lazy"
        width={48}
        height={18}
        decoding="async"
        data-nimg="1"
        style={{ color: 'transparent' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-70ft8M7NhhLo7bamBfu9dheRdx-r4zUbQ&s"
      />
      <span className="bg-black text-green-500 text-4xl font-mono px-2 py-1">Point Blank</span>
    </div>

    <div className="flex gap-6 items-center">
  {/* Text section - 60% width */}
  <div className="basis-3/5">
  <div className="basis-3/5">
  <p className="text-lg leading-relaxed text-justify">
    Point Blank is a student-led tech club that encourages 
    hands-on learning, problem-solving, and peer collaboration. 
    Focused on coding, development, and real-world tech exploration, 
    the club builds a strong community of learners who grow together. 
    Whether you're looking to level up your skills, contribute to projects, 
    or just hang out with like-minded enthusiasts, Point Blank offers the 
    perfect mix of tech and camaraderie.
  </p>
</div>

  </div>

  {/* Image section - 40% width */}
  <div className="basis-2/5">
    <img
      src={PbImg}
      alt="Point Blank Club"
      className="w-full h-auto rounded shadow-md"
    />
  </div>
</div>

<div className="flex flex-col items-start space-y-2">
  <span className="text-lg font-semibold">Follow On</span>
  <ul className="flex space-x-4">
    <li>
    <a href="https://www.pointblank.club/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <BsBrowserChrome />
</a>

    </li>
    <li>
      
      <a href="https://www.instagram.com/pointblank_dsce/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <LuInstagram />
</a>
    </li>
    <li>
      
      <a href="https://in.linkedin.com/company/point-blank-d" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <FaLinkedin />
</a>
    </li>
  </ul>
</div>




  </div>

  <br/>
  <br/>
  <br/>

  <div className="box card p-6 shadow-lg border-0 bg-white rounded-lg max-w-5xl mx-auto">
    <div className="flex items-center mb-4">
      <svg width="185" height="50" viewBox="0 0 619 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M235.938 71.6875V75.375C235.938 82.3333 234.958 88.5833 233 94.125C231.083 99.625 228.354
       104.333 224.812 108.25C221.271 112.125 217.083 115.104 212.25 117.188C207.417 119.229 202.083 120.25 196.25 120.25C190.375 120.25 185 119.229 180.125 117.188C175.292 115.104 171.083 112.125 167.5 108.25C163.958 104.333 161.208 99.625 159.25 94.125C157.333 88.5833 156.375 82.3333 156.375 75.375V71.6875C156.375 64.7292 157.333 58.4792 159.25 52.9375C161.208 47.3958 163.938 42.6875 167.438 38.8125C170.979 34.8958 175.167 31.9167 180 29.875C184.875 27.7917 190.25 26.75 196.125 26.75C201.958 26.75 207.292 27.7917 212.125 29.875C217 31.9167 221.208 34.8958 224.75 38.8125C228.292 42.6875 231.042 47.3958 233 52.9375C234.958 58.4792 235.938 64.7292 235.938 71.6875ZM213.688 75.375V71.5625C213.688 67.0625 213.292 63.1042 212.5 59.6875C211.75 56.2292 210.625 53.3333 209.125 51C207.625 48.6667 205.771 46.9167 203.562 45.75C201.396 44.5417 198.917 43.9375 196.125 43.9375C193.208 43.9375 190.667 44.5417 188.5 45.75C186.333 46.9167 184.521 48.6667 183.062 51C181.604 53.3333 180.5 56.2292 179.75 59.6875C179.042 63.1042 178.688 67.0625 178.688 71.5625V75.375C178.688 79.8333 179.042 83.7917 179.75 87.25C180.5 90.6667 181.604 93.5625 183.062 95.9375C184.562 98.3125 186.396 100.104 188.562 101.312C190.771 102.521 193.333 103.125 196.25 103.125C199.042 103.125 201.521 102.521 203.688 101.312C205.854 100.104 207.667 98.3125 209.125 95.9375C210.625 93.5625 211.75 90.6667 212.5 87.25C213.292 83.7917 213.688 79.8333 213.688 75.375ZM294.188 94.8125C294.188 93.3958 293.979 92.125 293.562 91C293.146 89.8333 292.375 88.75 291.25 87.75C290.125 86.75 288.5 85.75 286.375 84.75C284.292 83.7083 281.542 82.625 278.125 81.5C274.125 80.1667 270.271 78.6667 266.562 77C262.854 75.2917 259.542 73.3125 256.625 71.0625C253.708 68.7708 251.396 66.1042 249.688 63.0625C247.979 59.9792 247.125 56.3958 247.125 52.3125C247.125 48.3958 248 44.875 249.75 41.75C251.5 38.5833 253.938 35.8958 257.062 33.6875C260.229 31.4375 263.938 29.7292 268.188 28.5625C272.438 27.3542 277.083 26.75 282.125 26.75C288.792 26.75 294.667 27.9167 299.75 30.25C304.875 32.5417 308.875 35.8125 311.75 40.0625C314.667 44.2708 316.125 49.25 316.125 55H294.312C294.312 52.7083 293.833 50.6875 292.875 48.9375C291.958 47.1875 290.562 45.8125 288.688 44.8125C286.812 43.8125 284.458 43.3125 281.625 43.3125C278.875 43.3125 276.562 43.7292 274.688 44.5625C272.812 45.3958 271.396 46.5208 270.438 47.9375C269.479 49.3125 269 50.8333 269 52.5C269 53.875 269.375 55.125 270.125 56.25C270.917 57.3333 272.021 58.3542 273.438 59.3125C274.896 60.2708 276.646 61.1875 278.688 62.0625C280.771 62.9375 283.104 63.7917 285.688 64.625C290.521 66.1667 294.812 67.8958 298.562 69.8125C302.354 71.6875 305.542 73.8333 308.125 76.25C310.75 78.625 312.729 81.3333 314.062 84.375C315.438 87.4167 316.125 90.8542 316.125 94.6875C316.125 98.7708 315.333 102.396 313.75 105.562C312.167 108.729 309.896 111.417 306.938 113.625C303.979 115.792 300.438 117.438 296.312 118.562C292.188 119.688 287.583 120.25 282.5 120.25C277.833 120.25 273.229 119.667 268.688 118.5C264.188 117.292 260.104 115.458 256.438 113C252.771 110.5 249.833 107.312 247.625 103.438C245.458 99.5208 244.375 94.875 244.375 89.5H266.375C266.375 92.1667 266.729 94.4167 267.438 96.25C268.146 98.0833 269.188 99.5625 270.562 100.688C271.938 101.771 273.625 102.562 275.625 103.062C277.625 103.521 279.917 103.75 282.5 103.75C285.292 103.75 287.542 103.354 289.25 102.562C290.958 101.729 292.208 100.646 293 99.3125C293.792 97.9375 294.188 96.4375 294.188 94.8125ZM379.188 88.1875H401.062C400.771 94.5208 399.062 100.104 395.938 104.938C392.812 109.771 388.479 113.542 382.938 116.25C377.438 118.917 370.938 120.25 363.438 120.25C357.354 120.25 351.917 119.229 347.125 117.188C342.375 115.146 338.333 112.208 335 108.375C331.708 104.542 329.188 99.8958 327.438 94.4375C325.729 88.9792 324.875 82.8333 324.875 76V71.0625C324.875 64.2292 325.771 58.0833 327.562 52.625C329.396 47.125 331.979 42.4583 335.312 38.625C338.688 34.75 342.729 31.7917 347.438 29.75C352.146 27.7083 357.375 26.6875 363.125 26.6875C371.042 26.6875 377.729 28.1042 383.188 30.9375C388.646 33.7708 392.875 37.6667 395.875 42.625C398.875 47.5417 400.646 53.1458 401.188 59.4375H379.312C379.229 56.0208 378.646 53.1667 377.562 50.875C376.479 48.5417 374.771 46.7917 372.438 45.625C370.104 44.4583 367 43.875 363.125 43.875C360.417 43.875 358.062 44.375 356.062 45.375C354.062 46.375 352.396 47.9583 351.062 50.125C349.729 52.2917 348.729 55.1042 348.062 58.5625C347.438 61.9792 347.125 66.1042 347.125 70.9375V76C347.125 80.8333 347.417 84.9583 348 88.375C348.583 91.7917 349.521 94.5833 350.812 96.75C352.104 98.9167 353.771 100.521 355.812 101.562C357.896 102.562 360.438 103.062 363.438 103.062C366.771 103.062 369.583 102.542 371.875 101.5C374.167 100.417 375.938 98.7917 377.188 96.625C378.438 94.4167 379.104 91.6042 379.188 88.1875ZM407.812 85.875V84.5625C407.812 79.6042 408.521 75.0417 409.938 70.875C411.354 66.6667 413.438 63.0208 416.188 59.9375C418.938 56.8542 422.333 54.4583 426.375 52.75C430.417 51 435.083 50.125 440.375 50.125C445.708 50.125 450.396 51 454.438 52.75C458.521 54.4583 461.938 56.8542 464.688 59.9375C467.438 63.0208 469.521 66.6667 470.938 70.875C472.354 75.0417 473.062 79.6042 473.062 84.5625V85.875C473.062 90.7917 472.354 95.3542 470.938 99.5625C469.521 103.729 467.438 107.375 464.688 110.5C461.938 113.583 458.542 115.979 454.5 117.688C450.458 119.396 445.792 120.25 440.5 120.25C435.208 120.25 430.521 119.396 426.438 117.688C422.354 115.979 418.938 113.583 416.188 110.5C413.438 107.375 411.354 103.729 409.938 99.5625C408.521 95.3542 407.812 90.7917 407.812 85.875ZM428.875 84.5625V85.875C428.875 88.4167 429.062 90.7917 429.438 93C429.812 95.2083 430.438 97.1458 431.312 98.8125C432.188 100.438 433.375 101.708 434.875 102.625C436.375 103.542 438.25 104 440.5 104C442.708 104 444.542 103.542 446 102.625C447.5 101.708 448.688 100.438 449.562 98.8125C450.438 97.1458 451.062 95.2083 451.438 93C451.812 90.7917 452 88.4167 452 85.875V84.5625C452 82.1042 451.812 79.7917 451.438 77.625C451.062 75.4167 450.438 73.4792 449.562 71.8125C448.688 70.1042 447.5 68.7708 446 67.8125C444.5 66.8542 442.625 66.375 440.375 66.375C438.167 66.375 436.312 66.8542 434.812 67.8125C433.354 68.7708 432.188 70.1042 431.312 71.8125C430.438 73.4792 429.812 75.4167 429.438 77.625C429.062 79.7917 428.875 82.1042 428.875 84.5625ZM521.312 103.5V23H542.5V119H523.5L521.312 103.5ZM479.812 86V84.6875C479.812 79.5625 480.375 74.8958 481.5 70.6875C482.625 66.4375 484.292 62.7917 486.5 59.75C488.708 56.6667 491.458 54.2917 494.75 52.625C498.042 50.9583 501.833 50.125 506.125 50.125C509.958 50.125 513.312 51.0208 516.188 52.8125C519.062 54.5625 521.521 57.0208 523.562 60.1875C525.604 63.3542 527.271 67.0625 528.562 71.3125C529.854 75.5208 530.833 80.0625 531.5 84.9375V86.5C530.833 91.0833 529.854 95.4167 528.562 99.5C527.271 103.542 525.604 107.125 523.562 110.25C521.521 113.375 519.042 115.833 516.125 117.625C513.25 119.375 509.875 120.25 506 120.25C501.708 120.25 497.917 119.396 494.625 117.688C491.375 115.979 488.646 113.583 486.438 110.5C484.271 107.417 482.625 103.792 481.5 99.625C480.375 95.4583 479.812 90.9167 479.812 86ZM500.875 84.6875V86C500.875 88.5417 501.042 90.8958 501.375 93.0625C501.708 95.2292 502.271 97.1458 503.062 98.8125C503.896 100.438 504.979 101.708 506.312 102.625C507.688 103.542 509.375 104 511.375 104C514.083 104 516.312 103.354 518.062 102.062C519.854 100.771 521.167 98.9375 522 96.5625C522.875 94.1875 523.25 91.3958 523.125 88.1875V83.25C523.208 80.5 523.021 78.0833 522.562 76C522.104 73.875 521.375 72.1042 520.375 70.6875C519.417 69.2708 518.188 68.2083 516.688 67.5C515.229 66.75 513.5 66.375 511.5 66.375C509.542 66.375 507.875 66.8333 506.5 67.75C505.167 68.6667 504.083 69.9583 503.25 71.625C502.417 73.25 501.812 75.1875 501.438 77.4375C501.062 79.6458 500.875 82.0625 500.875 84.6875ZM587.188 120.25C581.688 120.25 576.771 119.396 572.438 117.688C568.104 115.938 564.438 113.542 561.438 110.5C558.479 107.458 556.208 103.958 554.625 100C553.083 96.0417 552.312 91.8542 552.312 87.4375V85.0625C552.312 80.1042 553 75.5208 554.375 71.3125C555.75 67.0625 557.792 63.3542 560.5 60.1875C563.208 57.0208 566.604 54.5625 570.688 52.8125C574.771 51.0208 579.521 50.125 584.938 50.125C589.729 50.125 594.021 50.8958 597.812 52.4375C601.604 53.9792 604.812 56.1875 607.438 59.0625C610.104 61.9375 612.125 65.4167 613.5 69.5C614.917 73.5833 615.625 78.1667 615.625 83.25V91.8125H560.375V78.625H595.062V77C595.104 74.75 594.708 72.8333 593.875 71.25C593.083 69.6667 591.917 68.4583 590.375 67.625C588.833 66.7917 586.958 66.375 584.75 66.375C582.458 66.375 580.562 66.875 579.062 67.875C577.604 68.875 576.458 70.25 575.625 72C574.833 73.7083 574.271 75.6875 573.938 77.9375C573.604 80.1875 573.438 82.5625 573.438 85.0625V87.4375C573.438 89.9375 573.771 92.2083 574.438 94.25C575.146 96.2917 576.146 98.0417 577.438 99.5C578.771 100.917 580.354 102.021 582.188 102.812C584.062 103.604 586.188 104 588.562 104C591.438 104 594.271 103.458 597.062 102.375C599.854 101.292 602.25 99.5 604.25 97L613.812 108.375C612.438 110.333 610.479 112.229 607.938 114.062C605.438 115.896 602.438 117.396 598.938 118.562C595.438 119.688 591.521 120.25 587.188 120.25Z" fill="black"></path><circle cx="68" cy="75" r="68" fill="#5BC5FA"></circle><path d="M62.5547 28.5711C54.0547 29.8461 48.6094 31.7852 42.2609 35.7165C32.4594 41.8258 24.8359 51.893 21.6219 62.8899C20.1875 67.8305 19.9219 70.0086 19.9219 76.4633C19.9219 83.5024 20.3203 86.4243 22.0469 91.7102C25.4469 102.043 32.0078 110.676 41.0391 116.732C44.4922 119.043 49.1406 121.434 50.2828 121.487C51.0797 121.513 51.1328 121.46 52.1422 118.724C55.3828 110.065 59.4469 99.5993 60.6156 96.8633C61.3328 95.1368 61.8906 93.7024 61.8641 93.6493C61.8109 93.6227 61.0406 93.2508 60.1641 92.8258C57.6406 91.6305 55.0641 88.8946 53.5766 85.7868C50.4953 79.3586 50.1766 70.779 52.7266 62.6774C54.5594 56.8868 58.8094 50.4852 63.2984 46.7133L64.9453 45.3321L65.1312 49.0243C65.5031 57.0993 68.2125 61.5086 74.7203 64.643C81.8125 68.043 84.4688 71.7352 84.4688 78.2165C84.4688 82.7055 83.1672 86.5836 80.6969 89.3727C79.5812 90.6477 76.0484 93.118 74.9859 93.3836C74.1625 93.5961 74.1891 93.7289 75.9422 98.0055C77.1375 100.848 79.7938 107.727 83.9906 118.804L85.0797 121.699L85.9031 121.54C87.2312 121.274 91.9328 118.831 94.8547 116.891C105.586 109.773 113.262 98.0852 115.547 85.5211C116.211 81.6961 116.317 72.0805 115.68 68.5477C112.572 50.804 100.034 36.3008 83.0078 30.7493C77.7219 29.0227 75.2516 28.6243 68.7969 28.5446C65.7953 28.4915 63.0063 28.518 62.5547 28.5711Z" fill="black"></path></svg>
    </div>

    <div className="flex gap-6 items-center">
  {/* Text section - 60% width */}
  <div className="basis-3/5">
  <div className="basis-3/5">
  <p className="text-lg leading-relaxed text-justify">
    We’re proud to spotlight a dynamic community of college students and industry professionals 
    driven by a shared passion for technology and innovation. They foster an environment where 
    creativity, coding, and collaboration thrive. Through expertly curated workshops, seminars, 
    and events tailored to various interests and regions, they offer exceptional networking 
    opportunities. Their platform also connects students with experienced mentors from the tech 
    industry, helping individuals confidently shape their career paths. Their podcast shares 
    fresh insights and updates from the fast-moving tech world.
  </p>
</div>

  </div>

  {/* Image section - 40% width */}
  <div className="basis-2/5">
    <img
      src={PbImg}
      alt="OScode logo"
      className="w-full h-auto rounded shadow-md"
    />
  </div>
</div>

<div className="flex flex-col items-start space-y-2">
  <span className="text-lg font-semibold">Follow On</span>
  <ul className="flex space-x-4">
    <li>
    <a href="https://www.oscode.co.in/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <BsBrowserChrome />
</a>
    </li>
    <li>
     
      <a href="https://www.instagram.com/oscodedsce/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <LuInstagram />
</a>
    </li>
    <li>
      
      <a href="https://in.linkedin.com/company/oscode-dsce" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <FaLinkedin />
</a>
    </li>
  </ul>
</div>




  </div>
  
  <br/>
  <br/>
  <br/>

  <div className="box card p-6 shadow-lg border-0 bg-white rounded-lg max-w-5xl mx-auto">
    <div className="flex items-center mb-4">
      <img
        alt="Logo"
        loading="lazy"
        width={48}
        height={18}
        decoding="async"
        data-nimg="1"
        style={{ color: 'transparent' }}
        src="https://avatars.githubusercontent.com/u/201961577?s=200&amp;v=4"
      />
      <span className="bg-black text-white text-4xl font-mono px-2 py-1">Byte Xync</span>
    </div>

    <div className="flex gap-6 items-center">
  {/* Text section - 60% width */}
  <div className="basis-3/5">
  <div className="basis-3/5">
  <p className="text-lg leading-relaxed text-justify">
    Point Blank is a student-led tech club that encourages 
    hands-on learning, problem-solving, and peer collaboration. 
    Focused on coding, development, and real-world tech exploration, 
    the club builds a strong community of learners who grow together. 
    Whether you're looking to level up your skills, contribute to projects, 
    or just hang out with like-minded enthusiasts, Point Blank offers the 
    perfect mix of tech and camaraderie.
  </p>
</div>

  </div>

  {/* Image section - 40% width */}
  <div className="basis-2/5">
    <img
      src={PbImg}
      alt="Byte Xync Logo"
      className="w-full h-auto rounded shadow-md"
    />
  </div>
</div>

<div className="flex flex-col items-start space-y-2">
  <span className="text-lg font-semibold">Follow On</span>
  <ul className="flex space-x-4">
    <li>
    <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <BsBrowserChrome />
</a>
    </li>
    <li>
     
      <a href="https://www.instagram.com/bytexync/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <LuInstagram />
</a>
    </li>
    <li>
      
      <a href="https://www.linkedin.com/company/bytexync-cse" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-500">
  <FaLinkedin />
</a>
    </li>
  </ul>
</div>




  </div>  
</div>


<br/>


  </div>
);

export default CSEClubsPage;





