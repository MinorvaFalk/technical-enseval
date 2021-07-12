import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper:{
        display: 'grid',
        placeItems: 'center',
        minHeight: '100vh'
    },
    typography:{
        marginBottom: theme.spacing(3)
    },
    button:{
        marginTop: theme.spacing(2)
    },
    icon:{
        fontSize: '7rem',
        marginBottom: theme.spacing(2)
    }
}))