import react from 'react'
import CollectionCard from './CollectionCard.js'
import './PunkList.css'

const PunkList = ({punkList, setActivePunk}) => {
    return (
        <div className='punkList'>
            {punkList?.map(punk => (
                <div key={punk.token_id} onClick={() => {setActivePunk(punk.token_id)}}>
                    <CollectionCard
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        img={punk.image_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default PunkList