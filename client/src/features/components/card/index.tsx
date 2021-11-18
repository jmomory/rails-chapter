import React from 'react'
import { Card } from 'semantic-ui-react'

const CardSection = ({ title, data }: { title: string; data: string }) => {
  return (
    <div>
      <Card>
        <Card.Content textAlign="center">
          <Card.Header>{title}</Card.Header>
          <Card.Description>{data}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default CardSection
