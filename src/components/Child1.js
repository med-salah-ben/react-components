import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


 const data = [
    {name:"haythem",age:29},
    {name:"chadli", age:22},
    {name:"firas",age:28}
]

const Child1 = () => (
    <div style={{display:"flex", margin:"20px"}} >
    { data.map((el)=>(
        
  <Card style={{ margin:"20px"}} >
  <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
  <Card.Content>
    <Card.Header> {el.name} </Card.Header>
    <Card.Meta> {el.age} </Card.Meta>
    <Card.Description>
      Daniel is a comedian living in Nashville.
    </Card.Description>
  </Card.Content>
  <Card.Content extra>    
    <a>
      <Icon name='user' />
      10 Friends
    </a>
  </Card.Content>
</Card>
    ))}
    </div>
)

export default Child1