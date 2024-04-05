'use client'

import { AppBar, Box, Button, IconButton, Container, Theme, Toolbar, styled, useMediaQuery } from '@mui/material'
import { MenuOutlined as MenuIcon } from '@mui/icons-material'
import Image from 'next/image'

export default function Header() {

  // AppBar Styling
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
        minHeight: '80px',
    },
    backgroundColor: theme.palette.background.default,
  }))

  // Toolbar Styling
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.secondary,
  }))

  // Button Styling
  const ButtonStyled = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary
  }))

  // Breakpoints
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <AppBarStyled position='sticky' elevation={8}>
        <Container maxWidth='lg'>
            <ToolbarStyled>
                <Image
                    src={"/images/logos/dark-logo.svg"}
                    alt="logo"
                    height={40}
                    width={174}
                    priority
                />
                <Box flexGrow={1} />
                {
                    lgDown ? (
                        <IconButton 
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : null
                }
                {
                    lgUp ? (
                        <>
                            <ButtonStyled
                                color='inherit'
                                variant='text'
                                href='/'
                            >
                                Home
                            </ButtonStyled>
                            <ButtonStyled
                                color='inherit'
                                variant='text'
                                href='/about'
                            >
                                About
                            </ButtonStyled>
                            <ButtonStyled
                                color='inherit'
                                variant='text'
                                href='/blog'
                            >
                                Blog
                            </ButtonStyled>
                            <ButtonStyled
                                color='inherit'
                                variant='text'
                                href='/contact'
                            >
                                Contact
                            </ButtonStyled>
                            <Button
                                color='primary'
                                variant='contained'
                                href='/login'
                            >
                                Login
                            </Button>
                        </>
                    ) : null
                }               
            </ToolbarStyled>
        </Container>
    </AppBarStyled>
  )
}