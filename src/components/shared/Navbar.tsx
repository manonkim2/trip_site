import useUser from '@/hooks/useUser'
import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import React, { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from './Button'
import Flex from './Flex'

const Navbar = () => {
  const location = useLocation()
  const user = useUser()

  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Flex align="center">
          <Link to="/my">
            <img
              src={
                user.photoURL ??
                'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-128.png'
              }
              alt="유저의 이미지"
              width={36}
              height={36}
              style={{ borderRadius: '100%' }}
            />
          </Link>

          <Link to="/settings">
            <img
              src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/settings-outline-64.png"
              width={40}
              height={40}
              alt=""
            />
          </Link>
        </Flex>
      )
    }

    if (showSignButton) {
      return (
        <Link to="signin">
          <Button weak>로그인 / 회원가입</Button>
        </Link>
      )
    }

    return null
  }, [showSignButton, user])

  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      css={navbarContainerStyles}
    >
      <Link to="/">Trip</Link>
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
  border-bottom: 1px solid ${colors.gray200};
`

export default Navbar
