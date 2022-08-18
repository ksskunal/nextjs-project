import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/About.module.css'
import { Container, Box } from '@mui/system'

const About = () => {
  return (
    <Box className={style.mainContainer}>
      <Container>
        <div className={style.container}>
          <Head>
            <title>About Us</title>
            <meta name="description" content="Marktine Technology About Us Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={style.rightContainer}>

            <h1 className={style.heading}><span style={{ color: "green", marginRight: "10px" }}>Who</span>We Are</h1>
            <div>
              <hr className={style.hr} />
            </div>
            <p className={style.pera}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reprehenderit voluptatibus distinctio, possimus assumenda dicta eum temporibus aut? Magnam, accusantium!</p>
          </div>
          <div className={style.LeftContainer}>
            <div className={style.card}>
              <Image
                className={style.myImage}
                src="/img/About.png"
                objectFit="contain"
                alt=""
                width="500px"
                height="900px"
              />
            </div>
          </div>
        </div>
      </Container>
    </Box>

  )
}
export default About
