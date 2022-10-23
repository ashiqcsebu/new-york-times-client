import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebook , FaTwitter , FaTwitch , FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel/BrandCarousel';

const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error)
        })

    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant='outline-primary' > <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>

            <div className='mt-6'>
            <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook/> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaWhatsapp/> Whats app</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;