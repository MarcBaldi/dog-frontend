import axios from 'axios'

export const fetchMessage = async function (){
    const response = await axios.get('/message')
    return response.data.message
}

export const fetchHandCards = async function (player){
    const response = await axios.get('/hand-cards?player='+player)
    return response.data.hand
}
