import React from 'react';

import './LandingPage.css';

const LandingPage = (props) =>  {
    return(
        <div className='LandingPage'>
           <div className='LPage'>
                <div className='Lpage'>
                    <p>
                        {'WELCOME TO MATH 4 KIDS'}
                        <hr/>
                    </p>
                    <p className='color'>
                    {'This is a Math Game'}
                    </p>
                   <p>
                    {`Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit. 
                     Quibusdam nihil asperiores ratione laudantium ad! Rerum animi eo
                     s repellendus cupiditate, ipsam voluptates modi harum accusantium nostrum
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nam voluptas deserunt neque incidunt praesentium cum illo, assumenda dignissimos! Harum nisi animi aliquid sed, consequuntur repudiandae perspiciatis necessitatibus illo esse. dolorem eaque voluptas nobis facere! Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae nemo quasi voluptate quaerat, facilis ducimus eos quia, cupiditate minus fugiat eum eius id veniam culpa tempore tenetur velit sed.
                     consectetur adipisicing elit. Maiores dicta, laudantium optio consectetur amet repellat aperiam repellendus itaque pariatur asperiores quia consequuntur beatae rem, aut praesentium enim, nemo et quisquam?and Lorem ipsum dolor sit amet, consectetur adipisicing <elit className="Lorem"` 
                    }</p>
                    <p className='p color' onClick={props.show.bind(this,3)}>
                    {'start game'}
                    </p>
                </div>
          </div>
        </div>
    );
}

export default LandingPage;