import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { getPlanets } from '../lib/api'

export const Home: React.FC = () => {
    const [planets, setPlanets] = useState([])

    const { isLoading } = useQuery('planetsList', getPlanets, {
        onSuccess: (data) => {
            setPlanets(data)
        }
    })
    return (
        <div>
            {isLoading ? "Loading..." : JSON.stringify(planets)}
        </div>
    )
}
