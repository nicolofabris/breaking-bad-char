import React from 'react'

const CharacterListItem = (item) => {
  return (
    <div className="card">
        <div className="card-inner">
            <div className="card-front">
                <img src={item.img} alt='character'/>
            </div>
            <div className="card-back">
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Actor's Name :</strong>{item.portayed}
                    </li>
                    <li>
                        <strong>Nickname : :</strong>{item.nickname}
                    </li>
                    <li>
                        <strong>Birthday :</strong>{item.birthday}
                    </li>
                    <strong>Status :</strong>
                    <span style={{color: item.status === 'Alive' ? 'green' : 'red'}}>{item.status}</span>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CharacterListItem