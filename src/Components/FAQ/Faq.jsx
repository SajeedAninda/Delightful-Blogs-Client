import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from "lottie-react";
import faqLottie from "../../assets/FAQ/faqLottie.json"

const Faq = () => {
    return (
        <div className='bg-[#fcf4e9]'>
            <div>
                <h1 className='text-center text-4xl font-bold pt-12 text-[#1b1f20]'>Frequently Asked Questions</h1>
            </div>
            <div className='w-[90%] h-fit mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between items-center py-12'>
                <div className='flex-1'>
                    <Accordion style={{ backgroundColor: '#fcf4e9', border: "2px solid #1b1f20", padding: "8px", marginBottom: '2px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}>What is the purpose of this blog website?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                Our blog is dedicated to providing valuable insights and information on a wide range of topics. We cover everything from technology trends to lifestyle advice, aiming to help our readers stay informed and make better decisions in their daily lives.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#fcf4e9', marginBottom: '2px', border: "2px solid #1b1f20", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}> How often is the blog updated with new content?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                We strive to update our blog regularly. On average, we publish new articles and posts at least once a week. Our team is committed to delivering fresh and engaging content to keep our readers coming back for more.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#fcf4e9', marginBottom: '2px', border: "2px solid #1b1f20", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}>Can I submit a post or contribute to your blog?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                Yes, we encourage peoples to contributions! If you have expertise in a particular subject and want to share your insights with our audience, please register and login so that you can share your thoughts and blogs with us. We value diverse perspectives and contributions from our readers.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#fcf4e9', marginBottom: '2px', border: "2px solid #1b1f20", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}>How can I subscribe to your newsletters for updates?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#1b1f20', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                Subscribing to our Newsletter is easy! You can find the Newsletter section above in our website. Simply enter your email address, and you'll start receiving our latest articles and updates directly in your inbox. Don't worry, we respect your privacy and won't spam your inbox.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div className='flex-1 flex justify-end'>
                <Lottie animationData={faqLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Faq;