import React from 'react';
// import clsx from 'clsx';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Listes from './List';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import { Button } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import { AppBar } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import '../style/Drawer.css';

// const useStyles1 = makeStyles((theme: Theme) =>
//   createStyles({
    
//     root: {
//       flexGrow: 1,
     
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//       color: "black",
//       backgroundColor:"white",
  

//     },
//     title: {
//       flexGrow: 1,
//       textAlign: "center",
      

//     },
    
//   }),
// );


// function TemporaryDrawer() {
//     const classes1 = useStyles1();
//   const [state, setState] = React.useState(
   
//     false
   
//   );

//   const toggleDrawer = (open:boolean) => (
//     event:  React.MouseEvent
//   ) => {
// setState(open);
//   };

 
   

//   return (
//     <div>
//       <AppBar position="static" color="primary" >
//         <Toolbar>
            
//           <IconButton onClick={toggleDrawer(true)} edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
//           <MenuIcon />
        
//           </IconButton>
//           <SwipeableDrawer 
              
//                 anchor={'left'}
//                 open={state}
//                 onClose={toggleDrawer(false)}
//                 onOpen={toggleDrawer(true)}
//                 >
//       <Listes/>
//     </SwipeableDrawer>
//           <Typography variant="h6" className={classes1.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
        
//       ))
//     </div>
//   );
// }
// export default TemporaryDrawer;