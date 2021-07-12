import React, { useState } from 'react'
import useStyles from './styles'
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'

const Login = ({setLoggedIn}) => {
    const [authData, setAuthData] = useState({email: null, password: null})

    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!authData.email || !authData.password){
            return
        }

        setLoggedIn(authData)
    }

    const handleChange = (e) => {
        setAuthData({...authData, [e.target.name]: e.target.value})
    }
     
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Grid item>
                            <Typography className={classes.typography} variant="h4" align='center'>Please Login</Typography>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth name="email" label="Email Address" onChange={handleChange} variant="filled" InputProps={{type:'email', maxLength:15, minLength:10}}></TextField>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth name="password" label="Password" onChange={handleChange} variant="filled" InputProps={{type:'password'}}></TextField>
                        </Grid>
                        <Grid item>
                            <Button type="submit" className={classes.button} fullWidth variant="contained" color="primary">LOGIN</Button>
                        </Grid>
                    </form>
                </Grid>
            </Paper>
        </div>
    )
} 

export default Login
