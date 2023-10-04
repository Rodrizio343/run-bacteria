import { BadgeContainer } from "./Badge.styles"

interface Props {
  text: string
  variant?: 'secondary' | 'tertiary'
}

const Badge = ({
  text,
  variant = 'secondary'
}: Props) => {
  return (
    <BadgeContainer variant={variant}>{text}</BadgeContainer>
  )
}
export default Badge