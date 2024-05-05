import { Container, Profile } from './styles'
import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <div className='centralize'>
        <h1>RocketMovies</h1>

        <Input
          placeholder="Pesquisar pelo título"
          type="text"
        />

        <Profile to="/profile">
          <div>
            <strong>Luiz de Vila</strong>
            <span>Sair</span>
          </div>

          <img
            src="https://github.com/luizdevila.png"
            alt="Foto do usuário"
          />
        </Profile>
      </div>
    </Container>
  )
}