import Grid, { Grid2Props } from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box, { BoxProps } from '@mui/material/Box';
import { styled, makeStyles, createStyles } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';
const headerBanner = require('../../../assets/imgs/headerBar.png');

export const Container = styled(Grid)<Grid2Props>(({ theme }) => ({
    [theme.breakpoints.only('desktop')]: {
        marginLeft: 64,
        marginRight: 64,
    },
    [theme.breakpoints.only('laptop')]: {
        marginLeft: 64,
        marginRight: 64,
        maxWidth: 1440
    },
    [theme.breakpoints.only('tablet')]: {
        marginLeft: 32,
        marginRight: 32,
    },
    [theme.breakpoints.down('mobile')]: {
        marginLeft: 16,
        marginRight: 16,
    },
}));

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center'
}));

export const TitleContainer = styled(Grid)<Grid2Props>(({ theme }) => ({
    margin: 15,
    textAlign: 'center'
}))

export const Tittle = styled(Typography)<TypographyProps>(({ theme }) => ({

}))
export const ChildrenContainer = styled(Grid)<Grid2Props>(({ theme }) => ({
    margin:'5rem 0rem',
    [theme.breakpoints.down('tablet')]: {
     margin:'1rem'
    }
}))

export const ImgContainer = styled(Box)<BoxProps>(({ theme }) => ({

    width: '100%',
    height: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: `url(${headerBanner})  no-repeat right `,
    backgroundSize: 'cover',

    [theme.breakpoints.down('mobile')]: {
        '& img': {
            width: '95%',
        }
    }


}))

