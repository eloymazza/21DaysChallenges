import WithStroke from '../HOCs/WithStroke'

const Footer = () => (
  <div className="flex h-16 w-full flex-col justify-center border-t border-gray-400 bg-primary p-1">
    <WithStroke>
      <h4 className="text-center text-xl sm:text-2xl">EloSoft Inc - all rights reserved - 2024</h4>
    </WithStroke>
  </div>
)

export default Footer
