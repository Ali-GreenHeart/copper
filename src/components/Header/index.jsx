import styles from "./index.module.css"
import headerBg from 'assets/img/header-bg.png'
import { Box, Container, Stack } from "@mui/material";
import { ReactComponent as Logo } from 'assets/img/logo.svg'
import { ReactComponent as Heart } from 'assets/img/heart.svg'
import { ReactComponent as User } from 'assets/img/user.svg'
import { ReactComponent as Cart } from 'assets/img/cart.svg'

const RightLabel = ({ icon }) => {
    return (
        <Box
            sx={{
                paddingTop: '20px',
                backgroundColor: 'white',
                width: '40px',
                textAlign: 'center'
            }}>
            {icon}
        </Box>
    )
}

const Header = () => {
    return (
        <header
            style={{
                backgroundImage: `url("${headerBg}")`,
                position: 'sticky',
                height: '80px'
            }}
            className={styles.header}>
            <Container maxWidth="lg"
                sx={{
                    position: 'relative'
                }}>
                <Stack
                    sx={{ height: 80, gap: 10 }}
                    flexDirection="row" alignItems="center">
                    <Box>
                        <Logo />
                    </Box>
                    <Stack
                        flexDirection="row"
                        sx={{
                            gap: 5,
                            '&>a': {
                                color: 'white',
                                textDecoration: 'none'
                            }
                        }}
                    >
                        <a href="#">Каталог</a>
                        <a href="#">Новости</a>
                        <a href="#">Доставка</a>
                        <a href="#">О нас</a>
                        <a href="#">Контакты</a>
                    </Stack>
                </Stack>
                <Stack
                    flexDirection="row"
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        gap: '10px'
                    }}>
                    <RightLabel icon={<Heart />} />
                    <RightLabel icon={<User />} />
                    <RightLabel icon={<Cart />} />
                </Stack>
            </Container>
        </header>
    )
}
export default Header;
