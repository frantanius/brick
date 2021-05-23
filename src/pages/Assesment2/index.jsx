/* eslint-disable no-unused-vars */
// Packages
import { useEffect, useCallback } from 'react'
import styled from 'styled-components'
// Components
import Layout from 'components/Layout'
import Container from 'components/Container'
import Row from 'components/Row'
import Column from 'components/Column'

const Information = styled.h3`
  color: #f40752;
  text-align: center;
`

export default function Assesment2() {
  const fetching = (data) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(data)
      }, 1000),
    )
  }

  const getUserLoggedIn = useCallback(() => {
    return fetching('user1')
  }, [])

  const getUserProfile = useCallback(async (username) => {
    const profile = await fetching({
      user1: { name: 'Jhon', address: 'Jakarta' },
      user2: { name: 'Doe', address: 'Bali' },
    })

    return profile[username]
  }, [])

  const getUserPosts = useCallback(async (username) => {
    const posts = await fetching({
      user1: ['Promises Post'],
      user2: ['Streams Post'],
    })

    return posts[username]
  }, [])

  const userDataSerial = useCallback(async () => {
    console.time('userData-serial')
    const username = await getUserLoggedIn()
    const userProfile = await getUserProfile(username)
    const userPosts = await getUserPosts(userProfile)
    console.timeEnd('userData-serial')
  }, [getUserLoggedIn, getUserPosts, getUserProfile])

  const userDataParallel = useCallback(async () => {
    console.time('userData-parallel')
    const username = await getUserLoggedIn()

    const [userData, userPosts] = await Promise.all([
      getUserProfile(username),
      getUserPosts(username),
    ])
    console.timeEnd('userData-parallel')
  }, [getUserLoggedIn, getUserPosts, getUserProfile])

  const test = useCallback(async () => {
    await userDataSerial()
    await userDataParallel()
  }, [userDataParallel, userDataSerial])

  useEffect(() => {
    test()
  }, [test])

  return (
    <Layout title="Assesment 2" footer="Back" footerLink="/">
      <Container>
        <Row>
          <Column width="100%">
            <Information>Please Console Log</Information>
          </Column>
        </Row>
      </Container>
    </Layout>
  )
}
