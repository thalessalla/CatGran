import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../../slices/CartSlices'; 
import { likeImage }  from '../../slices/LikeSlices';
import { useSelector } from 'react-redux';
import { addComment, removeComment } from '../../slices/ComentarioSlice';
import { Link, useNavigate } from 'react-router-dom';
import like from "../../assets/favorite.svg"
import likeOn from "../../assets/favoriteOn.svg"
import save from "../../assets/save.svg"
import saved from "../../assets/saved.svg"
import './home.css';

interface CatImage {
  id: string;
  url: string;
  likes: number;
  comentarios: string[];
}

interface RootState {
  comments: {
    comments: string[];
  };
}

function Home() {
  const dispatch = useDispatch();
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [newComment, setNewComment] = useState('');
  const username = localStorage.getItem('username');
  const [savedImages, setSavedImages] = useState<string[]>([]);

  const comments = useSelector((state: RootState) => state.comments.comments);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);




  // const handleAddToCart = (imageUrl: string) => {   
  //   dispatch(addToCart(imageUrl));
  //   setSavedImages([...savedImages, imageUrl]);
  // };

  const handleSaveImage = (imageUrl: string) => {
    dispatch(addToCart(imageUrl));
    if (savedImages.includes(imageUrl)) {
      setSavedImages(savedImages.filter(url => url !== imageUrl));
    } else {
      setSavedImages([...savedImages, imageUrl]);
    }
  };


  const handleLikeImage = (imageId: string) => {   
    dispatch(likeImage(imageId));
    const updatedCatImages = catImages.map(image => {
      if (image.id === imageId) {
        if(image.likes <1){
        return { ...image, likes: image.likes + 1 }; 
      }
    }
      return image;
    });
    setCatImages(updatedCatImages);
  };


  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      dispatch(addComment(newComment));
      setNewComment(''); 
    }
  };

  const handleRemoveComment = (index: number) => {
    dispatch(removeComment(index));
  };



  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
        const initialCatImages: CatImage[] = response.data.map((image: { id: string, url: string }) => ({
          id: image.id,
          url: image.url,
          likes: 0, 
        }));
        setCatImages(initialCatImages);
      } catch (error) {
        console.error('Erro ao obter imagens de gato:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <section className='main-section'>
      <div className='hero-section'>
        <div>
          <h1>CatGran</h1>
          <p>
            Bem-vindo a minha coleção de fotos de gatos. <br/> Você pode ficar a vontade de curtir comentar sobre o que achou da coleção e adicionar ao carrinho e poder baixar as fotos.
          </p>
        </div>
      </div>
      <div className='products-section'>
        <div>
          {catImages.map((catImage, index) => (
            <div className='products-container' key={index}>
              <img src={catImage.url} alt={`Gato ${index + 1}`} />

              <div className='photo-btns'>


              <button className="btn-save-card"  onClick={() => handleSaveImage(catImage.url)}>
                <img src={savedImages.includes(catImage.url) ? saved : save} alt="Ícone de salvar" />
             </button>


            <div className="likes">
            <button onClick={() => handleLikeImage(catImage.id)} className='btn-like'>
             <img src={catImage.likes === 1 ? likeOn : like} alt="Like" />
            </button>

               <span className='like-count'>{catImage.likes}</span> 
            </div>
            </div>
            </div>
          ))}
        </div>
        <div className='saveds-btn'>
           <Link to="/carrinho">
             <img src={save} alt="Icone de savar" />
           </Link>
        </div>
      </div>
     

      <div className='comment-section'>
        <div>
        <input
          type='text'
          placeholder='Digite seu comentário'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Adicionar Comentário</button>
        <div className='comments-list'>
          {comments.map((comment, index) => (
            <div key={index} className='comment'>
              <p>{comment}</p>
              <button onClick={() => handleRemoveComment(index)} className='remove-btn'>Remover</button>
            </div>
          ))}
        </div>
        </div>
      </div>



    </section>
    
  );
}

export default Home;

