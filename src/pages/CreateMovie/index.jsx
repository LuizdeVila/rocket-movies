import { FiArrowLeft } from 'react-icons/fi'
import { Container, New, Data, Confirmations } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'

import { Header } from '../../components/Header'

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <New>
        <Link to="/"><FiArrowLeft /> voltar</Link>

        <h1>Novo filme</h1>

        <Data>
          <Input
            placeholder="Título"
            type="text"
          />

          <Input
            placeholder="Sua nota(de 0 a 5)"
            type="number"
          />
        </Data>

        <Textarea placeholder="Observações" />

        <h4>Marcadores</h4>

        <div className='BlackBox'>
          <h1></h1>
          <NoteItem value="Comédia" />
          <NoteItem isNew placeholder="Nova tag" />
        </div>

        <Confirmations>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </Confirmations>

      </New>
    </Container>
  )
}