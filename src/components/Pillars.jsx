import { DiamondIcon, ShieldIcon, StarIcon } from './Icons.jsx'

const items = [
  { label: 'PRECISÃO', Icon: DiamondIcon },
  { label: 'EXCLUSIVIDADE', Icon: ShieldIcon },
  { label: 'EXCELÊNCIA', Icon: StarIcon },
]

export default function Pillars({ className = '' }) {
  return (
    <ul className={`pillars ${className}`.trim()}>
      {items.map(({ label, Icon }) => (
        <li key={label}>
          <Icon />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
