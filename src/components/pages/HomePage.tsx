import { HomePageTemplate } from '../templates';

import { Records } from '../../data';
import { Link } from 'react-router';

export const HomePage = () => {
    return (
      <HomePageTemplate records={ Records } >

        <p className='text-justify leading-snug text-sm mb-1' >Welcome to the website of the Intelligent Systems Laboratory. Group led by <Link to='carlos_franco' className='text-blue-700 underline hover:no-underline' >Prof. Carlos Alberto López Franco</Link>. Our lab was founded in ... and is part of the Department of Informatics, at the University of Guadalajara.</p>

        <p className='text-justify leading-snug text-sm' >Our mission is to research the fundamental challenges of robotics and computer vision that will benefit all of humanity. Our key interest is to develop autonomous machines that can navigate all by themselves using only onboard cameras and computation, without relying on external infrastructure, such as GPS or position tracking systems, nor off-board computing. Our interests encompass predonimantly micro drones because they are more challenging and offer more research opportunities than ground robots.</p>
        
      </HomePageTemplate>
    )
}
