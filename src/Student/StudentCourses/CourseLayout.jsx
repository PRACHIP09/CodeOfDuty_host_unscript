import {
  Grid,
  Paper,
  Button,
  Tooltip,
  Drawer,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState,useEffect } from "react";
import CategoryTable from "./CategoryTable";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Rating from "@mui/material/Rating";
import SignalCellular4BarOutlinedIcon from "@mui/icons-material/SignalCellular4BarOutlined";
import SignalCellular1BarOutlinedIcon from "@mui/icons-material/SignalCellular1BarOutlined";
import SignalCellular3BarOutlinedIcon from "@mui/icons-material/SignalCellular3BarOutlined";
import StarIcon from "@mui/icons-material/Star";
import close from "../../Images/close.png";
import "./course.css";
import { Link } from "react-router-dom";
var difficult = "hard";
const CourseLayout = () => {
  const [enroll, setEnroll] = useState(false);
  const [open, setOpen] = React.useState(false);

  // move page to top
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  const [openfdbck, setOpenfdbck] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  const handleDrawerOpenFdbck = () => {
    setOpenfdbck(true);
  };
  const handleDrawerCloseFdbck = () => {
    setOpenfdbck(false);
  };
  const [feedback, setFeedback] = useState("");
  const [stars, setStars] = useState(3);
  const [hover, setHover] = React.useState(-1);
  const submit = () => {
    console.log(feedback, stars);
  };
  const handleSubmission =async()=>{
    console.log("fromSubmit");
    const formData = new FormData();
    formData.append("comment", feedback);
    formData.append("rating", stars);
    await fetch(
      `http://b5da-1-22-101-132.ngrok.io/course/post-review/1/`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMTM3NTMyLCJpYXQiOjE2NDI4NzgzMzIsImp0aSI6IjM5ZDVjOTE2ZTVlNjRjN2E5Yzk3MmI5YjJlNTc4YWQ1IiwidXNlcl9pZCI6NX0.RGVcy20eyM267Q0rjXQeNZK0b2LbWU3cEpfh-az-QMI`,
        },
      }
    )
      .then((result) => {
        console.log(result);
      })
      .catch(() => {
        alert("Error in the Code");
      });
  }
  
  return (
    <div>
      <CategoryTable />
      <Grid container spacing={3} style={{ padding: "1% 4%" }}>
        <Grid item sm={4}>
          <Paper elevation={2} className="courseBox">
            <img
              src="https://image.freepik.com/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg"
              alt="img"
              className="courseImage"
            ></img>
            <h3>Web Designing</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </p>
            <span
              style={{
                float: "left",
                margin: "5px",
                color: "green",
                fontSize: "1.3rem",
              }}
            >
              &#8377; 100
            </span>
            <span>
              {difficult == "easy" ? (
                <Tooltip title="Basic level">
                  <SignalCellular1BarOutlinedIcon
                    color="warning"
                    style={{
                      fontSize: "2rem",
                      transform: "translate(25px,5px)",
                    }}
                  />
                </Tooltip>
              ) : difficult == "hard" ? (
                <Tooltip title="Difficult level">
                  <SignalCellular4BarOutlinedIcon
                    color="warning"
                    style={{
                      fontSize: "2rem",
                      transform: "translate(25px,5px)",
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Intermediate level">
                  <SignalCellular3BarOutlinedIcon
                    color="warning"
                    style={{
                      fontSize: "2rem",
                      transform: "translate(25px,5px)",
                    }}
                  />
                </Tooltip>
              )}
            </span>

            {!enroll ? (
              <Button
                style={{ float: "right", margin: "5px", borderRadius: "20px" }}
                variant="contained"
                onClick={(e) => {
                  setEnroll(true);
                  handleClose(e);
                }}
              >
                Enroll
              </Button>
            ) : (
              <Button
                style={{ float: "right", margin: "5px", borderRadius: "20px" }}
                variant="contained"
                color="error"
                onClick={() => setEnroll(false)}
              >
                Expel
              </Button>
            )}

            <br />
            <br />

            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
              style={{ float: "left", margin: "5px" }}
            />
            <Tooltip
              arrow
              title="Have one to one conversations with our teachers"
            >
              <Link to="/chat" style={{ textDecoration: "none" }}>
                <Button>
                  <QuestionAnswerIcon />
                </Button>
              </Link>
            </Tooltip>
            <Button
              style={{ fontSize: ".7rem" }}
              onClick={handleDrawerOpenFdbck}
            >
              Give your valuable Feedback
            </Button>
          </Paper>
        </Grid>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}></Grid>
      </Grid>
      <Drawer
        sx={{
          width: 500,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 500,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={openfdbck}
      >
        <img
          src={close}
          alt="close"
          onClick={handleDrawerCloseFdbck}
          style={{
            height: "5vh",
            width: "5vh",
            cursor: "pointer",
            marginLeft: "80%",
            marginTop: "2vh",
          }}
        />
        <div
          style={{ paddingLeft: "6vh", paddingTop: "2vh", paddingRight: "1vh" }}
        >
          <Grid spacing={3}>
            <div
              style={{
                padding: "0 0 5vh 0",
                fontSize: "1.5rem",
                textAlign: "left",
                color: "#141b37",
              }}
            >
              Feedback
            </div>
            {/*for feedback*/}
            <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
              <Grid item md={8} sm={8} xs={8}>
                <TextField
                  id="outlined-basic"
                  label="feedback"
                  color="primary"
                  type="text"
                  name="feedback"
                  variant="outlined"
                  value={feedback}
                  fullWidth
                  autoComplete="off"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"></InputAdornment>
                    ),
                  }}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </Grid>
            </Grid>
            {/*for notes*/}
            <Grid container spacing={3} style={{ paddingBottom: "2vh" }}>
              <Grid item md={8} sm={8} xs={8}>
                <Rating
                  name="hover-feedback"
                  value={stars}
                  precision={1}
                  onChange={(event, newValue) => {
                    setStars(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Grid>
            </Grid>
            <Button
              style={{
                marginRight: "20vh",
                textAlign: "center",
                width: "40vh",
                fontSize: "1rem",
              }}
              variant="contained"
              onClick={handleSubmission}
            >
              Submit
            </Button>
          </Grid>
        </div>
      </Drawer>
    </div>
  );
};

export default CourseLayout;
