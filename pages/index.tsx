import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import { ListTeachers } from '../src/components/ListTheachers'

type Teacher = /*unresolved*/ any

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Professor 1',
      photo: 'https://github.com/frontendDieferson.png',
      description: 'Descrição do professor 1',
      price_hour: 90,
    },
    {
      id: 2,
      name: 'Professor 2',
      photo: 'https://github.com/frontendDieferson.png',
      description: 'Descrição do professor 2',
      price_hour: 90,
    },
    {
      id: 3,
      name: 'Professor 3',
      photo: 'https://github.com/frontendDieferson.png',
      description: 'Descrição do professor 3',
      price_hour: 90,
    },
    {
      id: 4,
      name: 'Professor 4',
      photo: 'https://github.com/frontendDieferson.png',
      description: 'Descrição do professor 4',
      price_hour: 90,
    },
  ]

  return (
    
     <Box sx={{backgroundColor:'secondary.main'}}>
      <ListTeachers teachers={teachers}></ListTeachers>
     </Box>
  
  )
}

export default Home
