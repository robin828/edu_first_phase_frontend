import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../ui/theme";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
	root: {
		width: 350,
		borderRadius: "35px",
		[theme.breakpoints.down("md")]: {
			width: 280,
		},
		[theme.breakpoints.down("xs")]: {
			width: 210,
		},
	},
	teacherAvatar: {
		marginTop: "1.4rem",
		marginLeft: "1.5rem",
		marginBottom: "1rem",
		height: "4rem",
		width: "4rem",
		[theme.breakpoints.down("md")]: {
			height: "3.7rem",
			width: "3.7rem",
			marginTop: "1.1rem",
			marginLeft: "1.1rem",
			marginBottom: ".8rem",
		},
		[theme.breakpoints.down("xs")]: {
			height: "3rem",
			width: "3rem",
			marginTop: "1.1rem",
			marginLeft: "1.1rem",
			marginBottom: ".7rem",
		},
		teacherText: {
			color: "#264653",
			fontWeight: 800,
			marginLeft: ".4rem",
		}
	}
});

const CardComponent = ({ image, userDetail, setOpen, setUser }) => {
	const classes = useStyles();
	console.log("^^^^^^^^^^*************")

	const handleClick = () => {
		setOpen(true);
		setUser(userDetail);
	}


	return (
		<Card onClick={handleClick} className={classes.root}>
			<CardActionArea>
				<Avatar
					disableRipple
					className={classes.teacherAvatar}
					variant="square"
					alt={image}
					src={image}
				/>
				<CardContent className={classes.teacherText}>
					<Typography
						className={classes.teacherText}
						variant="body2"
						color="textSecondary"
						component="p"
					>
						Login as
					</Typography>
					<Typography
						className={classes.teacherText}
						gutterBottom
						variant="h5"
						component="h2"
					>
						{userDetail}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardComponent;
