import WithStroke from '../HOCs/WithStroke'
import Title from '../UI/Title'

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-center bg-primary">
      <Title>
        <WithStroke>
          <span>21 DAYS CHALLENGE</span>
        </WithStroke>
      </Title>
    </div>
  )
}

export default Header
