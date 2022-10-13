import { Button } from '@mui/material'
import { Teacher } from '../../@types/teacher'
import { FormatterService } from '../../services/formatterService'
import { Description, Info, ListEmpty, ListItem, ListStyled, Name, Photo, Price } from "./listteachers.style"

type ListProps = {
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void
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
                         <Price>{FormatterService.monetaryValue(teacher.price_hour)}</Price>
                         <Description>{FormatterService.limitText(teacher.description, 200)}</Description>
                         <Button onClick={() => props.onSelect(teacher)} sx={{width: '90%', borderRadius: '8px'}}>Marcar Aula com {teacher.name}</Button>
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