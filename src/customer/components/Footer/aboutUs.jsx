import React from 'react'
import { Grid, Typography } from '@mui/material'

const aboutUs = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto px-4 py-8'>

                <h2 className='text-3xl font-bold mb-4'>
                    <strong>About Us</strong>
                </h2>
                <p className='mb-4'>
                    Welcome to StyleHub, your ultimate destination for men's fashion! We are dedicated to providing you with the latest trends, timeless classics, and high-quality apparel to elevate your style and confidence. At StyleHub, we believe that fashion is more than just clothing—it's an expression of individuality and a statement of personal style.
                </p>
                
                <h3 className='text-2xl font-bold mb-2'>Our Story</h3>

                <p className='mb-4'>
                    StyleHub was born out of a shared passion for fashion and a vision to revolutionize the online shopping experience for men. Founded by four dynamic individuals—Amartya Ghosh, Ashwini Dua, Sarwan Siraj, and Mousam Mandal—our journey began with the simple idea of creating a platform that caters exclusively to men's clothing needs. Each of us brought unique skills and perspectives to the table, and together, we have built StyleHub into a brand that stands for quality, style, and exceptional customer service.
                </p>

                <h3 className='text-2xl font-bold mb-2'>Our Mission</h3>

                <p className='mb-4'>
                    Our mission at StyleHub is to empower men to look and feel their best every day. We understand that the right outfit can boost confidence, make a statement, and leave a lasting impression. That's why we are committed to offering a curated selection of men's clothing that combines the latest fashion trends with timeless elegance. Whether you're looking for casual wear, business attire, or something for a special occasion, you'll find it at StyleHub.
                </p>

                <h3 className='text-2xl font-bold mb-2'>Our Team</h3>

                <p className='mb-2'>
                    Our team is the heart and soul of StyleHub. With a deep understanding of fashion, an eye for detail, and a passion for excellence, we work tirelessly to bring you the best in men's fashion.
                </p>

                <ul className='list-disc list-inside mb-4'>
                    <li>
                        <strong>Amartya Ghosh:</strong> Amartya's expertise in technology and innovation helps us stay ahead of the curve, providing a user-friendly and secure shopping platform for our customers.
                    </li>
                    <li>
                        <strong>Ashwini Dua:</strong> Ashwini brings a wealth of experience in e-commerce and digital marketing, driving our online presence and making sure our customers have a seamless shopping experience.
                    </li>
                    <li>
                        <strong>Sarwan Siraj:</strong> With a keen eye for design and a passion for trends, Sarwan oversees our fashion curation and ensures that our collections reflect the latest in style and quality.
                    </li>
                    <li>
                        <strong>Mousam Mandal:</strong> As our operations expert, Mousam ensures that everything runs smoothly behind the scenes, from inventory management to customer service.
                    </li>
                </ul>

                <h3 className='text-2xl font-bold mb-2'>Our Commitment to Quality</h3>

                <p className='mb-4'>
                    Quality is at the core of everything we do at StyleHub. We partner with reputable manufacturers and brands to ensure that every item we offer meets our high standards. From the fabric to the stitching, we pay attention to every detail to ensure that you receive clothing that is durable, comfortable, and stylish.
                </p>

                <h3 className='text-2xl font-bold mb-2'>Our Customer Promise</h3>

                <p className='mb-4'>
                    At StyleHub, customer satisfaction is our top priority. We are committed to providing you with a seamless and enjoyable shopping experience. Our user-friendly website makes it easy to browse and shop our collections, and our dedicated customer service team is always here to assist you with any questions or concerns. We offer fast and reliable shipping, easy returns, and secure payment options to give you peace of mind while shopping with us.
                </p>

                <h3 className='text-2xl font-bold mb-2'>Connect with Us</h3>

                <p className='mb-2'>
                    We love hearing from our customers and building a community around our brand. Follow us on social media to stay updated on the latest fashion trends, new arrivals, and special promotions. Share your StyleHub looks with us using #StyleHubMen and join the conversation!
                </p>

                <ul className='list-disc list-inside mb-4'>
                    <li>
                        <strong>Email:</strong> <a href="mailto:stylehub@customer.com" style={{ color: 'blue' }}>stylehub@customer.com</a>
                    </li>
                    <li>
                        <strong>Phone:</strong> +91 9999999999
                    </li>
                    <li>
                        <strong>Location:</strong> EM-4 Block, Saltlake Sector V, Kolkata
                    </li>
                </ul>

                <p className='mb-2'>
                    Thank you for choosing StyleHub. We look forward to helping you elevate your style and express your individuality through fashion. Happy shopping!
                </p>

            </div>
            
        </div>
      );
}

export default aboutUs