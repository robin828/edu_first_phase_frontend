/*eslint-disable*/

import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import theme from '../../../ui/theme';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
	paperGrid: {
		marginTop: "1rem",
		background: "#FFF6E1",
		height: "15rem",
		overflow: "auto",
		[theme.breakpoints.down("md")]: {
			marginBottom: "1rem",
		},
		width: '100%',
		boxSizing: 'border-box',
		
	},
});
const CardComponent = ({}) => {
	const classes = useStyles();


	return (
		<>
			<CardContent className={classes.paperGrid} >
				<Typography gutterBottom variant="h5" component="h2">
					Your Performance
				</Typography >
				{/* {
					teacherAnnouncement ? 
						<Typography variant="body1" color="textSecondary" component="p">
							{teacherAnnouncement.announcement}
						</Typography>
					 : <Typography variant="body2" color="textSecondary" component="p">
					
				</Typography>
				} */}
				
			</CardContent>
		</>
	)
}

export default CardComponent
