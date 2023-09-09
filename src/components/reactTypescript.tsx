import { FC } from 'react'

interface SaludarProps {
    name: string
}


const Saludar = ({ name }: SaludarProps) => {
    return <div> Hola, {name}</div>
}


const Saludar2: FC<SaludarProps> = ({ name }) => {
    return <div> Hola, {name}</div>
}