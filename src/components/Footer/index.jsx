import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import headerBg from 'assets/img/header-bg.png'
import { ReactComponent as Logo } from 'assets/img/logo.svg'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box component="footer"
            sx={{
                height: '220px',
                backgroundImage: `url("${headerBg}")`,
                backgroundSize: 'cover',
                padding: 7,
                '& *': {
                    color: 'white'
                },
                position: 'relative',
            }}
        >
            <Container maxWidth="lg"
                sx={{
                    margin: '0 auto'
                }}>
                <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                    <Box sx={{
                        '& *': {
                            mb: 2
                        }
                    }}>
                        <Logo />
                        <Typography>© 2021 “Copper Pro”<br />
                            Все права защищенны</Typography>
                        <Typography component="a" href="#">Политика конфиденциальности</Typography>
                    </Box>
                    <Stack flexDirection="row"
                        sx={{
                            '& a': {
                                fontWeight: 100,
                                textDecoration: 'none',
                                mb: 1
                            },
                            '& a:hover': {
                                textDecoration: 'underline'
                            },
                            gap: 3,
                            "& > div": {
                                maxWidth: 200
                            }
                        }}
                    >
                        <Stack>
                            <Typography mb={1} fontWeight="bold">Навигация</Typography>
                            <Typography component='a' href="#">Каталог</Typography>
                            <Typography component='a' href="#">Новости</Typography>
                            <Typography component='a' href="#">Доставка</Typography>
                            <Typography component='a' href="#">О нас</Typography>
                            <Typography component='a' href="#">Контакты</Typography>
                        </Stack>
                        <Stack>
                            <Typography mb={1} fontWeight="bold">Каталог</Typography>
                            <Typography component='a' href="#">Для эфирных масел</Typography>
                            <Typography component='a' href="#">Для гидролатов</Typography>
                            <Typography component='a' href="#">Медная посуда</Typography>
                            <Typography component='a' href="#">Аксессуары из меди</Typography>
                            <Typography component='a' href="#">Индивидуальный заказ</Typography>
                            <Typography component='a' href="#">Скидки и предложения</Typography>
                        </Stack>
                        <Stack>
                            <Typography mb={1} fontWeight="bold">Контакты</Typography>
                            <Typography component='a' href="#">Бажана 8-Б, Киев, 02132 Украина</Typography>
                            <Typography component='a' href="#">+38 (096) 990 67 56</Typography>
                            <Typography component='a' href="#">a.alambik@gmail.com</Typography>
                            <Stack flexDirection="row">
                                <IconButton>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Typography sx={{
                    position: 'absolute',
                    padding: "20px 10px",
                    fontWeight: 'bold',
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    background: 'linear-gradient(92.18deg, #5E3928 20.13%, #E4A16F 92.93%);',
                    right: { md: 50, sm: 30, xs: 10 },
                    bottom: 0
                }}>
                    ВВЕРХ
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer;
