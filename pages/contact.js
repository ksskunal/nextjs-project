import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/ContactPage.module.css'
import { Container, Box } from '@mui/system'
import Contact from '../components/Contact'

const About = () => {
    return (
        <Box className={style.mainContainer}>
            <Container>
                <div className={style.container}>
                    <Head>
                        <title>Contact Us</title>
                        <meta name="description" content="Marktine Technology About Us Page" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className={style.rightContainer}>
                        <h1 className={style.heading}><span style={{ color: "green", marginRight: "17px" }}>Get</span>A Quote</h1>
                        <div>
                            <hr className={style.hr} />
                        </div>
                        <p className={style.pera}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reprehenderit voluptatibus distinctio, possimus assumenda dicta eum temporibus aut? Magnam, accusantium!</p>
                    </div>
                    <div className={style.LeftContainer}>

                        <Image
                            className={style.myImage}
                            src="/img/Contact.png"
                            objectFit="contain"
                            alt=""
                            width="500px"
                            height="700px"
                        />

                    </div>
                </div>
                <Contact />
            </Container>

        </Box>

    )
}
export default About
