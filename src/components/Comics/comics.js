import React, { useEffect, useState } from 'react';
import { useHistory, redirect, redirectDocument, useNavigate } from 'react-router-dom'
import {
    apiGetComics,
    apiGetComicsDetail,
 } from '../../api/api'; 

 import ComicDetail from '../ComicDetail/comicDetail';

 //------------------------component Card----------------------

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//------------------------component modal----------------------

//import ButtonModal from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const Comics = () => {

    const [comics, setComics] = useState([]);
    const [comicDetail, setComicDetail] = useState({});
    const [isActiveDetail, setIsActiveDetail] = useState(false)
    const [idComicDetail, setIdComicDetail] = useState('');

    let navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }

    const onRedirect = () => {
        navigate('/comic-detail')
    }


    const fetchComics = async () => {
        try {
            const fetchedComics = await apiGetComics();
            setComics(fetchedComics);
        } catch (error) {
            console.error('Error fetching comics:', error);
        }
    };

    const fetchComicDetail = async (idComic) => {
        console.log('id de comic en llamada => ',idComic)
        try {
            const fetchedComicsDetail = await apiGetComicsDetail(idComic);
            setComicDetail(fetchedComicsDetail[0]);
            //navigate('/comic-detail')
            // setIsActiveDetail(true)
            // navigate('/comic-detail', {state: {comicDetail: fetchedComicsDetail}})
        } catch (error) {
            console.error('Error fetching comics Detail:', error);
        }
    }

    useEffect(() => {
        if (comics.length == 0 ){
            fetchComics();
        } else {
            return null
        }
        // handleClose();
        // setComicDetail({})
    },[]);

    // useEffect(() => {
    //     handleClose();
    //     setComicDetail({})
    // },[open])

    // useEffect(() =>{
    //     const idComic = idComicDetail
    //     fetchComicDetail(idComic)
    // },[idComicDetail])

    // useEffect(() => {
    //     if (comicDetail.length > 0 ){
    //         return <ComicDetail dataDetail={comicDetail} />
    //     }
    //     return null;
    // },[comicDetail])

    console.log('dsadsadsads => ',comics)
    console.log('dsadsadsads ComicDetail => ',comicDetail)

    const CardComics = () => {
        return (
            <>
                {comics.map((comic) => {
                    return (
                        <>
                        <div key={comic.id} className='card-comics'>
                            <React.Fragment>
                                <CardContent>
                                    <div className='card-comics-title'>{comic.title}</div>
                                    <div className='card-comics-img'>
                                        <a href='#' target='_blank'>  {/*{comic.urls[0].url } */}
                                            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                                        </a>
                                    </div>
                                    {/* <CardActions> */}
                                        <Button className='button-open-modal'
                                            onClick={() => {
                                                console.log('mandar a llamar api detail')
                                                fetchComicDetail(comic.id)
                                                //setIdComicDetail(comic.id)
                                                handleClickOpen();
                                            }}                                    
                                            size="small"
                                        >
                                            ver detalle
                                        </Button>
                                    {/* </CardActions> */}
                                </CardContent>
                            </React.Fragment>
                        </div>


                        </>
                    )
                })}  
            </>
        )
    }


    return (
        <>
            {/* {isActiveDetail ? (
                <ComicDetail 
                    dataDetail={comicDetail}
                />
            ) : (
                <div className='conten-card'>
                    <Box className='box-card'>
                        <Card className='card-card'>
                                {<CardComics/>}
                        </Card>
                    </Box>
                </div>
            )} */}

            <div className='conten-card'>
                <Box className='box-card'>
                    <Card className='card-card'>
                        {<CardComics/>}
                    </Card>
                </Box>
            </div>
            {console.log('data detail',comicDetail )}
            {comicDetail ? (
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {comicDetail.title}
                    </DialogTitle>
                    <DialogContent>
                        <a href='#' target='_blank'>
                            {/* <img src={`${comicDetail.thumbnail.path}.${comicDetail.thumbnail.extension}`} /> */}
                        </a>

                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button 
                        onClick={() => {
                            handleClose();
                            setComicDetail({});

                        }} 
                        color="primary"
                    >
                            Cerrar
                    </Button>
                    </DialogActions>
                </Dialog>

            ) : ('error de modal ')}

          {/*<div className='conten-card'>
                <Box className='box-card'>
                    <Card className='card-card'>
                    <ComicDetail 
                        dataDetail={comicDetail}
                    />
                    </Card>
                </Box>
            </div> */}
        
        </>
    )
}

export default Comics;