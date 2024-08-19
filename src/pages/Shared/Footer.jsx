 
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
   <div className='mt-24'>
      <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px 0',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#" color="inherit" variant="body2">
              About Us
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Careers
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Contact Us
            </Link>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Link href="#" color="inherit" variant="body2">
              Product Support
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Documentation
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              API
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit" variant="body2">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Twitter
            </Link>
            <br />
            <Link href="#" color="inherit" variant="body2">
              Instagram
            </Link>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          sx={{
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
   </div>
  );
};

export default Footer;
