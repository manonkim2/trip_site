import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import React, { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from './Button'
import Flex from './Flex'

const Navbar = () => {
  const location = useLocation()
  // const user = useUser()

  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const renderButton = useCallback(() => {
    // if (user != null) {
    //   return <Link to="/my">{/* <MyImage size={40} /> */}</Link>
    // }

    if (showSignButton) {
      return (
        <Link to="signin">
          <Button>로그인 / 회원가입</Button>
        </Link>
      )
    }

    return null
  }, [showSignButton])

  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      css={navbarContainerStyles}
    >
      <Link to="/">홈</Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  height: 30px;
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

export default Navbar
