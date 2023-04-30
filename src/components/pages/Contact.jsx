import React, {useState,  useRef  } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Colors } from "../../styles/theme";
import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";

function Contact() {
 
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    message: '',
    user_email: '',
  });
  const [msg, setMsg]= useState("hhh");
  const form = useRef();
 
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value});
  };
  const sendEmail = (e) => {
    e.preventDefault();
//this import.meta.env.VITE_KEY fixed process undefined as in process.env.REACT_APP_KEY
    emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form.current, import.meta.env.VITE_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          setMsg("Your form has been submitted!")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Box sx={{ bgcolor: Colors.light_gray, pt:2,pl:10 }} display="flex" minHeight="100vh" flexDirection="column">
    <Box display="flex" justifyContent="flex-start">
     <Typography variant="h3">Get in Touch</Typography>
     </Box>
    <Box display="flex" justifyContent="center">
      <Grid>
        <Card style={{ maxWidth: 700, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent >
            <Typography gutterBottom variant="h5" color="success.main">
              {msg}
            </Typography>
          
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    name='first_name'
                    label="First Name"
                    variant="outlined"
                    value={toSend.first_name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    name='last_name'
                    label="Last Name"
                    variant="outlined"
                    value={toSend.last_name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    name='user_email'
                    label="Email"
                    variant="outlined"
                    value={toSend.user_email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    name='phone'
                    placeholder="Enter phone number"
                    label="Phone"
                    value={toSend.phone}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                   
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Comments"
                    name='message'
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    value={toSend.message}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </Box>
    </Box>
  );
}
 
export default Contact;