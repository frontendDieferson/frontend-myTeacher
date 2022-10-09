import { Button } from '@mui/material'
import { teacher } from '../../@types/teacher'
import { Description, Info, ListEmpty, ListItem, ListStyled, Name, Photo, Price } from "./listteachers.style"

type ListProps = {
    teachers: teacher[],
}

export const ListTeachers = (props: ListProps) => {
    return (
      <div>
        {props.teachers.length > 0 ? (
             <ListStyled>
             {props.teachers.map(teacher => (
                 <ListItem key={teacher.id}>
                     <Photo src={teacher.photo}></Photo>
                     <Info>
                         <Name>{teacher.name}</Name>
                         <Price>{teacher.price_hour.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</Price>
                         <Description>{teacher.description}</Description>
                         <Button sx={{width: '70%', borderRadius: '8px'}}>Marcar Aula com Dieferson</Button>
                     </Info>
                 </ListItem>
             ))}
                 
     
            </ListStyled>
        ): (
            <ListEmpty>Nenhum item foi encontrado</ListEmpty>
        )}
      </div>
    )
}