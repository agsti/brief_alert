import React, { useState } from 'react'
import { Container, Flex, Box, Badge, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import { Text, Heading } from 'theme-ui'
import ListItem from '@solid-ui-components/ListItem'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import Tabs from '@solid-ui-components/Tabs'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

const styles = {
  middleBox: {
    position: `relative`,
    zIndex: 2
  },
  prevPrice: {
    textDecoration: `line-through`,
    opacity: 0.2
  },
  saveBadge: {
    position: `absolute`,
    top: 3,
    right: 3
  }
}


const updatesMarks = {
                            1: 100,
                            2: 1000,
                            3: 10000,
                            4: 100000,
                            5: 1000000
                        }
const usersMarks = {
                            1: 10,
                            2: 100,
                            3: 1000,
                            4: 10000,
                            5: 100000
                        }
const emailMarks = {
                            1: 10,
                            2: 100,
                            3: 1000,
                            4: 10000,
                            5: 100000
                        }

const calculatePrice = (n_users, n_updates, n_emails) =>{
    const pricePerUser = 0.07
    const pricePerUpdate = 0.005
    const pricePerEmail = 0.005

    const priceUsers = n_users * pricePerUser
    const priceUpdate = n_updates * pricePerUpdate
    const priceEmail = n_emails * pricePerEmail
    const price = Math.max(priceUsers, priceUpdate, priceEmail, 49.9)
    return Math.floor(price)
}

const PricingBlock01 = ({ content: { text, collection,  buttons} }) => {
  const [users, setUsers] = useState(2)
  const [updates, setUpdates] = useState(3)
  const [emails, setEmails] = useState(2)

  const price = calculatePrice(usersMarks[users], updatesMarks[updates], emailMarks[emails])
  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentText content={text?.slice(0, 2)} />
        <Flex
          sx={{
            flexWrap: `wrap`,
            alignItems: `center`,
            justifyContent: `center`,
            mx: -3
          }}
        >
              <Box
                key={`item-0`}
                sx={{ flex: [`auto`, 1], minWidth: 320, maxWidth: 1000, p: 3 }}
              >
                <Reveal
                  effect='fadeInUp'
                  css={css(styles.middleBox)}
                >
                  <ContentContainer
                    variant='cards.paper'
                    sx={{ position: `relative` }}
                  >

                  <Text
                    key={`item-1`}
                    variant="h1"
                  >
                    {price} USD/month
                  </Text>
                  <ContentText 
                    variant='h5'
                      content={text[2]} />
                      <Box
                key={`item-ss`}
                          sx={{marginLeft: 10, marginRight: 10}}>
                    <Slider 
                        min={1}
                        max={5}
                        step={null}
                        marks={usersMarks
                        }
                        value={users}
                        onChange={setUsers}
                    />

                        <Divider space={3} />
      <ContentText 
                      content={text[3]} />      
            <ContentText 
                      content={text[4]} />
                    <Slider 
                        min={1}
                        max={5}
                        step={null}
                        marks={updatesMarks
                        }
                        value={updates}
                        onChange={setUpdates}
                    />
                        <Divider space={3} />
      <ContentText variant='h5'
                      content={text[5]} />
                    <Slider 
                        min={1}
                        step={null}
                        marks={emailMarks}
                        max={5}
                        value={emails}
                        onChange={setEmails}
                    />
                      </Box>
                        <Divider space={3} />
                    {collection && (
                      <>
                        <Divider space={2} />
                        {collection.map((props, index) => (
                          <ListItem key={`item-${index}`} {...props} compact />
                        ))}
                      </>
                    )}

                    {buttons && (
                      <>
                        <Divider space={3} />
                        <ContentButtons content={buttons} />
                      </>
                    )}
                  </ContentContainer>
                </Reveal>
              </Box>
        </Flex>
    </Container>
  )
}

export default WithDefaultContent(PricingBlock01)
