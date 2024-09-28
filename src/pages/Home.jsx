import { Container } from 'react-bootstrap'
import HomeLogo from '../assets/images/palm-leaf-bg-am.png'
import Layout from '../component/Layout'
import { useEffect } from 'react'
import { useColor } from '../store'
const Home = () => {
    const { bgColor, setBGColor } = useColor()
    useEffect(() => {

        setBGColor("#DFE2DB ")

    }, [])
    return (
        <div className='home' style={{ backgroundColor: bgColor }}>
            <Layout>
                <Container className=' d-flex align-items-center justify-content-center'>

                    <div className="d-flex justify-content-center  align-items-center flex-md-row flex-column">
                        <div className="home-image p-md-0 p-5">
                            <img src={HomeLogo} alt="Home Logo" className='img-fluid ' />
                        </div>
                        <h1 className='text-center'>
                            <b className="home-title  ">Liddy Silver Design</b>
                        </h1>
                    </div>

                </Container>
            </Layout>
        </div>

    )
}

export default Home
