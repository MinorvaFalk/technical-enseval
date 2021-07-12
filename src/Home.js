import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@material-ui/core'
import moment from 'moment'

const Home = ({loggedIn}) => {
    const [user, setUser] = useState(loggedIn)
    const [hour, setHour] = useState(moment().format('LTS'))
    const history = useHistory()

    const logoutUser = (e) => {
        history.push('/')
    }

    return (
        <div>
            <AppBar position="fixed">
                <Box display="flex" justifyContent="flex-start"  flexDirection="column">
                    
                <Toolbar>
                <Typography variant="h6">
                    {loggedIn.email}
                </Typography>
                
                <Button color="inherit" onClick={logoutUser}>Logout</Button>
                </Toolbar>
                </Box>
            </AppBar>
            <div style={{paddingTop : '100px'}}>
                <Container>
                    <Grid container direction="column" alignItems="center" justifyContent="center">
                        <Grid item>
                            Selamat {moment().hour(8) < 12 ? "Siang" : "Malam"} {user.email.split('@')[0]}
                        </Grid>
                        <Grid item>
                            {user.email.split('@')[0]}
                        </Grid>
                        <Grid item>
                            {/* {hour} */}
                            {moment().hour()}
                            {/* {Date.now()} */}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Home
