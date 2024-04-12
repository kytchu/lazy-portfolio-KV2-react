import React from 'react';
const burgerURL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9A1b82enK8N0Ct3ttdCmKDbDMyj4mek0KwiHTTmiDexqfVMQQJOM0J7VxHMzneE904w&usqp=CAU';
const pictureURL =
  'https://i0.wp.com/ru-wotp.lesta.ru/dcont/fb/image/00.jpg?ssl=1';
const Kv2PicURL = 'https://w.wallhaven.cc/full/1p/wallhaven-1porw3.jpg';
const Profile = () => {
  return (
    <div className='Flex-Page'>
      <div className='Info-Box'>
        <p className='P-Tag-Box'>
          <h1>Why Should I Code?</h1>

          <ul>
            <li>- It's very simple, cool stuff.</li>
            <li>
              - 90% of coders outperform me, pushes me to learn, even though it
              won't make me money.
            </li>
            <li>- Lowkey don't know what else to do in life.</li>
            <li>- Cool robots? maybe so :D</li>
          </ul>
        </p>
        <img src={pictureURL}></img>
      </div>
      <div className='Info-Box'>
        <p>
          <i>I know I'm cooked in terms of SWE, so why continue?</i>
        </p>
      </div>

      <img src={Kv2PicURL} className='Fill-Image'></img>
      <img src={burgerURL} className='Fill-Image'></img>
    </div>
  );
};

export default Profile;
