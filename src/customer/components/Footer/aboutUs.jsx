import React from 'react'
import { Grid, Typography } from '@mui/material'

const aboutUs = () => {
    return (
        // <Grid container spacing={3} justify="center">
        //   <Grid item xs={12}>
        //     <Typography className='items-center' variant="h4" gutterBottom>
        //       About Us
        //     </Typography>
        //     <Typography variant="body1" paragraph>
        //       StyleHub is your one-stop destination for all your fashion needs. We curate the latest trends in clothing,
        //       footwear, and accessories to bring you the best selection of products.
        //     </Typography>
        //     <Typography variant="body1" paragraph>
        //       Our mission is to provide our customers with the highest quality products at affordable prices, delivered with
        //       exceptional customer service. We strive to create a seamless shopping experience for fashion enthusiasts
        //       around the world.
        //     </Typography>
        //     <Typography variant="body1" paragraph>
        //       At StyleHub, we believe that fashion is more than just clothing – it's a form of self-expression. Whether
        //       you're dressing for work, a night out, or a casual weekend, we have everything you need to express your unique
        //       style.
        //     </Typography>
        //     {/* Add more about us content here */}
        //   </Grid>
        // </Grid>
        <div className='flex flex-col gap-5 items-center justify-center px-10'>
            <h1 className='font-bold text-3xl'>
                About Us
            </h1>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odit reprehenderit quas tenetur delectus, ducimus eum quidem recusandae rem exercitationem fugit illo doloremque nesciunt, alias quae reiciendis dolore nihil et qui omnis unde similique. Numquam temporibus, placeat commodi magnam delectus laboriosam necessitatibus non ullam quas unde earum nulla esse facilis inventore sit sequi, ducimus quaerat neque quos saepe eos repudiandae ea dolores iure! Non incidunt beatae nostrum expedita labore inventore qui eius. Soluta facere quos suscipit aliquam! Similique architecto, maiores consequatur ullam ab nihil, quam laborum delectus nemo distinctio minus ea, molestiae nostrum cumque eligendi omnis vel aliquam ipsum reprehenderit!
            </div>
        </div>
      );
}

export default aboutUs