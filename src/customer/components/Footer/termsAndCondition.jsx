import { Grid, Typography } from '@mui/material'
import React from 'react'

const termsAndCondition = () => {
    return (
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Terms & Conditions
            </Typography>
            <Typography variant="body1" paragraph>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use this website
              if you do not agree to all of the terms and conditions stated on this page.
            </Typography>
            <Typography variant="body1" paragraph>
              We employ the use of cookies. By accessing FashionHub, you agreed to use cookies in agreement with the
              FashionHub's Privacy Policy.
            </Typography>
            <Typography variant="body1" paragraph>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all
              Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the
              Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            </Typography>
            {/* Add more terms and conditions content here */}
          </Grid>
        </Grid>
      )
}

export default termsAndCondition