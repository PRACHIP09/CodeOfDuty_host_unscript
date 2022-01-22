import React from 'react';
import { Grid ,
    Card,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button } from '@mui/material';
import teacher from '../Images/teacher.png';
import student from '../Images/student.png';
import del from '../Images/delete.png';
import check from '../Images/check.png';
import view from '../Images/view.png';
import profile from '../Images/profile.png';
import Swal from 'sweetalert2';
import {makeStyles} from '@mui/styles';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
  root:{
    "& .MuiCard-root ":{
      "&:nth-child(n)":{
        "backgroundColor":"#BAE5F4",
      }
      
    }
  }
});
const Admin = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const details=() =>{
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const verify=()=>{
        Swal.fire({
            icon: 'success',
            title: 'Successfully Verified',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const notverify = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

  return (
    <div  style={{backgroundImage: `url(https://wallpaperaccess.com/full/5634291.png)`  , backgroundSize: "cover" , height:"100%"}}>
        <div style={{padding:"3vh" , fontWeight:"700" , fontSize:"2rem" , color:"#002652"}}>
        A d m i n
        </div>
    <Grid container spacing={3}>
    
        <Grid item xs={12} md={6}>
        <Card style={{height:"20vh" , margin:"5vh"}} 
        component={motion.div}
        whileHover={{
        scale: 1.08,
        textShadow: "0 0 8px rgb(255,255,255)",
        transition: { duration: 0.3 },
        }}>
            <Grid container spacing={3}>
                <Grid item xs={6} md={6}>
                <img src={teacher} alt={teacher} style={{height:"16vh", width:"16vh" , padding:"2vh"}} />
                </Grid>
                <Grid item xs={6} md={6}>
                </Grid>
            </Grid> 
        </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card style={{height:"20vh" , margin:"5vh"}}
        component={motion.div}
        whileHover={{
        scale: 1.08,
        textShadow: "0 0 8px rgb(255,255,255)",
        transition: { duration: 0.3 },
        }}>
            <Grid container spacing={3}>
                <Grid item xs={6} md={6}>
                <img src={student} alt={student} style={{height:"16vh", width:"16vh" , padding:"2vh"}} />
                </Grid>
                <Grid item xs={6} md={6}>
                </Grid>
            </Grid>
        </Card>
        </Grid>
    
    <Grid item md={12} xs={12} >
        <Card style={{height:"13vh" , margin:"3vh"}} className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={2} md={2}>
            <img src={profile} alt={profile} style={{height:"8vh", width:"8vh" , paddingTop:"2vh"}} />
            </Grid>
            <Grid item xs={4} md={4} style={{marginTop:"4vh" , fontSize:"1.4rem" }}>
            Name
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
            Role
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} 
                    component={motion.div}
                    whileHover={{
                    scale: 1.08,
                    textShadow: "0 0 8px rgb(255,255,255)",
                    transition: { duration: 0.3 },
                    }}>
                    <img src={view} alt={view} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={details}/>
                    </Grid>
                    <Grid item xs={3} md={3}
                    component={motion.div}
                    whileHover={{
                    scale: 1.08,
                    textShadow: "0 0 8px rgb(255,255,255)",
                    transition: { duration: 0.3 },
                    }}>
                    <img src={check} alt={check} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={verify}/>
                    </Grid>
                    <Grid item xs={3} md={3}
                    component={motion.div}
                    whileHover={{
                    scale: 1.08,
                    textShadow: "0 0 8px rgb(255,255,255)",
                    transition: { duration: 0.3 },
                    }}>
                    <img src={del} alt={del} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={notverify}/>
                    </Grid> 
                </Grid>
            </Grid>
        </Grid>
        </Card>
        <Card style={{height:"13vh" , margin:"3vh"}}>
        <Grid container spacing={3}>
            <Grid item xs={2} md={2}>
            <img src={profile} alt={profile} style={{height:"8vh", width:"8vh" , paddingTop:"2vh"}} />
            </Grid>
            <Grid item xs={4} md={4} style={{marginTop:"4vh" , fontSize:"1.4rem" }}>
            Name
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
            Role
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3}>
                    <img src={view} alt={view} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={details}/>
                    </Grid>
                    <Grid item xs={3} md={3}>
                    <img src={check} alt={check} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={verify}/>
                    </Grid>
                    <Grid item xs={3} md={3}>
                    <img src={del} alt={del} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={notverify}/>
                    </Grid> 
                </Grid>
            </Grid>
        </Grid>
        </Card>
        <Card style={{height:"13vh" , margin:"3vh"}}>
        <Grid container spacing={3}>
            <Grid item xs={2} md={2}>
            <img src={profile} alt={profile} style={{height:"8vh", width:"8vh" , paddingTop:"2vh"}} />
            </Grid>
            <Grid item xs={4} md={4} style={{marginTop:"4vh" , fontSize:"1.4rem" }}>
            Name
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
            Role
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3}>
                    <img src={view} alt={view} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={details}/>
                    </Grid>
                    <Grid item xs={3} md={3}>
                    <img src={check} alt={check} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={verify}/>
                    </Grid>
                    <Grid item xs={3} md={3}>
                    <img src={del} alt={del} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={notverify}/>
                    </Grid> 
                </Grid>
            </Grid>
        </Grid>
        </Card>
        <Card style={{height:"13vh" , margin:"3vh"}}>
        <Grid container spacing={3}>
            <Grid item xs={2} md={2}>
            <img src={profile} alt={profile} style={{height:"8vh", width:"8vh" , paddingTop:"2vh"}} />
            </Grid>
            <Grid item xs={4} md={4} style={{marginTop:"4vh" , fontSize:"1.4rem" }}>
            Name
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
            Role
            </Grid>
            <Grid item xs={3} md={3} style={{marginTop:"4vh" , fontSize:"1.4rem"}}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3}>
                    <img src={view} alt={view} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={details}/>
                    </Grid>
                    <Grid item xs={3} md={3}>
                    <img src={check} alt={check} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={verify}/>
                    </Grid>
                    <Grid item xs={3} md={3}>
                    <img src={del} alt={del} style={{height:"4vh", width:"4vh" , cursor:"pointer"}} onClick={notverify}/>
                    </Grid> 
                </Grid>
            </Grid>
        </Grid>
        </Card>
    </Grid>
    </Grid>
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{color:"#00ACEA"}}>
          {"User Details "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
 
};

export default Admin;


