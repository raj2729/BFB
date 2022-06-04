import React, { useEffect, useState } from "react";
// import ReactFlow from 'react-flow-renderer';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import cover from "../assets/cover.jpg";
import liquidCheese from "../assets/liquid-cheese2.svg";
import donationbox from "../assets/donationbox.png";
import student from "../assets/student-removebg.png";
import cardimg1 from "../assets/cardimg1.jpg";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import students from "../assets/students.jpg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import PetsIcon from "@material-ui/icons/Pets";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import PersonIcon from "@material-ui/icons/Person";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Avatar } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import EventCard from "./EventCard";
import alanBtn from "@alan-ai/alan-sdk-web";
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Box from "@material-ui/core/Box";
// import cardimg1 from "../assets/cardimg1.jpg"
import axios from "axios";
import Swal from "sweetalert2";
import { Modal, TextField } from "@material-ui/core";
import Navbar from "./Navbar";
import { useSpeechSynthesis } from "react-speech-kit";
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  heroContent: {
    // backgroundColor: "#FEFFFF",
    padding: theme.spacing(10, 0, 4),
    backgroundColor: "#ffaa00",
    backgroundImage: `url(${liquidCheese})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  header: {
    height: "85vh",
    backgroundSize: "cover",
    backgroundPosition: "65% 50%",
    // backgroundImage: `url(${cover})`,
    // backgroundSize: "cover",
    // backgroundPosition: "65% 50%",
    // backgroundImage: `url(${liquidCheese})`,
    // backgroundColor: "#ffaa00"
  },
  heroDesign: {
    // border: "2px solid red",
    backgroundColor: "#af0d24",
    width: "150px",
    height: "150px",
    // marginTop: "-10%",
    // position: "absolute",
    "&:before": {
      content: "''",
      display: "block",
      width: "170px",
      height: "150px",
      // backgroundColor: "black",
      background: `linear-gradient(90deg, white 5px, transparent 1%) center, 
                  linear-gradient(white 5px, transparent 1%) center, grey`,
      backgroundSize: "6px 6px",
      marginTop: "20px",
      position: "absolute",
      zIndex: "-1",
    },
  },
  heroTextContainer: {
    // margin: "0 10% 0 10%",
    color: "black",
    padding: "0 10% !important",
    position: "relative",
    zIndex: "1",
  },
  heroText: {
    // borderLeft: "3px solid #dfdfdf",
    padding: theme.spacing(6),
    // "& h3": {
    //   color: "grey",
    //   textTransform: "lowercase",
    //   fontWeight: "bold",
    //   // letterSpacing: "1px",
    // },
  },
  heroImageItem: {
    display: "grid",
    placeItems: "center",
  },
  heroImageDiv: {
    width: "30vw",
    height: "30vw",
    border: "2px solid black",
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: 1,
  },
  heroImage: {
    width: "60vw",
    marginLeft: "-30vw",
    marginTop: "10%",
  },
  // heroText: {
  //   // margin: "0 10% 0 10%",
  //   color: "black",
  // },
  halfCircle: {
    height: "75vh",
    width: "75vh",
    border: "2px solid black",
    borderRadius: "50%",
    position: "absolute",
    marginLeft: "calc(100vw - 37.5vh)",
    marginTop: "5vh",
  },
  cardGrid: {
    backgroundColor: "#FEFFFF",
    // paddingBottom: theme.spacing(8),
    padding: theme.spacing(8, 16),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    alignItems: "center",
  },
  heading: {
    width: "100%",
    fontSize: 30,
    fontWeight: "500",
    // textDecoration: "underline",
  },
  card: {
    backgroundColor: "white",
    height: "100%",
    boxShadow: "5px 5px 5px 5px lightgrey",
    display: "flex",
    flexDirection: "column",
    padding: "4%",
    "&:hover": {
      boxShadow: "0 3px 12px darkgrey",
    },
  },
  cardMedia: {
    margin: "2%",
    paddingTop: "56.25%",
    borderRadius: "0.25rem",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  carousel: {
    width: "100%",
  },
  carouselItemContainer: {
    display: "flex",
    gap: "5%",
    paddingTop: "1rem",
  },
  carouselItem: {
    backgroundColor: "white",
    height: "100%",
    boxShadow: "0 3px 10px lightgrey",
    display: "flex",
    flexDirection: "column",
    padding: "4%",
    "&:hover": {
      boxShadow: "0 3px 12px darkgrey",
    },
    width: "250px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const loadRazorPay = async () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    // script.onload = displayRazorPay;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

function Home({ history }) {
  const classes = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);
  const [openVolunteer, setOpenVolunteer] = useState(false);

  const handleOpenVolunteer = () => {
    setOpenVolunteer(true);
  };

  const handleRazorpayResponse = async (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    if (razorpay_payment_id) {
      console.log("Successful");
      Swal.fire("Donation has been made successfully", `Amount: $}`, "success");
    } else {
      console.log("Unsuccessful");
    }
  };

  const displayRazorPay = async () => {
    console.log("Hello");
    const res = await loadRazorPay();

    if (!res) {
      alert("Razorpay SDK Failed. Please check your connection.");
      return;
    }

    const { data } = await axios.post("/donation/razorpay");

    // console.log(data);

    const options = {
      key: "rzp_test_vdRitP9HytsLLm", // Enter the Key ID generated from the Dashboard
      // amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      // currency: "INR",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "NGO Buddy",
      description: "Test Transaction",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        handleRazorpayResponse(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );
      },
      prefill: {
        name: "Ram",
        // name: userInfo.data.name,
        email: "ram@example.com",
        // email: userInfo.data.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#DC143C",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const { speak } = useSpeechSynthesis();

  // useEffect(() => {
  //   <div className="group">
  //                 <button
  //                   onClick={() =>
  //                     speak({
  //                       text: "NGO Buddy is the most Trusted and Transparent Crowdfunding Platform",
  //                     })
  //                   }
  //                 >
  //                   Speech
  //                 </button>
  //               </div>
  //   speak({
  //     text: "NGO Buddy is the most Trusted and Transparent Crowdfunding Platform",
  //   });
  // });

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <Navbar />
      <>
        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Grid container alignItems="center" className={classes.header}>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                className={classes.heroText}
                style={{ marginLeft: "50px", marginRight: "30px" }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{ fontStyle: "bold" }}
                >
                  <span style={{ color: "#f75f00" }}>
                    <strong>Trusted</strong>
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "#f75f00" }}>
                    <strong>Transparent</strong>
                  </span>{" "}
                  Crowdfunding Platform
                </Typography>
                <br />

                {/* <Typography variant="h6" gutterBottom>
                  Learn How To Build Websites & Apps Write A Code Or Start A
                  Business

                </Typography> */}
                <br />
                {!userInfo ? (
                  <>
                    <Link
                      to={"/signup"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button
                        style={{
                          width: "250px",
                          borderRadius: "999px",
                          backgroundColor: "#03ab14",
                          color: "white",
                        }}
                        variant="contained"
                      >
                        Join Us
                      </Button>
                    </Link>

                    <Button
                      style={{
                        width: "250px",
                        borderRadius: "999px",
                        backgroundColor: "#03ab14",
                        color: "white",
                        marginTop: "20px",
                      }}
                      variant="contained"
                      onClick={() =>
                        speak({
                          text: "Bangalore Food Bank is the most trusted and transparent Crowdfunding Platform. We are grateful to 2 lakh+ donors who have contributed to the social causes of 1000+ NGO's which in total has led to the fundraising of more than 50 crore in donations. ",
                        })
                      }
                    >
                      Speak
                    </Button>
                  </>
                ) : (
                  <Button
                    style={{
                      width: "250px",
                      borderRadius: "999px",
                      backgroundColor: "#03ab14",
                      color: "white",
                      marginTop: "20px",
                    }}
                    variant="contained"
                    onClick={() =>
                      speak({
                        text: "NGO Buddy is the most trusted and transparent Crowdfunding Platform. We are grateful to 2 lakh+ donors who have contributed to the social causes of 1000+ NGO's which in total has led to the fundraising of more than 50 crore in donations. ",
                      })
                    }
                  >
                    Speak
                  </Button>
                )}
              </Grid>
              {/* <ReactFlow elements={elements} /> */}
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                className={classes.heroText}
                style={{ marginLeft: "50px" }}
              >
                <img src={donationbox} alt="img" width="90%" />
                {/* <Typography variant="h4" gutterBottom>
                  Learn HTML , CSS , Web Apps & More
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Learn How To Build Websites & Apps Write A Code Or Start A
                  Business

                </Typography> */}
              </Grid>
            </Grid>
          </Container>
        </div>
        <br />
        <br />
        <br />
        {/* Card and search bar */}

        
      </>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
