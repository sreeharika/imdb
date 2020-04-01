import React from "react";
import { Card } from "antd";
import cover1 from './images/cover1.jpg'
import cover2 from './images/cover2.jpg'
import cover3 from './images/cover3.jpg'
import Dev from './images/Dev.jpg'
import { Rate }  from 'antd'

const { Meta } = Card;
function Home() {
  return (
    <div>
    <h1 style={{color:"blue", paddingTop:'50px'}}>Top Picks</h1>
    <Card
    hoverable
    style={{ width: 240,display: 'inline-block',position: 'relative',paddingRight:'20px' }}
    cover={<img alt="example" src={cover1} />}
  >
    <Meta title="The Call Of The Wild " description="Rating" />
    <Rate />
    </Card>
    
    <Card
    hoverable
    style={{ width: 240,display: 'inline-block',position: 'relative',paddingRight:'20px'  }}
    cover={<img alt="example" src={cover2} />}
  >
    <Meta title="Little Women " description="Rating" />
    <Rate />
    </Card>

    <Card
    hoverable
    style={{ width: 240,display: 'inline-block',position: 'relative',paddingRight:'20px'  }}
    cover={<img alt="example" src={cover3} />}
  >
    <Meta title="I Still Believe" description="Rating" />
    <Rate />
    </Card>
   
    <Card
    hoverable
    style={{
      width: 240,
      position: "relative",
      display: "inline-block",
      paddingRight: "20px"
    }}
    cover={<img alt="example" src={Dev} />}
  >
    <Meta title="Dev" description="Review" />
    <Rate />
    </Card>
    </div>
  );
}
export default Home;