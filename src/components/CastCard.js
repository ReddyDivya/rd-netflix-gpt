import React from 'react'
import Avatar from "../assets/avatar.png";
import { IMG_CDN_URL } from '../utils/constants';

const CastCard = ({img_path, name, character}) => {
  return (
    <div className="w-32 md:w-44 text-black m-3 shadow-lg rounded-xl">
        <div className="w-[100px] md:w-[120px]">
            {img_path != null ? (
                <img className="rounded-t-lg object-cover"
                    src={IMG_CDN_URL + img_path}
                    alt="cast-img"
                    loading="lazy"
                />) : (<img className="rounded-t-lg object-cover"
                    src={Avatar}
                    alt="cast-img"
                />
            )}
        </div>
        <div className="px-1 pb-2">
            <h3 className="md:pl-2 text-lg font-semibold">{name}</h3>
            <p className="text-sm md:pl-2">{character}</p>
        </div>    
    </div>
  )
}

export default CastCard