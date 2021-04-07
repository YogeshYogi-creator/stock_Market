import React from 'react'
import {Container, Grid, Paper, Typography} from '@material-ui/core'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Cards = () => {

    return (
        <Container>
            <div className = "row">
                <div className = "col-md-4">
                    <Paper style = {{marginTop: "20px"}}>
                        <Typography>Google</Typography><br/>
                        <Grid style = {{textAlign: "center"}}>
                            <img width = "20%" alt = "Google img" src = "http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"/>
                            <Typography variant = "h4">1515 USD</Typography>
                        </Grid>
                    </Paper>
                </div>
                <div className = "col-md-4">
                    <Paper style = {{marginTop: "20px"}}>
                        <Typography>FB</Typography><br/>
                        <Grid style = {{textAlign: "center"}}>
                            <img width = "30%" alt = "facebook img" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"/>
                            <Typography variant = "h4">266 USD</Typography>
                        </Grid>
                    </Paper>
                </div>
                <div className = "col-md-4">
                    <Paper style = {{marginTop: "20px"}}>
                        <Typography>AMZN</Typography><br/>
                        <Grid style = {{textAlign: "center"}}>
                            <img width = "20%" alt = "amazon img" src = "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"/>
                            <Typography variant = "h4">3116 USD</Typography>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </Container>
    )
}
export default Cards