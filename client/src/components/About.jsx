import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa'

const About = () => {
    return (
        <div className="py-20" id='about'>
            <div className='my-12'>
                <h1  className='select-none max-md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center my-3
            bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600
            '>The Journey i have so far</h1>
                <p className='select-none text-sm  md:text-md lg:text-lg font-medium text-center text-wrap max-w-3xl mx-auto tracking-wide'>My journey reflects learning, growth, and adaptability.</p>
            </div>
            <VerticalTimeline lineColor="#4ade80">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2017"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaGraduationCap />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold'}}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">B.Sc Physics</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">Urumu Dhanalakshmi College, Trichy</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sep 2017 - Jan 2018"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">Administration</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">SVJ Engg Works, Madurai</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 2018 - Apr 2021"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">News Reporter</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">Daily Thanthi,Vellore</h4>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jul 2021 - Oct 2021"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">TNPSC Preparation</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">NR IAS Academy, Trichy</h4>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2021 - Jan 2022"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">Conter Writer</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">Cheran Group of Institutions, Coimbatore</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Mar 2022 - Mar 2023"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">Billing Executive</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">Varnalaya Clothings Pvt Ltd, Tiruppur</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2023 - July 2023"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">NDT Inspector</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">ScanTech NDT Inspections, Anand engg Trichy</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2023 - Oct 2024"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">Administration</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">SVJ Engg Works, Madurai</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2024 - Feb 2025"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">DTP Operator</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">Brainbank Publications, Chennai</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2025 - Till Now"
                    iconStyle={{ background: "#16a34a", color: "#fff" }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: '#052e16', height: '100%', color: '#86efac', fontWeight: 'bold' }}
                >
                    <h3 className="vertical-timeline-element-title select-none text-green-400 text-md md:text-lg font-medium">Zomato Delivery Patner</h3>
                    <h4 className="vertical-timeline-element-subtitle select-none text-white font-normal text-sm md:text-md">Trichy</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default About;
