import React, { useEffect, useState } from 'react'
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEyNzIwYzk5YTU2ZTM5YjE3NTkxOTUwZWExNWIxMCIsIm5iZiI6MTc2NzQ0MDM3NC4xNjksInN1YiI6IjY5NThmZmY2ZjliY2EwNzdlMjRhZjRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mp8MkDxg96SrcxH-kU2HA_ORYlRoAJjTOUv6spJhacE'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=videos`, options)
      .then(res => res.json())
      .then(res => setApiData(res))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back" onClick={() => navigate(-1)} className='player-back-arrow' />
      {apiData && apiData.videos?.results?.length > 0 ? (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apiData.videos.results[0].key}`}
          title='Netflix Player'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : apiData ? (
        <p className='loading'>No trailer available for this movie</p>
      ) : (
        <p className='loading'>Loading...</p>
      )}
      <div className='player-info'>
        <p>{apiData?.release_date?.slice(0, 10)}</p>
        <p>{apiData?.title || apiData?.original_title}</p>
        <p>{apiData?.overview}</p>
      </div>
    </div>
  )
}

export default Player
